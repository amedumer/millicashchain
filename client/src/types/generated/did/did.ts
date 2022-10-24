/* eslint-disable */
import { Timestamp } from "../google/protobuf/timestamp";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "millicent.cash.did";

/** DidDocument represents a dencentralised identifer. */
export interface DidDocument {
  /** @context is spec for did document. */
  context: string[];
  /** id represents the id for the did document. */
  id: string;
  /**
   * A DID controller is an entity that is authorized to make changes to a DID document.
   * cfr. https://www.w3.org/TR/did-core/#did-controller
   */
  controller: string[];
  /**
   * A DID document can express verification methods,
   * such as cryptographic public keys, which can be used
   * to authenticate or authorize interactions with the DID subject or associated parties.
   * https://www.w3.org/TR/did-core/#verification-methods
   */
  verificationMethod: VerificationMethod[];
  /**
   * Services are used in DID documents to express ways of communicating
   * with the DID subject or associated entities.
   * https://www.w3.org/TR/did-core/#services
   */
  service: Service[];
  /**
   * Authentication represents public key associated with the did document.
   * cfr. https://www.w3.org/TR/did-core/#authentication
   */
  authentication: string[];
  /**
   * Used to specify how the DID subject is expected to express claims,
   * such as for the purposes of issuing a Verifiable Credential.
   * cfr. https://www.w3.org/TR/did-core/#assertion
   */
  assertionMethod: string[];
  /**
   * used to specify how an entity can generate encryption material
   * in order to transmit confidential information intended for the DID subject.
   * https://www.w3.org/TR/did-core/#key-agreement
   */
  keyAgreement: string[];
  /**
   * Used to specify a verification method that might be used by the DID subject
   * to invoke a cryptographic capability, such as the authorization
   * to update the DID Document.
   * https://www.w3.org/TR/did-core/#capability-invocation
   */
  capabilityInvocation: string[];
  /**
   * Used to specify a mechanism that might be used by the DID subject
   * to delegate a cryptographic capability to another party.
   * https://www.w3.org/TR/did-core/#capability-delegation
   */
  capabilityDelegation: string[];
}

/**
 * A DID document can express verification methods,
 * such as cryptographic public keys, which can be used
 * to authenticate or authorize interactions
 * with the DID subject or associated parties.
 * https://www.w3.org/TR/did-core/#verification-methods
 */
export interface VerificationMethod {
  id: string;
  type: string;
  controller: string;
  blockchainAccountID: string | undefined;
  publicKeyHex: string | undefined;
  publicKeyMultibase: string | undefined;
}

/** Service defines how to find data associated with a identifer */
export interface Service {
  id: string;
  type: string;
  serviceEndpoint: string;
}

/**
 * DidMetadata defines metadata associated to a did document such as
 * the status of the DID document
 */
export interface DidMetadata {
  versionId: string;
  created?: Date;
  updated?: Date;
  deactivated: boolean;
}

function createBaseDidDocument(): DidDocument {
  return {
    context: [],
    id: "",
    controller: [],
    verificationMethod: [],
    service: [],
    authentication: [],
    assertionMethod: [],
    keyAgreement: [],
    capabilityInvocation: [],
    capabilityDelegation: [],
  };
}

export const DidDocument = {
  encode(
    message: DidDocument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.controller) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.verificationMethod) {
      VerificationMethod.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.service) {
      Service.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.authentication) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.assertionMethod) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.keyAgreement) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.capabilityInvocation) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.capabilityDelegation) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDidDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context.push(reader.string());
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.controller.push(reader.string());
          break;
        case 4:
          message.verificationMethod.push(
            VerificationMethod.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.service.push(Service.decode(reader, reader.uint32()));
          break;
        case 6:
          message.authentication.push(reader.string());
          break;
        case 7:
          message.assertionMethod.push(reader.string());
          break;
        case 8:
          message.keyAgreement.push(reader.string());
          break;
        case 9:
          message.capabilityInvocation.push(reader.string());
          break;
        case 10:
          message.capabilityDelegation.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DidDocument {
    return {
      context: Array.isArray(object?.context)
        ? object.context.map((e: any) => String(e))
        : [],
      id: isSet(object.id) ? String(object.id) : "",
      controller: Array.isArray(object?.controller)
        ? object.controller.map((e: any) => String(e))
        : [],
      verificationMethod: Array.isArray(object?.verificationMethod)
        ? object.verificationMethod.map((e: any) =>
            VerificationMethod.fromJSON(e)
          )
        : [],
      service: Array.isArray(object?.service)
        ? object.service.map((e: any) => Service.fromJSON(e))
        : [],
      authentication: Array.isArray(object?.authentication)
        ? object.authentication.map((e: any) => String(e))
        : [],
      assertionMethod: Array.isArray(object?.assertionMethod)
        ? object.assertionMethod.map((e: any) => String(e))
        : [],
      keyAgreement: Array.isArray(object?.keyAgreement)
        ? object.keyAgreement.map((e: any) => String(e))
        : [],
      capabilityInvocation: Array.isArray(object?.capabilityInvocation)
        ? object.capabilityInvocation.map((e: any) => String(e))
        : [],
      capabilityDelegation: Array.isArray(object?.capabilityDelegation)
        ? object.capabilityDelegation.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: DidDocument): unknown {
    const obj: any = {};
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    message.id !== undefined && (obj.id = message.id);
    if (message.controller) {
      obj.controller = message.controller.map((e) => e);
    } else {
      obj.controller = [];
    }
    if (message.verificationMethod) {
      obj.verificationMethod = message.verificationMethod.map((e) =>
        e ? VerificationMethod.toJSON(e) : undefined
      );
    } else {
      obj.verificationMethod = [];
    }
    if (message.service) {
      obj.service = message.service.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.service = [];
    }
    if (message.authentication) {
      obj.authentication = message.authentication.map((e) => e);
    } else {
      obj.authentication = [];
    }
    if (message.assertionMethod) {
      obj.assertionMethod = message.assertionMethod.map((e) => e);
    } else {
      obj.assertionMethod = [];
    }
    if (message.keyAgreement) {
      obj.keyAgreement = message.keyAgreement.map((e) => e);
    } else {
      obj.keyAgreement = [];
    }
    if (message.capabilityInvocation) {
      obj.capabilityInvocation = message.capabilityInvocation.map((e) => e);
    } else {
      obj.capabilityInvocation = [];
    }
    if (message.capabilityDelegation) {
      obj.capabilityDelegation = message.capabilityDelegation.map((e) => e);
    } else {
      obj.capabilityDelegation = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DidDocument>, I>>(
    object: I
  ): DidDocument {
    const message = createBaseDidDocument();
    message.context = object.context?.map((e) => e) || [];
    message.id = object.id ?? "";
    message.controller = object.controller?.map((e) => e) || [];
    message.verificationMethod =
      object.verificationMethod?.map((e) =>
        VerificationMethod.fromPartial(e)
      ) || [];
    message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
    message.authentication = object.authentication?.map((e) => e) || [];
    message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
    message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
    message.capabilityInvocation =
      object.capabilityInvocation?.map((e) => e) || [];
    message.capabilityDelegation =
      object.capabilityDelegation?.map((e) => e) || [];
    return message;
  },
};

function createBaseVerificationMethod(): VerificationMethod {
  return {
    id: "",
    type: "",
    controller: "",
    blockchainAccountID: undefined,
    publicKeyHex: undefined,
    publicKeyMultibase: undefined,
  };
}

export const VerificationMethod = {
  encode(
    message: VerificationMethod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.controller !== "") {
      writer.uint32(26).string(message.controller);
    }
    if (message.blockchainAccountID !== undefined) {
      writer.uint32(34).string(message.blockchainAccountID);
    }
    if (message.publicKeyHex !== undefined) {
      writer.uint32(42).string(message.publicKeyHex);
    }
    if (message.publicKeyMultibase !== undefined) {
      writer.uint32(50).string(message.publicKeyMultibase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.controller = reader.string();
          break;
        case 4:
          message.blockchainAccountID = reader.string();
          break;
        case 5:
          message.publicKeyHex = reader.string();
          break;
        case 6:
          message.publicKeyMultibase = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerificationMethod {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      controller: isSet(object.controller) ? String(object.controller) : "",
      blockchainAccountID: isSet(object.blockchainAccountID)
        ? String(object.blockchainAccountID)
        : undefined,
      publicKeyHex: isSet(object.publicKeyHex)
        ? String(object.publicKeyHex)
        : undefined,
      publicKeyMultibase: isSet(object.publicKeyMultibase)
        ? String(object.publicKeyMultibase)
        : undefined,
    };
  },

  toJSON(message: VerificationMethod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.controller !== undefined && (obj.controller = message.controller);
    message.blockchainAccountID !== undefined &&
      (obj.blockchainAccountID = message.blockchainAccountID);
    message.publicKeyHex !== undefined &&
      (obj.publicKeyHex = message.publicKeyHex);
    message.publicKeyMultibase !== undefined &&
      (obj.publicKeyMultibase = message.publicKeyMultibase);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VerificationMethod>, I>>(
    object: I
  ): VerificationMethod {
    const message = createBaseVerificationMethod();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.controller = object.controller ?? "";
    message.blockchainAccountID = object.blockchainAccountID ?? undefined;
    message.publicKeyHex = object.publicKeyHex ?? undefined;
    message.publicKeyMultibase = object.publicKeyMultibase ?? undefined;
    return message;
  },
};

function createBaseService(): Service {
  return { id: "", type: "", serviceEndpoint: "" };
}

export const Service = {
  encode(
    message: Service,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.serviceEndpoint !== "") {
      writer.uint32(26).string(message.serviceEndpoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.serviceEndpoint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Service {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      serviceEndpoint: isSet(object.serviceEndpoint)
        ? String(object.serviceEndpoint)
        : "",
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.serviceEndpoint !== undefined &&
      (obj.serviceEndpoint = message.serviceEndpoint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = createBaseService();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    return message;
  },
};

function createBaseDidMetadata(): DidMetadata {
  return {
    versionId: "",
    created: undefined,
    updated: undefined,
    deactivated: false,
  };
}

export const DidMetadata = {
  encode(
    message: DidMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.versionId !== "") {
      writer.uint32(10).string(message.versionId);
    }
    if (message.created !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.updated !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updated),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.deactivated === true) {
      writer.uint32(32).bool(message.deactivated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DidMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDidMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.versionId = reader.string();
          break;
        case 2:
          message.created = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.updated = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.deactivated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DidMetadata {
    return {
      versionId: isSet(object.versionId) ? String(object.versionId) : "",
      created: isSet(object.created)
        ? fromJsonTimestamp(object.created)
        : undefined,
      updated: isSet(object.updated)
        ? fromJsonTimestamp(object.updated)
        : undefined,
      deactivated: isSet(object.deactivated)
        ? Boolean(object.deactivated)
        : false,
    };
  },

  toJSON(message: DidMetadata): unknown {
    const obj: any = {};
    message.versionId !== undefined && (obj.versionId = message.versionId);
    message.created !== undefined &&
      (obj.created = message.created.toISOString());
    message.updated !== undefined &&
      (obj.updated = message.updated.toISOString());
    message.deactivated !== undefined &&
      (obj.deactivated = message.deactivated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DidMetadata>, I>>(
    object: I
  ): DidMetadata {
    const message = createBaseDidMetadata();
    message.versionId = object.versionId ?? "";
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    message.deactivated = object.deactivated ?? false;
    return message;
  },
};

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
