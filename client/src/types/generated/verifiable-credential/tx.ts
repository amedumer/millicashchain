/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { VerifiableCredential } from './verifiable-credential';

export const protobufPackage = 'millicent.cash.verifiablecredential';

/** MsgRevokeCredential */
export interface MsgRevokeCredential {
  credentialId: string;
  owner: string;
}

/** MsgRevokeCredentialResponse */
export interface MsgRevokeCredentialResponse {}

/**
 * MsgIssueCredential is used to issue new registration credential
 * this message is used by other modules
 */
export interface MsgIssueCredential {
  credential?: VerifiableCredential;
  owner: string;
}

/** MsgIssueCredentialResponse reply for the issue credential call */
export interface MsgIssueCredentialResponse {}

function createBaseMsgRevokeCredential(): MsgRevokeCredential {
  return { credentialId: '', owner: '' };
}

export const MsgRevokeCredential = {
  encode(
    message: MsgRevokeCredential,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.credentialId !== '') {
      writer.uint32(10).string(message.credentialId);
    }
    if (message.owner !== '') {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credentialId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeCredential {
    return {
      credentialId: isSet(object.credentialId)
        ? String(object.credentialId)
        : '',
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgRevokeCredential): unknown {
    const obj: any = {};
    message.credentialId !== undefined &&
      (obj.credentialId = message.credentialId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeCredential>, I>>(
    object: I
  ): MsgRevokeCredential {
    const message = createBaseMsgRevokeCredential();
    message.credentialId = object.credentialId ?? '';
    message.owner = object.owner ?? '';
    return message;
  },
};

function createBaseMsgRevokeCredentialResponse(): MsgRevokeCredentialResponse {
  return {};
}

export const MsgRevokeCredentialResponse = {
  encode(
    _: MsgRevokeCredentialResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeCredentialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCredentialResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRevokeCredentialResponse {
    return {};
  },

  toJSON(_: MsgRevokeCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeCredentialResponse>, I>>(
    _: I
  ): MsgRevokeCredentialResponse {
    const message = createBaseMsgRevokeCredentialResponse();
    return message;
  },
};

function createBaseMsgIssueCredential(): MsgIssueCredential {
  return { credential: undefined, owner: '' };
}

export const MsgIssueCredential = {
  encode(
    message: MsgIssueCredential,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.credential !== undefined) {
      VerifiableCredential.encode(
        message.credential,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.owner !== '') {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credential = VerifiableCredential.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueCredential {
    return {
      credential: isSet(object.credential)
        ? VerifiableCredential.fromJSON(object.credential)
        : undefined,
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgIssueCredential): unknown {
    const obj: any = {};
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? VerifiableCredential.toJSON(message.credential)
        : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueCredential>, I>>(
    object: I
  ): MsgIssueCredential {
    const message = createBaseMsgIssueCredential();
    message.credential =
      object.credential !== undefined && object.credential !== null
        ? VerifiableCredential.fromPartial(object.credential)
        : undefined;
    message.owner = object.owner ?? '';
    return message;
  },
};

function createBaseMsgIssueCredentialResponse(): MsgIssueCredentialResponse {
  return {};
}

export const MsgIssueCredentialResponse = {
  encode(
    _: MsgIssueCredentialResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIssueCredentialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueCredentialResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgIssueCredentialResponse {
    return {};
  },

  toJSON(_: MsgIssueCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueCredentialResponse>, I>>(
    _: I
  ): MsgIssueCredentialResponse {
    const message = createBaseMsgIssueCredentialResponse();
    return message;
  },
};

/** Msg defines the identity Msg service. */
export interface Msg {
  /** RevokeCredential a credential */
  RevokeCredential(
    request: MsgRevokeCredential
  ): Promise<MsgRevokeCredentialResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || 'millicent.cash.verifiablecredential.Msg';
    this.rpc = rpc;
    this.RevokeCredential = this.RevokeCredential.bind(this);
  }
  RevokeCredential(
    request: MsgRevokeCredential
  ): Promise<MsgRevokeCredentialResponse> {
    const data = MsgRevokeCredential.encode(request).finish();
    const promise = this.rpc.request(this.service, 'RevokeCredential', data);
    return promise.then((data) =>
      MsgRevokeCredentialResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
