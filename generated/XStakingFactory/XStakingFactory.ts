// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class DeployPool extends ethereum.Event {
  get params(): DeployPool__Params {
    return new DeployPool__Params(this);
  }
}

export class DeployPool__Params {
  _event: DeployPool;

  constructor(event: DeployPool) {
    this._event = event;
  }

  get deployer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pool(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get poolId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get tokens(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get allocations(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferStarted extends ethereum.Event {
  get params(): OwnershipTransferStarted__Params {
    return new OwnershipTransferStarted__Params(this);
  }
}

export class OwnershipTransferStarted__Params {
  _event: OwnershipTransferStarted;

  constructor(event: OwnershipTransferStarted) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class XStakingFactory__getBaseTokenAndOneInchRouterResult {
  value0: Address;
  value1: Address;

  constructor(value0: Address, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getValue0(): Address {
    return this.value0;
  }

  getValue1(): Address {
    return this.value1;
  }
}

export class XStakingFactory__getStakingFeeResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class XStakingFactory__getUnstakingFeeResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class XStakingFactory extends ethereum.SmartContract {
  static bind(address: Address): XStakingFactory {
    return new XStakingFactory("XStakingFactory", address);
  }

  FEE_DENOMINATOR(): BigInt {
    let result = super.call(
      "FEE_DENOMINATOR",
      "FEE_DENOMINATOR():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_FEE_DENOMINATOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "FEE_DENOMINATOR",
      "FEE_DENOMINATOR():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseToken(): Address {
    let result = super.call("baseToken", "baseToken():(address)", []);

    return result[0].toAddress();
  }

  try_baseToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("baseToken", "baseToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  beacon(): Address {
    let result = super.call("beacon", "beacon():(address)", []);

    return result[0].toAddress();
  }

  try_beacon(): ethereum.CallResult<Address> {
    let result = super.tryCall("beacon", "beacon():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployPool(
    tokens: Array<Address>,
    allocations: Array<BigInt>,
    profitSharingFeeNumerator: BigInt,
  ): Address {
    let result = super.call(
      "deployPool",
      "deployPool(address[],uint256[],uint256):(address)",
      [
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromUnsignedBigIntArray(allocations),
        ethereum.Value.fromUnsignedBigInt(profitSharingFeeNumerator),
      ],
    );

    return result[0].toAddress();
  }

  try_deployPool(
    tokens: Array<Address>,
    allocations: Array<BigInt>,
    profitSharingFeeNumerator: BigInt,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployPool",
      "deployPool(address[],uint256[],uint256):(address)",
      [
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromUnsignedBigIntArray(allocations),
        ethereum.Value.fromUnsignedBigInt(profitSharingFeeNumerator),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getBaseTokenAndOneInchRouter(): XStakingFactory__getBaseTokenAndOneInchRouterResult {
    let result = super.call(
      "getBaseTokenAndOneInchRouter",
      "getBaseTokenAndOneInchRouter():(address,address)",
      [],
    );

    return new XStakingFactory__getBaseTokenAndOneInchRouterResult(
      result[0].toAddress(),
      result[1].toAddress(),
    );
  }

  try_getBaseTokenAndOneInchRouter(): ethereum.CallResult<XStakingFactory__getBaseTokenAndOneInchRouterResult> {
    let result = super.tryCall(
      "getBaseTokenAndOneInchRouter",
      "getBaseTokenAndOneInchRouter():(address,address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new XStakingFactory__getBaseTokenAndOneInchRouterResult(
        value[0].toAddress(),
        value[1].toAddress(),
      ),
    );
  }

  getStakingFee(): XStakingFactory__getStakingFeeResult {
    let result = super.call(
      "getStakingFee",
      "getStakingFee():(uint256,uint256)",
      [],
    );

    return new XStakingFactory__getStakingFeeResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_getStakingFee(): ethereum.CallResult<XStakingFactory__getStakingFeeResult> {
    let result = super.tryCall(
      "getStakingFee",
      "getStakingFee():(uint256,uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new XStakingFactory__getStakingFeeResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  getUnstakingFee(): XStakingFactory__getUnstakingFeeResult {
    let result = super.call(
      "getUnstakingFee",
      "getUnstakingFee():(uint256,uint256)",
      [],
    );

    return new XStakingFactory__getUnstakingFeeResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_getUnstakingFee(): ethereum.CallResult<XStakingFactory__getUnstakingFeeResult> {
    let result = super.tryCall(
      "getUnstakingFee",
      "getUnstakingFee():(uint256,uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new XStakingFactory__getUnstakingFeeResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  getXStakingPools(): Array<Address> {
    let result = super.call(
      "getXStakingPools",
      "getXStakingPools():(address[])",
      [],
    );

    return result[0].toAddressArray();
  }

  try_getXStakingPools(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getXStakingPools",
      "getXStakingPools():(address[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getXStakingPoolsByIds(fromId: BigInt, toId: BigInt): Array<Address> {
    let result = super.call(
      "getXStakingPoolsByIds",
      "getXStakingPoolsByIds(uint256,uint256):(address[])",
      [
        ethereum.Value.fromUnsignedBigInt(fromId),
        ethereum.Value.fromUnsignedBigInt(toId),
      ],
    );

    return result[0].toAddressArray();
  }

  try_getXStakingPoolsByIds(
    fromId: BigInt,
    toId: BigInt,
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getXStakingPoolsByIds",
      "getXStakingPoolsByIds(uint256,uint256):(address[])",
      [
        ethereum.Value.fromUnsignedBigInt(fromId),
        ethereum.Value.fromUnsignedBigInt(toId),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getXStakingPoolsLength(): BigInt {
    let result = super.call(
      "getXStakingPoolsLength",
      "getXStakingPoolsLength():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_getXStakingPoolsLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getXStakingPoolsLength",
      "getXStakingPoolsLength():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  oneInchRouter(): Address {
    let result = super.call("oneInchRouter", "oneInchRouter():(address)", []);

    return result[0].toAddress();
  }

  try_oneInchRouter(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "oneInchRouter",
      "oneInchRouter():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingOwner(): Address {
    let result = super.call("pendingOwner", "pendingOwner():(address)", []);

    return result[0].toAddress();
  }

  try_pendingOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingOwner", "pendingOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolCreationFee(): BigInt {
    let result = super.call(
      "poolCreationFee",
      "poolCreationFee():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_poolCreationFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "poolCreationFee",
      "poolCreationFee():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stakingFeeNumerator(): BigInt {
    let result = super.call(
      "stakingFeeNumerator",
      "stakingFeeNumerator():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_stakingFeeNumerator(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "stakingFeeNumerator",
      "stakingFeeNumerator():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unstakingFeeNumerator(): BigInt {
    let result = super.call(
      "unstakingFeeNumerator",
      "unstakingFeeNumerator():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_unstakingFeeNumerator(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unstakingFeeNumerator",
      "unstakingFeeNumerator():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  xbrToken(): Address {
    let result = super.call("xbrToken", "xbrToken():(address)", []);

    return result[0].toAddress();
  }

  try_xbrToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("xbrToken", "xbrToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  xstakingPoolImplementation(): Address {
    let result = super.call(
      "xstakingPoolImplementation",
      "xstakingPoolImplementation():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_xstakingPoolImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "xstakingPoolImplementation",
      "xstakingPoolImplementation():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  xstakingPools(param0: BigInt): Address {
    let result = super.call(
      "xstakingPools",
      "xstakingPools(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return result[0].toAddress();
  }

  try_xstakingPools(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "xstakingPools",
      "xstakingPools(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class DeployPoolCall extends ethereum.Call {
  get inputs(): DeployPoolCall__Inputs {
    return new DeployPoolCall__Inputs(this);
  }

  get outputs(): DeployPoolCall__Outputs {
    return new DeployPoolCall__Outputs(this);
  }
}

export class DeployPoolCall__Inputs {
  _call: DeployPoolCall;

  constructor(call: DeployPoolCall) {
    this._call = call;
  }

  get tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get allocations(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get profitSharingFeeNumerator(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DeployPoolCall__Outputs {
  _call: DeployPoolCall;

  constructor(call: DeployPoolCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _xstakingPoolImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _baseToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _oneInchRouter(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _poolCreationFee(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _stakingFeeNumerator(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _unstakingFeeNumerator(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetPoolCreationFeeCall extends ethereum.Call {
  get inputs(): SetPoolCreationFeeCall__Inputs {
    return new SetPoolCreationFeeCall__Inputs(this);
  }

  get outputs(): SetPoolCreationFeeCall__Outputs {
    return new SetPoolCreationFeeCall__Outputs(this);
  }
}

export class SetPoolCreationFeeCall__Inputs {
  _call: SetPoolCreationFeeCall;

  constructor(call: SetPoolCreationFeeCall) {
    this._call = call;
  }

  get _poolCreationFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPoolCreationFeeCall__Outputs {
  _call: SetPoolCreationFeeCall;

  constructor(call: SetPoolCreationFeeCall) {
    this._call = call;
  }
}

export class SetStakingFeeNumeratorCall extends ethereum.Call {
  get inputs(): SetStakingFeeNumeratorCall__Inputs {
    return new SetStakingFeeNumeratorCall__Inputs(this);
  }

  get outputs(): SetStakingFeeNumeratorCall__Outputs {
    return new SetStakingFeeNumeratorCall__Outputs(this);
  }
}

export class SetStakingFeeNumeratorCall__Inputs {
  _call: SetStakingFeeNumeratorCall;

  constructor(call: SetStakingFeeNumeratorCall) {
    this._call = call;
  }

  get _stakingFeeNumerator(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetStakingFeeNumeratorCall__Outputs {
  _call: SetStakingFeeNumeratorCall;

  constructor(call: SetStakingFeeNumeratorCall) {
    this._call = call;
  }
}

export class SetUnstakingFeeNumeratorCall extends ethereum.Call {
  get inputs(): SetUnstakingFeeNumeratorCall__Inputs {
    return new SetUnstakingFeeNumeratorCall__Inputs(this);
  }

  get outputs(): SetUnstakingFeeNumeratorCall__Outputs {
    return new SetUnstakingFeeNumeratorCall__Outputs(this);
  }
}

export class SetUnstakingFeeNumeratorCall__Inputs {
  _call: SetUnstakingFeeNumeratorCall;

  constructor(call: SetUnstakingFeeNumeratorCall) {
    this._call = call;
  }

  get _unstakingFeeNumerator(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetUnstakingFeeNumeratorCall__Outputs {
  _call: SetUnstakingFeeNumeratorCall;

  constructor(call: SetUnstakingFeeNumeratorCall) {
    this._call = call;
  }
}

export class SetXBRTokenCall extends ethereum.Call {
  get inputs(): SetXBRTokenCall__Inputs {
    return new SetXBRTokenCall__Inputs(this);
  }

  get outputs(): SetXBRTokenCall__Outputs {
    return new SetXBRTokenCall__Outputs(this);
  }
}

export class SetXBRTokenCall__Inputs {
  _call: SetXBRTokenCall;

  constructor(call: SetXBRTokenCall) {
    this._call = call;
  }

  get _xbrToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetXBRTokenCall__Outputs {
  _call: SetXBRTokenCall;

  constructor(call: SetXBRTokenCall) {
    this._call = call;
  }
}

export class TransferBaseTokenCall extends ethereum.Call {
  get inputs(): TransferBaseTokenCall__Inputs {
    return new TransferBaseTokenCall__Inputs(this);
  }

  get outputs(): TransferBaseTokenCall__Outputs {
    return new TransferBaseTokenCall__Outputs(this);
  }
}

export class TransferBaseTokenCall__Inputs {
  _call: TransferBaseTokenCall;

  constructor(call: TransferBaseTokenCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferBaseTokenCall__Outputs {
  _call: TransferBaseTokenCall;

  constructor(call: TransferBaseTokenCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get _xstakingPoolImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}