import React, { useState, useEffect } from 'react'
import { View, ScrollView, Image } from 'react-native'
import { Layout, Button, ViewPager, Avatar } from '@ui-kitten/components'
import { FlexBox, Text, IconButton } from '../../components'
import { LinearGradient } from 'expo-linear-gradient'
import { SettingsIcon, ChevronBackIcon, MoreHorizontalIcon } from '../../assets/icons'
import { getDeviceHeight, variables, spacing } from '../../theme/variables'
import profile from '../../data/profile.json'

export const Card = ({ indexHere, ...props }) => {
    const themedStyle = props.eva.style
    const height = getDeviceHeight()
    const TopBar = () => {
        return (
            <View style={themedStyle.topBar}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0,0,0,.5)', 'rgba(0,0,0,.2)', 'transparent']}
                >
                    <FlexBox row aligncenter justifybetween style={themedStyle.topBarContainer}>
                        <IconButton iconSize="giant" appearance="ghost" icon={ChevronBackIcon} ></IconButton>
                        <IconButton appearance="ghost" icon={MoreHorizontalIcon} ></IconButton>
                    </FlexBox>
                </LinearGradient>
            </View>
        )
    }

    const BottomBar = () => {
        return (
            <View style={themedStyle.bottomBar}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0,0,0,0)', 'rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .9)']}
                >
                    <FlexBox row justifystart aligncenter style={themedStyle.bottomBarContainer}>
                        <Avatar style={themedStyle.avatar} size='giant' source={{
                            uri: profile.photos[0].image_src_s400,
                        }}></Avatar>
                        <View style={themedStyle.info}>
                            <Text category="h5">{`${profile.show_user.first_name}, ${profile.show_user.age}`}</Text>
                            <Text category='p1'>{profile.show_user.location}</Text>
                        </View>
                        <FlexBox style={themedStyle.buttonContainer} gutter={2} row>
                            <IconButton status="danger" icon={SettingsIcon}></IconButton>
                            <IconButton icon={SettingsIcon} ></IconButton>
                        </FlexBox>
                    </FlexBox>
                </LinearGradient>
            </View>
        )
    }
    const BottomBarDark = () => {
        return (
            <View style={themedStyle.bottomBar}>

                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,.8)', 'rgba(255,255,255,1)']}
                >
                    <View style={{ height: 70 }}></View>
                </LinearGradient>
                <FlexBox row justifystart aligncenter style={themedStyle.bottomBarContainer}>
                    <Avatar style={themedStyle.avatar} size='giant' source={{
                        uri: profile.photos[0].image_src_s400,
                    }}></Avatar>
                    <View style={themedStyle.info}>
                        <Text category="h5" appearance="alternative">{`${profile.show_user.first_name}, ${profile.show_user.age}`}</Text>
                        <Text category='p1' appearance="alternative">{profile.show_user.location}</Text>
                    </View>
                    <FlexBox style={themedStyle.buttonContainer} gutter={2} row>
                        <IconButton status="danger" icon={SettingsIcon} ></IconButton>
                        <IconButton icon={SettingsIcon} ></IconButton>
                    </FlexBox>
                </FlexBox >

            </View>
        )
    }

    const cards = [
        (<Layout level="1" style={{ ...themedStyle.card, height }}>
            <Image style={themedStyle.image} source={{
                uri: profile.photos[0].image_src_s400,
            }}></Image>
            <TopBar></TopBar>
            <BottomBar></BottomBar>
        </Layout>),

        ...profile.short_answers.map(shortAnswer => <Layout level="1" style={{ ...themedStyle.otherCard, marginTop: 3 }}>
            {/* <ScrollView style={{ height: '100%' }}> */}
            <FlexBox justifycenter style={themedStyle.shortAnswerContainer}>
                <Text style={themedStyle.label} category="label" appearance='alternative'>{shortAnswer.label}</Text>
                <Text style={themedStyle.content} category="h5" appearance='alternative'>{shortAnswer.value}</Text>
            </FlexBox>
            {/* </ScrollView> */}

        </Layout >)

    ]

    return cards[indexHere]
    return (
        <View>
            <Layout level="1" style={themedStyle.card}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlexBox justifycenter style={themedStyle.shortAnswerContainer}>
                        <Text style={themedStyle.label} category="label" appearance='alternative'>{profile.short_answers[0].label}</Text>
                        <Text style={themedStyle.content} category="h5" appearance='alternative'>{profile.short_answers[0].value}</Text>
                    </FlexBox>
                </ScrollView>
                <TopBar></TopBar>
                <BottomBarDark></BottomBarDark>

            </Layout>
        </View>

    )
    return (
        <Layout level="1" style={themedStyle.card}>
            <Image style={themedStyle.image} source={{
                uri: profile.photos[0].image_src_s400,
            }}></Image>
            <TopBar></TopBar>
            <BottomBar></BottomBar>
        </Layout>
    )
}
