/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { VerifiableCredential } from "../verifiable-credential/verifiable-credential";

export const protobufPackage = "millicent.cash.issuer";

/** MsgCreateIssuer defines an SDK message for creating an emoney token issuer. */
export interface MsgCreateIssuer {
  token: string;
  fee: number;
  issuer_did: string;
  license_cred_id: string;
  owner: string;
}

export interface MsgCreateIssuerResponse {}

/** MsgBurnToken defines a SDK message for burning issuer tokens. */
export interface MsgBurnToken {
  issuer_did: string;
  license_cred_id: string;
  amount: string;
  owner: string;
}

export interface MsgBurnTokenResponse {}

/** MsgMintToken defines a SDK message for minting a token */
export interface MsgMintToken {
  issuer_did: string;
  license_cred_id: string;
  amount: string;
  owner: string;
}

export interface MsgMintTokenResponse {}

/** MsgPauseToken defines a SDK message for minting a token */
export interface MsgPauseToken {
  issuer_did: string;
  license_cred_id: string;
  owner: string;
}

export interface MsgPauseTokenResponse {}

/** MsgIssueUserCredential defines sdk message to issue user credentials */
export interface MsgIssueUserCredential {
  credential: VerifiableCredential | undefined;
  owner: string;
}

export interface MsgIssueUserCredentialResponse {}

const baseMsgCreateIssuer: object = {
  token: "",
  fee: 0,
  issuer_did: "",
  license_cred_id: "",
  owner: "",
};

export const MsgCreateIssuer = {
  encode(message: MsgCreateIssuer, writer: Writer = Writer.create()): Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.fee !== 0) {
      writer.uint32(16).int32(message.fee);
    }
    if (message.issuer_did !== "") {
      writer.uint32(26).string(message.issuer_did);
    }
    if (message.license_cred_id !== "") {
      writer.uint32(34).string(message.license_cred_id);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateIssuer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateIssuer } as MsgCreateIssuer;
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
          message.license_cred_id = reader.string();
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
    const message = { ...baseMsgCreateIssuer } as MsgCreateIssuer;
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
    if (
      object.license_cred_id !== undefined &&
      object.license_cred_id !== null
    ) {
      message.license_cred_id = String(object.license_cred_id);
    } else {
      message.license_cred_id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgCreateIssuer): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.fee !== undefined && (obj.fee = message.fee);
    message.issuer_did !== undefined && (obj.issuer_did = message.issuer_did);
    message.license_cred_id !== undefined &&
      (obj.license_cred_id = message.license_cred_id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateIssuer>): MsgCreateIssuer {
    const message = { ...baseMsgCreateIssuer } as MsgCreateIssuer;
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
    if (
      object.license_cred_id !== undefined &&
      object.license_cred_id !== null
    ) {
      message.license_cred_id = object.license_cred_id;
    } else {
      message.license_cred_id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgCreateIssuerResponse: object = {};

export const MsgCreateIssuerResponse = {
  encode(_: MsgCreateIssuerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateIssuerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateIssuerResponse,
    } as MsgCreateIssuerResponse;
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
    const message = {
      ...baseMsgCreateIssuerResponse,
    } as MsgCreateIssuerResponse;
    return message;
  },

  toJSON(_: MsgCreateIssuerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateIssuerResponse>
  ): MsgCreateIssuerResponse {
    const message = {
      ...baseMsgCreateIssuerResponse,
    } as MsgCreateIssuerResponse;
    return message;
  },
};

const baseMsgBurnToken: object = {
  issuer_did: "",
  license_cred_id: "",
  amount: "",
  owner: "",
};

export const MsgBurnToken = {
  encode(message: MsgBurnToken, writer: Writer = Writer.create()): Writer {
    if (message.issuer_did !== "") {
      writer.uint32(10).string(message.issuer_did);
    }
    if (message.license_cred_id !== "") {
      writer.uint32(18).string(message.license_cred_id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnToken } as MsgBurnToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer_did = reader.string();
          break;
        case 2:
          message.license_cred_id = reader.string();
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
    const message = { ...baseMsgBurnToken } as MsgBurnToken;
    if (object.issuer_did !== undefined && object.issuer_did !== null) {
      message.issuer_did = String(object.issuer_did);
    } else {
      message.issuer_did = "";
    }
    if (
      object.license_cred_id !== undefined &&
      object.license_cred_id !== null
    ) {
      message.license_cred_id = String(object.license_cred_id);
    } else {
      message.license_cred_id = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgBurnToken): unknown {
    const obj: any = {};
    message.issuer_did !== undefined && (obj.issuer_did = message.issuer_did);
    message.license_cred_id !== undefined &&
      (obj.license_cred_id = message.license_cred_id);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnToken>): MsgBurnToken {
    const message = { ...baseMsgBurnToken } as MsgBurnToken;
    if (object.issuer_did !== undefined && object.issuer_did !== null) {
      message.issuer_did = object.issuer_did;
    } else {
      message.issuer_did = "";
    }
    if (
      object.license_cred_id !== undefined &&
      object.license_cred_id !== null
    ) {
      message.license_cred_id = object.license_cred_id;
    } else {
      message.license_cred_id = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgBurnTokenResponse: object = {};

export const MsgBurnTokenResponse = {
  encode(_: MsgBurnTokenResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnTokenResponse } as MsgBurnTokenResponse;
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
    const message = { ...baseMsgBurnTokenResponse } as MsgBurnTokenResponse;
    return message;
  },

  toJSON(_: MsgBurnTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBurnTokenResponse>): MsgBurnTokenResponse {
    const message = { ...baseMsgBurnTokenResponse } as MsgBurnTokenResponse;
    return message;
  },
};

const baseMsgMintToken: object = {
  issuer_did: "",
  license_cred_id: "",
  amount: "",
  owner: "",
};

export const MsgMintToken = {
  encode(message: MsgMintToken, writer: Writer = Writer.create()): Writer {
    if (message.issuer_did !== "") {
      writer.uint32(10).string(message.issuer_did);
    }
    if (message.license_cred_id !== "") {
      writer.uint32(18).string(message.license_cred_id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintToken } as MsgMintToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer_did = reader.string();
          break;
        case 2:
          message.license_cred_id = reader.string();
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
    const message = { ...baseMsgMintToken } as MsgMintToken;
    if (object.issuer_did !== undefined && object.issuer_did !== null) {
      message.issuer_did = String(object.issuer_did);
    } else {
      message.issuer_did = "";
    }
    if (
      object.license_cred_id !== undefined &&
      object.license_cred_id !== null
    ) {
      message.license_cred_id = String(object.license_cred_id);
    } else {
      message.license_cred_id = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgMintToken): unknown {
    const obj: any = {};
    message.issuer_did !== undefined && (obj.issuer_did = message.issuer_did);
    message.license_cred_id !== undefined &&
      (obj.license_cred_id = message.license_cred_id);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintToken>): MsgMintToken {
    const message = { ...baseMsgMintToken } as MsgMintToken;
    if (object.issuer_did !== undefined && object.issuer_did !== null) {
      message.issuer_did = object.issuer_did;
    } else {
      message.issuer_did = "";
    }
    if (
      object.license_cred_id !== undefined &&
      object.license_cred_id !== null
    ) {
      message.license_cred_id = object.license_cred_id;
    } else {
      message.license_cred_id = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgMintTokenResponse: object = {};

export const MsgMintTokenResponse = {
  encode(_: MsgMintTokenResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintTokenResponse } as MsgMintTokenResponse;
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
    const message = { ...baseMsgMintTokenResponse } as MsgMintTokenResponse;
    return message;
  },

  toJSON(_: MsgMintTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMintTokenResponse>): MsgMintTokenResponse {
    const message = { ...baseMsgMintTokenResponse } as MsgMintTokenResponse;
    return message;
  },
};

const baseMsgPauseToken: object = {
  issuer_did: "",
  license_cred_id: "",
  owner: "",
};

export const MsgPauseToken = {
  encode(message: MsgPauseToken, writer: Writer = Writer.create()): Writer {
    if (message.issuer_did !== "") {
      writer.uint32(10).string(message.issuer_did);
    }
    if (message.license_cred_id !== "") {
      writer.uint32(18).string(message.license_cred_id);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPauseToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPauseToken } as MsgPauseToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer_did = reader.string();
          break;
        case 2:
          message.license_cred_id = reader.string();
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
    const message = { ...baseMsgPauseToken } as MsgPauseToken;
    if (object.issuer_did !== undefined && object.issuer_did !== null) {
      message.issuer_did = String(object.issuer_did);
    } else {
      message.issuer_did = "";
    }
    if (
      object.license_cred_id !== undefined &&
      object.license_cred_id !== null
    ) {
      message.license_cred_id = String(object.license_cred_id);
    } else {
      message.license_cred_id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgPauseToken): unknown {
    const obj: any = {};
    message.issuer_did !== undefined && (obj.issuer_did = message.issuer_did);
    message.license_cred_id !== undefined &&
      (obj.license_cred_id = message.license_cred_id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPauseToken>): MsgPauseToken {
    const message = { ...baseMsgPauseToken } as MsgPauseToken;
    if (object.issuer_did !== undefined && object.issuer_did !== null) {
      message.issuer_did = object.issuer_did;
    } else {
      message.issuer_did = "";
    }
    if (
      object.license_cred_id !== undefined &&
      object.license_cred_id !== null
    ) {
      message.license_cred_id = object.license_cred_id;
    } else {
      message.license_cred_id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgPauseTokenResponse: object = {};

export const MsgPauseTokenResponse = {
  encode(_: MsgPauseTokenResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPauseTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPauseTokenResponse } as MsgPauseTokenResponse;
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
    const message = { ...baseMsgPauseTokenResponse } as MsgPauseTokenResponse;
    return message;
  },

  toJSON(_: MsgPauseTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPauseTokenResponse>): MsgPauseTokenResponse {
    const message = { ...baseMsgPauseTokenResponse } as MsgPauseTokenResponse;
    return message;
  },
};

const baseMsgIssueUserCredential: object = { owner: "" };

export const MsgIssueUserCredential = {
  encode(
    message: MsgIssueUserCredential,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.credential !== undefined) {
      VerifiableCredential.encode(
        message.credential,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgIssueUserCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIssueUserCredential } as MsgIssueUserCredential;
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
    const message = { ...baseMsgIssueUserCredential } as MsgIssueUserCredential;
    if (object.credential !== undefined && object.credential !== null) {
      message.credential = VerifiableCredential.fromJSON(object.credential);
    } else {
      message.credential = undefined;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
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

  fromPartial(
    object: DeepPartial<MsgIssueUserCredential>
  ): MsgIssueUserCredential {
    const message = { ...baseMsgIssueUserCredential } as MsgIssueUserCredential;
    if (object.credential !== undefined && object.credential !== null) {
      message.credential = VerifiableCredential.fromPartial(object.credential);
    } else {
      message.credential = undefined;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgIssueUserCredentialResponse: object = {};

export const MsgIssueUserCredentialResponse = {
  encode(
    _: MsgIssueUserCredentialResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgIssueUserCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIssueUserCredentialResponse,
    } as MsgIssueUserCredentialResponse;
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
    const message = {
      ...baseMsgIssueUserCredentialResponse,
    } as MsgIssueUserCredentialResponse;
    return message;
  },

  toJSON(_: MsgIssueUserCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgIssueUserCredentialResponse>
  ): MsgIssueUserCredentialResponse {
    const message = {
      ...baseMsgIssueUserCredentialResponse,
    } as MsgIssueUserCredentialResponse;
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
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse> {
    const data = MsgCreateIssuer.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.issuer.Msg",
      "CreateIssuer",
      data
    );
    return promise.then((data) =>
      MsgCreateIssuerResponse.decode(new Reader(data))
    );
  }

  BurnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse> {
    const data = MsgBurnToken.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.issuer.Msg",
      "BurnToken",
      data
    );
    return promise.then((data) =>
      MsgBurnTokenResponse.decode(new Reader(data))
    );
  }

  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse> {
    const data = MsgMintToken.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.issuer.Msg",
      "MintToken",
      data
    );
    return promise.then((data) =>
      MsgMintTokenResponse.decode(new Reader(data))
    );
  }

  PauseToken(request: MsgPauseToken): Promise<MsgPauseTokenResponse> {
    const data = MsgPauseToken.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.issuer.Msg",
      "PauseToken",
      data
    );
    return promise.then((data) =>
      MsgPauseTokenResponse.decode(new Reader(data))
    );
  }

  IssueUserCredential(
    request: MsgIssueUserCredential
  ): Promise<MsgIssueUserCredentialResponse> {
    const data = MsgIssueUserCredential.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.issuer.Msg",
      "IssueUserCredential",
      data
    );
    return promise.then((data) =>
      MsgIssueUserCredentialResponse.decode(new Reader(data))
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
