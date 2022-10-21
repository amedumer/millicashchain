import { txClient, queryClient, MissingWalletError , registry} from './module'

import { QueryValidateVerifiableCredentialResponse } from "./module/types/verifiable-credential/query"
import { MsgIssueCredentialResponse } from "./module/types/verifiable-credential/tx"
import { VerifiableCredential } from "./module/types/verifiable-credential/verifiable-credential"
import { UserCredentialSubject } from "./module/types/verifiable-credential/verifiable-credential"
import { LicenseCredentialSubject } from "./module/types/verifiable-credential/verifiable-credential"
import { RegulatorCredentialSubject } from "./module/types/verifiable-credential/verifiable-credential"
import { RegistrationCredentialSubject } from "./module/types/verifiable-credential/verifiable-credential"
import { LegalPerson } from "./module/types/verifiable-credential/verifiable-credential"
import { Name } from "./module/types/verifiable-credential/verifiable-credential"
import { Address } from "./module/types/verifiable-credential/verifiable-credential"
import { Id } from "./module/types/verifiable-credential/verifiable-credential"
import { Proof } from "./module/types/verifiable-credential/verifiable-credential"


export { QueryValidateVerifiableCredentialResponse, MsgIssueCredentialResponse, VerifiableCredential, UserCredentialSubject, LicenseCredentialSubject, RegulatorCredentialSubject, RegistrationCredentialSubject, LegalPerson, Name, Address, Id, Proof };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				VerifiableCredentials: {},
				VerifiableCredential: {},
				
				_Structure: {
						QueryValidateVerifiableCredentialResponse: getStructure(QueryValidateVerifiableCredentialResponse.fromPartial({})),
						MsgIssueCredentialResponse: getStructure(MsgIssueCredentialResponse.fromPartial({})),
						VerifiableCredential: getStructure(VerifiableCredential.fromPartial({})),
						UserCredentialSubject: getStructure(UserCredentialSubject.fromPartial({})),
						LicenseCredentialSubject: getStructure(LicenseCredentialSubject.fromPartial({})),
						RegulatorCredentialSubject: getStructure(RegulatorCredentialSubject.fromPartial({})),
						RegistrationCredentialSubject: getStructure(RegistrationCredentialSubject.fromPartial({})),
						LegalPerson: getStructure(LegalPerson.fromPartial({})),
						Name: getStructure(Name.fromPartial({})),
						Address: getStructure(Address.fromPartial({})),
						Id: getStructure(Id.fromPartial({})),
						Proof: getStructure(Proof.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getVerifiableCredentials: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VerifiableCredentials[JSON.stringify(params)] ?? {}
		},
				getVerifiableCredential: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VerifiableCredential[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: millicent.cash.verifiablecredential initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryVerifiableCredentials({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryVerifiableCredentials(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryVerifiableCredentials({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'VerifiableCredentials', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVerifiableCredentials', payload: { options: { all }, params: {...key},query }})
				return getters['getVerifiableCredentials']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVerifiableCredentials API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryVerifiableCredential({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryVerifiableCredential( key.verifiable_credential_id)).data
				
					
				commit('QUERY', { query: 'VerifiableCredential', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVerifiableCredential', payload: { options: { all }, params: {...key},query }})
				return getters['getVerifiableCredential']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVerifiableCredential API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgIssueCredential({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgIssueCredential(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIssueCredential:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgIssueCredential:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRevokeCredential({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRevokeCredential(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRevokeCredential:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRevokeCredential:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgIssueCredential({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgIssueCredential(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIssueCredential:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgIssueCredential:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRevokeCredential({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRevokeCredential(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRevokeCredential:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRevokeCredential:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
