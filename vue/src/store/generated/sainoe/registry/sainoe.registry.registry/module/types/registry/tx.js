/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
export const protobufPackage = 'sainoe.registry.registry';
const baseMsgRegisterConsumer = { creator: '', chainID: '', validators: '' };
export const MsgRegisterConsumer = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.chainID !== '') {
            writer.uint32(18).string(message.chainID);
        }
        if (message.validators !== '') {
            writer.uint32(26).string(message.validators);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegisterConsumer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.chainID = reader.string();
                    break;
                case 3:
                    message.validators = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRegisterConsumer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.chainID !== undefined && object.chainID !== null) {
            message.chainID = String(object.chainID);
        }
        else {
            message.chainID = '';
        }
        if (object.validators !== undefined && object.validators !== null) {
            message.validators = String(object.validators);
        }
        else {
            message.validators = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.chainID !== undefined && (obj.chainID = message.chainID);
        message.validators !== undefined && (obj.validators = message.validators);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRegisterConsumer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.chainID !== undefined && object.chainID !== null) {
            message.chainID = object.chainID;
        }
        else {
            message.chainID = '';
        }
        if (object.validators !== undefined && object.validators !== null) {
            message.validators = object.validators;
        }
        else {
            message.validators = '';
        }
        return message;
    }
};
const baseMsgRegisterConsumerResponse = {};
export const MsgRegisterConsumerResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegisterConsumerResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgRegisterConsumerResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRegisterConsumerResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    RegisterConsumer(request) {
        const data = MsgRegisterConsumer.encode(request).finish();
        const promise = this.rpc.request('sainoe.registry.registry.Msg', 'RegisterConsumer', data);
        return promise.then((data) => MsgRegisterConsumerResponse.decode(new Reader(data)));
    }
}
