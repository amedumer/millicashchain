/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'millicent.cash.issuer';

/** Issuer represents an e-money token issuer */
export interface Issuer {
  token: string;
  fee: number;
  issuerDid: string;
  paused: boolean;
}

function createBaseIssuer(): Issuer {
  return { token: '', fee: 0, issuerDid: '', paused: false };
}

export const Issuer = {
  encode(
    message: Issuer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== '') {
      writer.uint32(10).string(message.token);
    }
    if (message.fee !== 0) {
      writer.uint32(16).int32(message.fee);
    }
    if (message.issuerDid !== '') {
      writer.uint32(26).string(message.issuerDid);
    }
    if (message.paused === true) {
      writer.uint32(32).bool(message.paused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Issuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssuer();
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
          message.issuerDid = reader.string();
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
    return {
      token: isSet(object.token) ? String(object.token) : '',
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      issuerDid: isSet(object.issuerDid) ? String(object.issuerDid) : '',
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
    };
  },

  toJSON(message: Issuer): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.issuerDid !== undefined && (obj.issuerDid = message.issuerDid);
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Issuer>, I>>(object: I): Issuer {
    const message = createBaseIssuer();
    message.token = object.token ?? '';
    message.fee = object.fee ?? 0;
    message.issuerDid = object.issuerDid ?? '';
    message.paused = object.paused ?? false;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
