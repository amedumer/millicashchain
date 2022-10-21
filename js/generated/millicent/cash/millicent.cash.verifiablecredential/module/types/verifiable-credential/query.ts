/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { VerifiableCredential } from "../verifiable-credential/verifiable-credential";

export const protobufPackage = "millicent.cash.verifiablecredential";

/** QueryVerifiableCredentialsRequest is request type for Query/VerifiableCredentials RPC method. */
export interface QueryVerifiableCredentialsRequest {
  /** status enables to query for credentials matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryVerifiableCredentialsResponse is response type for the Query/Identifers RPC method */
export interface QueryVerifiableCredentialsResponse {
  /** validators contains all the queried validators. */
  vcs: VerifiableCredential[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryVerifiableCredentialRequest is response type for the Query/VerifiableCredential RPC method */
export interface QueryVerifiableCredentialRequest {
  /** verifiable_credential_id defines the credential id to query for. */
  verifiable_credential_id: string;
}

/** QueryVerifiableCredentialResponse is response type for the Query/VerifiableCredential RPC method */
export interface QueryVerifiableCredentialResponse {
  /** verifiable_credential defines the the credential info. */
  verifiable_credential: VerifiableCredential | undefined;
}

/** QueryVerifiableCredentialResponse is response type for the Query/VerifiableCredential RPC method */
export interface QueryValidateVerifiableCredentialResponse {
  /** is_valid defines if the credential is signed by the correct public key. */
  is_valid: boolean;
}

const baseQueryVerifiableCredentialsRequest: object = { status: "" };

export const QueryVerifiableCredentialsRequest = {
  encode(
    message: QueryVerifiableCredentialsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVerifiableCredentialsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVerifiableCredentialsRequest,
    } as QueryVerifiableCredentialsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVerifiableCredentialsRequest {
    const message = {
      ...baseQueryVerifiableCredentialsRequest,
    } as QueryVerifiableCredentialsRequest;
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVerifiableCredentialsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVerifiableCredentialsRequest>
  ): QueryVerifiableCredentialsRequest {
    const message = {
      ...baseQueryVerifiableCredentialsRequest,
    } as QueryVerifiableCredentialsRequest;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVerifiableCredentialsResponse: object = {};

export const QueryVerifiableCredentialsResponse = {
  encode(
    message: QueryVerifiableCredentialsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.vcs) {
      VerifiableCredential.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVerifiableCredentialsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVerifiableCredentialsResponse,
    } as QueryVerifiableCredentialsResponse;
    message.vcs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vcs.push(
            VerifiableCredential.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVerifiableCredentialsResponse {
    const message = {
      ...baseQueryVerifiableCredentialsResponse,
    } as QueryVerifiableCredentialsResponse;
    message.vcs = [];
    if (object.vcs !== undefined && object.vcs !== null) {
      for (const e of object.vcs) {
        message.vcs.push(VerifiableCredential.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVerifiableCredentialsResponse): unknown {
    const obj: any = {};
    if (message.vcs) {
      obj.vcs = message.vcs.map((e) =>
        e ? VerifiableCredential.toJSON(e) : undefined
      );
    } else {
      obj.vcs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVerifiableCredentialsResponse>
  ): QueryVerifiableCredentialsResponse {
    const message = {
      ...baseQueryVerifiableCredentialsResponse,
    } as QueryVerifiableCredentialsResponse;
    message.vcs = [];
    if (object.vcs !== undefined && object.vcs !== null) {
      for (const e of object.vcs) {
        message.vcs.push(VerifiableCredential.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVerifiableCredentialRequest: object = {
  verifiable_credential_id: "",
};

export const QueryVerifiableCredentialRequest = {
  encode(
    message: QueryVerifiableCredentialRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verifiable_credential_id !== "") {
      writer.uint32(10).string(message.verifiable_credential_id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVerifiableCredentialRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVerifiableCredentialRequest,
    } as QueryVerifiableCredentialRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verifiable_credential_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVerifiableCredentialRequest {
    const message = {
      ...baseQueryVerifiableCredentialRequest,
    } as QueryVerifiableCredentialRequest;
    if (
      object.verifiable_credential_id !== undefined &&
      object.verifiable_credential_id !== null
    ) {
      message.verifiable_credential_id = String(
        object.verifiable_credential_id
      );
    } else {
      message.verifiable_credential_id = "";
    }
    return message;
  },

  toJSON(message: QueryVerifiableCredentialRequest): unknown {
    const obj: any = {};
    message.verifiable_credential_id !== undefined &&
      (obj.verifiable_credential_id = message.verifiable_credential_id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVerifiableCredentialRequest>
  ): QueryVerifiableCredentialRequest {
    const message = {
      ...baseQueryVerifiableCredentialRequest,
    } as QueryVerifiableCredentialRequest;
    if (
      object.verifiable_credential_id !== undefined &&
      object.verifiable_credential_id !== null
    ) {
      message.verifiable_credential_id = object.verifiable_credential_id;
    } else {
      message.verifiable_credential_id = "";
    }
    return message;
  },
};

const baseQueryVerifiableCredentialResponse: object = {};

export const QueryVerifiableCredentialResponse = {
  encode(
    message: QueryVerifiableCredentialResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verifiable_credential !== undefined) {
      VerifiableCredential.encode(
        message.verifiable_credential,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVerifiableCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVerifiableCredentialResponse,
    } as QueryVerifiableCredentialResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verifiable_credential = VerifiableCredential.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVerifiableCredentialResponse {
    const message = {
      ...baseQueryVerifiableCredentialResponse,
    } as QueryVerifiableCredentialResponse;
    if (
      object.verifiable_credential !== undefined &&
      object.verifiable_credential !== null
    ) {
      message.verifiable_credential = VerifiableCredential.fromJSON(
        object.verifiable_credential
      );
    } else {
      message.verifiable_credential = undefined;
    }
    return message;
  },

  toJSON(message: QueryVerifiableCredentialResponse): unknown {
    const obj: any = {};
    message.verifiable_credential !== undefined &&
      (obj.verifiable_credential = message.verifiable_credential
        ? VerifiableCredential.toJSON(message.verifiable_credential)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVerifiableCredentialResponse>
  ): QueryVerifiableCredentialResponse {
    const message = {
      ...baseQueryVerifiableCredentialResponse,
    } as QueryVerifiableCredentialResponse;
    if (
      object.verifiable_credential !== undefined &&
      object.verifiable_credential !== null
    ) {
      message.verifiable_credential = VerifiableCredential.fromPartial(
        object.verifiable_credential
      );
    } else {
      message.verifiable_credential = undefined;
    }
    return message;
  },
};

const baseQueryValidateVerifiableCredentialResponse: object = {
  is_valid: false,
};

export const QueryValidateVerifiableCredentialResponse = {
  encode(
    message: QueryValidateVerifiableCredentialResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.is_valid === true) {
      writer.uint32(8).bool(message.is_valid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryValidateVerifiableCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryValidateVerifiableCredentialResponse,
    } as QueryValidateVerifiableCredentialResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.is_valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidateVerifiableCredentialResponse {
    const message = {
      ...baseQueryValidateVerifiableCredentialResponse,
    } as QueryValidateVerifiableCredentialResponse;
    if (object.is_valid !== undefined && object.is_valid !== null) {
      message.is_valid = Boolean(object.is_valid);
    } else {
      message.is_valid = false;
    }
    return message;
  },

  toJSON(message: QueryValidateVerifiableCredentialResponse): unknown {
    const obj: any = {};
    message.is_valid !== undefined && (obj.is_valid = message.is_valid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryValidateVerifiableCredentialResponse>
  ): QueryValidateVerifiableCredentialResponse {
    const message = {
      ...baseQueryValidateVerifiableCredentialResponse,
    } as QueryValidateVerifiableCredentialResponse;
    if (object.is_valid !== undefined && object.is_valid !== null) {
      message.is_valid = object.is_valid;
    } else {
      message.is_valid = false;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Identifers queries all validators that match the given status. */
  VerifiableCredentials(
    request: QueryVerifiableCredentialsRequest
  ): Promise<QueryVerifiableCredentialsResponse>;
  /** VerifiableCredential queries validator info for given validator address. */
  VerifiableCredential(
    request: QueryVerifiableCredentialRequest
  ): Promise<QueryVerifiableCredentialResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  VerifiableCredentials(
    request: QueryVerifiableCredentialsRequest
  ): Promise<QueryVerifiableCredentialsResponse> {
    const data = QueryVerifiableCredentialsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.verifiablecredential.Query",
      "VerifiableCredentials",
      data
    );
    return promise.then((data) =>
      QueryVerifiableCredentialsResponse.decode(new Reader(data))
    );
  }

  VerifiableCredential(
    request: QueryVerifiableCredentialRequest
  ): Promise<QueryVerifiableCredentialResponse> {
    const data = QueryVerifiableCredentialRequest.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.verifiablecredential.Query",
      "VerifiableCredential",
      data
    );
    return promise.then((data) =>
      QueryVerifiableCredentialResponse.decode(new Reader(data))
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
