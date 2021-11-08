/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'sainoe.registry.registry'

export interface MsgRegisterConsumer {
  creator: string
  chainID: string
  validators: string
}

export interface MsgRegisterConsumerResponse {}

const baseMsgRegisterConsumer: object = { creator: '', chainID: '', validators: '' }

export const MsgRegisterConsumer = {
  encode(message: MsgRegisterConsumer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.chainID !== '') {
      writer.uint32(18).string(message.chainID)
    }
    if (message.validators !== '') {
      writer.uint32(26).string(message.validators)
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
    if (object.validators !== undefined && object.validators !== null) {
      message.validators = String(object.validators)
    } else {
      message.validators = ''
    }
    return message
  },

  toJSON(message: MsgRegisterConsumer): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.chainID !== undefined && (obj.chainID = message.chainID)
    message.validators !== undefined && (obj.validators = message.validators)
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
    if (object.validators !== undefined && object.validators !== null) {
      message.validators = object.validators
    } else {
      message.validators = ''
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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RegisterConsumer(request: MsgRegisterConsumer): Promise<MsgRegisterConsumerResponse>
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
