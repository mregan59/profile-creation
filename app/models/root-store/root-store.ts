import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { AppList } from "../app"
import Reactotron from "reactotron-react-native"
/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  appList: types.optional(AppList, {} as any),

})
  .extend(withEnvironment)
  .actions((self) => ({
      getApps: () => {
        const apps = self.environment.api.getApps()
        self.appList.saveApps(apps)
      }
  }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
