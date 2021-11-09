// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSubscribeValidator } from "./types/registry/tx";
import { MsgRegisterConsumer } from "./types/registry/tx";
const types = [
    ["/sainoe.registry.registry.MsgSubscribeValidator", MsgSubscribeValidator],
    ["/sainoe.registry.registry.MsgRegisterConsumer", MsgRegisterConsumer],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgSubscribeValidator: (data) => ({ typeUrl: "/sainoe.registry.registry.MsgSubscribeValidator", value: MsgSubscribeValidator.fromPartial(data) }),
        msgRegisterConsumer: (data) => ({ typeUrl: "/sainoe.registry.registry.MsgRegisterConsumer", value: MsgRegisterConsumer.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
