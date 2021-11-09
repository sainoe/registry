/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'sainoe.registry.registry'

export interface MsgRegisterConsumer {
  creator: string
  chainID: string
}

export interface MsgRegisterConsumerResponse {}

export interface MsgSubscribeValidator {
  creator: string
  chainID: string
}

export interface MsgSubscribeValidatorResponse {}

const baseMsgRegisterConsumer: object = { creator: '', chainID: '' }

export const MsgRegisterConsumer = {
  encode(message: MsgRegisterConsumer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.chainID !== '') {
      writer.uint32(18).string(message.chainID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterConsumer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRegisterConsumer } as MsgRegisterConsumer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.chainID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRegisterConsumer {
    const message = { ...baseMsgRegisterConsumer } as MsgRegisterConsumer
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = String(object.chainID)
    } else {
      message.chainID = ''
    }
    return message
  },

  toJSON(message: MsgRegisterConsumer): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.chainID !== undefined && (obj.chainID = message.chainID)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRegisterConsumer>): MsgRegisterConsumer {
    const message = { ...baseMsgRegisterConsumer } as MsgRegisterConsumer
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID
    } else {
      message.chainID = ''
    }
    return message
  }
}

const baseMsgRegisterConsumerResponse: object = {}

export const MsgRegisterConsumerResponse = {
  encode(_: MsgRegisterConsumerResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterConsumerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRegisterConsumerResponse } as MsgRegisterConsumerResponse
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

  fromJSON(_: any): MsgRegisterConsumerResponse {
    const message = { ...baseMsgRegisterConsumerResponse } as MsgRegisterConsumerResponse
    return message
  },

  toJSON(_: MsgRegisterConsumerResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgRegisterConsumerResponse>): MsgRegisterConsumerResponse {
    const message = { ...baseMsgRegisterConsumerResponse } as MsgRegisterConsumerResponse
    return message
  }
}

const baseMsgSubscribeValidator: object = { creator: '', chainID: '' }

export const MsgSubscribeValidator = {
  encode(message: MsgSubscribeValidator, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.chainID !== '') {
      writer.uint32(18).string(message.chainID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubscribeValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSubscribeValidator } as MsgSubscribeValidator
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.chainID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSubscribeValidator {
    const message = { ...baseMsgSubscribeValidator } as MsgSubscribeValidator
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = String(object.chainID)
    } else {
      message.chainID = ''
    }
    return message
  },

  toJSON(message: MsgSubscribeValidator): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.chainID !== undefined && (obj.chainID = message.chainID)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSubscribeValidator>): MsgSubscribeValidator {
    const message = { ...baseMsgSubscribeValidator } as MsgSubscribeValidator
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID
    } else {
      message.chainID = ''
    }
    return message
  }
}

const baseMsgSubscribeValidatorResponse: object = {}

export const MsgSubscribeValidatorResponse = {
  encode(_: MsgSubscribeValidatorResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubscribeValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSubscribeValidatorResponse } as MsgSubscribeValidatorResponse
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

  fromJSON(_: any): MsgSubscribeValidatorResponse {
    const message = { ...baseMsgSubscribeValidatorResponse } as MsgSubscribeValidatorResponse
    return message
  },

  toJSON(_: MsgSubscribeValidatorResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSubscribeValidatorResponse>): MsgSubscribeValidatorResponse {
    const message = { ...baseMsgSubscribeValidatorResponse } as MsgSubscribeValidatorResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  RegisterConsumer(request: MsgRegisterConsumer): Promise<MsgRegisterConsumerResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SubscribeValidator(request: MsgSubscribeValidator): Promise<MsgSubscribeValidatorResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  RegisterConsumer(request: MsgRegisterConsumer): Promise<MsgRegisterConsumerResponse> {
    const data = MsgRegisterConsumer.encode(request).finish()
    const promise = this.rpc.request('sainoe.registry.registry.Msg', 'RegisterConsumer', data)
    return promise.then((data) => MsgRegisterConsumerResponse.decode(new Reader(data)))
  }

  SubscribeValidator(request: MsgSubscribeValidator): Promise<MsgSubscribeValidatorResponse> {
    const data = MsgSubscribeValidator.encode(request).finish()
    const promise = this.rpc.request('sainoe.registry.registry.Msg', 'SubscribeValidator', data)
    return promise.then((data) => MsgSubscribeValidatorResponse.decode(new Reader(data)))
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
