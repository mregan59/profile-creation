import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import {
    Layout, Button, EvaProp, Icon
} from '@ui-kitten/components'
import {
    EvaSize, EvaStatus
} from '@ui-kitten/components/devsupport'
import { FlexBox, Text, IconButton } from '..'

export type BadgeProps = {
    children: string;
    eva?: EvaProp | undefined;
    size?: EvaSize,
    status?: EvaStatus
};

export const Badge = ({ children, size = "medium", status = "primary", eva, appearance, style, iconName, iconFill }: BadgeProps) => {
    const themedStyle = eva?.style || {}
    return (
        <FlexBox style={[themedStyle.badge, themedStyle[size], themedStyle[status], themedStyle[appearance], style]} row gutter="1" aligncenter justifybetween>
            {iconName && <Icon
                fill={iconFill || theme['text-basic-color']}
                style={{ height: 20, width: 20 }}
                name={iconName || 'award-outline'}
            ></Icon>}
            <Text category="s1" style={[themedStyle.text, themedStyle[`${status}Text`], themedStyle[`${appearance}Text`]]}>{children}</Text>
        </FlexBox>
    )
}

// export const Badge = props => {
//     return <View><Text>{props.children}</Text></View>
// }
