import { Reader, Writer } from 'protobufjs/minimal';
import { Params } from '../registry/params';
import { Consumer } from '../registry/consumer';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Subscription } from '../registry/subscription';
export declare const protobufPackage = "sainoe.registry.registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetConsumerRequest {
    index: string;
}
export interface QueryGetConsumerResponse {
    consumer: Consumer | undefined;
}
export interface QueryAllConsumerRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllConsumerResponse {
    consumer: Consumer[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSubscriptionRequest {
    index: string;
}
export interface QueryGetSubscriptionResponse {
    subscription: Subscription | undefined;
}
export interface QueryGetSubscriptionByValidatorRequest {
    index: string;
}
export interface QueryGetSubscriptionByValidatorResponse {
    subscription: Subscription[];
}
export interface QueryAllSubscriptionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSubscriptionResponse {
    subscription: Subscription[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetConsumerRequest: {
    encode(message: QueryGetConsumerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetConsumerRequest;
    fromJSON(object: any): QueryGetConsumerRequest;
    toJSON(message: QueryGetConsumerRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetConsumerRequest>): QueryGetConsumerRequest;
};
export declare const QueryGetConsumerResponse: {
    encode(message: QueryGetConsumerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetConsumerResponse;
    fromJSON(object: any): QueryGetConsumerResponse;
    toJSON(message: QueryGetConsumerResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetConsumerResponse>): QueryGetConsumerResponse;
};
export declare const QueryAllConsumerRequest: {
    encode(message: QueryAllConsumerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllConsumerRequest;
    fromJSON(object: any): QueryAllConsumerRequest;
    toJSON(message: QueryAllConsumerRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllConsumerRequest>): QueryAllConsumerRequest;
};
export declare const QueryAllConsumerResponse: {
    encode(message: QueryAllConsumerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllConsumerResponse;
    fromJSON(object: any): QueryAllConsumerResponse;
    toJSON(message: QueryAllConsumerResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllConsumerResponse>): QueryAllConsumerResponse;
};
export declare const QueryGetSubscriptionRequest: {
    encode(message: QueryGetSubscriptionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSubscriptionRequest;
    fromJSON(object: any): QueryGetSubscriptionRequest;
    toJSON(message: QueryGetSubscriptionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSubscriptionRequest>): QueryGetSubscriptionRequest;
};
export declare const QueryGetSubscriptionResponse: {
    encode(message: QueryGetSubscriptionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSubscriptionResponse;
    fromJSON(object: any): QueryGetSubscriptionResponse;
    toJSON(message: QueryGetSubscriptionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSubscriptionResponse>): QueryGetSubscriptionResponse;
};
export declare const QueryGetSubscriptionByValidatorRequest: {
    encode(message: QueryGetSubscriptionByValidatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSubscriptionByValidatorRequest;
    fromJSON(object: any): QueryGetSubscriptionByValidatorRequest;
    toJSON(message: QueryGetSubscriptionByValidatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSubscriptionByValidatorRequest>): QueryGetSubscriptionByValidatorRequest;
};
export declare const QueryGetSubscriptionByValidatorResponse: {
    encode(message: QueryGetSubscriptionByValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSubscriptionByValidatorResponse;
    fromJSON(object: any): QueryGetSubscriptionByValidatorResponse;
    toJSON(message: QueryGetSubscriptionByValidatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSubscriptionByValidatorResponse>): QueryGetSubscriptionByValidatorResponse;
};
export declare const QueryAllSubscriptionRequest: {
    encode(message: QueryAllSubscriptionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSubscriptionRequest;
    fromJSON(object: any): QueryAllSubscriptionRequest;
    toJSON(message: QueryAllSubscriptionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSubscriptionRequest>): QueryAllSubscriptionRequest;
};
export declare const QueryAllSubscriptionResponse: {
    encode(message: QueryAllSubscriptionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSubscriptionResponse;
    fromJSON(object: any): QueryAllSubscriptionResponse;
    toJSON(message: QueryAllSubscriptionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSubscriptionResponse>): QueryAllSubscriptionResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a consumer by index. */
    Consumer(request: QueryGetConsumerRequest): Promise<QueryGetConsumerResponse>;
    /** Queries a list of consumer items. */
    ConsumerAll(request: QueryAllConsumerRequest): Promise<QueryAllConsumerResponse>;
    /** Queries a subscription by index. */
    Subscription(request: QueryGetSubscriptionRequest): Promise<QueryGetSubscriptionResponse>;
    /** Queries a subscription by index. */
    SubscriptionByValidator(request: QueryGetSubscriptionByValidatorRequest): Promise<QueryGetSubscriptionByValidatorResponse>;
    /** Queries a list of subscription items. */
    SubscriptionAll(request: QueryAllSubscriptionRequest): Promise<QueryAllSubscriptionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Consumer(request: QueryGetConsumerRequest): Promise<QueryGetConsumerResponse>;
    ConsumerAll(request: QueryAllConsumerRequest): Promise<QueryAllConsumerResponse>;
    Subscription(request: QueryGetSubscriptionRequest): Promise<QueryGetSubscriptionResponse>;
    SubscriptionByValidator(request: QueryGetSubscriptionByValidatorRequest): Promise<QueryGetSubscriptionByValidatorResponse>;
    SubscriptionAll(request: QueryAllSubscriptionRequest): Promise<QueryAllSubscriptionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
