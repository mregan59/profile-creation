import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { Text, IconButton, FlexBox, Badge, Image } from '../../components'
import { EvaProp, useTheme } from '@ui-kitten/components'
import { dimensions } from '../../theme/variables'
import { ShortAnswer } from '../ShortAnswer'
import { Section } from '../Section'
import { BottomBar } from '../BottomBar'
import { TopBar } from '../TopBar'
import { HighlightSlider } from '../HighlightSlider'
import {
    SettingsIcon,
    ChatIcon,
    MoreHorizontalIcon,
    PersonAddIcon,
    PlusCircleIcon,
} from '../../assets/icons'

// {/* <FlexBox justifycenter style={{ padding: 36, height: '100%', backgroundColor: theme['color-info-200'] }}>
// <Text style={{ color: theme['color-info-800'] }} category="s1">The way to win me over is</Text>
// <Text style={{ paddingTop: 8, color: theme['color-info-800'] }} category="h1">To have a horse or two</Text>
// </FlexBox>
// <FlexBox justifycenter style={{ height: '100%', backgroundColor: theme['color-basic-800'] }}>
// {/* <View style={themedStyle?.captionContainer}>
//     <Text appearance="alternative" category="s1">This is a comment</Text>
// </View> */}
// <Image
//     style={{
//         ...themedStyle?.photo,
//     }}
//     maxWidth={width}
//     source={{ uri: photos[1].image_src }}
// ></Image>
// </FlexBox>
// <FlexBox justifycenter style={{ padding: 36, height: '100%', backgroundColor: theme['color-success-200'] }}>
// <Text style={{ color: theme['color-success-800'] }} category="s1">The dorkies thing about me</Text>
// <Text style={{ paddingTop: 8, color: theme['color-success-800'] }} category="h1">My StarWars obsession</Text>
// </FlexBox>
// <FlexBox justifycenter style={{ height: '100%', backgroundColor: theme['color-basic-800'] }}>
// <Image
//     style={{
//         ...themedStyle?.photo,
//     }}
//     maxWidth={width}
//     source={{ uri: photos[2].image_src }}
// ></Image>
// </FlexBox>
// <FlexBox justifycenter style={{ padding: 36, height: '100%', backgroundColor: theme['color-danger-200'] }}>
// <Text style={{ color: theme['color-danger-700'] }} category="s1">All I ask is that you</Text>
// <Text style={{ paddingTop: 8, color: theme['color-danger-700'] }} category="h1">like dogs more than cats</Text>
// </FlexBox>
// <FlexBox justifycenter style={{ height: '100%', backgroundColor: theme['color-basic-800'] }}>
// <Image
//     style={{
//         ...themedStyle?.photo,
//     }}
//     maxWidth={width}
//     source={{ uri: photos[3].image_src }}
// ></Image>
// </FlexBox>
// <FlexBox justifycenter style={{ padding: 36, height: '100%', backgroundColor: theme['color-warning-200'] }}>
// <Text style={{ color: theme['color-warning-700'] }} category="s1">I go crazy for</Text>
// <Text style={{ paddingTop: 8, color: theme['color-warning-700'] }} category="h1">Nashville Hot Chicken</Text>
// </FlexBox> */}

export type HeaderProps = {
    source: string;
    user: any;
    eva?: EvaProp | undefined;
};

export const Header = ({ source, photos, eva, user, onMenuChange, width }: HeaderProps) => {
    const theme = useTheme()

    const themedStyle = eva?.style
    return (
        <Section noPadding toolbarFill="white">
            <HighlightSlider width={width}>
                <Image
                    style={{
                        ...themedStyle?.photo,
                        minHeight: (width || Math.min(dimensions.fullWidth, 418) - 10) * 1.33,
                    }}
                    maxWidth={width}
                    source={{ uri: photos[0].image_src }}
                ></Image>
            </HighlightSlider>

            <BottomBar photo={source} user={user}></BottomBar>
            <TopBar onMenuChange={onMenuChange}></TopBar>
        </Section>
    )
}
