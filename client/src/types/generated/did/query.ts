/* eslint-disable */
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { DidDocument, DidMetadata } from "./did";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "millicent.cash.did";

/** QueryDidDocumentsRequest is request type for Query/DidDocuments RPC method. */
export interface QueryDidDocumentsRequest {
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryDidDocumentsResponse is response type for the Query/DidDocuments RPC method */
export interface QueryDidDocumentsResponse {
  /** validators contains all the queried validators. */
  didDocuments: DidDocument[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryDidDocumentsRequest is request type for Query/DidDocuments RPC method. */
export interface QueryDidDocumentRequest {
  /** status enables to query for validators matching a given status. */
  id: string;
}

/** QueryDidDocumentsResponse is response type for the Query/DidDocuments RPC method */
export interface QueryDidDocumentResponse {
  /** validators contains all the queried validators. */
  didDocument?: DidDocument;
  didMetadata?: DidMetadata;
}

function createBaseQueryDidDocumentsRequest(): QueryDidDocumentsRequest {
  return { status: "", pagination: undefined };
}

export const QueryDidDocumentsRequest = {
  encode(
    message: QueryDidDocumentsRequest,
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
  ): QueryDidDocumentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocumentsRequest();
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

  fromJSON(object: any): QueryDidDocumentsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDidDocumentsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidDocumentsRequest>, I>>(
    object: I
  ): QueryDidDocumentsRequest {
    const message = createBaseQueryDidDocumentsRequest();
    message.status = object.status ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDidDocumentsResponse(): QueryDidDocumentsResponse {
  return { didDocuments: [], pagination: undefined };
}

export const QueryDidDocumentsResponse = {
  encode(
    message: QueryDidDocumentsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.didDocuments) {
      DidDocument.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryDidDocumentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocumentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didDocuments.push(
            DidDocument.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryDidDocumentsResponse {
    return {
      didDocuments: Array.isArray(object?.didDocuments)
        ? object.didDocuments.map((e: any) => DidDocument.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDidDocumentsResponse): unknown {
    const obj: any = {};
    if (message.didDocuments) {
      obj.didDocuments = message.didDocuments.map((e) =>
        e ? DidDocument.toJSON(e) : undefined
      );
    } else {
      obj.didDocuments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidDocumentsResponse>, I>>(
    object: I
  ): QueryDidDocumentsResponse {
    const message = createBaseQueryDidDocumentsResponse();
    message.didDocuments =
      object.didDocuments?.map((e) => DidDocument.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDidDocumentRequest(): QueryDidDocumentRequest {
  return { id: "" };
}

export const QueryDidDocumentRequest = {
  encode(
    message: QueryDidDocumentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDidDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocumentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidDocumentRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryDidDocumentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidDocumentRequest>, I>>(
    object: I
  ): QueryDidDocumentRequest {
    const message = createBaseQueryDidDocumentRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryDidDocumentResponse(): QueryDidDocumentResponse {
  return { didDocument: undefined, didMetadata: undefined };
}

export const QueryDidDocumentResponse = {
  encode(
    message: QueryDidDocumentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.didDocument !== undefined) {
      DidDocument.encode(
        message.didDocument,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.didMetadata !== undefined) {
      DidMetadata.encode(
        message.didMetadata,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDidDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocumentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didDocument = DidDocument.decode(reader, reader.uint32());
          break;
        case 2:
          message.didMetadata = DidMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidDocumentResponse {
    return {
      didDocument: isSet(object.didDocument)
        ? DidDocument.fromJSON(object.didDocument)
        : undefined,
      didMetadata: isSet(object.didMetadata)
        ? DidMetadata.fromJSON(object.didMetadata)
        : undefined,
    };
  },

  toJSON(message: QueryDidDocumentResponse): unknown {
    const obj: any = {};
    message.didDocument !== undefined &&
      (obj.didDocument = message.didDocument
        ? DidDocument.toJSON(message.didDocument)
        : undefined);
    message.didMetadata !== undefined &&
      (obj.didMetadata = message.didMetadata
        ? DidMetadata.toJSON(message.didMetadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidDocumentResponse>, I>>(
    object: I
  ): QueryDidDocumentResponse {
    const message = createBaseQueryDidDocumentResponse();
    message.didDocument =
      object.didDocument !== undefined && object.didDocument !== null
        ? DidDocument.fromPartial(object.didDocument)
        : undefined;
    message.didMetadata =
      object.didMetadata !== undefined && object.didMetadata !== null
        ? DidMetadata.fromPartial(object.didMetadata)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** DidDocuments queries all did documents that match the given status. */
  DidDocuments(
    request: QueryDidDocumentsRequest
  ): Promise<QueryDidDocumentsResponse>;
  /** DidDocument queries a did documents with an id. */
  DidDocument(
    request: QueryDidDocumentRequest
  ): Promise<QueryDidDocumentResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DidDocuments = this.DidDocuments.bind(this);
    this.DidDocument = this.DidDocument.bind(this);
  }
  DidDocuments(
    request: QueryDidDocumentsRequest
  ): Promise<QueryDidDocumentsResponse> {
    const data = QueryDidDocumentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.did.Query",
      "DidDocuments",
      data
    );
    return promise.then((data) =>
      QueryDidDocumentsResponse.decode(new _m0.Reader(data))
    );
  }

  DidDocument(
    request: QueryDidDocumentRequest
  ): Promise<QueryDidDocumentResponse> {
    const data = QueryDidDocumentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "millicent.cash.did.Query",
      "DidDocument",
      data
    );
    return promise.then((data) =>
      QueryDidDocumentResponse.decode(new _m0.Reader(data))
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
