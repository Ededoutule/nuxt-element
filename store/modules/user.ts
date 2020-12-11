import {
  Module,
  getModule,
  VuexMutation,
  VuexAction,
  VuexModule,
} from 'nuxt-property-decorator'
import store from '@/store'

export interface IUserState {
  userInfo: any
}
@Module({ stateFactory: true })
export default class User extends VuexModule implements IUserState {
  token!: string
  menus: any[] | undefined
  public userInfo: any = null

  @VuexMutation
  private SET_USERINFO(userInfo: any) {
    this.userInfo = userInfo
  }

  @VuexAction({ commit: 'USERINFO' })
  public getUserInfo(userInfo: any) {
    // this.SET_USERINFO(userInfo)
    return userInfo
  }
}

export const UserModule = () => getModule(User)
