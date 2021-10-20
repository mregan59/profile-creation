import React, { useEffect, useState, useRef } from "react"
import { StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Layout, CheckBox, useTheme, Input, Toggle, Drawer, DrawerItem } from "@ui-kitten/components"
import { FlexBox, IconButton } from "../../components"
import { useDidUpdateEffect } from "../../utils/hooks"
import { EyeIcon, EyeOffIcon } from "../../assets/icons"
import { dimensions } from "../../theme/variables"

export const Sidebar = observer(({ field, appName, onHide }) => {
    return (
        <Layout level="4" style={{ height: 300, width: dimensions.fullWidth }}>
            <FlexBox justifycenter aligncenter>
                <Text>Hi there</Text>
            </FlexBox>
        </Layout>
    )
})
