/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'sainoe.registry.registry';
const baseSubscription = { index: '', consumerID: '' };
export const Subscription = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        if (message.consumerID !== '') {
            writer.uint32(18).string(message.consumerID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubscription };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.consumerID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSubscription };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.consumerID !== undefined && object.consumerID !== null) {
            message.consumerID = String(object.consumerID);
        }
        else {
            message.consumerID = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.consumerID !== undefined && (obj.consumerID = message.consumerID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSubscription };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.consumerID !== undefined && object.consumerID !== null) {
            message.consumerID = object.consumerID;
        }
        else {
            message.consumerID = '';
        }
        return message;
    }
};
