import {createStore, useStore as vuexUseStore} from 'vuex';

export const store: any = createStore({
	state() {
		return {
			count: 0,
			messages: [],
			timeoutDefault: 3000
		}
	},

	mutations: {
		['ADD_MESSAGE'](state, payload) {
			state.messages.push(payload)
		},

		['DELETE_MESSAGE'](state, payload) {
			let timeout = null
			if (payload === undefined) {
				timeout = state.timeoutDefault
			} else {
				timeout = payload
			}

			if (state.messages.length > 0) {
				setTimeout(() => {
					state.messages.splice(0, 1)
				}, timeout)
			}
		}
	},

	actions: {
		async addNotification({commit}, data = {
			notificationStatus: '',
			notificationMessage: '',
			notificationTimeout: ''
		}) {
			let Obj = {status: data.notificationStatus, message: data.notificationMessage};
			commit('ADD_MESSAGE', Obj)
			commit('DELETE_MESSAGE', data.notificationTimeout)
		}
	}
})

export function useStore() {
	return store;
}