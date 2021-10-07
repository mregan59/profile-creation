import { types, flow, getRoot, getSnapshot, getParentOfType } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { v4 as uuid } from "uuid"
import Reactotron from "reactotron-react-native"
export const UnprocessedOption = types.model({
    // id: types.identifier,
    value: types.string,
})

const Option = types.snapshotProcessor(UnprocessedOption, {
    // from snapshot to instance
    preProcessor(sn) {
        if (sn.title) {
            return {
                value: sn.title,
            }
        }
        return {
            id: sn.id || uuid(),
            ...sn,
        }
    },
    // // from instance to snapshot
    // postProcessor(sn): BackendTodo {
    //     return {
    //         text: !sn.text ? nul l : sn.text,
    //     }
    // },
})

const Field = types
    .model({
        id: types.identifier,
        name: types.string,
        type: types.enumeration("Type", [
            "mc",
            "input",
            "datepicker",
            "location_input",
            "multi_mc",
            "prompt",
            "confirm",
            "photos",
            "profile_photo",
            "edit_photo",
            "map",
            "spinner",
            "short_answers",
            "instagram",
        ]),
        label: types.maybe(types.string),
        sublabel: types.maybe(types.string),
        security: types.maybe(types.string),
        // additional: types.maybe(Option),
        hideable: types.maybe(types.boolean),
        skippable: types.maybe(types.boolean),
        button: types.maybe(types.array(types.string)),
    })
    .views((self) => ({
        get parent() {
            const parent = getParentOfType(self, App)
            return parent
        },
    }))
const McField = Field.named("McField").props({
    options: types.maybe(types.array(Option)),
    map: types.maybe(types.frozen()),
})

export const App = types
    .model({
        id: types.identifier,
        name: types.string,
        fields: types.optional(types.array(types.union(Field, McField)), []),
    })
    .extend(withEnvironment)
    .views((self) => ({
        getFieldByName(fieldName) {
            return self.fields.find((field) => field.name === fieldName)
        },
        get order() {
            return self.fields.map((field) => field.name)
        },
    }))
    .views((self) => ({
        orderFields(order) {
            return order.map((fieldName) => {
                return self.getFieldByName(fieldName)
            })
        },
    }))
    .actions((self) => ({
        addFields: (fields) => {
            const structureOptions = (field) => {
                if (field.options) {
                    const options = field.options.map((option) => {
                        return { value: option.title || option }
                    })
                    return {
                        id: field?.id || uuid(),
                        ...field,
                        options,
                    }
                }
                return field
            }
            const fieldModels = fields.map((f) => {
                const field = structureOptions(f)
                if (field.options) {
                    return McField.create({ id: uuid(), ...field })
                }
                return Field.create({ id: uuid(), ...field })
            })
            self.fields = fieldModels
        },
    }))

export const AppList = types
    .model({
        apps: types.map(App),
    })
    .extend(withEnvironment)
    .views((self) => ({
        get hasApps() {
            return Object.keys(self.apps)?.length > 0
        },
        get appsArray() {
            return Object.keys(self.apps.toJSON()).map((key) => {
                return self.apps.get(key)
            })
        },
    }))
    .views((self) => ({
        getFieldsByName(fieldName, appOrder) {
            const fields = self.appsArray.map((app) => {
                const field = app.getFieldByName(fieldName)
                return field
            })
            const filteredFields = fields.filter((field) => field !== undefined)

            if (appOrder) {
                return appOrder.map((appName) => {
                    return fields.find((field) => field?.parent.name === appName)
                })
            }
            return filteredFields
        },
        getAppByName(appName) {
            return self.appsArray.find((app) => {
                return app.name === appName
            })
        },
    }))
    .actions((self) => ({
        saveApps: (apps) => {
            apps.forEach((app) => {
                const appModel = App.create({ id: uuid(), name: app.name })
                appModel.addFields(app.fields)
                self.apps.put(appModel)
            })
        },
        getOrderedFields(appOrder) {
            let orderedFields = []
            return appOrder.map((appName) => {
                const app = self.getAppByName(appName)
                orderedFields = [...orderedFields, ...app.order]
                return app.orderFields(orderedFields)
            })

            // for (let i = 0; i < appOrder.length - 1; i++) {
            //     const firstApp = self.getAppByName(appOrder[i])

            //     const secondApp = self.getAppByName(appOrder[i + 1])
            //     const secondAppFields = secondApp.getOrder(
            //         orderedFields[i].map((field) => field.name),
            //     )
            //     orderedFields.push(secondAppFields)
            // }

            // return orderedFields
        },
    }))
