/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { VerifiableCredential } from "../verifiable-credential/verifiable-credential";

export const protobufPackage = "millicent.cash.verifiablecredential";

/** MsgRevokeCredential */
export interface MsgRevokeCredential {
  credential_id: string;
  owner: string;
}

/** MsgRevokeCredentialResponse */
export interface MsgRevokeCredentialResponse {}

/**
 * MsgIssueCredential is used to issue new registration credential
 * this message is used by other modules
 */
export interface MsgIssueCredential {
  credential: VerifiableCredential | undefined;
  owner: string;
}

/** MsgIssueCredentialResponse reply for the issue credential call */
export interface MsgIssueCredentialResponse {}

const baseMsgRevokeCredential: object = { credential_id: "", owner: "" };

export const MsgRevokeCredential = {
  encode(
    message: MsgRevokeCredential,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.credential_id !== "") {
      writer.uint32(10).string(message.credential_id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRevokeCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRevokeCredential } as MsgRevokeCredential;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credential_id = reader.string();
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
    const message = { ...baseMsgRevokeCredential } as MsgRevokeCredential;
    if (object.credential_id !== undefined && object.credential_id !== null) {
      message.credential_id = String(object.credential_id);
    } else {
      message.credential_id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgRevokeCredential): unknown {
    const obj: any = {};
    message.credential_id !== undefined &&
      (obj.credential_id = message.credential_id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRevokeCredential>): MsgRevokeCredential {
    const message = { ...baseMsgRevokeCredential } as MsgRevokeCredential;
    if (object.credential_id !== undefined && object.credential_id !== null) {
      message.credential_id = object.credential_id;
    } else {
      message.credential_id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgRevokeCredentialResponse: object = {};

export const MsgRevokeCredentialResponse = {
  encode(
    _: MsgRevokeCredentialResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRevokeCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRevokeCredentialResponse,
    } as MsgRevokeCredentialResponse;
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
    const message = {
      ...baseMsgRevokeCredentialResponse,
    } as MsgRevokeCredentialResponse;
    return message;
  },

  toJSON(_: MsgRevokeCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRevokeCredentialResponse>
  ): MsgRevokeCredentialResponse {
    const message = {
      ...baseMsgRevokeCredentialResponse,
    } as MsgRevokeCredentialResponse;
    return message;
  },
};

const baseMsgIssueCredential: object = { owner: "" };

export const MsgIssueCredential = {
  encode(
    message: MsgIssueCredential,
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

  decode(input: Reader | Uint8Array, length?: number): MsgIssueCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIssueCredential } as MsgIssueCredential;
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
    const message = { ...baseMsgIssueCredential } as MsgIssueCredential;
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

  toJSON(message: MsgIssueCredential): unknown {
    const obj: any = {};
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? VerifiableCredential.toJSON(message.credential)
        : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIssueCredential>): MsgIssueCredential {
    const message = { ...baseMsgIssueCredential } as MsgIssueCredential;
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

const baseMsgIssueCredentialResponse: object = {};

export const MsgIssueCredentialResponse = {
  encode(
    _: MsgIssueCredentialResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgIssueCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIssueCredentialResponse,
    } as MsgIssueCredentialResponse;
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
    const message = {
      ...baseMsgIssueCredentialResponse,
    } as MsgIssueCredentialResponse;
    return message;
  },

  toJSON(_: MsgIssueCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgIssueCredentialResponse>
  ): MsgIssueCredentialResponse {
    const message = {
      ...baseMsgIssueCredentialResponse,
    } as MsgIssueCredentialResponse;
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
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RevokeCredential(
    request: MsgRevokeCredential
  ): Promise<MsgRevokeCredentialResponse> {
    const data = MsgRevokeCredential.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.verifiablecredential.Msg",
      "RevokeCredential",
      data
    );
    return promise.then((data) =>
      MsgRevokeCredentialResponse.decode(new Reader(data))
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
