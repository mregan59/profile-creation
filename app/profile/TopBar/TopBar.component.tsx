import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { Layout, Button } from '@ui-kitten/components'
import { FlexBox, Text, IconButton } from '../../components'
import { LinearGradient } from 'expo-linear-gradient'
import { SettingsIcon, ChevronBackIcon, MoreHorizontalIcon } from '../../assets/icons'
export const TopBar = ({ onMenuChange, ...props }) => {
    const themedStyle = props.eva.style
    return (
        <View style={themedStyle.topBar}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,.2)', 'rgba(0,0,0,0)']}
            >
                <FlexBox row aligncenter justifybetween style={themedStyle.topBarContainer}>
                    <IconButton fill="white" size="giant" appearance="ghost" Icon={ChevronBackIcon} ></IconButton>
                    {/* <FlexBox style={themedStyle.badge} justifycenter aligncenter><Text category="c2" appearance="white">Sean liked you</Text></FlexBox> */}
                    <IconButton fill="white" onPress={onMenuChange} appearance="ghost" Icon={MoreHorizontalIcon} ></IconButton>
                </FlexBox>
            </LinearGradient>
        </View>
    )
}
