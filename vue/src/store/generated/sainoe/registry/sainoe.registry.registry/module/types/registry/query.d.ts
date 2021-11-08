import { Reader, Writer } from 'protobufjs/minimal';
import { Params } from '../registry/params';
import { Consumer } from '../registry/consumer';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
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
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a consumer by index. */
    Consumer(request: QueryGetConsumerRequest): Promise<QueryGetConsumerResponse>;
    /** Queries a list of consumer items. */
    ConsumerAll(request: QueryAllConsumerRequest): Promise<QueryAllConsumerResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Consumer(request: QueryGetConsumerRequest): Promise<QueryGetConsumerResponse>;
    ConsumerAll(request: QueryAllConsumerRequest): Promise<QueryAllConsumerResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
