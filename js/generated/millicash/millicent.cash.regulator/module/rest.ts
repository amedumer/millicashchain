/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProtobufAny {
  "@type"?: string;
}

export type RegulatorMsgIssueLicenseCredentialResponse = object;

export type RegulatorMsgIssueRegistrationCredentialResponse = object;

export type RegulatorMsgIssueRegulatorCredentialResponse = object;

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

export interface VerifiablecredentialAddress {
  addr_type?: string;
  thfare?: string;
  premise?: string;
  postcode?: string;
  locality?: string;
  country?: string;
}

export interface VerifiablecredentialId {
  id?: string;
  type?: string;
}

export interface VerifiablecredentialLegalPerson {
  names?: VerifiablecredentialName[];
  ctry_reg?: string;
}

/**
* The LicenseCredential message makes reference to the classes of crypto assets
described in MiCA, but the license could easily be adopted as proof of
authority to issue various types of crypto or virtual assets. The LicenseCredential
is used a a credential_subject in a verifiable credential.
*/
export interface VerifiablecredentialLicenseCredentialSubject {
  id?: string;

  /**
   * The license type is defined by the MICA regulation. This will
   * be used to identify different asset classes of tokens being issuedi
   * by the credential_subject.
   */
  license_type?: string;

  /** The country field represents the country the credential was issued in. */
  country?: string;
  authority?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  circulation_limit?: V1Beta1Coin;
}

export interface VerifiablecredentialName {
  name?: string;
  type?: string;
}

/**
* The Proof message represents a cryptographic proof that the 
credential has not been tampered with or changed without the issuersi
knowledge. This can be used to verify the verifiable credential.
*/
export interface VerifiablecredentialProof {
  type?: string;
  created?: string;
  proof_purpose?: string;
  verification_method?: string;
  signature?: string;
}

export interface VerifiablecredentialRegistrationCredentialSubject {
  id?: string;
  address?: VerifiablecredentialAddress;
  ids?: VerifiablecredentialId[];
  legal_persons?: VerifiablecredentialLegalPerson[];
}

export interface VerifiablecredentialRegulatorCredentialSubject {
  id?: string;
  name?: string;

  /** The country field represents the country the credential was issued in. */
  country?: string;
}

/**
* UserCredentialSubject represents a privacy respecting
credential_subject of a verifiable credential. This
is used as an on chain verifiable credential.
*/
export interface VerifiablecredentialUserCredentialSubject {
  id?: string;
  root?: string;
  is_verified?: boolean;
}

export interface VerifiablecredentialVerifiableCredential {
  /** @context is spec for verifiable credential. */
  context?: string[];

  /**
   * The value of the id property MUST be a single URI. It is RECOMMENDED
   * that the URI in the id be one which, if dereferenced, results in a
   * document containing machine-readable information about the id.
   */
  id?: string;

  /**
   * The value of the type property MUST be, or map to (through interpretation
   * of the @context property), one or more URIs. If more than one URI is
   * provided, the URIs MUST be interpreted as an unordered set.
   */
  type?: string[];

  /**
   * The value of the issuer property MUST be either a URI or an object
   * containing an id property. It is RECOMMENDED that the URI in the issuer
   * or its id be one which, if dereferenced, results in a document containing
   * machine-readable information about the issuer that can be used to verify
   * the information expressed in the credential.
   */
  issuer?: string;

  /**
   * A credential MUST have an issuanceDate property. The value of the issuanceDate
   * property MUST be a string value of an [RFC3339] combined date and time string
   * representing the date and time the credential becomes valid, which could
   * be a date and time in the future. Note that this value represents the earliest
   * point in time at which the information associated with the credentialSubject
   * property becomes valid.
   * @format date-time
   */
  issuance_date?: string;
  regulator_cred?: VerifiablecredentialRegulatorCredentialSubject;
  registration_cred?: VerifiablecredentialRegistrationCredentialSubject;

  /**
   * The LicenseCredential message makes reference to the classes of crypto assets
   * described in MiCA, but the license could easily be adopted as proof of
   * authority to issue various types of crypto or virtual assets. The LicenseCredential
   * is used a a credential_subject in a verifiable credential.
   */
  license_cred?: VerifiablecredentialLicenseCredentialSubject;

  /**
   * UserCredentialSubject represents a privacy respecting
   * credential_subject of a verifiable credential. This
   * is used as an on chain verifiable credential.
   */
  user_cred?: VerifiablecredentialUserCredentialSubject;

  /**
   * The Proof message represents a cryptographic proof that the
   * credential has not been tampered with or changed without the issuersi
   * knowledge. This can be used to verify the verifiable credential.
   */
  proof?: VerifiablecredentialProof;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title regulator/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {}
