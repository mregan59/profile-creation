import React, { useState, useEffect, useRef } from 'react'
import { View, ScrollView, Platform, TouchableWithoutFeedback } from 'react-native'
import { Layout, Button } from '@ui-kitten/components'
import { FlexBox, Text, IconButton, Pager } from '../../components'
import {
    getDeviceHeight,
    dimensions,
    variables,
    spacing,
} from '../../theme/variables'
import { Card } from '../Card'

const GUTTER = 10
export const VerticalScroller = ({ children, style, ...props }) => {
    const themedStyle = props.eva.style
    const scrollView = useRef(null)
    const [index, setIndex] = useState(0)
    const height = getDeviceHeight()
    const [layoutMap, setLayoutMap] = useState([])
    const [layoutHeights, setLayoutHeights] = useState([1, 1, 1, 1])

    useEffect(() => {
        if (layoutMap.filter(height => height !== undefined).length == layoutMap.length) {
            addToLayoutMap()
        }
    }, [layoutMap])
    const addToLayoutMap = () => {
        //  var { x, y, width, height } = event.nativeEvent.layout;
        const layouts = []
        const screenHeight = Platform.OS == 'ios' ? dimensions.height - 46 : dimensions.height
        const intervals = []
        layoutMap.forEach((cardHeight, i) => {
            // const ratio = height / screenHeight;
            // const ratio2 = Math.ceil(ratio);

            if (i == 0) {
                // intervals.push(dimensions.height - halfRemainder)
            } else {
                // const prevCardsHeight = layout
                const getTotalCardHeight: any = (total, current) => total + current + 10
                const prevCardsHeight = layoutMap.filter((item, j) => j < i).reduce(getTotalCardHeight)
                const curHeight = layoutMap[i]
                const topPadding = curHeight > screenHeight ? 30 : (screenHeight - curHeight - 60) / 2
                intervals.push(prevCardsHeight - topPadding)
            }

            // if (ratio2 == 1) {
            //     const heightTotal = i > 0 ? height + layouts[Math.max(layouts?.length - 1, 0)] + GUTTER : height + GUTTER;

            //     layouts.push(Math.floor(heightTotal))
            //     // setLayoutMap(layouts);
            // } else {
            //     for (let i = 1; i <= ratio2; i++) {
            //         if (i < ratio2) {
            //             const heightTotal = i > 0 ? screenHeight + layouts[layouts?.length - 1] : screenHeight;
            //             layouts.push(Math.floor(heightTotal))

            //         } else {
            //             const remainder = height % screenHeight;
            //             const heightTotal = remainder + layouts[layouts?.length - 1] + GUTTER;
            //             layouts.push(Math.floor(heightTotal))
            //         }

            //     }
            // }
        })
        setLayoutHeights(intervals)
        // setLayoutHeights(layouts);
    }

    const addToLayoutMap2 = (event, index) => {
        const { x, y, width, height } = event.nativeEvent.layout
        const layouts = [...layoutMap]
        layouts[index] = height
        setLayoutMap([...layouts])
    }

    // const intervals = [];
    // for (let i = 0; i < 11; i++) {
    //     if (i == 0) {
    //         intervals.push(cardheight - halfRemainder + 20)
    //     } else {
    //         intervals.push(cardheight + intervals[i - 1])
    //     }

    // }

    useEffect(() => {

    }, [index])
    const onScroll = e => {
        // //  console.log(e);
        // const { x, y } = e.nativeEvent.contentOffset
        // // let index = Math.ceil(
        // //     y / (cardheight + 10)
        // // );
        // const index = layoutHeights.findIndex((h, i) => {
        //     return y >= h - 20 && y <= layoutHeights[i + 1] - 20
        // })
        // //  console.log(index);
        // setIndex(index + 1)
    }

    const onPress = e => {
        // const x = e.nativeEvent.pageX

        // if (x > dimensions.fullWidth / 2) {
        //     scrollView.current.scrollTo({ y: layoutHeights[Math.min(index, layoutHeights.length - 1)] })
        //     // setSelectedIndex(Math.min(selectedIndex + 1, children.length - 1));
        // } else {
        //     scrollView.current.scrollTo({ y: index == 1 ? 0 : layoutHeights[Math.max(index - 2, 0)] })
        //     // setSelectedIndex(Math.max(0, selectedIndex - 1));
        // }

        // scrollView.current.scrollTo({ y: layoutHeights[index] });
        // setIndex(index + 1)
    }
    return (

        <ScrollView
            {...props}
            style={{
                flex: 1,
                width: Math.min(dimensions.fullWidth, 418),
                // marginRight: 15,
                paddingLeft: 5,
                paddingRight: 5,
                ...style
            }}
            disableIntervalMomentum={true}
            nestedScrollEnabled={true}
            //   pagingEnabled={true}
            // snapToAlignment="center"
            decelerationRate={'fast'}
            // snapToOffsets={layoutHeights?.length > 0 ? layoutHeights : [200, 400, 600]}
            // snapToOffsets={intervals}
            // snapToInterval={cardheight - halfRemainder + 20}
            // snapToInterval={cardheight}
            ref={scrollView}
            onScroll={onScroll}
        >
            <TouchableWithoutFeedback onPress={onPress}>
                <View>
                    {
                        children.map((child, i) => (
                            <View
                                key={i}
                                onLayout={(e) => addToLayoutMap2(e, i)}
                                style={{ marginTop: GUTTER }}
                            >
                                {child}
                            </View>
                        ))
                    }
                </View>
            </TouchableWithoutFeedback>

        </ScrollView>
    )
}
