import { Address, BigDecimal, BigInt, Bytes } from '@graphprotocol/graph-ts'
import {
    TokensAmounts as TokensAmountsEvent,
    TokenSwap as TokenSwapEvent,
    Transfer as TransferEvent, 
} from '../generated/templates/XStakingPool/XStakingPool'
import {
    IToken
} from '../generated/templates/XStakingPool/IToken'
import { PoolAmount, TokenInfo, Depositor, TokenPrice } from '../generated/schema'

export function handleTokensAmounts(event: TokensAmountsEvent): void {
    const id = event.address.toHexString() + '-' + event.block.timestamp.toString()
    let poolAmountEntity = new PoolAmount(id)
    poolAmountEntity.poolAddress = event.address
    poolAmountEntity.timestamp = event.block.timestamp
    poolAmountEntity.tokens = event.params.tokens.map<Bytes>(token => token)
    poolAmountEntity.tokenAmounts = event.params.tokenAmounts
    poolAmountEntity.save()
}
// timestamp1
// {
//     tokens: [0x01, 0x02]
//     tokenAmounts: [1000, 2000] // 1000 * 0.5 + 2000 * 0.7 = VOLUME1
// }

// timestamp2:
// {
//     tokens: [0x01, 0x02]
//     tokenAmounts: [4000, 8000] // 4000 * 0.5 + 8000 * 0.7 = VOLUME2 
// }

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
    

    let tokenPriceEntity = new TokenPrice(event.block.timestamp.toString())
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