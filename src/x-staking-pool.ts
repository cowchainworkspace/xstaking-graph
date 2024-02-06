import { Address, Bytes } from '@graphprotocol/graph-ts'
import {
    TokensAmounts as TokenAmountsEvent
} from '../generated/templates/XStakingPool/XStakingPool'
import { TokensAmounts } from '../generated/schema'

export function handleTokensAmounts(event: TokenAmountsEvent): void {
    const id = event.block.timestamp.toString();
    let entity = new TokensAmounts(id)
    entity.timestamp = event.block.timestamp
    entity.tokens = event.params.tokens.map<Bytes>(token => token)
    entity.tokenAmounts = event.params.tokenAmounts
    entity.save()
}