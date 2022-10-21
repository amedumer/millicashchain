/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { VerifiableCredential } from '../verifiable-credential/verifiable-credential';

export const protobufPackage = 'millicent.cash.regulator';

/** MsgIssueRegulatorCredential is used to activate a regulator on chain */
export interface MsgIssueRegulatorCredential {
  credential?: VerifiableCredential;
  owner: string;
}

/**
 * MsgActivateResponse contains the reponse for a successful activation
 * of a regulator on chain
 */
export interface MsgIssueRegulatorCredentialResponse {}

export interface MsgIssueRegistrationCredential {
  credential?: VerifiableCredential;
  owner: string;
}

/** MsgIssueRegistrationCredentialResponse reply for the IssueRegistartion call */
export interface MsgIssueRegistrationCredentialResponse {}

/** MsgIssueLicenseCredential message contains data for license credential */
export interface MsgIssueLicenseCredential {
  credential?: VerifiableCredential;
  owner: string;
}

/** MsgIssueLicenseCredentialResponse reply for the issue license call */
export interface MsgIssueLicenseCredentialResponse {}

function createBaseMsgIssueRegulatorCredential(): MsgIssueRegulatorCredential {
  return { credential: undefined, owner: '' };
}

export const MsgIssueRegulatorCredential = {
  encode(
    message: MsgIssueRegulatorCredential,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIssueRegulatorCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueRegulatorCredential();
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

  fromJSON(object: any): MsgIssueRegulatorCredential {
    return {
      credential: isSet(object.credential)
        ? VerifiableCredential.fromJSON(object.credential)
        : undefined,
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgIssueRegulatorCredential): unknown {
    const obj: any = {};
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? VerifiableCredential.toJSON(message.credential)
        : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueRegulatorCredential>, I>>(
    object: I
  ): MsgIssueRegulatorCredential {
    const message = createBaseMsgIssueRegulatorCredential();
    message.credential =
      object.credential !== undefined && object.credential !== null
        ? VerifiableCredential.fromPartial(object.credential)
        : undefined;
    message.owner = object.owner ?? '';
    return message;
  },
};

function createBaseMsgIssueRegulatorCredentialResponse(): MsgIssueRegulatorCredentialResponse {
  return {};
}

export const MsgIssueRegulatorCredentialResponse = {
  encode(
    _: MsgIssueRegulatorCredentialResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIssueRegulatorCredentialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueRegulatorCredentialResponse();
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

  fromJSON(_: any): MsgIssueRegulatorCredentialResponse {
    return {};
  },

  toJSON(_: MsgIssueRegulatorCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgIssueRegulatorCredentialResponse>, I>
  >(_: I): MsgIssueRegulatorCredentialResponse {
    const message = createBaseMsgIssueRegulatorCredentialResponse();
    return message;
  },
};

function createBaseMsgIssueRegistrationCredential(): MsgIssueRegistrationCredential {
  return { credential: undefined, owner: '' };
}

export const MsgIssueRegistrationCredential = {
  encode(
    message: MsgIssueRegistrationCredential,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIssueRegistrationCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueRegistrationCredential();
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

  fromJSON(object: any): MsgIssueRegistrationCredential {
    return {
      credential: isSet(object.credential)
        ? VerifiableCredential.fromJSON(object.credential)
        : undefined,
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgIssueRegistrationCredential): unknown {
    const obj: any = {};
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? VerifiableCredential.toJSON(message.credential)
        : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueRegistrationCredential>, I>>(
    object: I
  ): MsgIssueRegistrationCredential {
    const message = createBaseMsgIssueRegistrationCredential();
    message.credential =
      object.credential !== undefined && object.credential !== null
        ? VerifiableCredential.fromPartial(object.credential)
        : undefined;
    message.owner = object.owner ?? '';
    return message;
  },
};

function createBaseMsgIssueRegistrationCredentialResponse(): MsgIssueRegistrationCredentialResponse {
  return {};
}

export const MsgIssueRegistrationCredentialResponse = {
  encode(
    _: MsgIssueRegistrationCredentialResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIssueRegistrationCredentialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueRegistrationCredentialResponse();
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

  fromJSON(_: any): MsgIssueRegistrationCredentialResponse {
    return {};
  },

  toJSON(_: MsgIssueRegistrationCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgIssueRegistrationCredentialResponse>, I>
  >(_: I): MsgIssueRegistrationCredentialResponse {
    const message = createBaseMsgIssueRegistrationCredentialResponse();
    return message;
  },
};

function createBaseMsgIssueLicenseCredential(): MsgIssueLicenseCredential {
  return { credential: undefined, owner: '' };
}

export const MsgIssueLicenseCredential = {
  encode(
    message: MsgIssueLicenseCredential,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIssueLicenseCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueLicenseCredential();
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

  fromJSON(object: any): MsgIssueLicenseCredential {
    return {
      credential: isSet(object.credential)
        ? VerifiableCredential.fromJSON(object.credential)
        : undefined,
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgIssueLicenseCredential): unknown {
    const obj: any = {};
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? VerifiableCredential.toJSON(message.credential)
        : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueLicenseCredential>, I>>(
    object: I
  ): MsgIssueLicenseCredential {
    const message = createBaseMsgIssueLicenseCredential();
    message.credential =
      object.credential !== undefined && object.credential !== null
        ? VerifiableCredential.fromPartial(object.credential)
        : undefined;
    message.owner = object.owner ?? '';
    return message;
  },
};

function createBaseMsgIssueLicenseCredentialResponse(): MsgIssueLicenseCredentialResponse {
  return {};
}

export const MsgIssueLicenseCredentialResponse = {
  encode(
    _: MsgIssueLicenseCredentialResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIssueLicenseCredentialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueLicenseCredentialResponse();
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

  fromJSON(_: any): MsgIssueLicenseCredentialResponse {
    return {};
  },

  toJSON(_: MsgIssueLicenseCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgIssueLicenseCredentialResponse>, I>
  >(_: I): MsgIssueLicenseCredentialResponse {
    const message = createBaseMsgIssueLicenseCredentialResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * this line is used by starport scaffolding # proto/tx/rpc
   * Activate issue regulator credential to activate a regulator on chain
   */
  IssueRegulatorCredential(
    request: MsgIssueRegulatorCredential
  ): Promise<MsgIssueRegulatorCredentialResponse>;
  /** IssueRegistrationCredential issue a new registration credential for a public entity */
  IssueRegistrationCredential(
    request: MsgIssueRegistrationCredential
  ): Promise<MsgIssueRegistrationCredentialResponse>;
  /** IssueLicenseCredential issue a license to to a registered entity */
  IssueLicenseCredential(
    request: MsgIssueLicenseCredential
  ): Promise<MsgIssueLicenseCredentialResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || 'millicent.cash.regulator.Msg';
    this.rpc = rpc;
    this.IssueRegulatorCredential = this.IssueRegulatorCredential.bind(this);
    this.IssueRegistrationCredential =
      this.IssueRegistrationCredential.bind(this);
    this.IssueLicenseCredential = this.IssueLicenseCredential.bind(this);
  }
  IssueRegulatorCredential(
    request: MsgIssueRegulatorCredential
  ): Promise<MsgIssueRegulatorCredentialResponse> {
    const data = MsgIssueRegulatorCredential.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      'IssueRegulatorCredential',
      data
    );
    return promise.then((data) =>
      MsgIssueRegulatorCredentialResponse.decode(new _m0.Reader(data))
    );
  }

  IssueRegistrationCredential(
    request: MsgIssueRegistrationCredential
  ): Promise<MsgIssueRegistrationCredentialResponse> {
    const data = MsgIssueRegistrationCredential.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      'IssueRegistrationCredential',
      data
    );
    return promise.then((data) =>
      MsgIssueRegistrationCredentialResponse.decode(new _m0.Reader(data))
    );
  }

  IssueLicenseCredential(
    request: MsgIssueLicenseCredential
  ): Promise<MsgIssueLicenseCredentialResponse> {
    const data = MsgIssueLicenseCredential.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      'IssueLicenseCredential',
      data
    );
    return promise.then((data) =>
      MsgIssueLicenseCredentialResponse.decode(new _m0.Reader(data))
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
