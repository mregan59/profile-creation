import React, { useState, useEffect } from "react"
import { View, ScrollView, Platform } from "react-native"
import { Layout, Button, useTheme } from "@ui-kitten/components"
import { FlexBox, Text, IconButton } from "../../components"
import { VerticalScroller } from "../VerticalScroller"
import { ShortAnswer } from "../ShortAnswer"
import { Header } from "../Header"
import { MultipleChoice } from "../MultipleChoice"
import { BasicInfo } from "../BasicInfo"
import { Photo } from "../Photo"
import { Menu } from "../Menu"
// import profileData from '../../data/profile.json'
// import profilesData from '../../data/profiles.json'
import { dimensions } from "../../theme/variables"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"

import {
    SettingsIcon,
    ChatIcon,
    MoreHorizontalIcon,
    PersonAddIcon,
    PlusCircleIcon,
} from "../../../assets/icons"

export const Profile = observer(({ profile: profileData, ...props }) => {
    const theme = useTheme()
    const store = useStores()
    const themedStyle = props.eva.style
    const [showQuickChat, setShowQuickChat] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showAddShortAnswer, setShowAddShortAnswer] = useState(false)

    console.log("profileData")
    console.log(profileData)
    if (!profileData || !profileData.json) return null
    const shortAnswers = profileData.json.short_answers
    const appearance = profileData.json.multiple_choice.Appearance
    const faith = profileData.json.multiple_choice.Faith
    const lifestyle = profileData.json.multiple_choice.Lifestyle
    const background = profileData.json.multiple_choice.Background
    const primaryInfo = profileData.json.primary_answers
    const secondaryInfo = profileData.json.secondary_answers
    const showUser = profileData.json.show_user
    const photos = profileData.photos

    const onAddShortAnswerChange = () => {
        setShowAddShortAnswer(true)
    }

    const onQuickChatChange = () => {
        setShowQuickChat(true)
    }
    const onMenuChange = () => {
        setShowMenu(!showMenu)
    }

    // if (dimensions.fullWidth > 768) {
    //     return (
    //         <Layout level="4" style={{ flex: 1 }}>
    //             <FlexBox aligncenter style={{
    //                 width: '100%',
    //                 overflow: 'hidden',
    //                 height: dimensions.height,
    //                 paddingVertical: 50
    //             }}>
    //                 <VerticalScroller showsVerticalScrollIndicator={false} style={{
    //                     width: 768,
    //                     paddingRight: 0,
    //                     paddingLeft: 0,
    //                     borderRadius: 20,
    //                     height: '100%',
    //                 }}>
    //                     <FlexBox row style={{ maxWidth: dimensions.fullWidth }}>
    //                         <View style={{ marginRight: 10 }}>
    //                             <Header width={460} onMenuChange={onMenuChange} onQuickChatChange={onQuickChatChange} user={showUser} photos={photos} source={photos[0].image_src}></Header>
    //                         </View>
    //                         <View style={{ flex: 1, height: '100%' }}>
    //                             <BasicInfo style={{ height: '100%' }} onQuickChatChange={onQuickChatChange} primaryInfo={primaryInfo} secondaryInfo={secondaryInfo}></BasicInfo>
    //                         </View>
    //                     </FlexBox>
    //                     <ShortAnswer onAddShortAnswerChange={onAddShortAnswerChange} onQuickChatChange={onQuickChatChange} content={shortAnswers[0].value} label={shortAnswers[0].label}></ShortAnswer>
    //                     <FlexBox gutter={0.8} row>
    //                         <Layout style={{ flex: 1, height: '100%', borderRadius: 20 }}>
    //                             <Photo width={(768 - 10) / 2} onQuickChatChange={onQuickChatChange} source={photos[1].image_src_s1200}></Photo>
    //                         </Layout>

    //                         <View style={{ flex: 1, height: '100%' }}>
    //                             <MultipleChoice style={{ height: '100%' }} onQuickChatChange={onQuickChatChange} label="Appearance" content={appearance}></MultipleChoice>
    //                         </View>

    //                     </FlexBox>

    //                     <Photo onQuickChatChange={onQuickChatChange} source={photos[3].image_src}></Photo>
    //                     <MultipleChoice onQuickChatChange={onQuickChatChange} label="LifeStyle" content={lifestyle}></MultipleChoice>
    //                     <ShortAnswer onAddShortAnswerChange={onAddShortAnswerChange} onQuickChatChange={onQuickChatChange} content={shortAnswers[1].value} label={shortAnswers[1].label}></ShortAnswer>
    //                     <Photo onQuickChatChange={onQuickChatChange} source={photos[2].image_src_s1200}></Photo>
    //                     <MultipleChoice onQuickChatChange={onQuickChatChange} label="Faith" content={faith}></MultipleChoice>
    //                     <ShortAnswer onAddShortAnswerChange={onAddShortAnswerChange} onQuickChatChange={onQuickChatChange} content={shortAnswers[2].value} label={shortAnswers[2].label}></ShortAnswer>
    //                     <MultipleChoice onQuickChatChange={onQuickChatChange} label="Background" content={background}></MultipleChoice>
    //                 </VerticalScroller>

    //                 <Menu show={showMenu} onShowChange={(val) => setShowMenu(val)}></Menu>

    //             </FlexBox>
    //         </Layout >)
    // }
    return (
        <>
            <View style={{ height: Platform.OS == "web" ? "100vh" : "100%", position: "relative" }}>
                <VerticalScroller>
                    <Header
                        onMenuChange={onMenuChange}
                        onQuickChatChange={onQuickChatChange}
                        user={showUser}
                        photos={photos}
                        source={photos[0].image_src}
                    ></Header>
                    <ShortAnswer
                        onAddShortAnswerChange={onAddShortAnswerChange}
                        onQuickChatChange={onQuickChatChange}
                        content={shortAnswers[0].value}
                        label={"About me"}
                    ></ShortAnswer>
                    <BasicInfo
                        onQuickChatChange={onQuickChatChange}
                        primaryInfo={primaryInfo}
                        secondaryInfo={secondaryInfo}
                        churchTeachings={profileData.json.church_teachings}
                    ></BasicInfo>
                    {/* <Photo
                        onQuickChatChange={onQuickChatChange}
                        photo={photos[3]}
                    ></Photo> */}
                    <MultipleChoice
                        onQuickChatChange={onQuickChatChange}
                        label="Appearance"
                        content={appearance}
                    ></MultipleChoice>
                    {/* <Photo
                        onQuickChatChange={onQuickChatChange}
                        photo={photos[1]}
                    ></Photo> */}
                    <MultipleChoice
                        onQuickChatChange={onQuickChatChange}
                        label="LifeStyle"
                        content={lifestyle}
                    ></MultipleChoice>
                    {shortAnswers[1] && (
                        <ShortAnswer
                            onAddShortAnswerChange={onAddShortAnswerChange}
                            onQuickChatChange={onQuickChatChange}
                            content={shortAnswers[1].value}
                            label={shortAnswers[1].label}
                        ></ShortAnswer>
                    )}
                    {/* <Photo
                        onQuickChatChange={onQuickChatChange}
                        photo={photos[2]}
                    ></Photo> */}
                    <MultipleChoice
                        onQuickChatChange={onQuickChatChange}
                        label="Faith"
                        content={faith}
                    ></MultipleChoice>
                    {shortAnswers[1] && (
                        <ShortAnswer
                            onAddShortAnswerChange={onAddShortAnswerChange}
                            onQuickChatChange={onQuickChatChange}
                            content={shortAnswers[2].value}
                            label={shortAnswers[2].label}
                        ></ShortAnswer>)}
                    <MultipleChoice
                        onQuickChatChange={onQuickChatChange}
                        label="Background"
                        content={background}
                    ></MultipleChoice>
                </VerticalScroller>
                {/* <Menu show={showMenu} onShowChange={(val) => setShowMenu(val)}></Menu> */}
                {/* <QuickChat show={showQuickChat} onShowChange={(val) => setShowQuickChat(val)}></QuickChat>
                <AddShortAnswer show={showAddShortAnswer} onShowChange={(val) => setShowAddShortAnswer(val)}></AddShortAnswer> */}
            </View>
        </>
    )
})
