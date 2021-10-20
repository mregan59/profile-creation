import React, { useEffect, useState, useRef } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Layout, CheckBox, useTheme, Input, Toggle } from "@ui-kitten/components"
import { FlexBox, IconButton, Badge } from "../../components"

export const MultipleChoiceOption = observer(({ option, }) => {
    const [selected, setSelected] = useState(option.isSelected)
    const onPress = () => {
        setSelected(!selected)
        setTimeout(() => {
            option.toggleSelected()
        }, 1)
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Badge status={selected ? "primary" : "default"} size="tiny">
                {option.value}
            </Badge>
        </TouchableOpacity>
    )
})

export const MultipleChoice = ({ options }) => {
    console.log('in here')
    return (
        <FlexBox row wrap gutter={0.5}>
            {options.map((option, i) => {
                return (
                    <MultipleChoiceOption
                        key={i}
                        option={option}
                    ></MultipleChoiceOption>
                )
            })}
        </FlexBox>
    )
}
