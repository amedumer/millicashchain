import { txClient, queryClient, MissingWalletError , registry} from './module'

import { DidDocument } from "./module/types/did/did"
import { VerificationMethod } from "./module/types/did/did"
import { Service } from "./module/types/did/did"
import { DidMetadata } from "./module/types/did/did"
import { DidDocumentCreatedEvent } from "./module/types/did/event"
import { DidDocumentUpdatedEvent } from "./module/types/did/event"
import { Verification } from "./module/types/did/tx"


export { DidDocument, VerificationMethod, Service, DidMetadata, DidDocumentCreatedEvent, DidDocumentUpdatedEvent, Verification };

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
				DidDocuments: {},
				DidDocument: {},
				
				_Structure: {
						DidDocument: getStructure(DidDocument.fromPartial({})),
						VerificationMethod: getStructure(VerificationMethod.fromPartial({})),
						Service: getStructure(Service.fromPartial({})),
						DidMetadata: getStructure(DidMetadata.fromPartial({})),
						DidDocumentCreatedEvent: getStructure(DidDocumentCreatedEvent.fromPartial({})),
						DidDocumentUpdatedEvent: getStructure(DidDocumentUpdatedEvent.fromPartial({})),
						Verification: getStructure(Verification.fromPartial({})),
						
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
				getDidDocuments: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DidDocuments[JSON.stringify(params)] ?? {}
		},
				getDidDocument: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DidDocument[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: millicent.cash.did initialized!')
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
		
		
		
		 		
		
		
		async QueryDidDocuments({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDidDocuments(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryDidDocuments({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'DidDocuments', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDidDocuments', payload: { options: { all }, params: {...key},query }})
				return getters['getDidDocuments']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDidDocuments API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDidDocument({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDidDocument( key.id)).data
				
					
				commit('QUERY', { query: 'DidDocument', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDidDocument', payload: { options: { all }, params: {...key},query }})
				return getters['getDidDocument']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDidDocument API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgCreateDidDocument({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDidDocument(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDidDocument:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateDidDocument:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteController({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteController(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteController:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteController:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddVerification({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddVerification(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddVerification:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAddVerification:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSetVerificationRelationships({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSetVerificationRelationships(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetVerificationRelationships:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetVerificationRelationships:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddService({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddService(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddService:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAddService:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteService({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteService(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteService:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteService:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateDidDocument({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateDidDocument(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateDidDocument:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateDidDocument:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRevokeVerification({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRevokeVerification(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRevokeVerification:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRevokeVerification:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddController({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddController(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddController:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAddController:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgCreateDidDocument({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDidDocument(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDidDocument:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateDidDocument:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteController({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteController(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteController:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteController:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgAddVerification({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddVerification(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddVerification:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgAddVerification:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSetVerificationRelationships({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSetVerificationRelationships(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetVerificationRelationships:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSetVerificationRelationships:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgAddService({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddService(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddService:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgAddService:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteService({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteService(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteService:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteService:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateDidDocument({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateDidDocument(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateDidDocument:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateDidDocument:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRevokeVerification({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRevokeVerification(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRevokeVerification:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRevokeVerification:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgAddController({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddController(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddController:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgAddController:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
