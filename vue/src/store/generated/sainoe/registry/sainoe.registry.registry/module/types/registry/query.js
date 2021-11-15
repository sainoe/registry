/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { Params } from '../registry/params';
import { Consumer } from '../registry/consumer';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Subscription } from '../registry/subscription';
export const protobufPackage = 'sainoe.registry.registry';
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    }
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    }
};
const baseQueryGetConsumerRequest = { index: '' };
export const QueryGetConsumerRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetConsumerRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetConsumerRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetConsumerRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetConsumerResponse = {};
export const QueryGetConsumerResponse = {
    encode(message, writer = Writer.create()) {
        if (message.consumer !== undefined) {
            Consumer.encode(message.consumer, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetConsumerResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consumer = Consumer.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetConsumerResponse };
        if (object.consumer !== undefined && object.consumer !== null) {
            message.consumer = Consumer.fromJSON(object.consumer);
        }
        else {
            message.consumer = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.consumer !== undefined && (obj.consumer = message.consumer ? Consumer.toJSON(message.consumer) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetConsumerResponse };
        if (object.consumer !== undefined && object.consumer !== null) {
            message.consumer = Consumer.fromPartial(object.consumer);
        }
        else {
            message.consumer = undefined;
        }
        return message;
    }
};
const baseQueryAllConsumerRequest = {};
export const QueryAllConsumerRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllConsumerRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllConsumerRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllConsumerRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllConsumerResponse = {};
export const QueryAllConsumerResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.consumer) {
            Consumer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllConsumerResponse };
        message.consumer = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consumer.push(Consumer.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllConsumerResponse };
        message.consumer = [];
        if (object.consumer !== undefined && object.consumer !== null) {
            for (const e of object.consumer) {
                message.consumer.push(Consumer.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.consumer) {
            obj.consumer = message.consumer.map((e) => (e ? Consumer.toJSON(e) : undefined));
        }
        else {
            obj.consumer = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllConsumerResponse };
        message.consumer = [];
        if (object.consumer !== undefined && object.consumer !== null) {
            for (const e of object.consumer) {
                message.consumer.push(Consumer.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetSubscriptionRequest = { index: '', consumerID: '' };
export const QueryGetSubscriptionRequest = {
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
        const message = { ...baseQueryGetSubscriptionRequest };
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
        const message = { ...baseQueryGetSubscriptionRequest };
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
        const message = { ...baseQueryGetSubscriptionRequest };
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
const baseQueryGetSubscriptionResponse = {};
export const QueryGetSubscriptionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.subscription !== undefined) {
            Subscription.encode(message.subscription, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSubscriptionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscription = Subscription.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSubscriptionResponse };
        if (object.subscription !== undefined && object.subscription !== null) {
            message.subscription = Subscription.fromJSON(object.subscription);
        }
        else {
            message.subscription = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subscription !== undefined && (obj.subscription = message.subscription ? Subscription.toJSON(message.subscription) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSubscriptionResponse };
        if (object.subscription !== undefined && object.subscription !== null) {
            message.subscription = Subscription.fromPartial(object.subscription);
        }
        else {
            message.subscription = undefined;
        }
        return message;
    }
};
const baseQueryGetSubscriptionByValidatorRequest = { index: '' };
export const QueryGetSubscriptionByValidatorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSubscriptionByValidatorRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSubscriptionByValidatorRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSubscriptionByValidatorRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetSubscriptionByValidatorResponse = {};
export const QueryGetSubscriptionByValidatorResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.subscription) {
            Subscription.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSubscriptionByValidatorResponse };
        message.subscription = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscription.push(Subscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSubscriptionByValidatorResponse };
        message.subscription = [];
        if (object.subscription !== undefined && object.subscription !== null) {
            for (const e of object.subscription) {
                message.subscription.push(Subscription.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.subscription) {
            obj.subscription = message.subscription.map((e) => (e ? Subscription.toJSON(e) : undefined));
        }
        else {
            obj.subscription = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSubscriptionByValidatorResponse };
        message.subscription = [];
        if (object.subscription !== undefined && object.subscription !== null) {
            for (const e of object.subscription) {
                message.subscription.push(Subscription.fromPartial(e));
            }
        }
        return message;
    }
};
const baseQueryAllSubscriptionRequest = {};
export const QueryAllSubscriptionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSubscriptionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSubscriptionRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSubscriptionRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllSubscriptionResponse = {};
export const QueryAllSubscriptionResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.subscription) {
            Subscription.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSubscriptionResponse };
        message.subscription = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscription.push(Subscription.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSubscriptionResponse };
        message.subscription = [];
        if (object.subscription !== undefined && object.subscription !== null) {
            for (const e of object.subscription) {
                message.subscription.push(Subscription.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.subscription) {
            obj.subscription = message.subscription.map((e) => (e ? Subscription.toJSON(e) : undefined));
        }
        else {
            obj.subscription = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSubscriptionResponse };
        message.subscription = [];
        if (object.subscription !== undefined && object.subscription !== null) {
            for (const e of object.subscription) {
                message.subscription.push(Subscription.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('sainoe.registry.registry.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    Consumer(request) {
        const data = QueryGetConsumerRequest.encode(request).finish();
        const promise = this.rpc.request('sainoe.registry.registry.Query', 'Consumer', data);
        return promise.then((data) => QueryGetConsumerResponse.decode(new Reader(data)));
    }
    ConsumerAll(request) {
        const data = QueryAllConsumerRequest.encode(request).finish();
        const promise = this.rpc.request('sainoe.registry.registry.Query', 'ConsumerAll', data);
        return promise.then((data) => QueryAllConsumerResponse.decode(new Reader(data)));
    }
    Subscription(request) {
        const data = QueryGetSubscriptionRequest.encode(request).finish();
        const promise = this.rpc.request('sainoe.registry.registry.Query', 'Subscription', data);
        return promise.then((data) => QueryGetSubscriptionResponse.decode(new Reader(data)));
    }
    SubscriptionByValidator(request) {
        const data = QueryGetSubscriptionByValidatorRequest.encode(request).finish();
        const promise = this.rpc.request('sainoe.registry.registry.Query', 'SubscriptionByValidator', data);
        return promise.then((data) => QueryGetSubscriptionByValidatorResponse.decode(new Reader(data)));
    }
    SubscriptionAll(request) {
        const data = QueryAllSubscriptionRequest.encode(request).finish();
        const promise = this.rpc.request('sainoe.registry.registry.Query', 'SubscriptionAll', data);
        return promise.then((data) => QueryAllSubscriptionResponse.decode(new Reader(data)));
    }
}
