import React, { useState, useEffect, useMemo, useRef } from 'react'
import { View, ScrollView, FlatList, StyleSheet, Platform } from 'react-native'
import { Layout, Button, useTheme, Input } from '@ui-kitten/components'
import {
    FlexBox,
    Text,
    IconButton,
    BottomPopup,
    Badge,
    BottomSheetFlatList,
} from '../../components'
import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet'
import { dimensions, variables, spacing } from '../../theme/variables'
// import Carousel from 'react-native-snap-carousel'
import { NativeViewGestureHandler } from 'react-native-gesture-handler'
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet'
import Animated, {
    useAnimatedStyle,
    interpolateColor,
    interpolate,
    useDerivedValue,
} from 'react-native-reanimated'
import {
    SettingsIcon,
    ChatIcon,
    ChatOutlineIcon,
    MoreHorizontalIcon,
    PersonAddIcon,
    PlusCircleIcon,
    SendIcon,
    CloseIcon,
} from '../../assets/icons'

const genericQuestions = [
    'Do you like cats or dogs?',
    'Do you enjoy hiking?',
    "What's you favorite place to go on vacation",
    'What project are you working on right now',
    'What hobbies do you have?',
    'Do you like reading books?',
    'What are your top 3 books?',
    "What's your favorite movie?",
    'Do you like horses?',
    'How was your weekend?',
    'Do you have any pets?',
    'Woud you rather climb a mountain or go to the beach?',
    'Wine or beer?',
]
const aboutQuestions = [
    {
        answer: 'Oldest Child',
        questions: [
            'Were you a bossy oldest child?',
            'How many siblings do you have?',
            "What's the most trouble you and your siblings have gotten into?",
        ],
    },
    {
        answer: 'Often talk and do things with family',
        questions: [
            'Does your family have any cool traditions?',
            'Do you live near your family?',
        ],
    },
    {
        answer: 'Night Owl',
        questions: [
            'Do you ever wish you were a morning person?',
            'How late do you usually stay up?',
        ],
    },
    {
        answer: 'A few hours a week of TV',
        questions: [
            "What's your favorite TV show?",
            'Any TV recommendations?',
            "What's your favorite movie?",
            "What's the worst movie you've seen?",
        ],
    },
]
const favoriteQuestions = [
    {
        answer: 'Horseback Riding',
        questions: [
            'When did you start horseback riding?',
            'Have you ever fallen off a horse?',
            'Do you have a horse?',
        ],
    },
    {
        answer: 'Sherlock Holmes',
        questions: [
            'Sherlock Holmes books or movies? or both?',
            'Who do you like better as Sherlock Holmes: Robert Downy Jr or Benedict Cumberbatch',
        ],
    },
    {
        answer: 'Running',
        questions: [
            'How often do you run?',
            "What's the farthest your've ever run?",
            'Have you done a marathon? Or would you ever want to?',
        ],
    },
    {
        answer: 'A few hours a week of TV',
        questions: [
            "What's your favorite TV show?",
            'Any TV recommendations?',
            "What's your favorite movie?",
            "What's the worst movie you've seen?",
        ],
    },
]
const questions = {
    generic: genericQuestions,
    about: aboutQuestions,
    favorite: favoriteQuestions,
}
const questionTitles = {
    generic: 'Some generic questions',
    about: "Based on Sean's answer",
    favorite: "Based on Sean's Favorite Things",
}

export const QuickChat = ({ fixed, show: incomingShow, onShowChange, ...props }) => {
    const bottomSheetRef = useRef(null)
    const bottomSheetRef2 = useRef(null)
    const carousel = useRef(null)
    const theme = useTheme()
    const [show, setShow] = useState(false)
    const themedStyle = props.eva.style
    const snapPoints = useMemo(
        () => (show ? ['35%', '100%'] : [-40, '35%', '100%']),
        [show]
    )
    const snapPoints2 = useMemo(() => (show ? [70] : [0, 70]), [show])

    const handleClosePress = () => {
        setShow(false)
    }

    useEffect(() => {
        setShow(incomingShow)
    }, [incomingShow])

    const renderQuestion = (question, index) => {
        return (
            <FlexBox key={index} row aligncenter style={themedStyle.question}>
                <ChatOutlineIcon
                    fill={theme['color-basic-700']}
                    style={{ width: 16, height: 20, marginRight: 20 }}
                ></ChatOutlineIcon>
                <Text category="s1">{question}</Text>
            </FlexBox>
        )
    }
    const renderAboutQuestion = (question, index) => {
        return (
            <View key={index} style={themedStyle.aboutQuestion}>
                <View style={themedStyle.aboutQuestionAnswer}>
                    <Badge size="small">{question.answer}</Badge>
                </View>
                {question.questions.map(renderQuestion)}
            </View>
        )
    }
    const renderFavoriteQuestion = (question, index) => {
        return (
            <View key={index} style={themedStyle.aboutQuestion}>
                <View style={themedStyle.aboutQuestionAnswer}>
                    <Badge size="small">{question.answer}</Badge>
                </View>
                {question.questions.map(renderQuestion)}
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        const rItem = ({ item: rItem, index }) => {
            if (item == 'generic') {
                return renderQuestion(rItem, index)
            } else if (item == 'about') {
                return renderAboutQuestion(rItem, index)
            } else if (item == 'favorite') {
                return renderFavoriteQuestion(rItem, index)
            }
        }
        return (
            <View key={index} style={themedStyle?.slide}>
                <Text
                    category="c2"
                    appearance="hint"
                    style={themedStyle.questionsHeader}
                >
                    {questionTitles[item]}
                </Text>
                <BottomSheetFlatList
                    data={questions[item]}
                    keyExtractor={(item, index) => index}
                    renderItem={rItem}
                    //  style={{ height: 500 }}
                    contentContainerStyle={{ paddingBottom: 50 }}
                />
            </View>
        )
    }

    useEffect(() => {
        if (show) {
            bottomSheetRef.current.snapTo(0)
            bottomSheetRef2.current?.snapTo(0)
        } else {
            bottomSheetRef.current.snapTo(0)
            bottomSheetRef2.current?.snapTo(0)
        }
        onShowChange(show)
    }, [show])
    return (
        <>
            {/* <ScrollBottomSheet<string> // If you are using TS, that'll infer the renderItem `item` type
                componentType="FlatList"
                snapPoints={[0, '50%', dimensions.height - 100]}
                initialSnapIndex={0}
                renderHandle={() => (
                    <View style={styles.header}>
                        <View style={styles.panelHandle} />
                    </View>
                )}
                data={Array.from({ length: 200 }).map((_, i) => String(i))}
                keyExtractor={i => i}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{`Item ${item}`}</Text>
                    </View>
                )}
                contentContainerStyle={styles.contentContainerStyle}
            /> */}
            <BottomPopup
                //  backgroundComponent={CustomBackground}
                handleComponent={null}
                ref={bottomSheetRef}
                animateOnMount={true}
                index={0}
                snapPoints={snapPoints}
                enableContentPanningGesture={true}
                enableHandlePanningGesture={true}
            >
                <View style={themedStyle?.sheetContainer}>
                    <FlexBox style={themedStyle?.header} aligncenter>
                        <IconButton
                            onPress={handleClosePress}
                            appearance="ghost"
                            size="tiny"
                            iconSize="medium"
                            fill={theme['text-basic-color']}
                            style={themedStyle.closeBtn}
                            icon={CloseIcon}
                        ></IconButton>
                        <Text category="s1">You liked Sean!</Text>
                    </FlexBox>
                    <Text>Start the Conversation</Text>
                    <NativeViewGestureHandler disallowInterruption={true}>
                        {/* <Carousel
                            ref={carousel}
                            data={Object.keys(questions)}
                            renderItem={renderItem}
                            sliderWidth={dimensions.fullWidth}
                            itemWidth={dimensions.fullWidth}
                        /> */}
                    </NativeViewGestureHandler>
                    {Platform.OS == 'web' && <FlexBox row aligncenter style={themedStyle?.bottom}>
                        <Input
                            style={themedStyle.input}
                            placeholder="Type message..."
                        ></Input>
                        <IconButton
                            appearance="ghost"
                            fill={theme['color-primary-500']}
                            size="small"
                            iconSize="medium"
                            icon={SendIcon}
                            onPress={handleClosePress}
                        ></IconButton>
                    </FlexBox>}
                    {/* <FlexBox flex1 style={themedStyle?.content}></FlexBox> */}
                </View>
            </BottomPopup>
            {Platform.OS != 'web' && <BottomPopup
                // backgroundComponent={CustomBackground}
                handleComponent={null}
                ref={bottomSheetRef2}
                index={0}
                snapPoints={snapPoints2}
            >
                <View style={themedStyle?.sheetContainer}>
                    <FlexBox row aligncenter style={themedStyle?.bottom}>
                        <Input
                            style={themedStyle.input}
                            placeholder="Type message..."
                        ></Input>
                        <IconButton
                            appearance="ghost"
                            fill={theme['color-primary-500']}
                            size="small"
                            iconSize="medium"
                            icon={SendIcon}
                            onPress={handleClosePress}
                        ></IconButton>
                    </FlexBox>
                </View>
            </BottomPopup>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainerStyle: {
        backgroundColor: '#F3F4F9',
        padding: 16,
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
    },
    item: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 20,
    },
    panelHandle: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 4,
        height: 2,
        width: 40,
    },
})

const CustomBackground: React.FC<BottomSheetBackgroundProps> = ({
    style,
    animatedIndex,
}) => {
    // #region styles

    const containerAnimatedStyle = useAnimatedStyle(() => ({
        // @ts-ignore
        backgroundColor: interpolateColor(
            animatedIndex.value,
            [0, 1],
            ['#ffffff', '#a8b5eb']
        ),
    }))
    const containerStyle = useMemo(
        () => [style, containerAnimatedStyle],
        [style, containerAnimatedStyle]
    )

    // #endregion

    // render
    return (
        <Animated.View
            pointerEvents="none"
            style={containerStyle}
        ></Animated.View>
    )
}

// export default CustomBackground;
