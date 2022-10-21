import { txClient, queryClient, MissingWalletError , registry} from './module'

import { Regulators } from "./module/types/regulator/genesis"


export { Regulators };

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
				
				_Structure: {
						Regulators: getStructure(Regulators.fromPartial({})),
						
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
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: millicent.cash.regulator initialized!')
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
		
		async sendMsgIssueRegulatorCredential({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgIssueRegulatorCredential(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIssueRegulatorCredential:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgIssueRegulatorCredential:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgIssueRegistrationCredential({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgIssueRegistrationCredential(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIssueRegistrationCredential:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgIssueRegistrationCredential:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgIssueLicenseCredential({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgIssueLicenseCredential(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIssueLicenseCredential:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgIssueLicenseCredential:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgIssueRegulatorCredential({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgIssueRegulatorCredential(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIssueRegulatorCredential:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgIssueRegulatorCredential:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgIssueRegistrationCredential({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgIssueRegistrationCredential(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIssueRegistrationCredential:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgIssueRegistrationCredential:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgIssueLicenseCredential({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgIssueLicenseCredential(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgIssueLicenseCredential:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgIssueLicenseCredential:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
