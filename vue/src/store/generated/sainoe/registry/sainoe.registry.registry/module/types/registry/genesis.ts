/* eslint-disable */
import { Params } from '../registry/params'
import { Consumer } from '../registry/consumer'
import { Subscription } from '../registry/subscription'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sainoe.registry.registry'

/** GenesisState defines the registry module's genesis state. */
export interface GenesisState {
  params: Params | undefined
  consumerList: Consumer[]
  /** this line is used by starport scaffolding # genesis/proto/state */
  subscriptionList: Subscription[]
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.consumerList) {
      Consumer.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.subscriptionList) {
      Subscription.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.consumerList = []
    message.subscriptionList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32())
          break
        case 2:
          message.consumerList.push(Consumer.decode(reader, reader.uint32()))
          break
        case 3:
          message.subscriptionList.push(Subscription.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.consumerList = []
    message.subscriptionList = []
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params)
    } else {
      message.params = undefined
    }
    if (object.consumerList !== undefined && object.consumerList !== null) {
      for (const e of object.consumerList) {
        message.consumerList.push(Consumer.fromJSON(e))
      }
    }
    if (object.subscriptionList !== undefined && object.subscriptionList !== null) {
      for (const e of object.subscriptionList) {
        message.subscriptionList.push(Subscription.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    if (message.consumerList) {
      obj.consumerList = message.consumerList.map((e) => (e ? Consumer.toJSON(e) : undefined))
    } else {
      obj.consumerList = []
    }
    if (message.subscriptionList) {
      obj.subscriptionList = message.subscriptionList.map((e) => (e ? Subscription.toJSON(e) : undefined))
    } else {
      obj.subscriptionList = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.consumerList = []
    message.subscriptionList = []
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params)
    } else {
      message.params = undefined
    }
    if (object.consumerList !== undefined && object.consumerList !== null) {
      for (const e of object.consumerList) {
        message.consumerList.push(Consumer.fromPartial(e))
      }
    }
    if (object.subscriptionList !== undefined && object.subscriptionList !== null) {
      for (const e of object.subscriptionList) {
        message.subscriptionList.push(Subscription.fromPartial(e))
      }
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
