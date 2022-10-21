/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "millicent.cash.issuer";

/** Issuer represents an e-money token issuer */
export interface Issuer {
  token: string;
  fee: number;
  issuer_did: string;
  paused: boolean;
}

const baseIssuer: object = { token: "", fee: 0, issuer_did: "", paused: false };

export const Issuer = {
  encode(message: Issuer, writer: Writer = Writer.create()): Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.fee !== 0) {
      writer.uint32(16).int32(message.fee);
    }
    if (message.issuer_did !== "") {
      writer.uint32(26).string(message.issuer_did);
    }
    if (message.paused === true) {
      writer.uint32(32).bool(message.paused);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Issuer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIssuer } as Issuer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.fee = reader.int32();
          break;
        case 3:
          message.issuer_did = reader.string();
          break;
        case 4:
          message.paused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Issuer {
    const message = { ...baseIssuer } as Issuer;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Number(object.fee);
    } else {
      message.fee = 0;
    }
    if (object.issuer_did !== undefined && object.issuer_did !== null) {
      message.issuer_did = String(object.issuer_did);
    } else {
      message.issuer_did = "";
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = Boolean(object.paused);
    } else {
      message.paused = false;
    }
    return message;
  },

  toJSON(message: Issuer): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.fee !== undefined && (obj.fee = message.fee);
    message.issuer_did !== undefined && (obj.issuer_did = message.issuer_did);
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },

  fromPartial(object: DeepPartial<Issuer>): Issuer {
    const message = { ...baseIssuer } as Issuer;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = 0;
    }
    if (object.issuer_did !== undefined && object.issuer_did !== null) {
      message.issuer_did = object.issuer_did;
    } else {
      message.issuer_did = "";
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused;
    } else {
      message.paused = false;
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
