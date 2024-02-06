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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
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

export class TokensAmounts extends ethereum.Event {
  get params(): TokensAmounts__Params {
    return new TokensAmounts__Params(this);
  }
}

export class TokensAmounts__Params {
  _event: TokensAmounts;

  constructor(event: TokensAmounts) {
    this._event = event;
  }

  get tokens(): Array<Address> {
    return this._event.parameters[0].value.toAddressArray();
  }

  get tokenAmounts(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class XStakingPool__calcBaseTokenAllocationForDepositResult {
  value0: Array<BigInt>;
  value1: BigInt;

  constructor(value0: Array<BigInt>, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): Array<BigInt> {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class XStakingPool__getTokensAndAllocationResult {
  value0: Array<Address>;
  value1: Array<BigInt>;

  constructor(value0: Array<Address>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }

  getValue0(): Array<Address> {
    return this.value0;
  }

  getValue1(): Array<BigInt> {
    return this.value1;
  }
}

export class XStakingPool extends ethereum.SmartContract {
  static bind(address: Address): XStakingPool {
    return new XStakingPool("XStakingPool", address);
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

  allocations(param0: BigInt): BigInt {
    let result = super.call("allocations", "allocations(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toBigInt();
  }

  try_allocations(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allocations",
      "allocations(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)],
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, value: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(value),
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(value),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calcAllocatedTokensForWithdraw(
    user: Address,
    amountLP: BigInt,
  ): Array<BigInt> {
    let result = super.call(
      "calcAllocatedTokensForWithdraw",
      "calcAllocatedTokensForWithdraw(address,uint256):(uint256[])",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(amountLP),
      ],
    );

    return result[0].toBigIntArray();
  }

  try_calcAllocatedTokensForWithdraw(
    user: Address,
    amountLP: BigInt,
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "calcAllocatedTokensForWithdraw",
      "calcAllocatedTokensForWithdraw(address,uint256):(uint256[])",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(amountLP),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  calcBaseTokenAllocationForDeposit(
    baseTokenAmount: BigInt,
  ): XStakingPool__calcBaseTokenAllocationForDepositResult {
    let result = super.call(
      "calcBaseTokenAllocationForDeposit",
      "calcBaseTokenAllocationForDeposit(uint256):(uint256[],uint256)",
      [ethereum.Value.fromUnsignedBigInt(baseTokenAmount)],
    );

    return new XStakingPool__calcBaseTokenAllocationForDepositResult(
      result[0].toBigIntArray(),
      result[1].toBigInt(),
    );
  }

  try_calcBaseTokenAllocationForDeposit(
    baseTokenAmount: BigInt,
  ): ethereum.CallResult<XStakingPool__calcBaseTokenAllocationForDepositResult> {
    let result = super.tryCall(
      "calcBaseTokenAllocationForDeposit",
      "calcBaseTokenAllocationForDeposit(uint256):(uint256[],uint256)",
      [ethereum.Value.fromUnsignedBigInt(baseTokenAmount)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new XStakingPool__calcBaseTokenAllocationForDepositResult(
        value[0].toBigIntArray(),
        value[1].toBigInt(),
      ),
    );
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  deposit(
    baseTokenAmount: BigInt,
    oneInchSwapData: Array<Bytes>,
    useXBR: boolean,
  ): BigInt {
    let result = super.call(
      "deposit",
      "deposit(uint256,bytes[],bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(baseTokenAmount),
        ethereum.Value.fromBytesArray(oneInchSwapData),
        ethereum.Value.fromBoolean(useXBR),
      ],
    );

    return result[0].toBigInt();
  }

  try_deposit(
    baseTokenAmount: BigInt,
    oneInchSwapData: Array<Bytes>,
    useXBR: boolean,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "deposit",
      "deposit(uint256,bytes[],bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(baseTokenAmount),
        ethereum.Value.fromBytesArray(oneInchSwapData),
        ethereum.Value.fromBoolean(useXBR),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  depositTo(
    to: Address,
    baseTokenAmount: BigInt,
    oneInchSwapData: Array<Bytes>,
    useXBR: boolean,
  ): BigInt {
    let result = super.call(
      "depositTo",
      "depositTo(address,uint256,bytes[],bool):(uint256)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(baseTokenAmount),
        ethereum.Value.fromBytesArray(oneInchSwapData),
        ethereum.Value.fromBoolean(useXBR),
      ],
    );

    return result[0].toBigInt();
  }

  try_depositTo(
    to: Address,
    baseTokenAmount: BigInt,
    oneInchSwapData: Array<Bytes>,
    useXBR: boolean,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "depositTo",
      "depositTo(address,uint256,bytes[],bool):(uint256)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(baseTokenAmount),
        ethereum.Value.fromBytesArray(oneInchSwapData),
        ethereum.Value.fromBoolean(useXBR),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  execOneInchSwap(oneInchRouter: Address, oneInchSwapData: Bytes): BigInt {
    let result = super.call(
      "execOneInchSwap",
      "execOneInchSwap(address,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(oneInchRouter),
        ethereum.Value.fromBytes(oneInchSwapData),
      ],
    );

    return result[0].toBigInt();
  }

  try_execOneInchSwap(
    oneInchRouter: Address,
    oneInchSwapData: Bytes,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "execOneInchSwap",
      "execOneInchSwap(address,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(oneInchRouter),
        ethereum.Value.fromBytes(oneInchSwapData),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokensAndAllocation(): XStakingPool__getTokensAndAllocationResult {
    let result = super.call(
      "getTokensAndAllocation",
      "getTokensAndAllocation():(address[],uint256[])",
      [],
    );

    return new XStakingPool__getTokensAndAllocationResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray(),
    );
  }

  try_getTokensAndAllocation(): ethereum.CallResult<XStakingPool__getTokensAndAllocationResult> {
    let result = super.tryCall(
      "getTokensAndAllocation",
      "getTokensAndAllocation():(address[],uint256[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new XStakingPool__getTokensAndAllocationResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray(),
      ),
    );
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  poolId(): BigInt {
    let result = super.call("poolId", "poolId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_poolId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("poolId", "poolId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  profitSharingFeeNumerator(): BigInt {
    let result = super.call(
      "profitSharingFeeNumerator",
      "profitSharingFeeNumerator():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_profitSharingFeeNumerator(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "profitSharingFeeNumerator",
      "profitSharingFeeNumerator():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokens(param0: BigInt): Address {
    let result = super.call("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toAddress();
  }

  try_tokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokensLength(): BigInt {
    let result = super.call("tokensLength", "tokensLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokensLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokensLength", "tokensLength():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalAllocation(): BigInt {
    let result = super.call(
      "totalAllocation",
      "totalAllocation():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_totalAllocation(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalAllocation",
      "totalAllocation():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalProfitSharingFee(): BigInt {
    let result = super.call(
      "totalProfitSharingFee",
      "totalProfitSharingFee():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_totalProfitSharingFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalProfitSharingFee",
      "totalProfitSharingFee():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalTokenAmount(token: Address): BigInt {
    let result = super.call(
      "totalTokenAmount",
      "totalTokenAmount(address):(uint256)",
      [ethereum.Value.fromAddress(token)],
    );

    return result[0].toBigInt();
  }

  try_totalTokenAmount(token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalTokenAmount",
      "totalTokenAmount(address):(uint256)",
      [ethereum.Value.fromAddress(token)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(to: Address, value: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(value),
    ]);

    return result[0].toBoolean();
  }

  try_transfer(to: Address, value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(value),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(from: Address, to: Address, value: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
      ],
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    from: Address,
    to: Address,
    value: BigInt,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  userTokenAmount(user: Address, token: Address): BigInt {
    let result = super.call(
      "userTokenAmount",
      "userTokenAmount(address,address):(uint256)",
      [ethereum.Value.fromAddress(user), ethereum.Value.fromAddress(token)],
    );

    return result[0].toBigInt();
  }

  try_userTokenAmount(
    user: Address,
    token: Address,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userTokenAmount",
      "userTokenAmount(address,address):(uint256)",
      [ethereum.Value.fromAddress(user), ethereum.Value.fromAddress(token)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  withdraw(
    amountLP: BigInt,
    oneInchSwapData: Array<Bytes>,
    useXBR: boolean,
  ): BigInt {
    let result = super.call(
      "withdraw",
      "withdraw(uint256,bytes[],bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountLP),
        ethereum.Value.fromBytesArray(oneInchSwapData),
        ethereum.Value.fromBoolean(useXBR),
      ],
    );

    return result[0].toBigInt();
  }

  try_withdraw(
    amountLP: BigInt,
    oneInchSwapData: Array<Bytes>,
    useXBR: boolean,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdraw",
      "withdraw(uint256,bytes[],bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountLP),
        ethereum.Value.fromBytesArray(oneInchSwapData),
        ethereum.Value.fromBoolean(useXBR),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  xstakingFactory(): Address {
    let result = super.call(
      "xstakingFactory",
      "xstakingFactory():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_xstakingFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "xstakingFactory",
      "xstakingFactory():(address)",
      [],
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

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get baseTokenAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get oneInchSwapData(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get useXBR(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositToCall extends ethereum.Call {
  get inputs(): DepositToCall__Inputs {
    return new DepositToCall__Inputs(this);
  }

  get outputs(): DepositToCall__Outputs {
    return new DepositToCall__Outputs(this);
  }
}

export class DepositToCall__Inputs {
  _call: DepositToCall;

  constructor(call: DepositToCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseTokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get oneInchSwapData(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get useXBR(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class DepositToCall__Outputs {
  _call: DepositToCall;

  constructor(call: DepositToCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExecOneInchSwapCall extends ethereum.Call {
  get inputs(): ExecOneInchSwapCall__Inputs {
    return new ExecOneInchSwapCall__Inputs(this);
  }

  get outputs(): ExecOneInchSwapCall__Outputs {
    return new ExecOneInchSwapCall__Outputs(this);
  }
}

export class ExecOneInchSwapCall__Inputs {
  _call: ExecOneInchSwapCall;

  constructor(call: ExecOneInchSwapCall) {
    this._call = call;
  }

  get oneInchRouter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get oneInchSwapData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ExecOneInchSwapCall__Outputs {
  _call: ExecOneInchSwapCall;

  constructor(call: ExecOneInchSwapCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

  get _poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _poolOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokens(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _allocations(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _profitSharingFeeNumerator(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
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

export class SetProfitSharingFeeNumeratorCall extends ethereum.Call {
  get inputs(): SetProfitSharingFeeNumeratorCall__Inputs {
    return new SetProfitSharingFeeNumeratorCall__Inputs(this);
  }

  get outputs(): SetProfitSharingFeeNumeratorCall__Outputs {
    return new SetProfitSharingFeeNumeratorCall__Outputs(this);
  }
}

export class SetProfitSharingFeeNumeratorCall__Inputs {
  _call: SetProfitSharingFeeNumeratorCall;

  constructor(call: SetProfitSharingFeeNumeratorCall) {
    this._call = call;
  }

  get _profitSharingFeeNumerator(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetProfitSharingFeeNumeratorCall__Outputs {
  _call: SetProfitSharingFeeNumeratorCall;

  constructor(call: SetProfitSharingFeeNumeratorCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amountLP(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get oneInchSwapData(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get useXBR(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
