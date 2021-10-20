import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    ViewStyle,
    StyleProp,
    ViewProps,
} from 'react-native';
import {
    Layout,
    Button,
    EvaProp,
    StyleType,
    useTheme,
} from '@ui-kitten/components';
import { FlexBox, Text, IconButton } from '../../components';
import {
    SettingsIcon,
    ChatIcon,
    MoreHorizontalIcon,
    PersonAddIcon,
    PlusCircleIcon,
    HeartIcon,

} from '../../../assets/icons';
import { QuickChat } from '../QuickChat';
export type SectionProps = ViewProps & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    eva?: EvaProp;
    fullHeight?: boolean;
    noPadding?: boolean;
    showBottomToolbar?: boolean;
    showTopToolbar?: boolean;
    bottomToolbar?: React.ReactNode;
    topToolbar?: React.ReactNode;
    title?: string;
    toolbarFill?: string;
    onQuickChatChange?: () => void,
    onAddShortAnswerChange?: () => void,
};
import { dimensions, variables, spacing } from '../../theme/variables';

export const Section = ({
    children,
    bottomToolbar,
    noPadding,
    style,
    eva,
    title,
    fullHeight,
    toolbarFill,
    showBottomToolbar = true,
    showTopToolbar = false,
    topToolbar,
    onQuickChatChange,
    onAddShortAnswerChange,
    ...props
}: SectionProps) => {
    const theme = useTheme();
    const themedStyle: StyleType | undefined = eva?.style;
    return (
        <Layout
            level="1"
            {...props}
            style={[
                themedStyle?.section,
                fullHeight && themedStyle?.fullHeight,
                // (bottomToolbar || showBottomToolbar) && themedStyle?.withToolbar,
                noPadding && themedStyle?.noPadding,
                style,
                //{ minHeight: (dimensions.fullWidth - 10) * 1.3333, display: 'flex', justifyContent: 'center' }
            ]}
        >
            {title && (
                <Text style={themedStyle?.title} category="label">
                    {title}
                </Text>
            )}
            {children}
            {/* {(bottomToolbar || showBottomToolbar) && (
                <View style={themedStyle?.bottomToolbar}>
                    {bottomToolbar || (
                        <FlexBox row gutter={0}>
                            <IconButton
                                size="medium"
                                iconSize="large"
                                icon={HeartIcon}
                                appearance="ghost"
                                fill={toolbarFill || theme['color-basic-transparent-600']}
                            ></IconButton>
                            <IconButton
                                size="medium"
                                iconSize="large"
                                icon={ChatIcon}
                                appearance="ghost"
                                onPress={onQuickChatChange}
                                fill={toolbarFill || theme['color-basic-transparent-600']}
                            ></IconButton>

                        </FlexBox>
                    )}
                </View>
            )} */}
            {/* {(topToolbar || showTopToolbar) && (
                <View style={themedStyle?.topToolbar}>
                    {topToolbar || (
                        <IconButton
                            size="small"
                            iconSize="medium"
                            icon={PlusCircleIcon}
                            appearance="ghost"
                            onPress={onAddShortAnswerChange}
                            fill={toolbarFill || theme['color-basic-transparent-600']}
                        ></IconButton>
                    )}
                </View>
            )} */}
        </Layout>
    );
};
