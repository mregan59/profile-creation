import React, { useState, useEffect, useMemo, useRef } from 'react'
import { View, ScrollView } from 'react-native'

import { Layout, Button, Menu as UIMenu, MenuItem } from '@ui-kitten/components'
import { FlexBox, Text, IconButton, BottomPopup } from '../../components'
import { LinearGradient } from 'expo-linear-gradient'
import {
    ReportIcon,
    BlockIcon, ClockIcon, ChevronBackIcon, MoreHorizontalIcon
} from '../../assets/icons'
export const Menu = ({ onShowChange, show: incomingShow, ...props }) => {
    const styles = props.eva.style
    const bottomSheetRef2 = useRef(null)
    const [show, setShow] = useState(incomingShow)
    const snapPoints2 = useMemo(() => ([0, 200]), [])
    useEffect(() => {
        if (show) {
            bottomSheetRef2.current.snapTo(1)
        } else {
            bottomSheetRef2.current.snapTo(0)
        }
    }, [show])

    useEffect(() => {
        setShow(incomingShow)
    }, [incomingShow])

    const onChange = ind => {
        if (ind != 0) {
            setShow(true)
        } else {
            onShowChange()
        }
    }
    return (
        <>
            {/* <IconButton onPress={showMenu} appearance="ghost" icon={MoreHorizontalIcon}></IconButton> */}
            <BottomPopup
                // backgroundComponent={CustomBackground}
                // handleComponent={null}
                ref={bottomSheetRef2}
                index={0}
                snapPoints={snapPoints2}
                onChange={onChange}
            >
                <View style={styles.container}>
                    <UIMenu style={styles.menu}>
                        <MenuItem title='Snooze' accessoryLeft={ClockIcon} />
                        <MenuItem title='Block User' accessoryLeft={BlockIcon} />
                        <MenuItem title='Report User' accessoryLeft={ReportIcon} />
                    </UIMenu>
                </View>

            </BottomPopup>
        </>
    )
}
