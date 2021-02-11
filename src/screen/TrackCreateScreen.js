import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../component/Map'

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2> Create a Track</Text>
            <Map/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen



