import React, { useState, useEffect, useRef } from 'react'
import {
    View,
    ScrollView,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'
import { dimensions, variables, spacing } from '../../theme/variables'

import { Text, IconButton, FlexBox, Badge } from '../../components'
import { EvaProp, useTheme, ViewPager, Layout } from '@ui-kitten/components'
import { Section } from '../Section'
import { BottomBar } from '../BottomBar'
import Carousel from 'react-native-snap-carousel'
import { TopBar } from '../TopBar'
import {
    SettingsIcon,
    ChatIcon,
    MoreHorizontalIcon,
    PersonAddIcon,
    PlusCircleIcon,
} from '../../../assets/icons'

export type HighlightSliderProps = {
    children: React.ReactNode;
    source?: string;
    user?: any;
    eva?: EvaProp | undefined;
    onEndReached?: (end: boolean) => void;
};

export const HighlightSlider = ({
    source,
    eva,
    user,
    children,
    width = Math.min(dimensions.fullWidth, 418)
}: HighlightSliderProps) => {
    const theme = useTheme()
    const carousel = useRef(null)
    const [endReached, setEndReached] = useState(false)
    const [entries, setEntries] = useState([
        'hi there',
        "I'm here",
        'woah cool',
    ])
    const themedStyle = eva?.style || {}
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const next = (e) => {
        setSelectedIndex(Math.min(selectedIndex + 1, children.length - 1))
        if (selectedIndex + 1 == children.length - 1) {
            setEndReached(true)
        }
    }
    const prev = (e) => {
        setSelectedIndex(Math.max(0, selectedIndex - 1))
        if (endReached) {
            setEndReached(false)
        }
    }
    const renderItem = () => {
        // const item = entries[selectedIndex];
        const w = width - 10
        const height = w * 1.333
        return (
            <FlexBox justifycenter style={{ width: w, height }}>
                {children}
            </FlexBox>
        )
    }

    return (
        <View>
            {renderItem()}
            {/* <TouchableWithoutFeedback onPress={prev}>
                <View
                    style={{
                        position: 'absolute',
                        top: 80,
                        bottom: 50,
                        left: 0,
                        width: '50%',
                    }}
                ></View>
            </TouchableWithoutFeedback>
            {!endReached && (
                <TouchableWithoutFeedback onPress={next}>
                    <View
                        style={{
                            position: 'absolute',
                            top: 80,
                            right: 0,
                            bottom: 50,
                            width: '50%',
                        }}
                    ></View>
                </TouchableWithoutFeedback>
            )}
            <SlideIndicator width={width} index={selectedIndex} count={children.length}></SlideIndicator> */}
        </View>
    )
}

const SlideIndicator = ({ index, count, width }) => {
    return (
        <FlexBox justifycenter aligncenter row gutter={0.5} style={styles.indicators}>
            {[...Array(count)].map((indicator, i) => (
                <View
                    style={[
                        styles.indicator,
                        index == i && styles.activeIndicator,
                        { width: Math.ceil(width / 2 / count), }
                    ]}
                ></View>
            ))}
        </FlexBox>
    )
}

const styles = StyleSheet.create({
    activeIndicator: {
        opacity: 1
    },
    indicator: {
        backgroundColor: 'white',
        borderRadius: variables.borderRadius3,
        height: 4,
        opacity: 0.3,

    },
    indicators: {
        left: 0,
        position: 'absolute',
        right: 0,
        top: spacing(2),
        zIndex: 200,
    },
})
