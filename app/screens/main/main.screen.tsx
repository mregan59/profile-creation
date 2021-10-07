import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Text, Layout } from "@ui-kitten/components"
import { Card as ProfileCard } from "../../profile/card"
import { useStores } from "../../models"
import { concat } from "lodash"
import { useNavigation } from "@react-navigation/native"
import { FlexBox } from "../../components"
import Reactotron from "reactotron-react-native"

const Field = ({ field, parentIndex }) => {
    if (!field) {
        return <Layout style={{ width: 300, height: 200 }}></Layout>
    }
    return (
        <Layout
            key={field.id}
            shape="rounded"
            level="2"
            style={{ padding: 10, maxWidth: 300, minWidth: 300, height: 200, overflow: "hidden" }}
        >
            {parentIndex == 0 && <Text category="h6">{field.name}</Text>}
            <Text category="h6">{field.parent.name}</Text>
            {!field.options && (
                <Layout shape="rounded" level="4" style={{ padding: 8 }}>
                    <Text>Input</Text>
                </Layout>
            )}
            <FlexBox row wrap gutter={0.5}>
                {field.options &&
                    field.options.map((option) => {
                        return (
                            <Layout shape="rounded" level="4" style={{ padding: 8 }}>
                                <Text>{option.value}</Text>
                            </Layout>
                        )
                    })}
            </FlexBox>
        </Layout>
    )
}

const appOrder = ["CatholicMatch", "Hinge", "Bumble"]

export const Main = observer((props) => {
    const navigation = useNavigation()
    const [order, setOrder] = useState(appOrder)
    const [orderedFields, setOrderedFields] = useState(appOrder)
    const store = useStores()

    useEffect(() => {
        store.getApps()
    }, [])

    useEffect(() => {
        const fields = store.appList.getOrderedFields(appOrder)
        setOrderedFields(fields)
    }, [order])

    if (!store.appList.hasApps) {
        return (
            <Layout>
                <Text category="h3">Loading</Text>
            </Layout>
        )
    }

    const navigate = () => {
        navigation.navigate("demo")
    }

    const startApp = store.appList.getAppByName(appOrder[0])
    if (!startApp) return null

    return (
        <Layout>
            <FlexBox row gutter="3">
                {orderedFields.map((fields, i) => {
                    return (
                        <FlexBox>
                            {fields?.map((field) => (
                                <FlexBox key={field?.id || 0} style={{ marginBottom: 24 }}>
                                    <Field field={field} parentIndex={i} />
                                </FlexBox>
                            ))}
                        </FlexBox>
                    )
                })}
            </FlexBox>
        </Layout>
    )
})
