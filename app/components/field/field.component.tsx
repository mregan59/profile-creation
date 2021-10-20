import React, { useEffect, useState, useRef } from "react"
import { StyleSheet, Image } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Layout, CheckBox, useTheme, Input, Toggle } from "@ui-kitten/components"
import { FlexBox, IconButton, MultipleChoice } from "../../components"
import { useDidUpdateEffect } from "../../utils/hooks"
import { EyeIcon, EyeOffIcon } from "../../assets/icons"

const styles = StyleSheet.create({
    bumble: {},
})

const appColors = {
    Bumble: "warning",
    Hinge: "danger",
    CatholicMatch: "primary",
    MatchApp: "success",
    JSwipe: "info",
    OkCupid: "primary",
}

export const Field = observer(({ field, appName, expanded }) => {
    const [isHidden, setIsHidden] = useState(field?.isHidden)
    const theme = useTheme()

    const fieldIsHidden = field?.isHidden

    useDidUpdateEffect(() => {
        if (field.isHidden !== isHidden) {
            setIsHidden(field.isHidden)
        }
    }, [fieldIsHidden])

    // const backgroundColor = theme[`color-${appColors[appName]}-transparent-300`]
    const backgroundColorTransparent = theme[`color-${appColors[appName]}-transparent-200`]
    const backgroundColorDarker = theme[`color-${appColors[appName]}-500`]
    const backgroundColor = theme[`background-basic-color-3`]

    const appNameBadge = (
        <FlexBox
            justifycenter
            aligncenter
            style={{
                paddingHorizontal: 6,
                paddingVertical: 3,
                borderRadius: 3,
                backgroundColor,
                marginRight: "auto",
                backgroundColor: backgroundColorTransparent,
            }}
        >
            <Text style={{ color: backgroundColorDarker }} category="c2">
                {appName}
            </Text>
        </FlexBox>
    )

    if (!field) {
        // return null
        // if (!expanded) return null
        return (
            <Layout
                level="4"
                shape="rounded"
                style={{
                    //  width: 300,
                    margin: 10,
                    padding: 16,
                    position: "relative",
                    display: "flex",
                    flex: 1,
                }}
            >
                {/* <FlexBox flex1 justifycenter aligncenter>
                    <Text style={{ opacity: 0.3 }} category="h1">
                        X
                    </Text>
                </FlexBox> */}
            </Layout>
        )
    }

    const typeBadge = (
        <FlexBox
            justifycenter
            aligncenter
            style={{
                paddingHorizontal: 6,
                paddingVertical: 3,
                borderRadius: 3,
                backgroundColor,
                // marginRight: "auto",
            }}
        >
            <Text appearance="hint" category="c2">
                {field.type}
            </Text>
        </FlexBox>
    )
    const skippableBadge = (
        <FlexBox
            justifycenter
            aligncenter
            style={{
                paddingHorizontal: 6,
                paddingVertical: 3,
                borderRadius: 3,
                backgroundColor,

                // marginRight: "auto",
            }}
        >
            <Text appearance="hint" category="c2">
                skippable
            </Text>
        </FlexBox>
    )
    const requiredCountBadge = (
        <FlexBox
            justifycenter
            aligncenter
            style={{
                paddingHorizontal: 6,
                paddingVertical: 3,
                borderRadius: 3,
                backgroundColor,

                // marginRight: "auto",
            }}
        >
            <Text appearance="hint" category="c2">
                Requires {field.requiredCount}
            </Text>
        </FlexBox>
    )
    const orderBadge = (
        <FlexBox
            justifycenter
            aligncenter
            style={{
                paddingHorizontal: 6,
                paddingVertical: 3,
                borderRadius: 3,
                marginLeft: "auto",
                //  backgroundColor,

            }}
        >
            <Text appearance="hint" category="c2">
                {`${field.order} / ${field.parent.fields?.length}`}
            </Text>
        </FlexBox>
    )

    return (
        <Layout
            shape="rounded"
            level="1"
            style={{
                padding: expanded ? 16 : 8,
                // maxWidth: 300,
                display: "flex",
                flex: 1,
                flexDirection: 'flexstart',
                // minWidth: 300,
                margin: 10,
                // backgroundColor,
                position: "relative",
            }}
        >
            <FlexBox row wrap justifystart aligncenter gutter={1}>
                {typeBadge}
                {field.skippable && skippableBadge}
                {field.requiredCount && requiredCountBadge}
                {orderBadge}
            </FlexBox>
            {expanded && (
                <FlexBox style={{ marginBottom: 12, marginTop: 10, marginRight: 30 }}>
                    <Text category="h6">{field.label}</Text>
                    {field.sublabel && <Text category="c1">{field.sublabel}</Text>}
                </FlexBox>
            )}
            {expanded && (
                <FlexBox>
                    {field.type === "input" && (
                        <Input style={{ width: 150 }} placeholder={field.name} />
                    )}
                    {field.options && <MultipleChoice options={field.options}></MultipleChoice>}
                    {/* {field.screenshot && field.screenshot !== "screenshot" && (
                        <Layout level="2" style={{ marginTop: 12 }} shape="rounded">
                            <FlexBox flex1 justifycenter aligncenter style={{ padding: 12 }}>
                                <Image
                                    style={{ width: 150, height: 325 }}
                                    source={{ uri: field.screenshot }}
                                ></Image>
                            </FlexBox>
                        </Layout>
                    )} */}
                </FlexBox>
            )}
        </Layout>
    )
})
