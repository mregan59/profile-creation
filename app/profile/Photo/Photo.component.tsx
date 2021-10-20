import React, { useState, useEffect } from 'react'
import { View, ScrollView, Image } from 'react-native'
import { Text, IconButton, FlexBox, Badge } from '../../components'
import { EvaProp, useTheme } from '@ui-kitten/components'
import { dimensions } from '../../theme/variables'
import { Section } from '../Section'
import {
    SettingsIcon,
    ChatIcon,
    MoreHorizontalIcon,
    PersonAddIcon,
    PlusCircleIcon,
} from '../../../assets/icons'

export type PhotoProps = {
    source: string;
    eva?: EvaProp | undefined;
};

export const Photo = ({ photo, eva, width: incomingWidth = Math.min(dimensions.fullWidth, 418) }: PhotoProps) => {
    const [dim, setDim] = useState({ height: 100, width: 0 })
    useEffect(() => {
        Image.getSize(photo.image_src_s1200, (w, h) => {
            const width = incomingWidth
            const height = (width * h) / w

            setDim({ height, width })
        })
    }, [])

    const themedStyle = eva?.style
    return (
        <Section noPadding toolbarFill="white">
            <View style={themedStyle?.captionContainer}>
                {photo.caption && photo.caption !== 'null' && <Text category="s1">{photo.caption}</Text>}
            </View>
            <Image
                style={{
                    height: dim.height,
                    width: Math.min(dim.width, 418),
                }}
                source={{ uri: photo.image_src_s1200 }}
            ></Image>

        </Section >
    )
}
