import React, { useState, useEffect } from 'react'
import { View, ScrollView, ViewProps } from 'react-native';
import { Layout, Button, Avatar, EvaProp } from '@ui-kitten/components';
import { FlexBox, Text, IconButton } from '../../components';
import { LinearGradient } from 'expo-linear-gradient';
import { SettingsIcon, ChevronBackIcon, MoreHorizontalIcon } from '../../../assets/icons';

export type BottomBarProps = ViewProps & {
    photo: string;
    eva?: EvaProp;
    user?: any;
};

export const BottomBar = ({ photo, user, eva }: BottomBarProps) => {
    const themedStyle = eva?.style || {};

    return (
        <View style={themedStyle.bottomBar}>
            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0, 0, 0, .3)']}
            >
                <FlexBox row justifystart aligncenter style={themedStyle.container}>
                    {/* <Avatar style={themedStyle.avatar} size='giant' source={{
                        uri: photo,
                    }}></Avatar> */}
                    <View style={themedStyle.info}>
                        <Text appearance="white" category="h5">{`${user.first_name}, ${user.age}`}</Text>
                        <Text appearance="white" category='p1'>{user.location}</Text>
                    </View>
                </FlexBox>
            </LinearGradient>
        </View>
    )

};