// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgIssueLicenseCredential } from "./types/regulator/tx";
import { MsgIssueRegulatorCredential } from "./types/regulator/tx";
import { MsgIssueRegistrationCredential } from "./types/regulator/tx";


const types = [
  ["/millicent.cash.regulator.MsgIssueLicenseCredential", MsgIssueLicenseCredential],
  ["/millicent.cash.regulator.MsgIssueRegulatorCredential", MsgIssueRegulatorCredential],
  ["/millicent.cash.regulator.MsgIssueRegistrationCredential", MsgIssueRegistrationCredential],
  
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
    msgIssueLicenseCredential: (data: MsgIssueLicenseCredential): EncodeObject => ({ typeUrl: "/millicent.cash.regulator.MsgIssueLicenseCredential", value: MsgIssueLicenseCredential.fromPartial( data ) }),
    msgIssueRegulatorCredential: (data: MsgIssueRegulatorCredential): EncodeObject => ({ typeUrl: "/millicent.cash.regulator.MsgIssueRegulatorCredential", value: MsgIssueRegulatorCredential.fromPartial( data ) }),
    msgIssueRegistrationCredential: (data: MsgIssueRegistrationCredential): EncodeObject => ({ typeUrl: "/millicent.cash.regulator.MsgIssueRegistrationCredential", value: MsgIssueRegistrationCredential.fromPartial( data ) }),
    
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
