/* eslint-disable */
import { Timestamp } from "../google/protobuf/timestamp";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "millicent.cash.verifiablecredential";

/** VerifiableCredential represents a verifiable credential */
export interface VerifiableCredential {
  /** @context is spec for verifiable credential. */
  context: string[];
  /**
   * The value of the id property MUST be a single URI. It is RECOMMENDED
   * that the URI in the id be one which, if dereferenced, results in a
   * document containing machine-readable information about the id.
   */
  id: string;
  /**
   * The value of the type property MUST be, or map to (through interpretation
   * of the @context property), one or more URIs. If more than one URI is
   * provided, the URIs MUST be interpreted as an unordered set.
   */
  type: string[];
  /**
   * The value of the issuer property MUST be either a URI or an object
   * containing an id property. It is RECOMMENDED that the URI in the issuer
   * or its id be one which, if dereferenced, results in a document containing
   * machine-readable information about the issuer that can be used to verify
   * the information expressed in the credential.
   */
  issuer: string;
  /**
   * A credential MUST have an issuanceDate property. The value of the issuanceDate
   * property MUST be a string value of an [RFC3339] combined date and time string
   * representing the date and time the credential becomes valid, which could
   * be a date and time in the future. Note that this value represents the earliest
   * point in time at which the information associated with the credentialSubject
   * property becomes valid.
   */
  issuance_date: Date | undefined;
  /** RegulatorCredentialSubject represents a credential that identify a financial regulator */
  regulator_cred: RegulatorCredentialSubject | undefined;
  /**
   * The value of license_cred represents a registration issued by a regulatory
   * body. The license is used to describe the entity that require a license.
   */
  registration_cred: RegistrationCredentialSubject | undefined;
  /**
   * The value of license_cred represents a license issued by a regulatory
   * body. The license can be used to define authorized actions by the
   * credential subject
   */
  license_cred: LicenseCredentialSubject | undefined;
  /**
   * The value of user_cred represents a privacy respecting verifiable
   * credential. This is used when adding sensitive information about
   * a credential subject. It allows the credential subject to create
   * and validate proofs about what is contained in a credential without
   * revealing the values contained in the credential otherwise known as
   * selective disclosure.
   */
  user_cred: UserCredentialSubject | undefined;
  /**
   * One or more cryptographic proofs that can be used to detect tampering
   * and verify the authorship of a credential or presentation. The specific
   * method used for an embedded proof MUST be included using the type property.
   */
  proof: Proof | undefined;
}

/**
 * UserCredentialSubject represents a privacy respecting
 * credential_subject of a verifiable credential. This
 * is used as an on chain verifiable credential.
 */
export interface UserCredentialSubject {
  id: string;
  root: string;
  is_verified: boolean;
}

/**
 * The LicenseCredential message makes reference to the classes of crypto assets
 * described in MiCA, but the license could easily be adopted as proof of
 * authority to issue various types of crypto or virtual assets. The LicenseCredential
 * is used a a credential_subject in a verifiable credential.
 */
export interface LicenseCredentialSubject {
  /** The value of id represents the ID of the credential_subject */
  id: string;
  /**
   * The license type is defined by the MICA regulation. This will
   * be used to identify different asset classes of tokens being issuedi
   * by the credential_subject.
   */
  license_type: string;
  /** The country field represents the country the credential was issued in. */
  country: string;
  /** The authority field represents a licensing authority that issued the LicenseCredential */
  authority: string;
  /**
   * The circulation_limit represents the amount of a token
   * that can be minted by a credential_subject.
   */
  circulation_limit: Coin | undefined;
}

/** RegulatorCredentialSubject is used to identify regulators */
export interface RegulatorCredentialSubject {
  /** The value of id represents the ID of the credential_subject */
  id: string;
  /** The value of id represents the name of the credential subject */
  name: string;
  /** The country field represents the country the credential was issued in. */
  country: string;
}

/**
 * RegistrationCredentialSubject is used to identify a business entity
 * https://millicash/blob/main/docs/Explanation/ADR/adr-005-registration-credential.md
 */
export interface RegistrationCredentialSubject {
  /** The value of id represents the ID of the credential_subject */
  id: string;
  address: Address | undefined;
  ids: Id[];
  legal_persons: LegalPerson[];
}

export interface LegalPerson {
  names: Name[];
  ctry_reg: string;
}

export interface Name {
  name: string;
  type: string;
}

export interface Address {
  addr_type: string;
  thfare: string;
  premise: string;
  postcode: string;
  locality: string;
  country: string;
}

export interface Id {
  id: string;
  type: string;
}

/**
 * The Proof message represents a cryptographic proof that the
 * credential has not been tampered with or changed without the issuersi
 * knowledge. This can be used to verify the verifiable credential.
 */
export interface Proof {
  type: string;
  created: string;
  proof_purpose: string;
  verification_method: string;
  signature: string;
}

const baseVerifiableCredential: object = {
  context: "",
  id: "",
  type: "",
  issuer: "",
};

export const VerifiableCredential = {
  encode(
    message: VerifiableCredential,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.type) {
      writer.uint32(26).string(v!);
    }
    if (message.issuer !== "") {
      writer.uint32(34).string(message.issuer);
    }
    if (message.issuance_date !== undefined) {
      Timestamp.encode(
        toTimestamp(message.issuance_date),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.regulator_cred !== undefined) {
      RegulatorCredentialSubject.encode(
        message.regulator_cred,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.registration_cred !== undefined) {
      RegistrationCredentialSubject.encode(
        message.registration_cred,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.license_cred !== undefined) {
      LicenseCredentialSubject.encode(
        message.license_cred,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.user_cred !== undefined) {
      UserCredentialSubject.encode(
        message.user_cred,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VerifiableCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVerifiableCredential } as VerifiableCredential;
    message.context = [];
    message.type = [];
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
          message.type.push(reader.string());
          break;
        case 4:
          message.issuer = reader.string();
          break;
        case 5:
          message.issuance_date = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.regulator_cred = RegulatorCredentialSubject.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.registration_cred = RegistrationCredentialSubject.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.license_cred = LicenseCredentialSubject.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.user_cred = UserCredentialSubject.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifiableCredential {
    const message = { ...baseVerifiableCredential } as VerifiableCredential;
    message.context = [];
    message.type = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(String(e));
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(String(e));
      }
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.issuance_date !== undefined && object.issuance_date !== null) {
      message.issuance_date = fromJsonTimestamp(object.issuance_date);
    } else {
      message.issuance_date = undefined;
    }
    if (object.regulator_cred !== undefined && object.regulator_cred !== null) {
      message.regulator_cred = RegulatorCredentialSubject.fromJSON(
        object.regulator_cred
      );
    } else {
      message.regulator_cred = undefined;
    }
    if (
      object.registration_cred !== undefined &&
      object.registration_cred !== null
    ) {
      message.registration_cred = RegistrationCredentialSubject.fromJSON(
        object.registration_cred
      );
    } else {
      message.registration_cred = undefined;
    }
    if (object.license_cred !== undefined && object.license_cred !== null) {
      message.license_cred = LicenseCredentialSubject.fromJSON(
        object.license_cred
      );
    } else {
      message.license_cred = undefined;
    }
    if (object.user_cred !== undefined && object.user_cred !== null) {
      message.user_cred = UserCredentialSubject.fromJSON(object.user_cred);
    } else {
      message.user_cred = undefined;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },

  toJSON(message: VerifiableCredential): unknown {
    const obj: any = {};
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    message.id !== undefined && (obj.id = message.id);
    if (message.type) {
      obj.type = message.type.map((e) => e);
    } else {
      obj.type = [];
    }
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.issuance_date !== undefined &&
      (obj.issuance_date =
        message.issuance_date !== undefined
          ? message.issuance_date.toISOString()
          : null);
    message.regulator_cred !== undefined &&
      (obj.regulator_cred = message.regulator_cred
        ? RegulatorCredentialSubject.toJSON(message.regulator_cred)
        : undefined);
    message.registration_cred !== undefined &&
      (obj.registration_cred = message.registration_cred
        ? RegistrationCredentialSubject.toJSON(message.registration_cred)
        : undefined);
    message.license_cred !== undefined &&
      (obj.license_cred = message.license_cred
        ? LicenseCredentialSubject.toJSON(message.license_cred)
        : undefined);
    message.user_cred !== undefined &&
      (obj.user_cred = message.user_cred
        ? UserCredentialSubject.toJSON(message.user_cred)
        : undefined);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VerifiableCredential>): VerifiableCredential {
    const message = { ...baseVerifiableCredential } as VerifiableCredential;
    message.context = [];
    message.type = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(e);
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e);
      }
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.issuance_date !== undefined && object.issuance_date !== null) {
      message.issuance_date = object.issuance_date;
    } else {
      message.issuance_date = undefined;
    }
    if (object.regulator_cred !== undefined && object.regulator_cred !== null) {
      message.regulator_cred = RegulatorCredentialSubject.fromPartial(
        object.regulator_cred
      );
    } else {
      message.regulator_cred = undefined;
    }
    if (
      object.registration_cred !== undefined &&
      object.registration_cred !== null
    ) {
      message.registration_cred = RegistrationCredentialSubject.fromPartial(
        object.registration_cred
      );
    } else {
      message.registration_cred = undefined;
    }
    if (object.license_cred !== undefined && object.license_cred !== null) {
      message.license_cred = LicenseCredentialSubject.fromPartial(
        object.license_cred
      );
    } else {
      message.license_cred = undefined;
    }
    if (object.user_cred !== undefined && object.user_cred !== null) {
      message.user_cred = UserCredentialSubject.fromPartial(object.user_cred);
    } else {
      message.user_cred = undefined;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    } else {
      message.proof = undefined;
    }
    return message;
  },
};

const baseUserCredentialSubject: object = {
  id: "",
  root: "",
  is_verified: false,
};

export const UserCredentialSubject = {
  encode(
    message: UserCredentialSubject,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.root !== "") {
      writer.uint32(18).string(message.root);
    }
    if (message.is_verified === true) {
      writer.uint32(24).bool(message.is_verified);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UserCredentialSubject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserCredentialSubject } as UserCredentialSubject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.root = reader.string();
          break;
        case 3:
          message.is_verified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCredentialSubject {
    const message = { ...baseUserCredentialSubject } as UserCredentialSubject;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = String(object.root);
    } else {
      message.root = "";
    }
    if (object.is_verified !== undefined && object.is_verified !== null) {
      message.is_verified = Boolean(object.is_verified);
    } else {
      message.is_verified = false;
    }
    return message;
  },

  toJSON(message: UserCredentialSubject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.root !== undefined && (obj.root = message.root);
    message.is_verified !== undefined &&
      (obj.is_verified = message.is_verified);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UserCredentialSubject>
  ): UserCredentialSubject {
    const message = { ...baseUserCredentialSubject } as UserCredentialSubject;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = object.root;
    } else {
      message.root = "";
    }
    if (object.is_verified !== undefined && object.is_verified !== null) {
      message.is_verified = object.is_verified;
    } else {
      message.is_verified = false;
    }
    return message;
  },
};

const baseLicenseCredentialSubject: object = {
  id: "",
  license_type: "",
  country: "",
  authority: "",
};

export const LicenseCredentialSubject = {
  encode(
    message: LicenseCredentialSubject,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.license_type !== "") {
      writer.uint32(18).string(message.license_type);
    }
    if (message.country !== "") {
      writer.uint32(26).string(message.country);
    }
    if (message.authority !== "") {
      writer.uint32(34).string(message.authority);
    }
    if (message.circulation_limit !== undefined) {
      Coin.encode(message.circulation_limit, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): LicenseCredentialSubject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLicenseCredentialSubject,
    } as LicenseCredentialSubject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.license_type = reader.string();
          break;
        case 3:
          message.country = reader.string();
          break;
        case 4:
          message.authority = reader.string();
          break;
        case 5:
          message.circulation_limit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LicenseCredentialSubject {
    const message = {
      ...baseLicenseCredentialSubject,
    } as LicenseCredentialSubject;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.license_type !== undefined && object.license_type !== null) {
      message.license_type = String(object.license_type);
    } else {
      message.license_type = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (
      object.circulation_limit !== undefined &&
      object.circulation_limit !== null
    ) {
      message.circulation_limit = Coin.fromJSON(object.circulation_limit);
    } else {
      message.circulation_limit = undefined;
    }
    return message;
  },

  toJSON(message: LicenseCredentialSubject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.license_type !== undefined &&
      (obj.license_type = message.license_type);
    message.country !== undefined && (obj.country = message.country);
    message.authority !== undefined && (obj.authority = message.authority);
    message.circulation_limit !== undefined &&
      (obj.circulation_limit = message.circulation_limit
        ? Coin.toJSON(message.circulation_limit)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<LicenseCredentialSubject>
  ): LicenseCredentialSubject {
    const message = {
      ...baseLicenseCredentialSubject,
    } as LicenseCredentialSubject;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.license_type !== undefined && object.license_type !== null) {
      message.license_type = object.license_type;
    } else {
      message.license_type = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (
      object.circulation_limit !== undefined &&
      object.circulation_limit !== null
    ) {
      message.circulation_limit = Coin.fromPartial(object.circulation_limit);
    } else {
      message.circulation_limit = undefined;
    }
    return message;
  },
};

const baseRegulatorCredentialSubject: object = {
  id: "",
  name: "",
  country: "",
};

export const RegulatorCredentialSubject = {
  encode(
    message: RegulatorCredentialSubject,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.country !== "") {
      writer.uint32(26).string(message.country);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RegulatorCredentialSubject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegulatorCredentialSubject,
    } as RegulatorCredentialSubject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegulatorCredentialSubject {
    const message = {
      ...baseRegulatorCredentialSubject,
    } as RegulatorCredentialSubject;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    return message;
  },

  toJSON(message: RegulatorCredentialSubject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegulatorCredentialSubject>
  ): RegulatorCredentialSubject {
    const message = {
      ...baseRegulatorCredentialSubject,
    } as RegulatorCredentialSubject;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    return message;
  },
};

const baseRegistrationCredentialSubject: object = { id: "" };

export const RegistrationCredentialSubject = {
  encode(
    message: RegistrationCredentialSubject,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ids) {
      Id.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.legal_persons) {
      LegalPerson.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RegistrationCredentialSubject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegistrationCredentialSubject,
    } as RegistrationCredentialSubject;
    message.ids = [];
    message.legal_persons = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.address = Address.decode(reader, reader.uint32());
          break;
        case 3:
          message.ids.push(Id.decode(reader, reader.uint32()));
          break;
        case 4:
          message.legal_persons.push(
            LegalPerson.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegistrationCredentialSubject {
    const message = {
      ...baseRegistrationCredentialSubject,
    } as RegistrationCredentialSubject;
    message.ids = [];
    message.legal_persons = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = Address.fromJSON(object.address);
    } else {
      message.address = undefined;
    }
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(Id.fromJSON(e));
      }
    }
    if (object.legal_persons !== undefined && object.legal_persons !== null) {
      for (const e of object.legal_persons) {
        message.legal_persons.push(LegalPerson.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: RegistrationCredentialSubject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined &&
      (obj.address = message.address
        ? Address.toJSON(message.address)
        : undefined);
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e ? Id.toJSON(e) : undefined));
    } else {
      obj.ids = [];
    }
    if (message.legal_persons) {
      obj.legal_persons = message.legal_persons.map((e) =>
        e ? LegalPerson.toJSON(e) : undefined
      );
    } else {
      obj.legal_persons = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegistrationCredentialSubject>
  ): RegistrationCredentialSubject {
    const message = {
      ...baseRegistrationCredentialSubject,
    } as RegistrationCredentialSubject;
    message.ids = [];
    message.legal_persons = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = Address.fromPartial(object.address);
    } else {
      message.address = undefined;
    }
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(Id.fromPartial(e));
      }
    }
    if (object.legal_persons !== undefined && object.legal_persons !== null) {
      for (const e of object.legal_persons) {
        message.legal_persons.push(LegalPerson.fromPartial(e));
      }
    }
    return message;
  },
};

const baseLegalPerson: object = { ctry_reg: "" };

export const LegalPerson = {
  encode(message: LegalPerson, writer: Writer = Writer.create()): Writer {
    for (const v of message.names) {
      Name.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.ctry_reg !== "") {
      writer.uint32(18).string(message.ctry_reg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LegalPerson {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLegalPerson } as LegalPerson;
    message.names = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.names.push(Name.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ctry_reg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegalPerson {
    const message = { ...baseLegalPerson } as LegalPerson;
    message.names = [];
    if (object.names !== undefined && object.names !== null) {
      for (const e of object.names) {
        message.names.push(Name.fromJSON(e));
      }
    }
    if (object.ctry_reg !== undefined && object.ctry_reg !== null) {
      message.ctry_reg = String(object.ctry_reg);
    } else {
      message.ctry_reg = "";
    }
    return message;
  },

  toJSON(message: LegalPerson): unknown {
    const obj: any = {};
    if (message.names) {
      obj.names = message.names.map((e) => (e ? Name.toJSON(e) : undefined));
    } else {
      obj.names = [];
    }
    message.ctry_reg !== undefined && (obj.ctry_reg = message.ctry_reg);
    return obj;
  },

  fromPartial(object: DeepPartial<LegalPerson>): LegalPerson {
    const message = { ...baseLegalPerson } as LegalPerson;
    message.names = [];
    if (object.names !== undefined && object.names !== null) {
      for (const e of object.names) {
        message.names.push(Name.fromPartial(e));
      }
    }
    if (object.ctry_reg !== undefined && object.ctry_reg !== null) {
      message.ctry_reg = object.ctry_reg;
    } else {
      message.ctry_reg = "";
    }
    return message;
  },
};

const baseName: object = { name: "", type: "" };

export const Name = {
  encode(message: Name, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Name {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseName } as Name;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Name {
    const message = { ...baseName } as Name;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    return message;
  },

  toJSON(message: Name): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<Name>): Name {
    const message = { ...baseName } as Name;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    return message;
  },
};

const baseAddress: object = {
  addr_type: "",
  thfare: "",
  premise: "",
  postcode: "",
  locality: "",
  country: "",
};

export const Address = {
  encode(message: Address, writer: Writer = Writer.create()): Writer {
    if (message.addr_type !== "") {
      writer.uint32(10).string(message.addr_type);
    }
    if (message.thfare !== "") {
      writer.uint32(18).string(message.thfare);
    }
    if (message.premise !== "") {
      writer.uint32(26).string(message.premise);
    }
    if (message.postcode !== "") {
      writer.uint32(34).string(message.postcode);
    }
    if (message.locality !== "") {
      writer.uint32(42).string(message.locality);
    }
    if (message.country !== "") {
      writer.uint32(50).string(message.country);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddress } as Address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr_type = reader.string();
          break;
        case 2:
          message.thfare = reader.string();
          break;
        case 3:
          message.premise = reader.string();
          break;
        case 4:
          message.postcode = reader.string();
          break;
        case 5:
          message.locality = reader.string();
          break;
        case 6:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Address {
    const message = { ...baseAddress } as Address;
    if (object.addr_type !== undefined && object.addr_type !== null) {
      message.addr_type = String(object.addr_type);
    } else {
      message.addr_type = "";
    }
    if (object.thfare !== undefined && object.thfare !== null) {
      message.thfare = String(object.thfare);
    } else {
      message.thfare = "";
    }
    if (object.premise !== undefined && object.premise !== null) {
      message.premise = String(object.premise);
    } else {
      message.premise = "";
    }
    if (object.postcode !== undefined && object.postcode !== null) {
      message.postcode = String(object.postcode);
    } else {
      message.postcode = "";
    }
    if (object.locality !== undefined && object.locality !== null) {
      message.locality = String(object.locality);
    } else {
      message.locality = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    return message;
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.addr_type !== undefined && (obj.addr_type = message.addr_type);
    message.thfare !== undefined && (obj.thfare = message.thfare);
    message.premise !== undefined && (obj.premise = message.premise);
    message.postcode !== undefined && (obj.postcode = message.postcode);
    message.locality !== undefined && (obj.locality = message.locality);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = { ...baseAddress } as Address;
    if (object.addr_type !== undefined && object.addr_type !== null) {
      message.addr_type = object.addr_type;
    } else {
      message.addr_type = "";
    }
    if (object.thfare !== undefined && object.thfare !== null) {
      message.thfare = object.thfare;
    } else {
      message.thfare = "";
    }
    if (object.premise !== undefined && object.premise !== null) {
      message.premise = object.premise;
    } else {
      message.premise = "";
    }
    if (object.postcode !== undefined && object.postcode !== null) {
      message.postcode = object.postcode;
    } else {
      message.postcode = "";
    }
    if (object.locality !== undefined && object.locality !== null) {
      message.locality = object.locality;
    } else {
      message.locality = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    return message;
  },
};

const baseId: object = { id: "", type: "" };

export const Id = {
  encode(message: Id, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Id {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseId } as Id;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Id {
    const message = { ...baseId } as Id;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    return message;
  },

  toJSON(message: Id): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<Id>): Id {
    const message = { ...baseId } as Id;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    return message;
  },
};

const baseProof: object = {
  type: "",
  created: "",
  proof_purpose: "",
  verification_method: "",
  signature: "",
};

export const Proof = {
  encode(message: Proof, writer: Writer = Writer.create()): Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.created !== "") {
      writer.uint32(18).string(message.created);
    }
    if (message.proof_purpose !== "") {
      writer.uint32(26).string(message.proof_purpose);
    }
    if (message.verification_method !== "") {
      writer.uint32(34).string(message.verification_method);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProof } as Proof;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.created = reader.string();
          break;
        case 3:
          message.proof_purpose = reader.string();
          break;
        case 4:
          message.verification_method = reader.string();
          break;
        case 5:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proof {
    const message = { ...baseProof } as Proof;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = String(object.created);
    } else {
      message.created = "";
    }
    if (object.proof_purpose !== undefined && object.proof_purpose !== null) {
      message.proof_purpose = String(object.proof_purpose);
    } else {
      message.proof_purpose = "";
    }
    if (
      object.verification_method !== undefined &&
      object.verification_method !== null
    ) {
      message.verification_method = String(object.verification_method);
    } else {
      message.verification_method = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature);
    } else {
      message.signature = "";
    }
    return message;
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.created !== undefined && (obj.created = message.created);
    message.proof_purpose !== undefined &&
      (obj.proof_purpose = message.proof_purpose);
    message.verification_method !== undefined &&
      (obj.verification_method = message.verification_method);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = { ...baseProof } as Proof;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = "";
    }
    if (object.proof_purpose !== undefined && object.proof_purpose !== null) {
      message.proof_purpose = object.proof_purpose;
    } else {
      message.proof_purpose = "";
    }
    if (
      object.verification_method !== undefined &&
      object.verification_method !== null
    ) {
      message.verification_method = object.verification_method;
    } else {
      message.verification_method = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = "";
    }
    return message;
  },
};

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
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
