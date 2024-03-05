import {Address, BigDecimal, BigInt, Bytes} from '@graphprotocol/graph-ts'
import {DeployPool as DeployPoolEvent} from '../generated/XStakingFactory/XStakingFactory'
import {XStakingPool} from '../generated/schema'
import {XStakingPool as XStakingPoolTemplate} from '../generated/templates'

export function handleDeployPool(event: DeployPoolEvent): void {
  let entity = new XStakingPool(event.params.pool.toHexString())
  entity.poolAddress = event.params.pool
  entity.poolDeployer = event.params.deployer
  entity.poolId = event.params.poolId
  entity.tokens = event.params.tokens.map<Bytes>(token => token)
  entity.allocations = event.params.allocations
  entity.description = event.params.description
  entity.volume = new BigDecimal(new BigInt(0))

  XStakingPoolTemplate.create(event.params.pool)
  entity.save()
}