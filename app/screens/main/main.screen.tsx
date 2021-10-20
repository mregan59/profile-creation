import React, { useEffect, useState, useRef } from "react"
import { View, TouchableOpacity, ScrollView } from "react-native"
import { observer } from "mobx-react-lite"
import {
    Button,
    Text,
    Layout,
    CheckBox,
    useTheme,
    TopNavigation,
    Divider,
} from "@ui-kitten/components"
import { Card as ProfileCard } from "../../profile/card"
import { useStores } from "../../models"
import { concat } from "lodash"
import { useNavigation } from "@react-navigation/native"
import { FlexBox, Field, Sidebar, IconButton, Badge } from "../../components"
import Reactotron from "reactotron-react-native"
import { useDidUpdateEffect } from "../../utils/hooks"
import { dimensions } from "../../theme/variables"
import {
    EyeIcon,
    CollapseIcon,
    ExpandIcon,
    EyeOffIcon,
    GridIcon,
    PlayIcon,
    SkipIcon,
} from "../../assets/icons"
import { Grid } from "../../creation/grid/grid.component"
import profiles from "./profile-data.json"
import Clipboard from "@react-native-community/clipboard"
import { Profile } from "../../profile"

const appOrder = ["CatholicMatch", "MatchApp", "JSwipe", "Hinge", "Bumble", "OkCupid"]

const FieldRow = observer(({ fields, fieldName, order, expanded, showHidden }) => {
    const store = useStores()
    // const [isHidden, setIsHidden] = useState(store.appList.hiddenFields.includes(fieldName))
    const [isExpanded, setIsExpanded] = useState(null)
    const spacedName = fieldName.replace("_", " ")
    const prettyName = spacedName.charAt(0).toUpperCase() + spacedName.slice(1)

    useEffect(() => {
        setIsExpanded(expanded)
    }, [expanded])

    useDidUpdateEffect(() => {
        store.profileList.profiles[0]?.updateProfileJson()
        // setIsHidden(store.appList.hiddenFields.includes(fieldName))
    }, [store.appList.hiddenFields.length])

    const onPress = () => {
        // setIsHidden(!isHidden)
        // setTimeout(() => {
        store.appList.toggleHiddenField(fieldName)
        // }, 1)
    }
    const onSkipPress = () => {
        // setIsHidden(!isHidden)
        store.appList.toggleSkippableFields(fieldName)
    }
    const onToggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const isHidden = store.appList.hiddenFields.includes(fieldName)
    const isSkippable = store.appList.skippableFields.includes(fieldName)
    if (!showHidden && isHidden) return null

    return (
        <Layout
            level="4"
            style={{
                marginHorizontal: 10,
                padding: 10,
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
            }}
        >
            <FlexBox aligncenter gutter={0} row style={{ marginBottom: 8 }}>
                <Text
                    status={isHidden ? "basic" : "primary"}
                    style={{ marginHorizontal: 10, opacity: isHidden ? 0.4 : 1 }}
                    category="h5"
                >
                    {prettyName}
                </Text>
                <IconButton
                    appearance="ghost"
                    onPress={onPress}
                    size="medium"
                    Icon={isHidden ? EyeOffIcon : EyeIcon}
                />
                <IconButton
                    appearance="ghost"
                    onPress={onSkipPress}
                    size="medium"
                    status={isSkippable ? "primary" : "basic"}
                    Icon={SkipIcon}
                />
                <IconButton
                    appearance="ghost"
                    onPress={onToggleExpand}
                    size="medium"
                    Icon={isExpanded ? CollapseIcon : ExpandIcon}
                />
                {isSkippable && (
                    <Badge size="tiny" style={{ marginLeft: "auto" }} status="danger">
                        IsSkippable
                    </Badge>
                )}
            </FlexBox>
            <FlexBox row style={{ opacity: isHidden ? 0.4 : 1 }}>
                {fields.map((field, j) => {
                    return (
                        <Field
                            expanded={isExpanded}
                            key={j}
                            field={field}
                            appName={order[j]}
                        ></Field>
                    )
                })}
            </FlexBox>
        </Layout>
    )
})

const appColors = {
    Bumble: "warning",
    Hinge: "danger",
    CatholicMatch: "primary",
    MatchApp: "success",
    JSwipe: "info",
    OkCupid: "primary",
}

export const Main = observer((props) => {
    const navigation = useNavigation()
    const theme = useTheme()
    const [order, setOrder] = useState(appOrder)
    const [showGrid, setShowGrid] = useState(false)
    const [orderedFields, setOrderedFields] = useState(appOrder)
    const [expanded, setExpanded] = useState(true)
    const [showHidden, setShowHidden] = useState(true)
    const [fieldOrder, setFieldOrder] = useState([])
    const store = useStores()

    useEffect(() => {
        store.getApps()
    }, [])

    const convertProfile = (profile, index) => {
        let newProfile = {}
        profile.photos.forEach((photo, i) => {
            const split = photo.image_src_s1200.split(".")
            const suffix = split[split.length - 1]
            newProfile[`photo${i}`] = `/images/profile${index + 1}/${i + 1}.${suffix}`
            newProfile[`photo${i}caption`] = photo.caption
        })
        newProfile = { ...newProfile, ...profile.primary_answers, ...profile.secondary_answers }
        // let favs = []
        // Object.keys(profile.favorite_things).forEach(key => {
        //     favs = [...favs, profile.favorite_things[key].slice(0, 3)]
        // })
        const appearance = profile.multiple_choice.Appearance
        const faith = profile.multiple_choice.Faith
        const background = profile.multiple_choice.Background
        const lifestyle = profile.multiple_choice.Lifestyle
        const teachings = profile.church_teachings
        newProfile = {
            ...newProfile,
            // interests: favs,
            bio: profile.short_answers[0].value,
            eyes: appearance[0],
            hair: appearance[1],
            body_type: appearance[2],
            race: appearance[3],
            tattoos: appearance[4],
            piercings: appearance[5],
            attendance: faith[0],
            vocation_flag: faith[1],
            convert: faith[2],
            liturgical_style: faith[3],
            faith_practice: faith[4],
            children: background[0],
            parents_marital_status: background[1],
            family_ties: background[2],
            birth_order: background[3],
            rural_urban: background[4],
            children_ideal: background[5],
            primary_schooling: background[6],
            daily_rhythm: lifestyle[0],
            exercise: lifestyle[1],
            diet: lifestyle[2],
            eat_dinner_out: lifestyle[3],
            tv_habits: lifestyle[4],
            long_distance: lifestyle[5],
            relocating: lifestyle[6],
            eucharist: teachings["The Eucharist"],
            contraception: teachings.Contraception,
            abortion: teachings["Sanctity of Life"],
            papal_infallibility: teachings["Papal Infallibility"],
            premarital_sex: teachings["Premarital Sex"],
            immaculate_conception: teachings["The Immaculate Conception"],
            ordination_of_women: teachings["Holy Orders"],
            highlightMessage: profile.highlight?.message,
            ...profile.show_user,
        }

        Object.keys(newProfile).forEach((key) => {
            const value = newProfile[key]
            if (typeof value !== "string" && !Array.isArray(value)) {
                newProfile[key] = value?.toString() || "null"
            }
        })

        return newProfile
    }

    useEffect(() => {
        // const newProfiles = profiles.map(convertProfile)
        // console.log('newProfile')
        //   console.log(newProfiles)
        // Clipboard.setString("hola")
        // navigator.clipboard.writeText(JSON.stringify(newProfiles))
    }, [])

    useEffect(() => {
        const fields = store.appList.getOrderedFields(order)
        const fieldOrder = store.appList.getFieldOrder(order)
        setOrderedFields(fields)
        setFieldOrder(fieldOrder)
    }, [order])

    if (!store.appList.hasApps) {
        return (
            <Layout>
                <Text category="h3">Loading</Text>
            </Layout>
        )
    }

    const startApp = store.appList.getAppByName(appOrder[0])

    if (!startApp) return null

    const toggleGrid = (app) => {
        if (app.name === showGrid?.name) {
            setShowGrid(null)
        } else {
            setShowGrid(app)
        }
    }

    return (
        <FlexBox row style={{ width: dimensions.fullWidth, maxWidth: dimensions.fullWidth }}>
            <Layout
                style={{
                    width: dimensions.fullWidth - 0,
                    maxWidth: dimensions.fullWidth - 0,
                    overflowY: "auto",
                    position: "relative",
                }}
            >
                <TopNavigation
                    title={(evaProps) => (
                        <FlexBox row flex1 style={{ marginLeft: 14, marginRight: 28 }}>
                            {order.map((appName) => {
                                const backgroundColor =
                                    theme[`color-${appColors[appName]}-transparent-200`]
                                const color = theme[`color-${appColors[appName]}-500`]
                                const app = store.appList.getAppByName(appName)
                                return (
                                    <FlexBox
                                        gutter={1}
                                        row
                                        justifybetween
                                        aligncenter
                                        flex1
                                        style={{
                                            borderRadius: 4,
                                            backgroundColor,
                                            margin: 10,
                                            padding: 4,
                                            paddingLeft: 16,
                                        }}
                                    >
                                        <Text category="label" style={{ color }}>
                                            {appName}({app?.numActiveFields()})
                                        </Text>
                                        <FlexBox gutter={0.5} row aligncenter>
                                            {/* <IconButton
                                                status={appColors[appName]}
                                                appearance="ghost"
                                                onPress={() => toggleGrid(app)}
                                                size="medium"
                                                Icon={GridIcon}
                                            /> */}
                                            {/* <IconButton
                                                status={appColors[appName]}
                                                appearance="ghost"
                                                // onPress={onToggleExpand}
                                                size="medium"
                                                Icon={PlayIcon}
                                            /> */}
                                        </FlexBox>
                                    </FlexBox>
                                )
                            })}
                        </FlexBox>
                    )}
                />
                <Divider />

                <ScrollView contentContainerStyle={{ height: dimensions.height - 91 }}>
                    <Layout level="4">
                        {fieldOrder.map((fieldName, i) => {
                            const fields = [...Array(orderedFields.length)].map((item, j) => {
                                return orderedFields[j][i]
                            })
                            return (
                                <FieldRow
                                    showHidden={showHidden}
                                    expanded={expanded}
                                    order={order}
                                    key={i}
                                    fieldName={fieldName}
                                    fields={fields}
                                ></FieldRow>
                            )
                        })}
                    </Layout>
                </ScrollView>
                <IconButton
                    status="primary"
                    onPress={() => setExpanded(!expanded)}
                    style={{ position: "fixed", bottom: 20, right: 30 }}
                    size="medium"
                    Icon={!expanded ? ExpandIcon : CollapseIcon}
                ></IconButton>
                <IconButton
                    status="primary"
                    onPress={() => setShowHidden(!showHidden)}
                    style={{ position: "fixed", bottom: 20, right: 80 }}
                    size="medium"
                    Icon={!showHidden ? EyeOffIcon : EyeIcon}
                ></IconButton>
                {/* {showGrid && <Grid app={showGrid}></Grid>} */}
                {/* <Sidebar></Sidebar> */}
            </Layout>
            {/* <FlexBox
                justifycenter
                aligncenter
                style={{
                    padding: 15,
                    backgroundColor: "#000",
                    overflow: "hidden",
                    height: dimensions.height,
                    width: 448,
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ width: 418 }}
                    contentContainerStyle={{
                        height: "100%",
                        maxWidth: 418,
                        borderRadius: 20,
                        overflow: "hidden",
                    }}
                >
                    <Layout level="3">
                        <Profile profile={store.profileList.profiles[0]} />
                    </Layout>
                </ScrollView>
            </FlexBox> */}
        </FlexBox>
    )
})
