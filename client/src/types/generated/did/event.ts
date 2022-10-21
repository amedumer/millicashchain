/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'millicent.cash.did';

/** DidDocumentCreatedEvent is an event triggered on a DID document creation */
export interface DidDocumentCreatedEvent {
  /** the did being created */
  did: string;
  /** the signer account creating the did */
  signer: string;
}

/** DidDocumentUpdatedEvent is an event triggered on a DID document update */
export interface DidDocumentUpdatedEvent {
  /** the did being updated */
  did: string;
  /** the signer account of the change */
  signer: string;
}

function createBaseDidDocumentCreatedEvent(): DidDocumentCreatedEvent {
  return { did: '', signer: '' };
}

export const DidDocumentCreatedEvent = {
  encode(
    message: DidDocumentCreatedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.did !== '') {
      writer.uint32(10).string(message.did);
    }
    if (message.signer !== '') {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DidDocumentCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDidDocumentCreatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DidDocumentCreatedEvent {
    return {
      did: isSet(object.did) ? String(object.did) : '',
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: DidDocumentCreatedEvent): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DidDocumentCreatedEvent>, I>>(
    object: I
  ): DidDocumentCreatedEvent {
    const message = createBaseDidDocumentCreatedEvent();
    message.did = object.did ?? '';
    message.signer = object.signer ?? '';
    return message;
  },
};

function createBaseDidDocumentUpdatedEvent(): DidDocumentUpdatedEvent {
  return { did: '', signer: '' };
}

export const DidDocumentUpdatedEvent = {
  encode(
    message: DidDocumentUpdatedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.did !== '') {
      writer.uint32(10).string(message.did);
    }
    if (message.signer !== '') {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DidDocumentUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDidDocumentUpdatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DidDocumentUpdatedEvent {
    return {
      did: isSet(object.did) ? String(object.did) : '',
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: DidDocumentUpdatedEvent): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DidDocumentUpdatedEvent>, I>>(
    object: I
  ): DidDocumentUpdatedEvent {
    const message = createBaseDidDocumentUpdatedEvent();
    message.did = object.did ?? '';
    message.signer = object.signer ?? '';
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
