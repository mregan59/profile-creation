import React, { useState, useEffect } from "react"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Text, IconButton, FlexBox, Badge } from "../../components"
import { EvaProp, Icon, useTheme } from "@ui-kitten/components"
import { Section } from "../Section"
import { observer } from "mobx-react-lite"

export type BasicInfoProps = {
    primaryInfo: any
    secondaryInfo: any
    eva?: EvaProp | undefined
}

// need icon key

const ICON_NAMES = {
    age: "gift-outline",
    location: "pin-outline",
    marital_status: "heart-outline",
    height: "thermometer-outline",
    drinking: "sun-outline",
    smoking: "umbrella-outline",
    fidelity: "home-outline",
    employment_status: "clock-outline",
    political_views: "bulb-outline",
    education: "award-outline",
    occupation: "briefcase-outline",
}

export const BasicInfo = observer(
    ({
        primaryInfo = {
            age: 27,
            location: "Houston, TX",
            marital_status: "Never Married",
            height: "178 cm",
            drinking: "I drink Socially",
            smoking: "Regular smoker",
        },
        secondaryInfo = {
            fidelity: "Yes to All Faith Questions",
            employment_status: "Student",
            political_views: "Politically Very Conservative",
            education: "Completed Some college",
            occupation: "Student / Graduate Student",
        },
        churchTeachings,
        eva,
        style,
    }: BasicInfoProps) => {
        const themedStyle = eva?.style
        const theme = useTheme()

        const primaryArr = Object.keys(primaryInfo)
        const secondaryArr = Object.keys(secondaryInfo)

        const primary = () => {
            return (
                <ScrollView
                    style={themedStyle?.scroller}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    nestedScrollEnabled={true}
                >
                    <FlexBox style={themedStyle?.scrollerContainer} row>
                        {primaryArr.map((key, i) => {
                            const isLast = i == primaryArr.length - 1
                            const isFirst = i == 0
                            if (primaryInfo[key] && key !== "age" && key !== "location") {
                                return (
                                    <FlexBox
                                        row
                                        aligncenter
                                        gutter={2}
                                        style={[
                                            themedStyle?.primaryContainer,
                                            isFirst && themedStyle?.firstPrimaryItem,
                                            isLast && themedStyle?.lastPrimaryItem,
                                        ]}
                                    >
                                        <Icon
                                            fill={theme["text-basic-color"]}
                                            style={{ height: 20, width: 20 }}
                                            name={ICON_NAMES[key] || "award-outline"}
                                        ></Icon>
                                        <Text category="s1">{primaryInfo[key]}</Text>
                                    </FlexBox>
                                )
                            }
                        })}
                    </FlexBox>
                </ScrollView>
            )
        }
        const primary2 = () => {
            return (
                <FlexBox wrap row gutter={1} style={themedStyle?.secondaryContainer}>
                    {primaryArr.map((key, i) => {
                        const isLast = i == primaryArr.length - 1
                        const isFirst = i == 0
                        if (primaryInfo[key] && key !== "age" && key !== "location") {
                            return (
                                <FlexBox row aligncenter gutter={1} style={themedStyle?.badge}>
                                    <Icon
                                        fill={theme["color-primary-600"]}
                                        style={{ height: 20, width: 20 }}
                                        name={ICON_NAMES[key] || "award-outline"}
                                    />
                                    <Text
                                        style={{ color: theme["color-primary-600"] }}
                                        category="s1"
                                    >
                                        {primaryInfo[key]}
                                    </Text>
                                </FlexBox>
                            )
                        }
                    })}
                </FlexBox>
            )
        }
        const secondary = () => {
            return (
                <FlexBox gutter={3} style={themedStyle?.secondaryContainer}>
                    {secondaryArr.map((key, i) => {
                        if (secondaryInfo[key]) {
                            return (
                                <FlexBox aligncenter row gutter={2}>
                                    <Icon
                                        fill={theme["text-basic-color"]}
                                        style={{ height: 20, width: 20 }}
                                        name={ICON_NAMES[key] || "award-outline"}
                                    ></Icon>
                                    <Text status={"basic"} category="s1">
                                        {secondaryInfo[key]}
                                    </Text>
                                </FlexBox>
                            )
                        }
                    })}
                </FlexBox>
            )
        }
        const church = () => {
            return (
                <FlexBox wrap row gutter={1} style={themedStyle?.secondaryContainer}>
                    {Object.keys(churchTeachings).map((key, i) => {
                        const teaching = churchTeachings[key] === "true"
                        return (
                            <Badge
                                iconName={teaching ? "checkmark-outline" : "close-outline"}
                                iconFill={
                                    teaching
                                        ? theme["color-primary-600"]
                                        : theme["color-basic-600"]
                                }
                                status={teaching ? "primary" : "default"}
                                size="tiny"
                            >
                                {key}
                            </Badge>
                        )
                        return (
                            <FlexBox row aligncenter gutter={1} style={themedStyle?.badge}>
                                <Text
                                    style={{
                                        color: churchTeachings[key]
                                            ? theme["color-primary-600"]
                                            : theme["color-default-600"],
                                    }}
                                    category="s1"
                                >
                                    {key}
                                </Text>
                            </FlexBox>
                        )
                    })}
                </FlexBox>
            )
        }
        return (
            <React.Fragment>
                <Section style={[themedStyle?.container, style]}>
                    {primary2()}
                    {secondaryInfo && secondary()}
                </Section>
                <Section style={[themedStyle?.container, style, { marginTop: 16 }]}>
                    {church()}
                </Section>
            </React.Fragment>
        )
    },
)
