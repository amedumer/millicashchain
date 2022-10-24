/* eslint-disable */
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { VerifiableCredential } from "./verifiable-credential";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "millicent.cash.verifiablecredential";

/** QueryVerifiableCredentialsRequest is request type for Query/VerifiableCredentials RPC method. */
export interface QueryVerifiableCredentialsRequest {
  /** status enables to query for credentials matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryVerifiableCredentialsResponse is response type for the Query/Identifers RPC method */
export interface QueryVerifiableCredentialsResponse {
  /** validators contains all the queried validators. */
  vcs: VerifiableCredential[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryVerifiableCredentialRequest is response type for the Query/VerifiableCredential RPC method */
export interface QueryVerifiableCredentialRequest {
  /** verifiable_credential_id defines the credential id to query for. */
  verifiableCredentialId: string;
}

/** QueryVerifiableCredentialResponse is response type for the Query/VerifiableCredential RPC method */
export interface QueryVerifiableCredentialResponse {
  /** verifiable_credential defines the the credential info. */
  verifiableCredential?: VerifiableCredential;
}

/** QueryVerifiableCredentialResponse is response type for the Query/VerifiableCredential RPC method */
export interface QueryValidateVerifiableCredentialResponse {
  /** is_valid defines if the credential is signed by the correct public key. */
  isValid: boolean;
}

function createBaseQueryVerifiableCredentialsRequest(): QueryVerifiableCredentialsRequest {
  return { status: "", pagination: undefined };
}

export const QueryVerifiableCredentialsRequest = {
  encode(
    message: QueryVerifiableCredentialsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVerifiableCredentialsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifiableCredentialsRequest();
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
    return {
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
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

  fromPartial<
    I extends Exact<DeepPartial<QueryVerifiableCredentialsRequest>, I>
  >(object: I): QueryVerifiableCredentialsRequest {
    const message = createBaseQueryVerifiableCredentialsRequest();
    message.status = object.status ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVerifiableCredentialsResponse(): QueryVerifiableCredentialsResponse {
  return { vcs: [], pagination: undefined };
}

export const QueryVerifiableCredentialsResponse = {
  encode(
    message: QueryVerifiableCredentialsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVerifiableCredentialsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifiableCredentialsResponse();
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
    return {
      vcs: Array.isArray(object?.vcs)
        ? object.vcs.map((e: any) => VerifiableCredential.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
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

  fromPartial<
    I extends Exact<DeepPartial<QueryVerifiableCredentialsResponse>, I>
  >(object: I): QueryVerifiableCredentialsResponse {
    const message = createBaseQueryVerifiableCredentialsResponse();
    message.vcs =
      object.vcs?.map((e) => VerifiableCredential.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryVerifiableCredentialRequest(): QueryVerifiableCredentialRequest {
  return { verifiableCredentialId: "" };
}

export const QueryVerifiableCredentialRequest = {
  encode(
    message: QueryVerifiableCredentialRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.verifiableCredentialId !== "") {
      writer.uint32(10).string(message.verifiableCredentialId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVerifiableCredentialRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifiableCredentialRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verifiableCredentialId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVerifiableCredentialRequest {
    return {
      verifiableCredentialId: isSet(object.verifiableCredentialId)
        ? String(object.verifiableCredentialId)
        : "",
    };
  },

  toJSON(message: QueryVerifiableCredentialRequest): unknown {
    const obj: any = {};
    message.verifiableCredentialId !== undefined &&
      (obj.verifiableCredentialId = message.verifiableCredentialId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVerifiableCredentialRequest>, I>
  >(object: I): QueryVerifiableCredentialRequest {
    const message = createBaseQueryVerifiableCredentialRequest();
    message.verifiableCredentialId = object.verifiableCredentialId ?? "";
    return message;
  },
};

function createBaseQueryVerifiableCredentialResponse(): QueryVerifiableCredentialResponse {
  return { verifiableCredential: undefined };
}

export const QueryVerifiableCredentialResponse = {
  encode(
    message: QueryVerifiableCredentialResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.verifiableCredential !== undefined) {
      VerifiableCredential.encode(
        message.verifiableCredential,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVerifiableCredentialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifiableCredentialResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verifiableCredential = VerifiableCredential.decode(
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
    return {
      verifiableCredential: isSet(object.verifiableCredential)
        ? VerifiableCredential.fromJSON(object.verifiableCredential)
        : undefined,
    };
  },

  toJSON(message: QueryVerifiableCredentialResponse): unknown {
    const obj: any = {};
    message.verifiableCredential !== undefined &&
      (obj.verifiableCredential = message.verifiableCredential
        ? VerifiableCredential.toJSON(message.verifiableCredential)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryVerifiableCredentialResponse>, I>
  >(object: I): QueryVerifiableCredentialResponse {
    const message = createBaseQueryVerifiableCredentialResponse();
    message.verifiableCredential =
      object.verifiableCredential !== undefined &&
      object.verifiableCredential !== null
        ? VerifiableCredential.fromPartial(object.verifiableCredential)
        : undefined;
    return message;
  },
};

function createBaseQueryValidateVerifiableCredentialResponse(): QueryValidateVerifiableCredentialResponse {
  return { isValid: false };
}

export const QueryValidateVerifiableCredentialResponse = {
  encode(
    message: QueryValidateVerifiableCredentialResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isValid === true) {
      writer.uint32(8).bool(message.isValid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryValidateVerifiableCredentialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidateVerifiableCredentialResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isValid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidateVerifiableCredentialResponse {
    return {
      isValid: isSet(object.isValid) ? Boolean(object.isValid) : false,
    };
  },

  toJSON(message: QueryValidateVerifiableCredentialResponse): unknown {
    const obj: any = {};
    message.isValid !== undefined && (obj.isValid = message.isValid);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryValidateVerifiableCredentialResponse>, I>
  >(object: I): QueryValidateVerifiableCredentialResponse {
    const message = createBaseQueryValidateVerifiableCredentialResponse();
    message.isValid = object.isValid ?? false;
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
    this.VerifiableCredentials = this.VerifiableCredentials.bind(this);
    this.VerifiableCredential = this.VerifiableCredential.bind(this);
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
      QueryVerifiableCredentialsResponse.decode(new _m0.Reader(data))
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
      QueryVerifiableCredentialResponse.decode(new _m0.Reader(data))
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
