/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DidDocument, Service, VerificationMethod } from './did';

export const protobufPackage = 'millicent.cash.did';

/**
 * Verification is a message that allows to assign a verification method
 * to one or more verification relationships
 */
export interface Verification {
  /**
   * verificationRelationships defines which relationships
   * are allowed to use the verification method
   */
  relationships: string[];
  /** public key associated with the did document. */
  method?: VerificationMethod;
  /** additional contexts (json ld schemas) */
  context: string[];
}

/** MsgCreateDidDocument defines a SDK message for creating a new did. */
export interface MsgCreateDidDocument {
  /** the did */
  id: string;
  /** the list of controller DIDs */
  controllers: string[];
  /** the list of verification methods and relationships */
  verifications: Verification[];
  /** the list of services */
  services: Service[];
  /** address of the account signing the message */
  signer: string;
}

export interface MsgCreateDidDocumentResponse {}

/** MsgUpdateDidDocument replace an existing did document with a new version */
export interface MsgUpdateDidDocument {
  /** the did document to replace */
  doc?: DidDocument;
  /** address of the account signing the message */
  signer: string;
}

export interface MsgUpdateDidDocumentResponse {}

export interface MsgAddVerification {
  /** the did */
  id: string;
  /** the verification to add */
  verification?: Verification;
  /** address of the account signing the message */
  signer: string;
}

export interface MsgAddVerificationResponse {}

export interface MsgSetVerificationRelationships {
  /** the did */
  id: string;
  /** the verification method id */
  methodId: string;
  /** the list of relationships to set */
  relationships: string[];
  /** address of the account signing the message */
  signer: string;
}

export interface MsgSetVerificationRelationshipsResponse {}

export interface MsgRevokeVerification {
  /** the did */
  id: string;
  /** the verification method id */
  methodId: string;
  /** address of the account signing the message */
  signer: string;
}

export interface MsgRevokeVerificationResponse {}

export interface MsgAddService {
  /** the did */
  id: string;
  /** the service data to add */
  serviceData?: Service;
  /** address of the account signing the message */
  signer: string;
}

export interface MsgAddServiceResponse {}

export interface MsgDeleteService {
  /** the did */
  id: string;
  /** the service id */
  serviceId: string;
  /** address of the account signing the message */
  signer: string;
}

export interface MsgDeleteServiceResponse {}

export interface MsgAddController {
  /** the did of the document */
  id: string;
  /** the did to add as a controller of the did document */
  controllerDid: string;
  /** address of the account signing the message */
  signer: string;
}

export interface MsgAddControllerResponse {}

export interface MsgDeleteController {
  /** the did of the document */
  id: string;
  /** the did to remove from the list of controllers of the did document */
  controllerDid: string;
  /** address of the account signing the message */
  signer: string;
}

export interface MsgDeleteControllerResponse {}

function createBaseVerification(): Verification {
  return { relationships: [], method: undefined, context: [] };
}

export const Verification = {
  encode(
    message: Verification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.relationships) {
      writer.uint32(10).string(v!);
    }
    if (message.method !== undefined) {
      VerificationMethod.encode(
        message.method,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.context) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Verification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relationships.push(reader.string());
          break;
        case 2:
          message.method = VerificationMethod.decode(reader, reader.uint32());
          break;
        case 3:
          message.context.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Verification {
    return {
      relationships: Array.isArray(object?.relationships)
        ? object.relationships.map((e: any) => String(e))
        : [],
      method: isSet(object.method)
        ? VerificationMethod.fromJSON(object.method)
        : undefined,
      context: Array.isArray(object?.context)
        ? object.context.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Verification): unknown {
    const obj: any = {};
    if (message.relationships) {
      obj.relationships = message.relationships.map((e) => e);
    } else {
      obj.relationships = [];
    }
    message.method !== undefined &&
      (obj.method = message.method
        ? VerificationMethod.toJSON(message.method)
        : undefined);
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Verification>, I>>(
    object: I
  ): Verification {
    const message = createBaseVerification();
    message.relationships = object.relationships?.map((e) => e) || [];
    message.method =
      object.method !== undefined && object.method !== null
        ? VerificationMethod.fromPartial(object.method)
        : undefined;
    message.context = object.context?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgCreateDidDocument(): MsgCreateDidDocument {
  return {
    id: '',
    controllers: [],
    verifications: [],
    services: [],
    signer: '',
  };
}

export const MsgCreateDidDocument = {
  encode(
    message: MsgCreateDidDocument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.controllers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.verifications) {
      Verification.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== '') {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateDidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.controllers.push(reader.string());
          break;
        case 3:
          message.verifications.push(
            Verification.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDidDocument {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      controllers: Array.isArray(object?.controllers)
        ? object.controllers.map((e: any) => String(e))
        : [],
      verifications: Array.isArray(object?.verifications)
        ? object.verifications.map((e: any) => Verification.fromJSON(e))
        : [],
      services: Array.isArray(object?.services)
        ? object.services.map((e: any) => Service.fromJSON(e))
        : [],
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgCreateDidDocument): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.controllers) {
      obj.controllers = message.controllers.map((e) => e);
    } else {
      obj.controllers = [];
    }
    if (message.verifications) {
      obj.verifications = message.verifications.map((e) =>
        e ? Verification.toJSON(e) : undefined
      );
    } else {
      obj.verifications = [];
    }
    if (message.services) {
      obj.services = message.services.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.services = [];
    }
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDidDocument>, I>>(
    object: I
  ): MsgCreateDidDocument {
    const message = createBaseMsgCreateDidDocument();
    message.id = object.id ?? '';
    message.controllers = object.controllers?.map((e) => e) || [];
    message.verifications =
      object.verifications?.map((e) => Verification.fromPartial(e)) || [];
    message.services =
      object.services?.map((e) => Service.fromPartial(e)) || [];
    message.signer = object.signer ?? '';
    return message;
  },
};

function createBaseMsgCreateDidDocumentResponse(): MsgCreateDidDocumentResponse {
  return {};
}

export const MsgCreateDidDocumentResponse = {
  encode(
    _: MsgCreateDidDocumentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateDidDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidDocumentResponse();
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

  fromJSON(_: any): MsgCreateDidDocumentResponse {
    return {};
  },

  toJSON(_: MsgCreateDidDocumentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDidDocumentResponse>, I>>(
    _: I
  ): MsgCreateDidDocumentResponse {
    const message = createBaseMsgCreateDidDocumentResponse();
    return message;
  },
};

function createBaseMsgUpdateDidDocument(): MsgUpdateDidDocument {
  return { doc: undefined, signer: '' };
}

export const MsgUpdateDidDocument = {
  encode(
    message: MsgUpdateDidDocument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.doc !== undefined) {
      DidDocument.encode(message.doc, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer !== '') {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateDidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.doc = DidDocument.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDidDocument {
    return {
      doc: isSet(object.doc) ? DidDocument.fromJSON(object.doc) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgUpdateDidDocument): unknown {
    const obj: any = {};
    message.doc !== undefined &&
      (obj.doc = message.doc ? DidDocument.toJSON(message.doc) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidDocument>, I>>(
    object: I
  ): MsgUpdateDidDocument {
    const message = createBaseMsgUpdateDidDocument();
    message.doc =
      object.doc !== undefined && object.doc !== null
        ? DidDocument.fromPartial(object.doc)
        : undefined;
    message.signer = object.signer ?? '';
    return message;
  },
};

function createBaseMsgUpdateDidDocumentResponse(): MsgUpdateDidDocumentResponse {
  return {};
}

export const MsgUpdateDidDocumentResponse = {
  encode(
    _: MsgUpdateDidDocumentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateDidDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidDocumentResponse();
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

  fromJSON(_: any): MsgUpdateDidDocumentResponse {
    return {};
  },

  toJSON(_: MsgUpdateDidDocumentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidDocumentResponse>, I>>(
    _: I
  ): MsgUpdateDidDocumentResponse {
    const message = createBaseMsgUpdateDidDocumentResponse();
    return message;
  },
};

function createBaseMsgAddVerification(): MsgAddVerification {
  return { id: '', verification: undefined, signer: '' };
}

export const MsgAddVerification = {
  encode(
    message: MsgAddVerification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.verification !== undefined) {
      Verification.encode(
        message.verification,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddVerification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.verification = Verification.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddVerification {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      verification: isSet(object.verification)
        ? Verification.fromJSON(object.verification)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgAddVerification): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.verification !== undefined &&
      (obj.verification = message.verification
        ? Verification.toJSON(message.verification)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddVerification>, I>>(
    object: I
  ): MsgAddVerification {
    const message = createBaseMsgAddVerification();
    message.id = object.id ?? '';
    message.verification =
      object.verification !== undefined && object.verification !== null
        ? Verification.fromPartial(object.verification)
        : undefined;
    message.signer = object.signer ?? '';
    return message;
  },
};

function createBaseMsgAddVerificationResponse(): MsgAddVerificationResponse {
  return {};
}

export const MsgAddVerificationResponse = {
  encode(
    _: MsgAddVerificationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddVerificationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddVerificationResponse();
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

  fromJSON(_: any): MsgAddVerificationResponse {
    return {};
  },

  toJSON(_: MsgAddVerificationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddVerificationResponse>, I>>(
    _: I
  ): MsgAddVerificationResponse {
    const message = createBaseMsgAddVerificationResponse();
    return message;
  },
};

function createBaseMsgSetVerificationRelationships(): MsgSetVerificationRelationships {
  return { id: '', methodId: '', relationships: [], signer: '' };
}

export const MsgSetVerificationRelationships = {
  encode(
    message: MsgSetVerificationRelationships,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.methodId !== '') {
      writer.uint32(18).string(message.methodId);
    }
    for (const v of message.relationships) {
      writer.uint32(26).string(v!);
    }
    if (message.signer !== '') {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetVerificationRelationships {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVerificationRelationships();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.methodId = reader.string();
          break;
        case 3:
          message.relationships.push(reader.string());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetVerificationRelationships {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      methodId: isSet(object.methodId) ? String(object.methodId) : '',
      relationships: Array.isArray(object?.relationships)
        ? object.relationships.map((e: any) => String(e))
        : [],
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgSetVerificationRelationships): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.methodId !== undefined && (obj.methodId = message.methodId);
    if (message.relationships) {
      obj.relationships = message.relationships.map((e) => e);
    } else {
      obj.relationships = [];
    }
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetVerificationRelationships>, I>>(
    object: I
  ): MsgSetVerificationRelationships {
    const message = createBaseMsgSetVerificationRelationships();
    message.id = object.id ?? '';
    message.methodId = object.methodId ?? '';
    message.relationships = object.relationships?.map((e) => e) || [];
    message.signer = object.signer ?? '';
    return message;
  },
};

function createBaseMsgSetVerificationRelationshipsResponse(): MsgSetVerificationRelationshipsResponse {
  return {};
}

export const MsgSetVerificationRelationshipsResponse = {
  encode(
    _: MsgSetVerificationRelationshipsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetVerificationRelationshipsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVerificationRelationshipsResponse();
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

  fromJSON(_: any): MsgSetVerificationRelationshipsResponse {
    return {};
  },

  toJSON(_: MsgSetVerificationRelationshipsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgSetVerificationRelationshipsResponse>, I>
  >(_: I): MsgSetVerificationRelationshipsResponse {
    const message = createBaseMsgSetVerificationRelationshipsResponse();
    return message;
  },
};

function createBaseMsgRevokeVerification(): MsgRevokeVerification {
  return { id: '', methodId: '', signer: '' };
}

export const MsgRevokeVerification = {
  encode(
    message: MsgRevokeVerification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.methodId !== '') {
      writer.uint32(18).string(message.methodId);
    }
    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeVerification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.methodId = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeVerification {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      methodId: isSet(object.methodId) ? String(object.methodId) : '',
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgRevokeVerification): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.methodId !== undefined && (obj.methodId = message.methodId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeVerification>, I>>(
    object: I
  ): MsgRevokeVerification {
    const message = createBaseMsgRevokeVerification();
    message.id = object.id ?? '';
    message.methodId = object.methodId ?? '';
    message.signer = object.signer ?? '';
    return message;
  },
};

function createBaseMsgRevokeVerificationResponse(): MsgRevokeVerificationResponse {
  return {};
}

export const MsgRevokeVerificationResponse = {
  encode(
    _: MsgRevokeVerificationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeVerificationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeVerificationResponse();
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

  fromJSON(_: any): MsgRevokeVerificationResponse {
    return {};
  },

  toJSON(_: MsgRevokeVerificationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeVerificationResponse>, I>>(
    _: I
  ): MsgRevokeVerificationResponse {
    const message = createBaseMsgRevokeVerificationResponse();
    return message;
  },
};

function createBaseMsgAddService(): MsgAddService {
  return { id: '', serviceData: undefined, signer: '' };
}

export const MsgAddService = {
  encode(
    message: MsgAddService,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.serviceData !== undefined) {
      Service.encode(message.serviceData, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.serviceData = Service.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddService {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      serviceData: isSet(object.serviceData)
        ? Service.fromJSON(object.serviceData)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgAddService): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.serviceData !== undefined &&
      (obj.serviceData = message.serviceData
        ? Service.toJSON(message.serviceData)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddService>, I>>(
    object: I
  ): MsgAddService {
    const message = createBaseMsgAddService();
    message.id = object.id ?? '';
    message.serviceData =
      object.serviceData !== undefined && object.serviceData !== null
        ? Service.fromPartial(object.serviceData)
        : undefined;
    message.signer = object.signer ?? '';
    return message;
  },
};

function createBaseMsgAddServiceResponse(): MsgAddServiceResponse {
  return {};
}

export const MsgAddServiceResponse = {
  encode(
    _: MsgAddServiceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddServiceResponse();
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

  fromJSON(_: any): MsgAddServiceResponse {
    return {};
  },

  toJSON(_: MsgAddServiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddServiceResponse>, I>>(
    _: I
  ): MsgAddServiceResponse {
    const message = createBaseMsgAddServiceResponse();
    return message;
  },
};

function createBaseMsgDeleteService(): MsgDeleteService {
  return { id: '', serviceId: '', signer: '' };
}

export const MsgDeleteService = {
  encode(
    message: MsgDeleteService,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.serviceId !== '') {
      writer.uint32(18).string(message.serviceId);
    }
    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.serviceId = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteService {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : '',
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgDeleteService): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteService>, I>>(
    object: I
  ): MsgDeleteService {
    const message = createBaseMsgDeleteService();
    message.id = object.id ?? '';
    message.serviceId = object.serviceId ?? '';
    message.signer = object.signer ?? '';
    return message;
  },
};

function createBaseMsgDeleteServiceResponse(): MsgDeleteServiceResponse {
  return {};
}

export const MsgDeleteServiceResponse = {
  encode(
    _: MsgDeleteServiceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteServiceResponse();
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

  fromJSON(_: any): MsgDeleteServiceResponse {
    return {};
  },

  toJSON(_: MsgDeleteServiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteServiceResponse>, I>>(
    _: I
  ): MsgDeleteServiceResponse {
    const message = createBaseMsgDeleteServiceResponse();
    return message;
  },
};

function createBaseMsgAddController(): MsgAddController {
  return { id: '', controllerDid: '', signer: '' };
}

export const MsgAddController = {
  encode(
    message: MsgAddController,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.controllerDid !== '') {
      writer.uint32(18).string(message.controllerDid);
    }
    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddController {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddController();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.controllerDid = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddController {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      controllerDid: isSet(object.controllerDid)
        ? String(object.controllerDid)
        : '',
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgAddController): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.controllerDid !== undefined &&
      (obj.controllerDid = message.controllerDid);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddController>, I>>(
    object: I
  ): MsgAddController {
    const message = createBaseMsgAddController();
    message.id = object.id ?? '';
    message.controllerDid = object.controllerDid ?? '';
    message.signer = object.signer ?? '';
    return message;
  },
};

function createBaseMsgAddControllerResponse(): MsgAddControllerResponse {
  return {};
}

export const MsgAddControllerResponse = {
  encode(
    _: MsgAddControllerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddControllerResponse();
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

  fromJSON(_: any): MsgAddControllerResponse {
    return {};
  },

  toJSON(_: MsgAddControllerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddControllerResponse>, I>>(
    _: I
  ): MsgAddControllerResponse {
    const message = createBaseMsgAddControllerResponse();
    return message;
  },
};

function createBaseMsgDeleteController(): MsgDeleteController {
  return { id: '', controllerDid: '', signer: '' };
}

export const MsgDeleteController = {
  encode(
    message: MsgDeleteController,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.controllerDid !== '') {
      writer.uint32(18).string(message.controllerDid);
    }
    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteController {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteController();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.controllerDid = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteController {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      controllerDid: isSet(object.controllerDid)
        ? String(object.controllerDid)
        : '',
      signer: isSet(object.signer) ? String(object.signer) : '',
    };
  },

  toJSON(message: MsgDeleteController): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.controllerDid !== undefined &&
      (obj.controllerDid = message.controllerDid);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteController>, I>>(
    object: I
  ): MsgDeleteController {
    const message = createBaseMsgDeleteController();
    message.id = object.id ?? '';
    message.controllerDid = object.controllerDid ?? '';
    message.signer = object.signer ?? '';
    return message;
  },
};

function createBaseMsgDeleteControllerResponse(): MsgDeleteControllerResponse {
  return {};
}

export const MsgDeleteControllerResponse = {
  encode(
    _: MsgDeleteControllerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteControllerResponse();
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

  fromJSON(_: any): MsgDeleteControllerResponse {
    return {};
  },

  toJSON(_: MsgDeleteControllerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteControllerResponse>, I>>(
    _: I
  ): MsgDeleteControllerResponse {
    const message = createBaseMsgDeleteControllerResponse();
    return message;
  },
};

/** Msg defines the identity Msg service. */
export interface Msg {
  /** CreateDidDocument defines a method for creating a new identity. */
  CreateDidDocument(
    request: MsgCreateDidDocument
  ): Promise<MsgCreateDidDocumentResponse>;
  /** UpdateDidDocument defines a method for updating an identity. */
  UpdateDidDocument(
    request: MsgUpdateDidDocument
  ): Promise<MsgUpdateDidDocumentResponse>;
  /** AddVerificationMethod adds a new verification method */
  AddVerification(
    request: MsgAddVerification
  ): Promise<MsgAddVerificationResponse>;
  /** RevokeVerification remove the verification method and all associated verification Relations */
  RevokeVerification(
    request: MsgRevokeVerification
  ): Promise<MsgRevokeVerificationResponse>;
  /** SetVerificationRelationships overwrite current verification relationships */
  SetVerificationRelationships(
    request: MsgSetVerificationRelationships
  ): Promise<MsgSetVerificationRelationshipsResponse>;
  /** AddService add a new service */
  AddService(request: MsgAddService): Promise<MsgAddServiceResponse>;
  /** DeleteService delete an existing service */
  DeleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>;
  /** AddService add a new service */
  AddController(request: MsgAddController): Promise<MsgAddControllerResponse>;
  /** DeleteService delete an existing service */
  DeleteController(
    request: MsgDeleteController
  ): Promise<MsgDeleteControllerResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || 'millicent.cash.did.Msg';
    this.rpc = rpc;
    this.CreateDidDocument = this.CreateDidDocument.bind(this);
    this.UpdateDidDocument = this.UpdateDidDocument.bind(this);
    this.AddVerification = this.AddVerification.bind(this);
    this.RevokeVerification = this.RevokeVerification.bind(this);
    this.SetVerificationRelationships =
      this.SetVerificationRelationships.bind(this);
    this.AddService = this.AddService.bind(this);
    this.DeleteService = this.DeleteService.bind(this);
    this.AddController = this.AddController.bind(this);
    this.DeleteController = this.DeleteController.bind(this);
  }
  CreateDidDocument(
    request: MsgCreateDidDocument
  ): Promise<MsgCreateDidDocumentResponse> {
    const data = MsgCreateDidDocument.encode(request).finish();
    const promise = this.rpc.request(this.service, 'CreateDidDocument', data);
    return promise.then((data) =>
      MsgCreateDidDocumentResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateDidDocument(
    request: MsgUpdateDidDocument
  ): Promise<MsgUpdateDidDocumentResponse> {
    const data = MsgUpdateDidDocument.encode(request).finish();
    const promise = this.rpc.request(this.service, 'UpdateDidDocument', data);
    return promise.then((data) =>
      MsgUpdateDidDocumentResponse.decode(new _m0.Reader(data))
    );
  }

  AddVerification(
    request: MsgAddVerification
  ): Promise<MsgAddVerificationResponse> {
    const data = MsgAddVerification.encode(request).finish();
    const promise = this.rpc.request(this.service, 'AddVerification', data);
    return promise.then((data) =>
      MsgAddVerificationResponse.decode(new _m0.Reader(data))
    );
  }

  RevokeVerification(
    request: MsgRevokeVerification
  ): Promise<MsgRevokeVerificationResponse> {
    const data = MsgRevokeVerification.encode(request).finish();
    const promise = this.rpc.request(this.service, 'RevokeVerification', data);
    return promise.then((data) =>
      MsgRevokeVerificationResponse.decode(new _m0.Reader(data))
    );
  }

  SetVerificationRelationships(
    request: MsgSetVerificationRelationships
  ): Promise<MsgSetVerificationRelationshipsResponse> {
    const data = MsgSetVerificationRelationships.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      'SetVerificationRelationships',
      data
    );
    return promise.then((data) =>
      MsgSetVerificationRelationshipsResponse.decode(new _m0.Reader(data))
    );
  }

  AddService(request: MsgAddService): Promise<MsgAddServiceResponse> {
    const data = MsgAddService.encode(request).finish();
    const promise = this.rpc.request(this.service, 'AddService', data);
    return promise.then((data) =>
      MsgAddServiceResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse> {
    const data = MsgDeleteService.encode(request).finish();
    const promise = this.rpc.request(this.service, 'DeleteService', data);
    return promise.then((data) =>
      MsgDeleteServiceResponse.decode(new _m0.Reader(data))
    );
  }

  AddController(request: MsgAddController): Promise<MsgAddControllerResponse> {
    const data = MsgAddController.encode(request).finish();
    const promise = this.rpc.request(this.service, 'AddController', data);
    return promise.then((data) =>
      MsgAddControllerResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteController(
    request: MsgDeleteController
  ): Promise<MsgDeleteControllerResponse> {
    const data = MsgDeleteController.encode(request).finish();
    const promise = this.rpc.request(this.service, 'DeleteController', data);
    return promise.then((data) =>
      MsgDeleteControllerResponse.decode(new _m0.Reader(data))
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
