/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { VerifiableCredential } from "../verifiable-credential/verifiable-credential";

export const protobufPackage = "millicent.cash.regulator";

/** MsgIssueRegulatorCredential is used to activate a regulator on chain */
export interface MsgIssueRegulatorCredential {
  credential: VerifiableCredential | undefined;
  owner: string;
}

/**
 * MsgActivateResponse contains the reponse for a successful activation
 * of a regulator on chain
 */
export interface MsgIssueRegulatorCredentialResponse {}

export interface MsgIssueRegistrationCredential {
  credential: VerifiableCredential | undefined;
  owner: string;
}

/** MsgIssueRegistrationCredentialResponse reply for the IssueRegistartion call */
export interface MsgIssueRegistrationCredentialResponse {}

/** MsgIssueLicenseCredential message contains data for license credential */
export interface MsgIssueLicenseCredential {
  credential: VerifiableCredential | undefined;
  owner: string;
}

/** MsgIssueLicenseCredentialResponse reply for the issue license call */
export interface MsgIssueLicenseCredentialResponse {}

const baseMsgIssueRegulatorCredential: object = { owner: "" };

export const MsgIssueRegulatorCredential = {
  encode(
    message: MsgIssueRegulatorCredential,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgIssueRegulatorCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIssueRegulatorCredential,
    } as MsgIssueRegulatorCredential;
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
    const message = {
      ...baseMsgIssueRegulatorCredential,
    } as MsgIssueRegulatorCredential;
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

  toJSON(message: MsgIssueRegulatorCredential): unknown {
    const obj: any = {};
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? VerifiableCredential.toJSON(message.credential)
        : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgIssueRegulatorCredential>
  ): MsgIssueRegulatorCredential {
    const message = {
      ...baseMsgIssueRegulatorCredential,
    } as MsgIssueRegulatorCredential;
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

const baseMsgIssueRegulatorCredentialResponse: object = {};

export const MsgIssueRegulatorCredentialResponse = {
  encode(
    _: MsgIssueRegulatorCredentialResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgIssueRegulatorCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIssueRegulatorCredentialResponse,
    } as MsgIssueRegulatorCredentialResponse;
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
    const message = {
      ...baseMsgIssueRegulatorCredentialResponse,
    } as MsgIssueRegulatorCredentialResponse;
    return message;
  },

  toJSON(_: MsgIssueRegulatorCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgIssueRegulatorCredentialResponse>
  ): MsgIssueRegulatorCredentialResponse {
    const message = {
      ...baseMsgIssueRegulatorCredentialResponse,
    } as MsgIssueRegulatorCredentialResponse;
    return message;
  },
};

const baseMsgIssueRegistrationCredential: object = { owner: "" };

export const MsgIssueRegistrationCredential = {
  encode(
    message: MsgIssueRegistrationCredential,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgIssueRegistrationCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIssueRegistrationCredential,
    } as MsgIssueRegistrationCredential;
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
    const message = {
      ...baseMsgIssueRegistrationCredential,
    } as MsgIssueRegistrationCredential;
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

  toJSON(message: MsgIssueRegistrationCredential): unknown {
    const obj: any = {};
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? VerifiableCredential.toJSON(message.credential)
        : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgIssueRegistrationCredential>
  ): MsgIssueRegistrationCredential {
    const message = {
      ...baseMsgIssueRegistrationCredential,
    } as MsgIssueRegistrationCredential;
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

const baseMsgIssueRegistrationCredentialResponse: object = {};

export const MsgIssueRegistrationCredentialResponse = {
  encode(
    _: MsgIssueRegistrationCredentialResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgIssueRegistrationCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIssueRegistrationCredentialResponse,
    } as MsgIssueRegistrationCredentialResponse;
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
    const message = {
      ...baseMsgIssueRegistrationCredentialResponse,
    } as MsgIssueRegistrationCredentialResponse;
    return message;
  },

  toJSON(_: MsgIssueRegistrationCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgIssueRegistrationCredentialResponse>
  ): MsgIssueRegistrationCredentialResponse {
    const message = {
      ...baseMsgIssueRegistrationCredentialResponse,
    } as MsgIssueRegistrationCredentialResponse;
    return message;
  },
};

const baseMsgIssueLicenseCredential: object = { owner: "" };

export const MsgIssueLicenseCredential = {
  encode(
    message: MsgIssueLicenseCredential,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgIssueLicenseCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIssueLicenseCredential,
    } as MsgIssueLicenseCredential;
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
    const message = {
      ...baseMsgIssueLicenseCredential,
    } as MsgIssueLicenseCredential;
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

  toJSON(message: MsgIssueLicenseCredential): unknown {
    const obj: any = {};
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? VerifiableCredential.toJSON(message.credential)
        : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgIssueLicenseCredential>
  ): MsgIssueLicenseCredential {
    const message = {
      ...baseMsgIssueLicenseCredential,
    } as MsgIssueLicenseCredential;
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

const baseMsgIssueLicenseCredentialResponse: object = {};

export const MsgIssueLicenseCredentialResponse = {
  encode(
    _: MsgIssueLicenseCredentialResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgIssueLicenseCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIssueLicenseCredentialResponse,
    } as MsgIssueLicenseCredentialResponse;
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
    const message = {
      ...baseMsgIssueLicenseCredentialResponse,
    } as MsgIssueLicenseCredentialResponse;
    return message;
  },

  toJSON(_: MsgIssueLicenseCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgIssueLicenseCredentialResponse>
  ): MsgIssueLicenseCredentialResponse {
    const message = {
      ...baseMsgIssueLicenseCredentialResponse,
    } as MsgIssueLicenseCredentialResponse;
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
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  IssueRegulatorCredential(
    request: MsgIssueRegulatorCredential
  ): Promise<MsgIssueRegulatorCredentialResponse> {
    const data = MsgIssueRegulatorCredential.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.regulator.Msg",
      "IssueRegulatorCredential",
      data
    );
    return promise.then((data) =>
      MsgIssueRegulatorCredentialResponse.decode(new Reader(data))
    );
  }

  IssueRegistrationCredential(
    request: MsgIssueRegistrationCredential
  ): Promise<MsgIssueRegistrationCredentialResponse> {
    const data = MsgIssueRegistrationCredential.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.regulator.Msg",
      "IssueRegistrationCredential",
      data
    );
    return promise.then((data) =>
      MsgIssueRegistrationCredentialResponse.decode(new Reader(data))
    );
  }

  IssueLicenseCredential(
    request: MsgIssueLicenseCredential
  ): Promise<MsgIssueLicenseCredentialResponse> {
    const data = MsgIssueLicenseCredential.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.regulator.Msg",
      "IssueLicenseCredential",
      data
    );
    return promise.then((data) =>
      MsgIssueLicenseCredentialResponse.decode(new Reader(data))
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
