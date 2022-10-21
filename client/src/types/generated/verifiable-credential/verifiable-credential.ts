/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';
import { Timestamp } from '../google/protobuf/timestamp';

export const protobufPackage = 'millicent.cash.verifiablecredential';

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
  issuanceDate?: Date;
  /** RegulatorCredentialSubject represents a credential that identify a financial regulator */
  regulatorCred?: RegulatorCredentialSubject | undefined;
  /**
   * The value of license_cred represents a registration issued by a regulatory
   * body. The license is used to describe the entity that require a license.
   */
  registrationCred?: RegistrationCredentialSubject | undefined;
  /**
   * The value of license_cred represents a license issued by a regulatory
   * body. The license can be used to define authorized actions by the
   * credential subject
   */
  licenseCred?: LicenseCredentialSubject | undefined;
  /**
   * The value of user_cred represents a privacy respecting verifiable
   * credential. This is used when adding sensitive information about
   * a credential subject. It allows the credential subject to create
   * and validate proofs about what is contained in a credential without
   * revealing the values contained in the credential otherwise known as
   * selective disclosure.
   */
  userCred?: UserCredentialSubject | undefined;
  /**
   * One or more cryptographic proofs that can be used to detect tampering
   * and verify the authorship of a credential or presentation. The specific
   * method used for an embedded proof MUST be included using the type property.
   */
  proof?: Proof;
}

/**
 * UserCredentialSubject represents a privacy respecting
 * credential_subject of a verifiable credential. This
 * is used as an on chain verifiable credential.
 */
export interface UserCredentialSubject {
  id: string;
  root: string;
  isVerified: boolean;
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
  licenseType: string;
  /** The country field represents the country the credential was issued in. */
  country: string;
  /** The authority field represents a licensing authority that issued the LicenseCredential */
  authority: string;
  /**
   * The circulation_limit represents the amount of a token
   * that can be minted by a credential_subject.
   */
  circulationLimit?: Coin;
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
  address?: Address;
  ids: Id[];
  legalPersons: LegalPerson[];
}

export interface LegalPerson {
  names: Name[];
  ctryReg: string;
}

export interface Name {
  name: string;
  type: string;
}

export interface Address {
  addrType: string;
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
  proofPurpose: string;
  verificationMethod: string;
  signature: string;
}

function createBaseVerifiableCredential(): VerifiableCredential {
  return {
    context: [],
    id: '',
    type: [],
    issuer: '',
    issuanceDate: undefined,
    regulatorCred: undefined,
    registrationCred: undefined,
    licenseCred: undefined,
    userCred: undefined,
    proof: undefined,
  };
}

export const VerifiableCredential = {
  encode(
    message: VerifiableCredential,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.type) {
      writer.uint32(26).string(v!);
    }
    if (message.issuer !== '') {
      writer.uint32(34).string(message.issuer);
    }
    if (message.issuanceDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.issuanceDate),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.regulatorCred !== undefined) {
      RegulatorCredentialSubject.encode(
        message.regulatorCred,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.registrationCred !== undefined) {
      RegistrationCredentialSubject.encode(
        message.registrationCred,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.licenseCred !== undefined) {
      LicenseCredentialSubject.encode(
        message.licenseCred,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.userCred !== undefined) {
      UserCredentialSubject.encode(
        message.userCred,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VerifiableCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifiableCredential();
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
          message.issuanceDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.regulatorCred = RegulatorCredentialSubject.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.registrationCred = RegistrationCredentialSubject.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.licenseCred = LicenseCredentialSubject.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.userCred = UserCredentialSubject.decode(
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
    return {
      context: Array.isArray(object?.context)
        ? object.context.map((e: any) => String(e))
        : [],
      id: isSet(object.id) ? String(object.id) : '',
      type: Array.isArray(object?.type)
        ? object.type.map((e: any) => String(e))
        : [],
      issuer: isSet(object.issuer) ? String(object.issuer) : '',
      issuanceDate: isSet(object.issuanceDate)
        ? fromJsonTimestamp(object.issuanceDate)
        : undefined,
      regulatorCred: isSet(object.regulatorCred)
        ? RegulatorCredentialSubject.fromJSON(object.regulatorCred)
        : undefined,
      registrationCred: isSet(object.registrationCred)
        ? RegistrationCredentialSubject.fromJSON(object.registrationCred)
        : undefined,
      licenseCred: isSet(object.licenseCred)
        ? LicenseCredentialSubject.fromJSON(object.licenseCred)
        : undefined,
      userCred: isSet(object.userCred)
        ? UserCredentialSubject.fromJSON(object.userCred)
        : undefined,
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
    };
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
    message.issuanceDate !== undefined &&
      (obj.issuanceDate = message.issuanceDate.toISOString());
    message.regulatorCred !== undefined &&
      (obj.regulatorCred = message.regulatorCred
        ? RegulatorCredentialSubject.toJSON(message.regulatorCred)
        : undefined);
    message.registrationCred !== undefined &&
      (obj.registrationCred = message.registrationCred
        ? RegistrationCredentialSubject.toJSON(message.registrationCred)
        : undefined);
    message.licenseCred !== undefined &&
      (obj.licenseCred = message.licenseCred
        ? LicenseCredentialSubject.toJSON(message.licenseCred)
        : undefined);
    message.userCred !== undefined &&
      (obj.userCred = message.userCred
        ? UserCredentialSubject.toJSON(message.userCred)
        : undefined);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VerifiableCredential>, I>>(
    object: I
  ): VerifiableCredential {
    const message = createBaseVerifiableCredential();
    message.context = object.context?.map((e) => e) || [];
    message.id = object.id ?? '';
    message.type = object.type?.map((e) => e) || [];
    message.issuer = object.issuer ?? '';
    message.issuanceDate = object.issuanceDate ?? undefined;
    message.regulatorCred =
      object.regulatorCred !== undefined && object.regulatorCred !== null
        ? RegulatorCredentialSubject.fromPartial(object.regulatorCred)
        : undefined;
    message.registrationCred =
      object.registrationCred !== undefined && object.registrationCred !== null
        ? RegistrationCredentialSubject.fromPartial(object.registrationCred)
        : undefined;
    message.licenseCred =
      object.licenseCred !== undefined && object.licenseCred !== null
        ? LicenseCredentialSubject.fromPartial(object.licenseCred)
        : undefined;
    message.userCred =
      object.userCred !== undefined && object.userCred !== null
        ? UserCredentialSubject.fromPartial(object.userCred)
        : undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? Proof.fromPartial(object.proof)
        : undefined;
    return message;
  },
};

function createBaseUserCredentialSubject(): UserCredentialSubject {
  return { id: '', root: '', isVerified: false };
}

export const UserCredentialSubject = {
  encode(
    message: UserCredentialSubject,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.root !== '') {
      writer.uint32(18).string(message.root);
    }
    if (message.isVerified === true) {
      writer.uint32(24).bool(message.isVerified);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserCredentialSubject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCredentialSubject();
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
          message.isVerified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserCredentialSubject {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      root: isSet(object.root) ? String(object.root) : '',
      isVerified: isSet(object.isVerified) ? Boolean(object.isVerified) : false,
    };
  },

  toJSON(message: UserCredentialSubject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.root !== undefined && (obj.root = message.root);
    message.isVerified !== undefined && (obj.isVerified = message.isVerified);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserCredentialSubject>, I>>(
    object: I
  ): UserCredentialSubject {
    const message = createBaseUserCredentialSubject();
    message.id = object.id ?? '';
    message.root = object.root ?? '';
    message.isVerified = object.isVerified ?? false;
    return message;
  },
};

function createBaseLicenseCredentialSubject(): LicenseCredentialSubject {
  return {
    id: '',
    licenseType: '',
    country: '',
    authority: '',
    circulationLimit: undefined,
  };
}

export const LicenseCredentialSubject = {
  encode(
    message: LicenseCredentialSubject,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.licenseType !== '') {
      writer.uint32(18).string(message.licenseType);
    }
    if (message.country !== '') {
      writer.uint32(26).string(message.country);
    }
    if (message.authority !== '') {
      writer.uint32(34).string(message.authority);
    }
    if (message.circulationLimit !== undefined) {
      Coin.encode(message.circulationLimit, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LicenseCredentialSubject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLicenseCredentialSubject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.licenseType = reader.string();
          break;
        case 3:
          message.country = reader.string();
          break;
        case 4:
          message.authority = reader.string();
          break;
        case 5:
          message.circulationLimit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LicenseCredentialSubject {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      licenseType: isSet(object.licenseType) ? String(object.licenseType) : '',
      country: isSet(object.country) ? String(object.country) : '',
      authority: isSet(object.authority) ? String(object.authority) : '',
      circulationLimit: isSet(object.circulationLimit)
        ? Coin.fromJSON(object.circulationLimit)
        : undefined,
    };
  },

  toJSON(message: LicenseCredentialSubject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.licenseType !== undefined &&
      (obj.licenseType = message.licenseType);
    message.country !== undefined && (obj.country = message.country);
    message.authority !== undefined && (obj.authority = message.authority);
    message.circulationLimit !== undefined &&
      (obj.circulationLimit = message.circulationLimit
        ? Coin.toJSON(message.circulationLimit)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LicenseCredentialSubject>, I>>(
    object: I
  ): LicenseCredentialSubject {
    const message = createBaseLicenseCredentialSubject();
    message.id = object.id ?? '';
    message.licenseType = object.licenseType ?? '';
    message.country = object.country ?? '';
    message.authority = object.authority ?? '';
    message.circulationLimit =
      object.circulationLimit !== undefined && object.circulationLimit !== null
        ? Coin.fromPartial(object.circulationLimit)
        : undefined;
    return message;
  },
};

function createBaseRegulatorCredentialSubject(): RegulatorCredentialSubject {
  return { id: '', name: '', country: '' };
}

export const RegulatorCredentialSubject = {
  encode(
    message: RegulatorCredentialSubject,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.country !== '') {
      writer.uint32(26).string(message.country);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegulatorCredentialSubject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegulatorCredentialSubject();
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
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      country: isSet(object.country) ? String(object.country) : '',
    };
  },

  toJSON(message: RegulatorCredentialSubject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegulatorCredentialSubject>, I>>(
    object: I
  ): RegulatorCredentialSubject {
    const message = createBaseRegulatorCredentialSubject();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.country = object.country ?? '';
    return message;
  },
};

function createBaseRegistrationCredentialSubject(): RegistrationCredentialSubject {
  return { id: '', address: undefined, ids: [], legalPersons: [] };
}

export const RegistrationCredentialSubject = {
  encode(
    message: RegistrationCredentialSubject,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ids) {
      Id.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.legalPersons) {
      LegalPerson.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegistrationCredentialSubject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationCredentialSubject();
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
          message.legalPersons.push(
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
    return {
      id: isSet(object.id) ? String(object.id) : '',
      address: isSet(object.address)
        ? Address.fromJSON(object.address)
        : undefined,
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => Id.fromJSON(e))
        : [],
      legalPersons: Array.isArray(object?.legalPersons)
        ? object.legalPersons.map((e: any) => LegalPerson.fromJSON(e))
        : [],
    };
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
    if (message.legalPersons) {
      obj.legalPersons = message.legalPersons.map((e) =>
        e ? LegalPerson.toJSON(e) : undefined
      );
    } else {
      obj.legalPersons = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegistrationCredentialSubject>, I>>(
    object: I
  ): RegistrationCredentialSubject {
    const message = createBaseRegistrationCredentialSubject();
    message.id = object.id ?? '';
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    message.ids = object.ids?.map((e) => Id.fromPartial(e)) || [];
    message.legalPersons =
      object.legalPersons?.map((e) => LegalPerson.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLegalPerson(): LegalPerson {
  return { names: [], ctryReg: '' };
}

export const LegalPerson = {
  encode(
    message: LegalPerson,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.names) {
      Name.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.ctryReg !== '') {
      writer.uint32(18).string(message.ctryReg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegalPerson {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegalPerson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.names.push(Name.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ctryReg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegalPerson {
    return {
      names: Array.isArray(object?.names)
        ? object.names.map((e: any) => Name.fromJSON(e))
        : [],
      ctryReg: isSet(object.ctryReg) ? String(object.ctryReg) : '',
    };
  },

  toJSON(message: LegalPerson): unknown {
    const obj: any = {};
    if (message.names) {
      obj.names = message.names.map((e) => (e ? Name.toJSON(e) : undefined));
    } else {
      obj.names = [];
    }
    message.ctryReg !== undefined && (obj.ctryReg = message.ctryReg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegalPerson>, I>>(
    object: I
  ): LegalPerson {
    const message = createBaseLegalPerson();
    message.names = object.names?.map((e) => Name.fromPartial(e)) || [];
    message.ctryReg = object.ctryReg ?? '';
    return message;
  },
};

function createBaseName(): Name {
  return { name: '', type: '' };
}

export const Name = {
  encode(message: Name, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== '') {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Name {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseName();
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
    return {
      name: isSet(object.name) ? String(object.name) : '',
      type: isSet(object.type) ? String(object.type) : '',
    };
  },

  toJSON(message: Name): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Name>, I>>(object: I): Name {
    const message = createBaseName();
    message.name = object.name ?? '';
    message.type = object.type ?? '';
    return message;
  },
};

function createBaseAddress(): Address {
  return {
    addrType: '',
    thfare: '',
    premise: '',
    postcode: '',
    locality: '',
    country: '',
  };
}

export const Address = {
  encode(
    message: Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.addrType !== '') {
      writer.uint32(10).string(message.addrType);
    }
    if (message.thfare !== '') {
      writer.uint32(18).string(message.thfare);
    }
    if (message.premise !== '') {
      writer.uint32(26).string(message.premise);
    }
    if (message.postcode !== '') {
      writer.uint32(34).string(message.postcode);
    }
    if (message.locality !== '') {
      writer.uint32(42).string(message.locality);
    }
    if (message.country !== '') {
      writer.uint32(50).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addrType = reader.string();
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
    return {
      addrType: isSet(object.addrType) ? String(object.addrType) : '',
      thfare: isSet(object.thfare) ? String(object.thfare) : '',
      premise: isSet(object.premise) ? String(object.premise) : '',
      postcode: isSet(object.postcode) ? String(object.postcode) : '',
      locality: isSet(object.locality) ? String(object.locality) : '',
      country: isSet(object.country) ? String(object.country) : '',
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.addrType !== undefined && (obj.addrType = message.addrType);
    message.thfare !== undefined && (obj.thfare = message.thfare);
    message.premise !== undefined && (obj.premise = message.premise);
    message.postcode !== undefined && (obj.postcode = message.postcode);
    message.locality !== undefined && (obj.locality = message.locality);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.addrType = object.addrType ?? '';
    message.thfare = object.thfare ?? '';
    message.premise = object.premise ?? '';
    message.postcode = object.postcode ?? '';
    message.locality = object.locality ?? '';
    message.country = object.country ?? '';
    return message;
  },
};

function createBaseId(): Id {
  return { id: '', type: '' };
}

export const Id = {
  encode(message: Id, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== '') {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Id {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseId();
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
    return {
      id: isSet(object.id) ? String(object.id) : '',
      type: isSet(object.type) ? String(object.type) : '',
    };
  },

  toJSON(message: Id): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Id>, I>>(object: I): Id {
    const message = createBaseId();
    message.id = object.id ?? '';
    message.type = object.type ?? '';
    return message;
  },
};

function createBaseProof(): Proof {
  return {
    type: '',
    created: '',
    proofPurpose: '',
    verificationMethod: '',
    signature: '',
  };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== '') {
      writer.uint32(10).string(message.type);
    }
    if (message.created !== '') {
      writer.uint32(18).string(message.created);
    }
    if (message.proofPurpose !== '') {
      writer.uint32(26).string(message.proofPurpose);
    }
    if (message.verificationMethod !== '') {
      writer.uint32(34).string(message.verificationMethod);
    }
    if (message.signature !== '') {
      writer.uint32(42).string(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
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
          message.proofPurpose = reader.string();
          break;
        case 4:
          message.verificationMethod = reader.string();
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
    return {
      type: isSet(object.type) ? String(object.type) : '',
      created: isSet(object.created) ? String(object.created) : '',
      proofPurpose: isSet(object.proofPurpose)
        ? String(object.proofPurpose)
        : '',
      verificationMethod: isSet(object.verificationMethod)
        ? String(object.verificationMethod)
        : '',
      signature: isSet(object.signature) ? String(object.signature) : '',
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.created !== undefined && (obj.created = message.created);
    message.proofPurpose !== undefined &&
      (obj.proofPurpose = message.proofPurpose);
    message.verificationMethod !== undefined &&
      (obj.verificationMethod = message.verificationMethod);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    message.type = object.type ?? '';
    message.created = object.created ?? '';
    message.proofPurpose = object.proofPurpose ?? '';
    message.verificationMethod = object.verificationMethod ?? '';
    message.signature = object.signature ?? '';
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
  } else if (typeof o === 'string') {
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
