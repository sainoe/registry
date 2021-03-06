/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Params } from '../registry/params'
import { Consumer } from '../registry/consumer'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Subscription } from '../registry/subscription'

export const protobufPackage = 'sainoe.registry.registry'

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined
}

export interface QueryGetConsumerRequest {
  index: string
}

export interface QueryGetConsumerResponse {
  consumer: Consumer | undefined
}

export interface QueryAllConsumerRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllConsumerResponse {
  consumer: Consumer[]
  pagination: PageResponse | undefined
}

export interface QueryGetSubscriptionRequest {
  index: string
  consumerID: string
}

export interface QueryGetSubscriptionResponse {
  subscription: Subscription | undefined
}

export interface QueryGetSubscriptionByValidatorRequest {
  index: string
}

export interface QueryGetSubscriptionByValidatorResponse {
  validator: string
  consumers: Consumer[]
}

export interface QueryAllSubscriptionRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSubscriptionResponse {
  subscription: Subscription[]
  pagination: PageResponse | undefined
}

const baseQueryParamsRequest: object = {}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    return message
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    return message
  }
}

const baseQueryParamsResponse: object = {}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params)
    } else {
      message.params = undefined
    }
    return message
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {}
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params)
    } else {
      message.params = undefined
    }
    return message
  }
}

const baseQueryGetConsumerRequest: object = { index: '' }

export const QueryGetConsumerRequest = {
  encode(message: QueryGetConsumerRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetConsumerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetConsumerRequest } as QueryGetConsumerRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetConsumerRequest {
    const message = { ...baseQueryGetConsumerRequest } as QueryGetConsumerRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetConsumerRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetConsumerRequest>): QueryGetConsumerRequest {
    const message = { ...baseQueryGetConsumerRequest } as QueryGetConsumerRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetConsumerResponse: object = {}

export const QueryGetConsumerResponse = {
  encode(message: QueryGetConsumerResponse, writer: Writer = Writer.create()): Writer {
    if (message.consumer !== undefined) {
      Consumer.encode(message.consumer, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetConsumerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetConsumerResponse } as QueryGetConsumerResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.consumer = Consumer.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetConsumerResponse {
    const message = { ...baseQueryGetConsumerResponse } as QueryGetConsumerResponse
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = Consumer.fromJSON(object.consumer)
    } else {
      message.consumer = undefined
    }
    return message
  },

  toJSON(message: QueryGetConsumerResponse): unknown {
    const obj: any = {}
    message.consumer !== undefined && (obj.consumer = message.consumer ? Consumer.toJSON(message.consumer) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetConsumerResponse>): QueryGetConsumerResponse {
    const message = { ...baseQueryGetConsumerResponse } as QueryGetConsumerResponse
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = Consumer.fromPartial(object.consumer)
    } else {
      message.consumer = undefined
    }
    return message
  }
}

const baseQueryAllConsumerRequest: object = {}

export const QueryAllConsumerRequest = {
  encode(message: QueryAllConsumerRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllConsumerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllConsumerRequest } as QueryAllConsumerRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllConsumerRequest {
    const message = { ...baseQueryAllConsumerRequest } as QueryAllConsumerRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllConsumerRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllConsumerRequest>): QueryAllConsumerRequest {
    const message = { ...baseQueryAllConsumerRequest } as QueryAllConsumerRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllConsumerResponse: object = {}

export const QueryAllConsumerResponse = {
  encode(message: QueryAllConsumerResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.consumer) {
      Consumer.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllConsumerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllConsumerResponse } as QueryAllConsumerResponse
    message.consumer = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.consumer.push(Consumer.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllConsumerResponse {
    const message = { ...baseQueryAllConsumerResponse } as QueryAllConsumerResponse
    message.consumer = []
    if (object.consumer !== undefined && object.consumer !== null) {
      for (const e of object.consumer) {
        message.consumer.push(Consumer.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllConsumerResponse): unknown {
    const obj: any = {}
    if (message.consumer) {
      obj.consumer = message.consumer.map((e) => (e ? Consumer.toJSON(e) : undefined))
    } else {
      obj.consumer = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllConsumerResponse>): QueryAllConsumerResponse {
    const message = { ...baseQueryAllConsumerResponse } as QueryAllConsumerResponse
    message.consumer = []
    if (object.consumer !== undefined && object.consumer !== null) {
      for (const e of object.consumer) {
        message.consumer.push(Consumer.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetSubscriptionRequest: object = { index: '', consumerID: '' }

export const QueryGetSubscriptionRequest = {
  encode(message: QueryGetSubscriptionRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    if (message.consumerID !== '') {
      writer.uint32(18).string(message.consumerID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSubscriptionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSubscriptionRequest } as QueryGetSubscriptionRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        case 2:
          message.consumerID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSubscriptionRequest {
    const message = { ...baseQueryGetSubscriptionRequest } as QueryGetSubscriptionRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.consumerID !== undefined && object.consumerID !== null) {
      message.consumerID = String(object.consumerID)
    } else {
      message.consumerID = ''
    }
    return message
  },

  toJSON(message: QueryGetSubscriptionRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    message.consumerID !== undefined && (obj.consumerID = message.consumerID)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSubscriptionRequest>): QueryGetSubscriptionRequest {
    const message = { ...baseQueryGetSubscriptionRequest } as QueryGetSubscriptionRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.consumerID !== undefined && object.consumerID !== null) {
      message.consumerID = object.consumerID
    } else {
      message.consumerID = ''
    }
    return message
  }
}

const baseQueryGetSubscriptionResponse: object = {}

export const QueryGetSubscriptionResponse = {
  encode(message: QueryGetSubscriptionResponse, writer: Writer = Writer.create()): Writer {
    if (message.subscription !== undefined) {
      Subscription.encode(message.subscription, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSubscriptionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSubscriptionResponse } as QueryGetSubscriptionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.subscription = Subscription.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSubscriptionResponse {
    const message = { ...baseQueryGetSubscriptionResponse } as QueryGetSubscriptionResponse
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = Subscription.fromJSON(object.subscription)
    } else {
      message.subscription = undefined
    }
    return message
  },

  toJSON(message: QueryGetSubscriptionResponse): unknown {
    const obj: any = {}
    message.subscription !== undefined && (obj.subscription = message.subscription ? Subscription.toJSON(message.subscription) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSubscriptionResponse>): QueryGetSubscriptionResponse {
    const message = { ...baseQueryGetSubscriptionResponse } as QueryGetSubscriptionResponse
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = Subscription.fromPartial(object.subscription)
    } else {
      message.subscription = undefined
    }
    return message
  }
}

const baseQueryGetSubscriptionByValidatorRequest: object = { index: '' }

export const QueryGetSubscriptionByValidatorRequest = {
  encode(message: QueryGetSubscriptionByValidatorRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSubscriptionByValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSubscriptionByValidatorRequest } as QueryGetSubscriptionByValidatorRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSubscriptionByValidatorRequest {
    const message = { ...baseQueryGetSubscriptionByValidatorRequest } as QueryGetSubscriptionByValidatorRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetSubscriptionByValidatorRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSubscriptionByValidatorRequest>): QueryGetSubscriptionByValidatorRequest {
    const message = { ...baseQueryGetSubscriptionByValidatorRequest } as QueryGetSubscriptionByValidatorRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetSubscriptionByValidatorResponse: object = { validator: '' }

export const QueryGetSubscriptionByValidatorResponse = {
  encode(message: QueryGetSubscriptionByValidatorResponse, writer: Writer = Writer.create()): Writer {
    if (message.validator !== '') {
      writer.uint32(10).string(message.validator)
    }
    for (const v of message.consumers) {
      Consumer.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSubscriptionByValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSubscriptionByValidatorResponse } as QueryGetSubscriptionByValidatorResponse
    message.consumers = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string()
          break
        case 2:
          message.consumers.push(Consumer.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSubscriptionByValidatorResponse {
    const message = { ...baseQueryGetSubscriptionByValidatorResponse } as QueryGetSubscriptionByValidatorResponse
    message.consumers = []
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator)
    } else {
      message.validator = ''
    }
    if (object.consumers !== undefined && object.consumers !== null) {
      for (const e of object.consumers) {
        message.consumers.push(Consumer.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryGetSubscriptionByValidatorResponse): unknown {
    const obj: any = {}
    message.validator !== undefined && (obj.validator = message.validator)
    if (message.consumers) {
      obj.consumers = message.consumers.map((e) => (e ? Consumer.toJSON(e) : undefined))
    } else {
      obj.consumers = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSubscriptionByValidatorResponse>): QueryGetSubscriptionByValidatorResponse {
    const message = { ...baseQueryGetSubscriptionByValidatorResponse } as QueryGetSubscriptionByValidatorResponse
    message.consumers = []
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator
    } else {
      message.validator = ''
    }
    if (object.consumers !== undefined && object.consumers !== null) {
      for (const e of object.consumers) {
        message.consumers.push(Consumer.fromPartial(e))
      }
    }
    return message
  }
}

const baseQueryAllSubscriptionRequest: object = {}

export const QueryAllSubscriptionRequest = {
  encode(message: QueryAllSubscriptionRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSubscriptionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSubscriptionRequest } as QueryAllSubscriptionRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSubscriptionRequest {
    const message = { ...baseQueryAllSubscriptionRequest } as QueryAllSubscriptionRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSubscriptionRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSubscriptionRequest>): QueryAllSubscriptionRequest {
    const message = { ...baseQueryAllSubscriptionRequest } as QueryAllSubscriptionRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSubscriptionResponse: object = {}

export const QueryAllSubscriptionResponse = {
  encode(message: QueryAllSubscriptionResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.subscription) {
      Subscription.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSubscriptionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSubscriptionResponse } as QueryAllSubscriptionResponse
    message.subscription = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.subscription.push(Subscription.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSubscriptionResponse {
    const message = { ...baseQueryAllSubscriptionResponse } as QueryAllSubscriptionResponse
    message.subscription = []
    if (object.subscription !== undefined && object.subscription !== null) {
      for (const e of object.subscription) {
        message.subscription.push(Subscription.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSubscriptionResponse): unknown {
    const obj: any = {}
    if (message.subscription) {
      obj.subscription = message.subscription.map((e) => (e ? Subscription.toJSON(e) : undefined))
    } else {
      obj.subscription = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSubscriptionResponse>): QueryAllSubscriptionResponse {
    const message = { ...baseQueryAllSubscriptionResponse } as QueryAllSubscriptionResponse
    message.subscription = []
    if (object.subscription !== undefined && object.subscription !== null) {
      for (const e of object.subscription) {
        message.subscription.push(Subscription.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
  /** Queries a consumer by index. */
  Consumer(request: QueryGetConsumerRequest): Promise<QueryGetConsumerResponse>
  /** Queries a list of consumer items. */
  ConsumerAll(request: QueryAllConsumerRequest): Promise<QueryAllConsumerResponse>
  /** Queries a subscription by index. */
  Subscription(request: QueryGetSubscriptionRequest): Promise<QueryGetSubscriptionResponse>
  /** Queries a subscription by index. */
  SubscriptionByValidator(request: QueryGetSubscriptionByValidatorRequest): Promise<QueryGetSubscriptionByValidatorResponse>
  /** Queries a list of subscription items. */
  SubscriptionAll(request: QueryAllSubscriptionRequest): Promise<QueryAllSubscriptionResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request('sainoe.registry.registry.Query', 'Params', data)
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)))
  }

  Consumer(request: QueryGetConsumerRequest): Promise<QueryGetConsumerResponse> {
    const data = QueryGetConsumerRequest.encode(request).finish()
    const promise = this.rpc.request('sainoe.registry.registry.Query', 'Consumer', data)
    return promise.then((data) => QueryGetConsumerResponse.decode(new Reader(data)))
  }

  ConsumerAll(request: QueryAllConsumerRequest): Promise<QueryAllConsumerResponse> {
    const data = QueryAllConsumerRequest.encode(request).finish()
    const promise = this.rpc.request('sainoe.registry.registry.Query', 'ConsumerAll', data)
    return promise.then((data) => QueryAllConsumerResponse.decode(new Reader(data)))
  }

  Subscription(request: QueryGetSubscriptionRequest): Promise<QueryGetSubscriptionResponse> {
    const data = QueryGetSubscriptionRequest.encode(request).finish()
    const promise = this.rpc.request('sainoe.registry.registry.Query', 'Subscription', data)
    return promise.then((data) => QueryGetSubscriptionResponse.decode(new Reader(data)))
  }

  SubscriptionByValidator(request: QueryGetSubscriptionByValidatorRequest): Promise<QueryGetSubscriptionByValidatorResponse> {
    const data = QueryGetSubscriptionByValidatorRequest.encode(request).finish()
    const promise = this.rpc.request('sainoe.registry.registry.Query', 'SubscriptionByValidator', data)
    return promise.then((data) => QueryGetSubscriptionByValidatorResponse.decode(new Reader(data)))
  }

  SubscriptionAll(request: QueryAllSubscriptionRequest): Promise<QueryAllSubscriptionResponse> {
    const data = QueryAllSubscriptionRequest.encode(request).finish()
    const promise = this.rpc.request('sainoe.registry.registry.Query', 'SubscriptionAll', data)
    return promise.then((data) => QueryAllSubscriptionResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
