import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "sainoe.registry.registry";
export interface MsgRegisterConsumer {
    creator: string;
    chainID: string;
}
export interface MsgRegisterConsumerResponse {
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
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    RegisterConsumer(request: MsgRegisterConsumer): Promise<MsgRegisterConsumerResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterConsumer(request: MsgRegisterConsumer): Promise<MsgRegisterConsumerResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
