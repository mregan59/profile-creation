import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { Text, IconButton, FlexBox, Badge } from '../../components'
import { EvaProp, useTheme } from '@ui-kitten/components'
import { Section } from '../Section'
import {
    SettingsIcon,
    ChatIcon,
    MoreHorizontalIcon,
    PersonAddIcon,
    PlusCircleIcon,
} from '../../../assets/icons'

export type MultipleChoiceProps = {
    label: string;
    content: string[];
    eva?: EvaProp | undefined;
};

export const MultipleChoice = ({
    label = 'label',
    content,
    eva,
    style
}: MultipleChoiceProps) => {
    const theme = useTheme()
    const themedStyle = eva?.style
    if (!content || content.length === 0 || content.filter(f => f !== '').length === 0) return null
    return (
        <Section style={style} title={label}>

            <FlexBox row gutter="1" wrap>
                {content.map((child, i) => {
                    if (child) {
                        return (
                            <Badge key={i} appearance={"nothing"} status={'primary'}>{child}</Badge>
                        )
                    }
                })}
            </FlexBox>

        </Section>
    )
}
