/* eslint-disable */
import { Params } from '../registry/params';
import { Consumer } from '../registry/consumer';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'sainoe.registry.registry';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.consumerList) {
            Consumer.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.consumerList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consumerList.push(Consumer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.consumerList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.consumerList !== undefined && object.consumerList !== null) {
            for (const e of object.consumerList) {
                message.consumerList.push(Consumer.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.consumerList) {
            obj.consumerList = message.consumerList.map((e) => (e ? Consumer.toJSON(e) : undefined));
        }
        else {
            obj.consumerList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.consumerList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.consumerList !== undefined && object.consumerList !== null) {
            for (const e of object.consumerList) {
                message.consumerList.push(Consumer.fromPartial(e));
            }
        }
        return message;
    }
};
