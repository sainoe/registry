/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sainoe.registry.registry'

export interface Consumer {
  index: string
  chainID: string
  validators: string
}

const baseConsumer: object = { index: '', chainID: '', validators: '' }

export const Consumer = {
  encode(message: Consumer, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    if (message.chainID !== '') {
      writer.uint32(18).string(message.chainID)
    }
    if (message.validators !== '') {
      writer.uint32(26).string(message.validators)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Consumer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseConsumer } as Consumer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        case 2:
          message.chainID = reader.string()
          break
        case 3:
          message.validators = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Consumer {
    const message = { ...baseConsumer } as Consumer
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = String(object.chainID)
    } else {
      message.chainID = ''
    }
    if (object.validators !== undefined && object.validators !== null) {
      message.validators = String(object.validators)
    } else {
      message.validators = ''
    }
    return message
  },

  toJSON(message: Consumer): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    message.chainID !== undefined && (obj.chainID = message.chainID)
    message.validators !== undefined && (obj.validators = message.validators)
    return obj
  },

  fromPartial(object: DeepPartial<Consumer>): Consumer {
    const message = { ...baseConsumer } as Consumer
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID
    } else {
      message.chainID = ''
    }
    if (object.validators !== undefined && object.validators !== null) {
      message.validators = object.validators
    } else {
      message.validators = ''
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
