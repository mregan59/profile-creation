import React, { useState, useEffect } from 'react'
import { View, ScrollView, Image as RNImage, ImageSourcePropType, StyleProp, ImageStyle, } from 'react-native'
import { dimensions } from '../../theme/variables'

export type ImageProps = {
    source: any;
    style: ImageStyle,
    maxWidth: number
};

export const Image = ({ source, style, maxWidth = Math.min(dimensions.fullWidth, 418) }: ImageProps) => {
    const [dim, setDim] = useState({ height: 100, width: 0 })
    useEffect(() => {
        RNImage.getSize(source.uri, (w, h) => {
            const width = maxWidth
            const height = (maxWidth * h) / w

            setDim({ height, width })
        })
    }, [])
    return (

        <RNImage
            style={{
                height: dim.height,
                width: dim.width,
                ...style
            }}
            source={source}
        ></RNImage>
    )
}
