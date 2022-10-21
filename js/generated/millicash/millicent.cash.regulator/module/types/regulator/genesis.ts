/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "millicent.cash.regulator";

/** GenesisState defines the regulator module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  regulators: Regulators | undefined;
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

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.regulators !== undefined) {
      Regulators.encode(message.regulators, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
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
    const message = { ...baseGenesisState } as GenesisState;
    if (object.regulators !== undefined && object.regulators !== null) {
      message.regulators = Regulators.fromJSON(object.regulators);
    } else {
      message.regulators = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.regulators !== undefined &&
      (obj.regulators = message.regulators
        ? Regulators.toJSON(message.regulators)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.regulators !== undefined && object.regulators !== null) {
      message.regulators = Regulators.fromPartial(object.regulators);
    } else {
      message.regulators = undefined;
    }
    return message;
  },
};

const baseRegulators: object = { addresses: "" };

export const Regulators = {
  encode(message: Regulators, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Regulators {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegulators } as Regulators;
    message.addresses = [];
    message.dids = {};
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
    const message = { ...baseRegulators } as Regulators;
    message.addresses = [];
    message.dids = {};
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(String(e));
      }
    }
    if (object.dids !== undefined && object.dids !== null) {
      Object.entries(object.dids).forEach(([key, value]) => {
        message.dids[key] = String(value);
      });
    }
    return message;
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

  fromPartial(object: DeepPartial<Regulators>): Regulators {
    const message = { ...baseRegulators } as Regulators;
    message.addresses = [];
    message.dids = {};
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(e);
      }
    }
    if (object.dids !== undefined && object.dids !== null) {
      Object.entries(object.dids).forEach(([key, value]) => {
        if (value !== undefined) {
          message.dids[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseRegulators_DidsEntry: object = { key: "", value: "" };

export const Regulators_DidsEntry = {
  encode(
    message: Regulators_DidsEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Regulators_DidsEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegulators_DidsEntry } as Regulators_DidsEntry;
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
    const message = { ...baseRegulators_DidsEntry } as Regulators_DidsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: Regulators_DidsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Regulators_DidsEntry>): Regulators_DidsEntry {
    const message = { ...baseRegulators_DidsEntry } as Regulators_DidsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
