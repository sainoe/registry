// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUnsubscribeValidator } from "./types/registry/tx";
import { MsgSubscribeValidator } from "./types/registry/tx";
import { MsgRegisterConsumer } from "./types/registry/tx";


const types = [
  ["/sainoe.registry.registry.MsgUnsubscribeValidator", MsgUnsubscribeValidator],
  ["/sainoe.registry.registry.MsgSubscribeValidator", MsgSubscribeValidator],
  ["/sainoe.registry.registry.MsgRegisterConsumer", MsgRegisterConsumer],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUnsubscribeValidator: (data: MsgUnsubscribeValidator): EncodeObject => ({ typeUrl: "/sainoe.registry.registry.MsgUnsubscribeValidator", value: MsgUnsubscribeValidator.fromPartial( data ) }),
    msgSubscribeValidator: (data: MsgSubscribeValidator): EncodeObject => ({ typeUrl: "/sainoe.registry.registry.MsgSubscribeValidator", value: MsgSubscribeValidator.fromPartial( data ) }),
    msgRegisterConsumer: (data: MsgRegisterConsumer): EncodeObject => ({ typeUrl: "/sainoe.registry.registry.MsgRegisterConsumer", value: MsgRegisterConsumer.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
