// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgAddService } from "./types/did/tx";
import { MsgDeleteController } from "./types/did/tx";
import { MsgUpdateDidDocument } from "./types/did/tx";
import { MsgAddController } from "./types/did/tx";
import { MsgAddVerification } from "./types/did/tx";
import { MsgSetVerificationRelationships } from "./types/did/tx";
import { MsgRevokeVerification } from "./types/did/tx";
import { MsgCreateDidDocument } from "./types/did/tx";
import { MsgDeleteService } from "./types/did/tx";


const types = [
  ["/millicent.cash.did.MsgAddService", MsgAddService],
  ["/millicent.cash.did.MsgDeleteController", MsgDeleteController],
  ["/millicent.cash.did.MsgUpdateDidDocument", MsgUpdateDidDocument],
  ["/millicent.cash.did.MsgAddController", MsgAddController],
  ["/millicent.cash.did.MsgAddVerification", MsgAddVerification],
  ["/millicent.cash.did.MsgSetVerificationRelationships", MsgSetVerificationRelationships],
  ["/millicent.cash.did.MsgRevokeVerification", MsgRevokeVerification],
  ["/millicent.cash.did.MsgCreateDidDocument", MsgCreateDidDocument],
  ["/millicent.cash.did.MsgDeleteService", MsgDeleteService],
  
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
    msgAddService: (data: MsgAddService): EncodeObject => ({ typeUrl: "/millicent.cash.did.MsgAddService", value: MsgAddService.fromPartial( data ) }),
    msgDeleteController: (data: MsgDeleteController): EncodeObject => ({ typeUrl: "/millicent.cash.did.MsgDeleteController", value: MsgDeleteController.fromPartial( data ) }),
    msgUpdateDidDocument: (data: MsgUpdateDidDocument): EncodeObject => ({ typeUrl: "/millicent.cash.did.MsgUpdateDidDocument", value: MsgUpdateDidDocument.fromPartial( data ) }),
    msgAddController: (data: MsgAddController): EncodeObject => ({ typeUrl: "/millicent.cash.did.MsgAddController", value: MsgAddController.fromPartial( data ) }),
    msgAddVerification: (data: MsgAddVerification): EncodeObject => ({ typeUrl: "/millicent.cash.did.MsgAddVerification", value: MsgAddVerification.fromPartial( data ) }),
    msgSetVerificationRelationships: (data: MsgSetVerificationRelationships): EncodeObject => ({ typeUrl: "/millicent.cash.did.MsgSetVerificationRelationships", value: MsgSetVerificationRelationships.fromPartial( data ) }),
    msgRevokeVerification: (data: MsgRevokeVerification): EncodeObject => ({ typeUrl: "/millicent.cash.did.MsgRevokeVerification", value: MsgRevokeVerification.fromPartial( data ) }),
    msgCreateDidDocument: (data: MsgCreateDidDocument): EncodeObject => ({ typeUrl: "/millicent.cash.did.MsgCreateDidDocument", value: MsgCreateDidDocument.fromPartial( data ) }),
    msgDeleteService: (data: MsgDeleteService): EncodeObject => ({ typeUrl: "/millicent.cash.did.MsgDeleteService", value: MsgDeleteService.fromPartial( data ) }),
    
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
