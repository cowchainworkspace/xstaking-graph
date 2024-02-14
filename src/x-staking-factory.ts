import { Address, Bytes } from '@graphprotocol/graph-ts'
import { DeployPool as DeployPoolEvent } from '../generated/XStakingFactory/XStakingFactory'
import { XStakingPool } from '../generated/schema'
import { XStakingPool as XStakingPoolTemplate} from '../generated/templates'

export function handleDeployPool(event: DeployPoolEvent): void {
  let id = event.params.poolId.toString()
  let entity = new XStakingPool(id)
  entity.poolAddress = event.params.pool
  entity.poolDeployer = event.params.deployer
  entity.poolId = event.params.poolId
  entity.tokens = event.params.tokens.map<Bytes>(token => token)
  entity.allocations = event.params.allocations

  XStakingPoolTemplate.create(event.params.pool)
  entity.save()
}