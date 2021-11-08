import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sainoe.registry.registry";
export interface Consumer {
    index: string;
    chainID: string;
    validators: string[];
}
export declare const Consumer: {
    encode(message: Consumer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Consumer;
    fromJSON(object: any): Consumer;
    toJSON(message: Consumer): unknown;
    fromPartial(object: DeepPartial<Consumer>): Consumer;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
