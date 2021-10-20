import { types, flow, getRoot, getSnapshot, getParentOfType } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { v4 as uuid } from "uuid"
import Reactotron from "reactotron-react-native"
import { uniq } from "lodash"
export const UnprocessedOption = types
    .model({
        // id: types.identifier,
        value: types.string,
        isSelected: types.boolean,
    })
    .actions((self) => ({
        toggleSelected: () => {
            self.isSelected = !self.isSelected
        },
    }))

const Option = types.snapshotProcessor(UnprocessedOption, {
    // from snapshot to instance
    preProcessor(sn) {
        if (sn.title) {
            return {
                value: sn.title,
                isSelected: false,
            }
        }
        return {
            id: sn.id || uuid(),
            isSelected: false,
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
            "gps",
            "facebook",
        ]),
        label: types.maybe(types.string),
        sublabel: types.maybe(types.string),
        security: types.maybe(types.string),
        // additional: types.maybe(Option),
        hideable: types.maybe(types.boolean),
        skippable: types.maybe(types.boolean),
        button: types.maybe(types.array(types.string)),
        isHidden: types.maybe(types.boolean),
        isSkippable: types.maybe(types.boolean),
        screenshot: types.maybe(types.string),
        link: types.maybe(types.string),
        order: types.maybe(types.number),
        requiredCount: types.maybe(types.number),
    })
    .views((self) => ({
        get parent() {
            const parent = getParentOfType(self, App)
            return parent
        },
        get prettyName() {
            const spacedName = self.name.replace("_", " ")
            return spacedName.charAt(0).toUpperCase() + spacedName.slice(1)
        },
    }))
    .actions((self) => ({
        toggleIsHidden: () => {
            self.isHidden = !self.isHidden
            // parent.numActiveFields()
        },
        toggleIsSkippable: () => {
            self.isSkippable = !self.isSkippable
            // parent.numActiveFields()
        },
    }))
    .actions((self) => ({
        hideField: () => {
            // self.isHidden = !self.isHidden
            const parent = getParentOfType(self, AppList)
            parent.toggleHiddenField(self.name)
            // parent.numActiveFields()
        },
        skipField: () => {
            // self.isHidden = !self.isHidden
            const parent = getParentOfType(self, AppList)
            parent.toggleSkippableFields(self.name)
            // parent.numActiveFields()
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
        numActiveFields() {
            const count = self.fields.filter((f) => !f.isHidden)
            return count?.length || 0
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
            const fieldModels = fields.map((f, i) => {
                const field = structureOptions(f)
                if (field.options) {
                    return McField.create({ id: uuid(), order: i + 1, ...field })
                }
                return Field.create({ id: uuid(), order: i + 1, ...field })
            })
            self.fields = fieldModels
        },
    }))

export const AppList = types
    .model({
        apps: types.map(App),
        hiddenFields: types.optional(types.array(types.string), []),
        skippableFields: types.optional(types.array(types.string), []),
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
        getFieldsByName(fieldName, appOrder = null) {
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
            console.log("SAVE APPS")
            self.apps = {}
            apps.forEach((app) => {
                const appModel = App.create({ id: uuid(), name: app.name })
                appModel.addFields(app.fields)
                self.apps.put(appModel)
            })
        },
        toggleHiddenField: (fieldName) => {
            const fields = self.getFieldsByName(fieldName)
            fields.forEach((field) => field.toggleIsHidden())
            if (self.hiddenFields.includes(fieldName)) {
                self.hiddenFields.replace([...self.hiddenFields.filter((f) => f !== fieldName)])
            } else {
                self.hiddenFields.push(fieldName)
            }
        },
        toggleSkippableFields: (fieldName) => {
            const fields = self.getFieldsByName(fieldName)
            fields.forEach((field) => field.toggleIsSkippable())
            if (self.skippableFields.includes(fieldName)) {
                self.skippableFields.replace([
                    ...self.skippableFields.filter((f) => f !== fieldName),
                ])
            } else {
                self.skippableFields.push(fieldName)
            }
        },
        getOrderedFields(appOrder) {
            let orderedFields = []
            return appOrder.map((appName) => {
                const app = self.getAppByName(appName)
                orderedFields = uniq([...orderedFields, ...app.order])
                return app.orderFields(orderedFields)
            })
        },
        getFieldOrder(appOrder) {
            let orderedFields = []
            appOrder.forEach((appName) => {
                const app = self.getAppByName(appName)
                orderedFields = uniq([...orderedFields, ...app.order])
            })
            return orderedFields
        },
    }))
