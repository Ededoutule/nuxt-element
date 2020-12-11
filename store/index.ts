import Vue from 'vue'
import Vuex from 'vuex'
import { IUserState } from './modules/user'
Vue.use(Vuex)

export interface TRootState {
  user: IUserState
}
const store = () => new Vuex.Store<TRootState>({})
export default store
