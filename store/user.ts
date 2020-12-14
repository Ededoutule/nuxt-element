import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Notification } from 'element-ui'
// import { login, logout, getUserInfo } from '@/api'
// import { getToken, setToken, removeToken } from '@/utils/cookies'

@Module({
  name: 'user',
  namespaced: true,
  stateFactory: true,
})
export default class App extends VuexModule {
  public token: string = ''
  public userInfo: any = ''

  public get username() {
    return this.userInfo.username || ''
  }

  public get avatar() {
    return this.userInfo.avatar || ''
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
    // setToken(token)
  }

  @Mutation
  private SET_USERINFO(userInfo: any) {
    this.userInfo = userInfo
  }

  @Action
  public ResetToken(userInfo: any) {
    this.SET_USERINFO(userInfo)
  }
}
