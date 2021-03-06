import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 48}}>Track List Screen</Text>
            <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
        </View>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})
