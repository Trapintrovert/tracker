import '../_mockLocation'
import React, { useContext } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../component/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation'
import { withNavigationFocus } from '@react-navigation/compat'

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext)

    const [err] = useLocation(isFocused, addLocation)


    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2> Create a Track</Text>
            <Map/>
            { err ? <Text> Please enable location services </Text> : null }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)



