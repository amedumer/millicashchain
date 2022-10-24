/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "millicent.cash.regulator";

/** GenesisState defines the regulator module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  regulators?: Regulators;
}

/** RegulatorsParams defines the addresses of the regulators */
export interface Regulators {
  /**
   * the addresses of the regualtors for the chain. The addresses will be used to
   * generate DID documents at genesis.
   */
  addresses: string[];
  /**
   * DIDs is a map that is filled at init gensis time and contains:
   * <regulator address, generated uuid did>
   */
  dids: { [key: string]: string };
}

export interface Regulators_DidsEntry {
  key: string;
  value: string;
}

function createBaseGenesisState(): GenesisState {
  return { regulators: undefined };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.regulators !== undefined) {
      Regulators.encode(message.regulators, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regulators = Regulators.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      regulators: isSet(object.regulators)
        ? Regulators.fromJSON(object.regulators)
        : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.regulators !== undefined &&
      (obj.regulators = message.regulators
        ? Regulators.toJSON(message.regulators)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.regulators =
      object.regulators !== undefined && object.regulators !== null
        ? Regulators.fromPartial(object.regulators)
        : undefined;
    return message;
  },
};

function createBaseRegulators(): Regulators {
  return { addresses: [], dids: {} };
}

export const Regulators = {
  encode(
    message: Regulators,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    Object.entries(message.dids).forEach(([key, value]) => {
      Regulators_DidsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Regulators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegulators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        case 2:
          const entry2 = Regulators_DidsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.dids[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Regulators {
    return {
      addresses: Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => String(e))
        : [],
      dids: isObject(object.dids)
        ? Object.entries(object.dids).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: Regulators): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    obj.dids = {};
    if (message.dids) {
      Object.entries(message.dids).forEach(([k, v]) => {
        obj.dids[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Regulators>, I>>(
    object: I
  ): Regulators {
    const message = createBaseRegulators();
    message.addresses = object.addresses?.map((e) => e) || [];
    message.dids = Object.entries(object.dids ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseRegulators_DidsEntry(): Regulators_DidsEntry {
  return { key: "", value: "" };
}

export const Regulators_DidsEntry = {
  encode(
    message: Regulators_DidsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Regulators_DidsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegulators_DidsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Regulators_DidsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Regulators_DidsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Regulators_DidsEntry>, I>>(
    object: I
  ): Regulators_DidsEntry {
    const message = createBaseRegulators_DidsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
