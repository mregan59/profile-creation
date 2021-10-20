import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native';
import { Layout, Button } from '@ui-kitten/components';
import { FlexBox, Text, IconButton } from '../../components';
export const FavoriteThings = (props) => {
    const themedStyle = props.eva.style;
    return (
        <View style={themedStyle.container}>
            <Layout level="1" style={themedStyle.container}>
                <FlexBox row aligncenter justifybetween>
                    <Text>FavoriteThings</Text>
                </FlexBox>
            </Layout>
        </View>
    );
};