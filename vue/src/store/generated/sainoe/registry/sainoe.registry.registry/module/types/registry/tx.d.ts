import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "sainoe.registry.registry";
export interface MsgRegisterConsumer {
    creator: string;
    chainID: string;
}
export interface MsgRegisterConsumerResponse {
}
export interface MsgSubscribeValidator {
    creator: string;
    chainID: string;
}
export interface MsgSubscribeValidatorResponse {
}
export interface MsgUnsubscribeValidator {
    creator: string;
    chainID: string;
}
export interface MsgUnsubscribeValidatorResponse {
}
export declare const MsgRegisterConsumer: {
    encode(message: MsgRegisterConsumer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterConsumer;
    fromJSON(object: any): MsgRegisterConsumer;
    toJSON(message: MsgRegisterConsumer): unknown;
    fromPartial(object: DeepPartial<MsgRegisterConsumer>): MsgRegisterConsumer;
};
export declare const MsgRegisterConsumerResponse: {
    encode(_: MsgRegisterConsumerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterConsumerResponse;
    fromJSON(_: any): MsgRegisterConsumerResponse;
    toJSON(_: MsgRegisterConsumerResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterConsumerResponse>): MsgRegisterConsumerResponse;
};
export declare const MsgSubscribeValidator: {
    encode(message: MsgSubscribeValidator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubscribeValidator;
    fromJSON(object: any): MsgSubscribeValidator;
    toJSON(message: MsgSubscribeValidator): unknown;
    fromPartial(object: DeepPartial<MsgSubscribeValidator>): MsgSubscribeValidator;
};
export declare const MsgSubscribeValidatorResponse: {
    encode(_: MsgSubscribeValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubscribeValidatorResponse;
    fromJSON(_: any): MsgSubscribeValidatorResponse;
    toJSON(_: MsgSubscribeValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubscribeValidatorResponse>): MsgSubscribeValidatorResponse;
};
export declare const MsgUnsubscribeValidator: {
    encode(message: MsgUnsubscribeValidator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnsubscribeValidator;
    fromJSON(object: any): MsgUnsubscribeValidator;
    toJSON(message: MsgUnsubscribeValidator): unknown;
    fromPartial(object: DeepPartial<MsgUnsubscribeValidator>): MsgUnsubscribeValidator;
};
export declare const MsgUnsubscribeValidatorResponse: {
    encode(_: MsgUnsubscribeValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnsubscribeValidatorResponse;
    fromJSON(_: any): MsgUnsubscribeValidatorResponse;
    toJSON(_: MsgUnsubscribeValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnsubscribeValidatorResponse>): MsgUnsubscribeValidatorResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    RegisterConsumer(request: MsgRegisterConsumer): Promise<MsgRegisterConsumerResponse>;
    SubscribeValidator(request: MsgSubscribeValidator): Promise<MsgSubscribeValidatorResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    UnsubscribeValidator(request: MsgUnsubscribeValidator): Promise<MsgUnsubscribeValidatorResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterConsumer(request: MsgRegisterConsumer): Promise<MsgRegisterConsumerResponse>;
    SubscribeValidator(request: MsgSubscribeValidator): Promise<MsgSubscribeValidatorResponse>;
    UnsubscribeValidator(request: MsgUnsubscribeValidator): Promise<MsgUnsubscribeValidatorResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
