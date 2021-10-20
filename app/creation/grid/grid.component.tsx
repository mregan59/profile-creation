import React, { useEffect, useState, useRef } from "react"
import { StyleSheet, Image, ScrollView } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Layout, CheckBox, useTheme, Input, Toggle } from "@ui-kitten/components"
import { FlexBox, IconButton, MultipleChoice } from "../../components"
import { useDidUpdateEffect } from "../../utils/hooks"
import { EyeIcon, EyeOffIcon } from "../../assets/icons"
import { dimensions } from "../../theme/variables"

export const Grid = observer(({ app }) => {
    const [showHidden, setShowHidden] = useState(false)
    const theme = useTheme()

    return (
        <Layout
            level="4"
            style={{
                padding: 16,
                position: 'fixed',
                top: 91,
                left: 0,
                right: 0,
                bottom: 0

            }}
        >
            <ScrollView contentContainerStyle={{ height: dimensions.height - 91, }}>
                <FlexBox row wrap justifystart aligncenter gutter={3}>
                    {app.fields.map(field => {
                        return <FlexBox>
                            <FlexBox row aligncenter justifybetween><Text category="s1">{field.prettyName}</Text>
                                <IconButton
                                    appearance="ghost"
                                    onPress={() => field.hideField()}
                                    size="medium"
                                    Icon={field.isHidden ? EyeOffIcon : EyeIcon}
                                />
                            </FlexBox>
                            <Image key={field.id}
                                style={{ width: 200, height: 433, opacity: field.isHidden ? 0.4 : 1 }}
                                source={{ uri: field.screenshot }}
                            ></Image>
                        </FlexBox>
                    })}
                </FlexBox>
            </ScrollView>
        </Layout>
    )
})
