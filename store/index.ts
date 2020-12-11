import Vue from 'vue'
import Vuex from 'vuex'
import { IUserState } from './modules/user'
Vue.use(Vuex)

export interface TRootState {
  user: IUserState
}
export default new Vuex.Store<TRootState>({})
