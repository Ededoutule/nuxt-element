import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
// import { initialiseStores } from '~/utils/store-accessor'
import User from './user'

// eslint-disable-next-line import/no-mutable-exports
let UserModule: User

function initialiseStores(store: Store<any>): void {
  // ExampleModule = getModule(Example, store)
  // AppModule = getModule(App, store)
  UserModule = getModule(User, store)
}
const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]

// export * from '~/utils/store-accessor'
export { UserModule }
