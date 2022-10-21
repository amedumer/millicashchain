// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgIssueUserCredential } from "./types/issuer/tx";
import { MsgPauseToken } from "./types/issuer/tx";
import { MsgBurnToken } from "./types/issuer/tx";
import { MsgMintToken } from "./types/issuer/tx";
import { MsgCreateIssuer } from "./types/issuer/tx";


const types = [
  ["/millicent.cash.issuer.MsgIssueUserCredential", MsgIssueUserCredential],
  ["/millicent.cash.issuer.MsgPauseToken", MsgPauseToken],
  ["/millicent.cash.issuer.MsgBurnToken", MsgBurnToken],
  ["/millicent.cash.issuer.MsgMintToken", MsgMintToken],
  ["/millicent.cash.issuer.MsgCreateIssuer", MsgCreateIssuer],
  
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
    msgIssueUserCredential: (data: MsgIssueUserCredential): EncodeObject => ({ typeUrl: "/millicent.cash.issuer.MsgIssueUserCredential", value: MsgIssueUserCredential.fromPartial( data ) }),
    msgPauseToken: (data: MsgPauseToken): EncodeObject => ({ typeUrl: "/millicent.cash.issuer.MsgPauseToken", value: MsgPauseToken.fromPartial( data ) }),
    msgBurnToken: (data: MsgBurnToken): EncodeObject => ({ typeUrl: "/millicent.cash.issuer.MsgBurnToken", value: MsgBurnToken.fromPartial( data ) }),
    msgMintToken: (data: MsgMintToken): EncodeObject => ({ typeUrl: "/millicent.cash.issuer.MsgMintToken", value: MsgMintToken.fromPartial( data ) }),
    msgCreateIssuer: (data: MsgCreateIssuer): EncodeObject => ({ typeUrl: "/millicent.cash.issuer.MsgCreateIssuer", value: MsgCreateIssuer.fromPartial( data ) }),
    
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
