import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, IconButton, FlexBox } from '../../components';
import { EvaProp, useTheme } from '@ui-kitten/components';
import { Section } from '../Section';
import {
    SettingsIcon,
    ChatIcon,
    MoreHorizontalIcon,
    PersonAddIcon,
    PlusCircleIcon
} from '../../../assets/icons';

export type ShortAnswerProps = {
    label: string;
    content: string;
    eva?: EvaProp | undefined;
    onQuickChatChange?: () => void
};

export const ShortAnswer = ({
    label = 'label',
    content = 'content',
    eva,
    onQuickChatChange,
    onAddShortAnswerChange
}: ShortAnswerProps) => {
    const theme = useTheme();
    const themedStyle = eva?.style;
    return (
        <Section showBottomToolbar={false} showTopToolbar onQuickChatChange={onQuickChatChange} onAddShortAnswerChange={onAddShortAnswerChange}>
            <Text style={themedStyle?.label} appearance="hint" category="label">{label}</Text>
            {/* <FlexBox style={themedStyle?.label} row gutter="1">
                <Text category="label">{label}</Text>
                <IconButton
                    appearance="ghost"
                    noPadding={true}
                    size="small"
                    icon={PlusCircleIcon}
                    fill={theme['color-basic-transparent-600']}
                ></IconButton>
            </FlexBox> */}
            <Text category="h6">{content.substr(0, 130)}</Text>
        </Section>
    );
};
