import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sainoe.registry.registry";
export interface Subscription {
    index: string;
    consumerID: string;
}
export declare const Subscription: {
    encode(message: Subscription, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Subscription;
    fromJSON(object: any): Subscription;
    toJSON(message: Subscription): unknown;
    fromPartial(object: DeepPartial<Subscription>): Subscription;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
