import { Address, BigDecimal, BigInt, Bytes } from '@graphprotocol/graph-ts'
import {
    TokensAmounts as TokenAmountsEvent,
    TokenSwap as TokenSwapEvent,
    Transfer as TransferEvent
} from '../generated/templates/XStakingPool/XStakingPool'
import {
    IToken
} from '../generated/templates/XStakingPool/IToken'
import { TokensAmounts, TokenInfo, Depositor } from '../generated/schema'

export function handleTokensAmounts(event: TokenAmountsEvent): void {
    const id = event.address.toString();
    let entity = new TokensAmounts(id)
    entity.timestamp = event.block.timestamp
    entity.tokens = event.params.tokens.map<Bytes>(token => token)
    entity.tokenAmounts = event.params.tokenAmounts
    entity.save()
}

export function handleTokenSwap(event: TokenSwapEvent): void {
    // token info id = address of pool + token address
    const tokenInfoId = event.address.toString() + "-" + event.params.token.toHexString()
    let tokenInfoEntity = new TokenInfo(tokenInfoId)
    
    tokenInfoEntity.timestamp = event.block.timestamp
    tokenInfoEntity.token = event.params.token
    
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

    let tokenDecimals = 0
    let tokenDecimalsCall = token.try_decimals()
    if (!tokenDecimalsCall.reverted) {
        tokenInfoEntity.tokenDecimals = new BigInt(tokenDecimalsCall.value)
        tokenDecimals = tokenDecimalsCall.value
    } else {
        tokenInfoEntity.tokenDecimals = new BigInt(0)
    }
   
    tokenInfoEntity.tokenAmount = event.params.tokenAmount
    tokenInfoEntity.baseTokenAmount = event.params.baseTokenAmount
   
    const tokenAmount: BigDecimal = new BigDecimal(event.params.tokenAmount)
    const baseTokenAmount: BigDecimal = new BigDecimal(event.params.baseTokenAmount)
    const baseTokenDecimals = 6

    const tokenAmountBD: BigDecimal = tokenAmount.div(BigDecimal.fromString('1' + '0'.repeat(tokenDecimals)));
    const baseTokenAmountBD: BigDecimal = baseTokenAmount.div(BigDecimal.fromString('1' + '0'.repeat(baseTokenDecimals)));

    const rawPrice: BigDecimal = baseTokenAmountBD.div(tokenAmountBD)
    tokenInfoEntity.tokenPrice = rawPrice
    
    tokenInfoEntity.save()
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