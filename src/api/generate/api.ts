/* tslint:disable */
/* eslint-disable */
/**
 * shared-tw API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export enum Cities {
    Klu = 'KLU',
    Tph = 'TPH',
    Tpe = 'TPE',
    Tyc = 'TYC',
    Hsh = 'HSH',
    Hsc = 'HSC',
    Mal = 'MAL',
    Txg = 'TXG',
    Cwh = 'CWH',
    Nto = 'NTO',
    Ylh = 'YLH',
    Chy = 'CHY',
    Cyi = 'CYI',
    Tnn = 'TNN',
    Khh = 'KHH',
    Lnn = 'LNN',
    Iln = 'ILN',
    Peh = 'PEH',
    Kmn = 'KMN',
    Iuh = 'IUH',
    Ttt = 'TTT',
    Hwa = 'HWA'
}

/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export enum ContactMethods {
    NotSet = '_not_set_',
    Line = 'line',
    Fb = 'fb',
    Email = 'email'
}

/**
 * 
 * @export
 * @interface Donator
 */
export interface Donator {
    /**
     * 
     * @type {string}
     * @memberof Donator
     */
    phone: string;
    /**
     * 
     * @type {ContactMethods}
     * @memberof Donator
     */
    other_contact_method: ContactMethods;
    /**
     * 
     * @type {string}
     * @memberof Donator
     */
    other_contact: string;
    /**
     * 
     * @type {number}
     * @memberof Donator
     */
    id: number;
}
/**
 * 
 * @export
 * @interface DonatorCreation
 */
export interface DonatorCreation {
    /**
     * 
     * @type {string}
     * @memberof DonatorCreation
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof DonatorCreation
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof DonatorCreation
     */
    confirmed_password?: string;
    /**
     * 
     * @type {string}
     * @memberof DonatorCreation
     */
    phone: string;
    /**
     * 
     * @type {ContactMethods}
     * @memberof DonatorCreation
     */
    other_contact_method: ContactMethods;
    /**
     * 
     * @type {string}
     * @memberof DonatorCreation
     */
    other_contact: string;
    /**
     * 
     * @type {string}
     * @memberof DonatorCreation
     */
    email: string;
}
/**
 * 
 * @export
 * @interface GroupedRequiredItems
 */
export interface GroupedRequiredItems {
    /**
     * 
     * @type {OrganizationSummary}
     * @memberof GroupedRequiredItems
     */
    organization: OrganizationSummary;
    /**
     * 
     * @type {Array<RequiredItem>}
     * @memberof GroupedRequiredItems
     */
    items?: Array<RequiredItem>;
}
/**
 * 
 * @export
 * @interface JWTToken
 */
export interface JWTToken {
    /**
     * 
     * @type {string}
     * @memberof JWTToken
     */
    access: string;
    /**
     * 
     * @type {string}
     * @memberof JWTToken
     */
    refresh?: string;
}
/**
 * 
 * @export
 * @interface JWTTokenCreation
 */
export interface JWTTokenCreation {
    /**
     * 
     * @type {string}
     * @memberof JWTTokenCreation
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof JWTTokenCreation
     */
    password: string;
}
/**
 * 
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    name: string;
    /**
     * 
     * @type {OrganizationTypes}
     * @memberof Organization
     */
    type: OrganizationTypes;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    type_other: string;
    /**
     * 
     * @type {Cities}
     * @memberof Organization
     */
    city: Cities;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    phone: string;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    office_hours: string;
    /**
     * 
     * @type {ContactMethods}
     * @memberof Organization
     */
    other_contact_method: ContactMethods;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    other_contact: string;
    /**
     * 
     * @type {number}
     * @memberof Organization
     */
    id: number;
}
/**
 * 
 * @export
 * @interface OrganizationCreation
 */
export interface OrganizationCreation {
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreation
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreation
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreation
     */
    confirmed_password?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreation
     */
    name: string;
    /**
     * 
     * @type {OrganizationTypes}
     * @memberof OrganizationCreation
     */
    type: OrganizationTypes;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreation
     */
    type_other: string;
    /**
     * 
     * @type {Cities}
     * @memberof OrganizationCreation
     */
    city: Cities;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreation
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreation
     */
    phone: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreation
     */
    office_hours: string;
    /**
     * 
     * @type {ContactMethods}
     * @memberof OrganizationCreation
     */
    other_contact_method: ContactMethods;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreation
     */
    other_contact: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCreation
     */
    email: string;
}
/**
 * 
 * @export
 * @interface OrganizationSummary
 */
export interface OrganizationSummary {
    /**
     * 
     * @type {string}
     * @memberof OrganizationSummary
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationSummary
     */
    name: string;
    /**
     * 
     * @type {Cities}
     * @memberof OrganizationSummary
     */
    city: Cities;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export enum OrganizationTypes {
    Hospital = 'hospital',
    FireDepartment = 'fire_department',
    PoliceStation = 'police_station',
    Other = 'other'
}

/**
 * 
 * @export
 * @interface PaginatedResponseSchemaGroupedRequiredItems
 */
export interface PaginatedResponseSchemaGroupedRequiredItems {
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseSchemaGroupedRequiredItems
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedResponseSchemaGroupedRequiredItems
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedResponseSchemaGroupedRequiredItems
     */
    previous?: string;
    /**
     * 
     * @type {Array<GroupedRequiredItems>}
     * @memberof PaginatedResponseSchemaGroupedRequiredItems
     */
    results: Array<GroupedRequiredItems>;
}
/**
 * 
 * @export
 * @interface PaginatedResponseSchemaRequiredItem
 */
export interface PaginatedResponseSchemaRequiredItem {
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseSchemaRequiredItem
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedResponseSchemaRequiredItem
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedResponseSchemaRequiredItem
     */
    previous?: string;
    /**
     * 
     * @type {Array<RequiredItem>}
     * @memberof PaginatedResponseSchemaRequiredItem
     */
    results: Array<RequiredItem>;
}
/**
 * 
 * @export
 * @interface RequiredItem
 */
export interface RequiredItem {
    /**
     * 
     * @type {string}
     * @memberof RequiredItem
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof RequiredItem
     */
    amount: number;
    /**
     * 
     * @type {Units}
     * @memberof RequiredItem
     */
    unit: Units;
    /**
     * 
     * @type {string}
     * @memberof RequiredItem
     */
    ended_date: string;
    /**
     * 
     * @type {string}
     * @memberof RequiredItem
     */
    id: string;
}
/**
 * 
 * @export
 * @interface RequiredItemCreation
 */
export interface RequiredItemCreation {
    /**
     * 
     * @type {string}
     * @memberof RequiredItemCreation
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof RequiredItemCreation
     */
    amount: number;
    /**
     * 
     * @type {Units}
     * @memberof RequiredItemCreation
     */
    unit: Units;
    /**
     * 
     * @type {string}
     * @memberof RequiredItemCreation
     */
    ended_date: string;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export enum Units {
    Piece = 'piece',
    Set = 'set'
}


/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Jwt Token
         * @param {JWTTokenCreation} jWTTokenCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createJwtToken: async (jWTTokenCreation: JWTTokenCreation, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'jWTTokenCreation' is not null or undefined
            assertParamExists('createJwtToken', 'jWTTokenCreation', jWTTokenCreation)
            const localVarPath = `/auth/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jWTTokenCreation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Refresh Jwt Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshJwtToken: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/token/refresh`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication RefreshTokenCookieAuth required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Jwt Token
         * @param {JWTTokenCreation} jWTTokenCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createJwtToken(jWTTokenCreation: JWTTokenCreation, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JWTToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createJwtToken(jWTTokenCreation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Refresh Jwt Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshJwtToken(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JWTToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refreshJwtToken(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Jwt Token
         * @param {JWTTokenCreation} jWTTokenCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createJwtToken(jWTTokenCreation: JWTTokenCreation, options?: any): AxiosPromise<JWTToken> {
            return localVarFp.createJwtToken(jWTTokenCreation, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Refresh Jwt Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshJwtToken(options?: any): AxiosPromise<JWTToken> {
            return localVarFp.refreshJwtToken(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * 
     * @summary Create Jwt Token
     * @param {JWTTokenCreation} jWTTokenCreation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public createJwtToken(jWTTokenCreation: JWTTokenCreation, options?: any) {
        return AuthenticationApiFp(this.configuration).createJwtToken(jWTTokenCreation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Refresh Jwt Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public refreshJwtToken(options?: any) {
        return AuthenticationApiFp(this.configuration).refreshJwtToken(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * OAuthApi - axios parameter creator
 * @export
 */
export const OAuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Oauth Line Login
         * @param {string} next 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oauthLineLogin: async (next: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'next' is not null or undefined
            assertParamExists('oauthLineLogin', 'next', next)
            const localVarPath = `/oauth/line/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (next !== undefined) {
                localVarQueryParameter['next'] = next;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OAuthApi - functional programming interface
 * @export
 */
export const OAuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OAuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Oauth Line Login
         * @param {string} next 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async oauthLineLogin(next: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JWTToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.oauthLineLogin(next, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OAuthApi - factory interface
 * @export
 */
export const OAuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OAuthApiFp(configuration)
    return {
        /**
         * 
         * @summary Oauth Line Login
         * @param {string} next 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        oauthLineLogin(next: string, options?: any): AxiosPromise<JWTToken> {
            return localVarFp.oauthLineLogin(next, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OAuthApi - object-oriented interface
 * @export
 * @class OAuthApi
 * @extends {BaseAPI}
 */
export class OAuthApi extends BaseAPI {
    /**
     * 
     * @summary Oauth Line Login
     * @param {string} next 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuthApi
     */
    public oauthLineLogin(next: string, options?: any) {
        return OAuthApiFp(this.configuration).oauthLineLogin(next, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * OrganizationApi - axios parameter creator
 * @export
 */
export const OrganizationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Organization Required Item
         * @param {RequiredItemCreation} requiredItemCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrganizationRequiredItem: async (requiredItemCreation: RequiredItemCreation, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'requiredItemCreation' is not null or undefined
            assertParamExists('createOrganizationRequiredItem', 'requiredItemCreation', requiredItemCreation)
            const localVarPath = `/organization/required-items`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTAuthUserBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requiredItemCreation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List Organization Required Items
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOrganizationRequiredItems: async (page?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/organization/required-items`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTAuthUserBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganizationApi - functional programming interface
 * @export
 */
export const OrganizationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Organization Required Item
         * @param {RequiredItemCreation} requiredItemCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOrganizationRequiredItem(requiredItemCreation: RequiredItemCreation, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequiredItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOrganizationRequiredItem(requiredItemCreation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List Organization Required Items
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOrganizationRequiredItems(page?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedResponseSchemaRequiredItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listOrganizationRequiredItems(page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizationApi - factory interface
 * @export
 */
export const OrganizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizationApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Organization Required Item
         * @param {RequiredItemCreation} requiredItemCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrganizationRequiredItem(requiredItemCreation: RequiredItemCreation, options?: any): AxiosPromise<RequiredItem> {
            return localVarFp.createOrganizationRequiredItem(requiredItemCreation, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Organization Required Items
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOrganizationRequiredItems(page?: number, options?: any): AxiosPromise<PaginatedResponseSchemaRequiredItem> {
            return localVarFp.listOrganizationRequiredItems(page, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrganizationApi - object-oriented interface
 * @export
 * @class OrganizationApi
 * @extends {BaseAPI}
 */
export class OrganizationApi extends BaseAPI {
    /**
     * 
     * @summary Create Organization Required Item
     * @param {RequiredItemCreation} requiredItemCreation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationApi
     */
    public createOrganizationRequiredItem(requiredItemCreation: RequiredItemCreation, options?: any) {
        return OrganizationApiFp(this.configuration).createOrganizationRequiredItem(requiredItemCreation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Organization Required Items
     * @param {number} [page] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationApi
     */
    public listOrganizationRequiredItems(page?: number, options?: any) {
        return OrganizationApiFp(this.configuration).listOrganizationRequiredItems(page, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * PublicApi - axios parameter creator
 * @export
 */
export const PublicApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary List Required Items
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRequiredItems: async (page?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/required-items`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PublicApi - functional programming interface
 * @export
 */
export const PublicApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PublicApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary List Required Items
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRequiredItems(page?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedResponseSchemaGroupedRequiredItems>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRequiredItems(page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PublicApi - factory interface
 * @export
 */
export const PublicApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PublicApiFp(configuration)
    return {
        /**
         * 
         * @summary List Required Items
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRequiredItems(page?: number, options?: any): AxiosPromise<PaginatedResponseSchemaGroupedRequiredItems> {
            return localVarFp.listRequiredItems(page, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PublicApi - object-oriented interface
 * @export
 * @class PublicApi
 * @extends {BaseAPI}
 */
export class PublicApi extends BaseAPI {
    /**
     * 
     * @summary List Required Items
     * @param {number} [page] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PublicApi
     */
    public listRequiredItems(page?: number, options?: any) {
        return PublicApiFp(this.configuration).listRequiredItems(page, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * RegisterApi - axios parameter creator
 * @export
 */
export const RegisterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Donator
         * @param {DonatorCreation} donatorCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDonator: async (donatorCreation: DonatorCreation, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'donatorCreation' is not null or undefined
            assertParamExists('createDonator', 'donatorCreation', donatorCreation)
            const localVarPath = `/register/donator`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTAuthBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(donatorCreation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create Organization
         * @param {OrganizationCreation} organizationCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrganization: async (organizationCreation: OrganizationCreation, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationCreation' is not null or undefined
            assertParamExists('createOrganization', 'organizationCreation', organizationCreation)
            const localVarPath = `/register/organization`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWTAuthBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(organizationCreation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RegisterApi - functional programming interface
 * @export
 */
export const RegisterApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RegisterApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Donator
         * @param {DonatorCreation} donatorCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDonator(donatorCreation: DonatorCreation, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Donator>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDonator(donatorCreation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create Organization
         * @param {OrganizationCreation} organizationCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOrganization(organizationCreation: OrganizationCreation, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Organization>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOrganization(organizationCreation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RegisterApi - factory interface
 * @export
 */
export const RegisterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RegisterApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Donator
         * @param {DonatorCreation} donatorCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDonator(donatorCreation: DonatorCreation, options?: any): AxiosPromise<Donator> {
            return localVarFp.createDonator(donatorCreation, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Organization
         * @param {OrganizationCreation} organizationCreation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrganization(organizationCreation: OrganizationCreation, options?: any): AxiosPromise<Organization> {
            return localVarFp.createOrganization(organizationCreation, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RegisterApi - object-oriented interface
 * @export
 * @class RegisterApi
 * @extends {BaseAPI}
 */
export class RegisterApi extends BaseAPI {
    /**
     * 
     * @summary Create Donator
     * @param {DonatorCreation} donatorCreation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegisterApi
     */
    public createDonator(donatorCreation: DonatorCreation, options?: any) {
        return RegisterApiFp(this.configuration).createDonator(donatorCreation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Organization
     * @param {OrganizationCreation} organizationCreation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegisterApi
     */
    public createOrganization(organizationCreation: OrganizationCreation, options?: any) {
        return RegisterApiFp(this.configuration).createOrganization(organizationCreation, options).then((request) => request(this.axios, this.basePath));
    }
}


