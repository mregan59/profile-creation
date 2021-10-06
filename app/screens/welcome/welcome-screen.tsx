import React from "react"
import { observer } from "mobx-react-lite"
import { Button, Text, Layout } from "@ui-kitten/components"
import { Card as ProfileCard } from '../../profile/card'
import { useStores } from '../../models'
import { concat } from 'lodash'
import { useNavigation } from "@react-navigation/native"
export const WelcomeScreen = observer((props) => {
    const navigation = useNavigation()
    const renderItem = ({ item }) => {
        return <ProfileCard profile={item} />
    }

    const navigate = () => {
        navigation.navigate('demo')
    }

    return (
        <Layout>
            <Button onPress={navigate}>Press</Button>
            {/* <Swiper /> */}
            <Text category="h3">Hi there</Text>

        </Layout>
    )
})
