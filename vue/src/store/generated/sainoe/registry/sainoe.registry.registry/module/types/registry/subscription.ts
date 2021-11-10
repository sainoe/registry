/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sainoe.registry.registry'

export interface Subscription {
  index: string
  consumerID: string
}

const baseSubscription: object = { index: '', consumerID: '' }

export const Subscription = {
  encode(message: Subscription, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    if (message.consumerID !== '') {
      writer.uint32(18).string(message.consumerID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSubscription } as Subscription
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

  fromJSON(object: any): Subscription {
    const message = { ...baseSubscription } as Subscription
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

  toJSON(message: Subscription): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    message.consumerID !== undefined && (obj.consumerID = message.consumerID)
    return obj
  },

  fromPartial(object: DeepPartial<Subscription>): Subscription {
    const message = { ...baseSubscription } as Subscription
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
