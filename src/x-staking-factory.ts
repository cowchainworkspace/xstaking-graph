import { Address, Bytes } from '@graphprotocol/graph-ts'
import { DeployPool as DeployPoolEvent } from '../generated/XStakingFactory/XStakingFactory'
import { XStakingPool } from '../generated/schema'
import { XStakingPool as XStakingPoolTemplate} from '../generated/templates'

export function handleDeployPool(event: DeployPoolEvent): void {
  let entity = new XStakingPool(event.params.pool)
  entity.address = event.params.pool
  entity.deployer = event.params.deployer
  entity.poolId = event.params.poolId
  entity.tokens = event.params.tokens.map<Bytes>(token => token)
  entity.allocations = event.params.allocations

  XStakingPoolTemplate.create(event.params.pool)
  entity.save()
}