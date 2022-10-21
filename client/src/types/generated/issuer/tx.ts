/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { VerifiableCredential } from '../verifiable-credential/verifiable-credential';

export const protobufPackage = 'millicent.cash.issuer';

/** MsgCreateIssuer defines an SDK message for creating an emoney token issuer. */
export interface MsgCreateIssuer {
  token: string;
  fee: number;
  issuerDid: string;
  licenseCredId: string;
  owner: string;
}

export interface MsgCreateIssuerResponse {}

/** MsgBurnToken defines a SDK message for burning issuer tokens. */
export interface MsgBurnToken {
  issuerDid: string;
  licenseCredId: string;
  amount: string;
  owner: string;
}

export interface MsgBurnTokenResponse {}

/** MsgMintToken defines a SDK message for minting a token */
export interface MsgMintToken {
  issuerDid: string;
  licenseCredId: string;
  amount: string;
  owner: string;
}

export interface MsgMintTokenResponse {}

/** MsgPauseToken defines a SDK message for minting a token */
export interface MsgPauseToken {
  issuerDid: string;
  licenseCredId: string;
  owner: string;
}

export interface MsgPauseTokenResponse {}

/** MsgIssueUserCredential defines sdk message to issue user credentials */
export interface MsgIssueUserCredential {
  credential?: VerifiableCredential;
  owner: string;
}

export interface MsgIssueUserCredentialResponse {}

function createBaseMsgCreateIssuer(): MsgCreateIssuer {
  return { token: '', fee: 0, issuerDid: '', licenseCredId: '', owner: '' };
}

export const MsgCreateIssuer = {
  encode(
    message: MsgCreateIssuer,
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
    if (message.licenseCredId !== '') {
      writer.uint32(34).string(message.licenseCredId);
    }
    if (message.owner !== '') {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIssuer();
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
          message.licenseCredId = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateIssuer {
    return {
      token: isSet(object.token) ? String(object.token) : '',
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      issuerDid: isSet(object.issuerDid) ? String(object.issuerDid) : '',
      licenseCredId: isSet(object.licenseCredId)
        ? String(object.licenseCredId)
        : '',
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgCreateIssuer): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.fee !== undefined && (obj.fee = Math.round(message.fee));
    message.issuerDid !== undefined && (obj.issuerDid = message.issuerDid);
    message.licenseCredId !== undefined &&
      (obj.licenseCredId = message.licenseCredId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateIssuer>, I>>(
    object: I
  ): MsgCreateIssuer {
    const message = createBaseMsgCreateIssuer();
    message.token = object.token ?? '';
    message.fee = object.fee ?? 0;
    message.issuerDid = object.issuerDid ?? '';
    message.licenseCredId = object.licenseCredId ?? '';
    message.owner = object.owner ?? '';
    return message;
  },
};

function createBaseMsgCreateIssuerResponse(): MsgCreateIssuerResponse {
  return {};
}

export const MsgCreateIssuerResponse = {
  encode(
    _: MsgCreateIssuerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIssuerResponse();
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

  fromJSON(_: any): MsgCreateIssuerResponse {
    return {};
  },

  toJSON(_: MsgCreateIssuerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateIssuerResponse>, I>>(
    _: I
  ): MsgCreateIssuerResponse {
    const message = createBaseMsgCreateIssuerResponse();
    return message;
  },
};

function createBaseMsgBurnToken(): MsgBurnToken {
  return { issuerDid: '', licenseCredId: '', amount: '', owner: '' };
}

export const MsgBurnToken = {
  encode(
    message: MsgBurnToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuerDid !== '') {
      writer.uint32(10).string(message.issuerDid);
    }
    if (message.licenseCredId !== '') {
      writer.uint32(18).string(message.licenseCredId);
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount);
    }
    if (message.owner !== '') {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerDid = reader.string();
          break;
        case 2:
          message.licenseCredId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnToken {
    return {
      issuerDid: isSet(object.issuerDid) ? String(object.issuerDid) : '',
      licenseCredId: isSet(object.licenseCredId)
        ? String(object.licenseCredId)
        : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgBurnToken): unknown {
    const obj: any = {};
    message.issuerDid !== undefined && (obj.issuerDid = message.issuerDid);
    message.licenseCredId !== undefined &&
      (obj.licenseCredId = message.licenseCredId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnToken>, I>>(
    object: I
  ): MsgBurnToken {
    const message = createBaseMsgBurnToken();
    message.issuerDid = object.issuerDid ?? '';
    message.licenseCredId = object.licenseCredId ?? '';
    message.amount = object.amount ?? '';
    message.owner = object.owner ?? '';
    return message;
  },
};

function createBaseMsgBurnTokenResponse(): MsgBurnTokenResponse {
  return {};
}

export const MsgBurnTokenResponse = {
  encode(
    _: MsgBurnTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBurnTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnTokenResponse();
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

  fromJSON(_: any): MsgBurnTokenResponse {
    return {};
  },

  toJSON(_: MsgBurnTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnTokenResponse>, I>>(
    _: I
  ): MsgBurnTokenResponse {
    const message = createBaseMsgBurnTokenResponse();
    return message;
  },
};

function createBaseMsgMintToken(): MsgMintToken {
  return { issuerDid: '', licenseCredId: '', amount: '', owner: '' };
}

export const MsgMintToken = {
  encode(
    message: MsgMintToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuerDid !== '') {
      writer.uint32(10).string(message.issuerDid);
    }
    if (message.licenseCredId !== '') {
      writer.uint32(18).string(message.licenseCredId);
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount);
    }
    if (message.owner !== '') {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerDid = reader.string();
          break;
        case 2:
          message.licenseCredId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintToken {
    return {
      issuerDid: isSet(object.issuerDid) ? String(object.issuerDid) : '',
      licenseCredId: isSet(object.licenseCredId)
        ? String(object.licenseCredId)
        : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgMintToken): unknown {
    const obj: any = {};
    message.issuerDid !== undefined && (obj.issuerDid = message.issuerDid);
    message.licenseCredId !== undefined &&
      (obj.licenseCredId = message.licenseCredId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintToken>, I>>(
    object: I
  ): MsgMintToken {
    const message = createBaseMsgMintToken();
    message.issuerDid = object.issuerDid ?? '';
    message.licenseCredId = object.licenseCredId ?? '';
    message.amount = object.amount ?? '';
    message.owner = object.owner ?? '';
    return message;
  },
};

function createBaseMsgMintTokenResponse(): MsgMintTokenResponse {
  return {};
}

export const MsgMintTokenResponse = {
  encode(
    _: MsgMintTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMintTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintTokenResponse();
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

  fromJSON(_: any): MsgMintTokenResponse {
    return {};
  },

  toJSON(_: MsgMintTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintTokenResponse>, I>>(
    _: I
  ): MsgMintTokenResponse {
    const message = createBaseMsgMintTokenResponse();
    return message;
  },
};

function createBaseMsgPauseToken(): MsgPauseToken {
  return { issuerDid: '', licenseCredId: '', owner: '' };
}

export const MsgPauseToken = {
  encode(
    message: MsgPauseToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuerDid !== '') {
      writer.uint32(10).string(message.issuerDid);
    }
    if (message.licenseCredId !== '') {
      writer.uint32(18).string(message.licenseCredId);
    }
    if (message.owner !== '') {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPauseToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerDid = reader.string();
          break;
        case 2:
          message.licenseCredId = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPauseToken {
    return {
      issuerDid: isSet(object.issuerDid) ? String(object.issuerDid) : '',
      licenseCredId: isSet(object.licenseCredId)
        ? String(object.licenseCredId)
        : '',
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgPauseToken): unknown {
    const obj: any = {};
    message.issuerDid !== undefined && (obj.issuerDid = message.issuerDid);
    message.licenseCredId !== undefined &&
      (obj.licenseCredId = message.licenseCredId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPauseToken>, I>>(
    object: I
  ): MsgPauseToken {
    const message = createBaseMsgPauseToken();
    message.issuerDid = object.issuerDid ?? '';
    message.licenseCredId = object.licenseCredId ?? '';
    message.owner = object.owner ?? '';
    return message;
  },
};

function createBaseMsgPauseTokenResponse(): MsgPauseTokenResponse {
  return {};
}

export const MsgPauseTokenResponse = {
  encode(
    _: MsgPauseTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPauseTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPauseTokenResponse();
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

  fromJSON(_: any): MsgPauseTokenResponse {
    return {};
  },

  toJSON(_: MsgPauseTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPauseTokenResponse>, I>>(
    _: I
  ): MsgPauseTokenResponse {
    const message = createBaseMsgPauseTokenResponse();
    return message;
  },
};

function createBaseMsgIssueUserCredential(): MsgIssueUserCredential {
  return { credential: undefined, owner: '' };
}

export const MsgIssueUserCredential = {
  encode(
    message: MsgIssueUserCredential,
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
  ): MsgIssueUserCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueUserCredential();
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

  fromJSON(object: any): MsgIssueUserCredential {
    return {
      credential: isSet(object.credential)
        ? VerifiableCredential.fromJSON(object.credential)
        : undefined,
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgIssueUserCredential): unknown {
    const obj: any = {};
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? VerifiableCredential.toJSON(message.credential)
        : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueUserCredential>, I>>(
    object: I
  ): MsgIssueUserCredential {
    const message = createBaseMsgIssueUserCredential();
    message.credential =
      object.credential !== undefined && object.credential !== null
        ? VerifiableCredential.fromPartial(object.credential)
        : undefined;
    message.owner = object.owner ?? '';
    return message;
  },
};

function createBaseMsgIssueUserCredentialResponse(): MsgIssueUserCredentialResponse {
  return {};
}

export const MsgIssueUserCredentialResponse = {
  encode(
    _: MsgIssueUserCredentialResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIssueUserCredentialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueUserCredentialResponse();
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

  fromJSON(_: any): MsgIssueUserCredentialResponse {
    return {};
  },

  toJSON(_: MsgIssueUserCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueUserCredentialResponse>, I>>(
    _: I
  ): MsgIssueUserCredentialResponse {
    const message = createBaseMsgIssueUserCredentialResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** CreateIssuer creates a token issuer */
  CreateIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse>;
  /** BurnToken allows to burn an amount of tokens */
  BurnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse>;
  /** MintToken allows to mint an amount of tokens */
  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
  /** PauseToken allows to pause issuance/minting/transacting with a token */
  PauseToken(request: MsgPauseToken): Promise<MsgPauseTokenResponse>;
  /** IssueUserCredential issue user credential to allow an account to transact */
  IssueUserCredential(
    request: MsgIssueUserCredential
  ): Promise<MsgIssueUserCredentialResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || 'millicent.cash.issuer.Msg';
    this.rpc = rpc;
    this.CreateIssuer = this.CreateIssuer.bind(this);
    this.BurnToken = this.BurnToken.bind(this);
    this.MintToken = this.MintToken.bind(this);
    this.PauseToken = this.PauseToken.bind(this);
    this.IssueUserCredential = this.IssueUserCredential.bind(this);
  }
  CreateIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse> {
    const data = MsgCreateIssuer.encode(request).finish();
    const promise = this.rpc.request(this.service, 'CreateIssuer', data);
    return promise.then((data) =>
      MsgCreateIssuerResponse.decode(new _m0.Reader(data))
    );
  }

  BurnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse> {
    const data = MsgBurnToken.encode(request).finish();
    const promise = this.rpc.request(this.service, 'BurnToken', data);
    return promise.then((data) =>
      MsgBurnTokenResponse.decode(new _m0.Reader(data))
    );
  }

  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse> {
    const data = MsgMintToken.encode(request).finish();
    const promise = this.rpc.request(this.service, 'MintToken', data);
    return promise.then((data) =>
      MsgMintTokenResponse.decode(new _m0.Reader(data))
    );
  }

  PauseToken(request: MsgPauseToken): Promise<MsgPauseTokenResponse> {
    const data = MsgPauseToken.encode(request).finish();
    const promise = this.rpc.request(this.service, 'PauseToken', data);
    return promise.then((data) =>
      MsgPauseTokenResponse.decode(new _m0.Reader(data))
    );
  }

  IssueUserCredential(
    request: MsgIssueUserCredential
  ): Promise<MsgIssueUserCredentialResponse> {
    const data = MsgIssueUserCredential.encode(request).finish();
    const promise = this.rpc.request(this.service, 'IssueUserCredential', data);
    return promise.then((data) =>
      MsgIssueUserCredentialResponse.decode(new _m0.Reader(data))
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
