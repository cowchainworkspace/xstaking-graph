import {Address, BigDecimal, BigInt, Bytes, bigDecimal, log} from '@graphprotocol/graph-ts'
import {Deposit, Depositor, PoolAmount, TokenInfo, TokenPrice, Withdraw, XStakingPool} from '../generated/schema'
import {
    IToken
} from '../generated/templates/XStakingPool/IToken'
import {
    Deposit as DepositEvent,
    TokenSwap as TokenSwapEvent,
    TokensAmounts as TokensAmountsEvent,
    Transfer as TransferEvent,
    Volume as VolumeEvent,
    Withdraw as WithdrawEvent
} from '../generated/templates/XStakingPool/XStakingPool'

export function handleTokensAmounts(event: TokensAmountsEvent): void {
    const id = event.address.toHexString() + '-' + event.block.timestamp.toString()
    let poolAmountEntity = new PoolAmount(id)
    poolAmountEntity.poolAddress = event.address
    poolAmountEntity.timestamp = event.block.timestamp
    poolAmountEntity.tokens = event.params.tokens.map<Bytes>(token => token)
    poolAmountEntity.tokenAmounts = event.params.tokenAmounts
    poolAmountEntity.save()
}

export function handleTokenSwap(event: TokenSwapEvent): void {
    // token info id = address of pool + token address
    const tokenInfoId = event.address.toHexString() + "-" + event.params.token.toHexString()
    let tokenInfoEntity = TokenInfo.load(tokenInfoId)

    if (!tokenInfoEntity) {
        tokenInfoEntity = new TokenInfo(tokenInfoId)
        
        tokenInfoEntity.tokenAddress = event.params.token
        
        const token = IToken.bind(event.params.token)
        let tokenName = token.try_name()
        if (!tokenName.reverted) {
            tokenInfoEntity.tokenName = tokenName.value
        } else {
            tokenInfoEntity.tokenName = 'N/A'
        }
    
        let tokenSymbol = token.try_symbol()
        if (!tokenSymbol.reverted) {
            tokenInfoEntity.tokenSymbol = tokenSymbol.value
        } else {
            tokenInfoEntity.tokenSymbol = 'N/A'
        }
    
        let tokenDecimals = token.try_decimals()
        if (!tokenDecimals.reverted) {
            tokenInfoEntity.tokenDecimals = tokenDecimals.value.toString()
        } else {
            tokenInfoEntity.tokenDecimals = '0'
        }
        tokenInfoEntity.save()
    }
    
    const token = IToken.bind(event.params.token)
    
    const tokenAmount: BigDecimal = new BigDecimal(event.params.tokenAmount)
    const baseTokenAmount: BigDecimal = new BigDecimal(event.params.baseTokenAmount)
    const baseTokenDecimals = 6

    const tokenAmountBD: BigDecimal = tokenAmount.div(BigDecimal.fromString('1' + '0'.repeat(token.try_decimals().value)));
    const baseTokenAmountBD: BigDecimal = baseTokenAmount.div(BigDecimal.fromString('1' + '0'.repeat(baseTokenDecimals)));

    const rawPrice: BigDecimal = baseTokenAmountBD.div(tokenAmountBD)
    
    let tokenPriceId = event.params.token.toHexString() + '-' + event.block.timestamp.toString()
    let tokenPriceEntity = new TokenPrice(tokenPriceId)
    tokenPriceEntity.poolAddress = event.address
    tokenPriceEntity.tokenAddress = event.params.token
    tokenPriceEntity.tokenPrice = rawPrice
    tokenPriceEntity.timestamp = event.block.timestamp
    tokenPriceEntity.save()
}

export function handleTransfer(event: TransferEvent): void {
    let id = event.address.toHexString();
    let entity = new Depositor(id)
    if (event.params.to == Address.zero()) {
        return
    }
    entity.depositor = event.params.to
    entity.save()
}

export function handleVolume(event: VolumeEvent): void {
    let pool = XStakingPool.load(event.address.toHexString())
    
    if(pool) {
        const volumeAmount = new BigDecimal(event.params.amount)
        log.info('pool volume : {}, {}', [pool.volume.toString(), volumeAmount.toString()])
        pool.volume = pool.volume.plus(volumeAmount) 
        pool.save()
    }
}

export function handleDeposit(event:DepositEvent): void {
    let deposit = new Deposit(event.transaction.hash.toHexString())
    deposit.pool = event.params.pool
    deposit.depositor = event.params.depositor
    deposit.amount = new BigDecimal(event.params.amount)
    deposit.timestamp = event.block.timestamp
    deposit.save()
}

export function handleWithdraw(event:WithdrawEvent): void {
    let withdraw = new Withdraw(event.transaction.hash.toHexString())
    withdraw.pool = event.params.pool
    withdraw.depositor = event.params.depositor
    withdraw.amount = new BigDecimal(event.params.amount)
    withdraw.timestamp = event.block.timestamp
    withdraw.save()
}
