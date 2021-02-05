import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SignupScreen = ({navigation}) => {
    return (
        <View>
            <Text style={{ fontSize: 48}}>Signup </Text>
            <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')} />
            <Button title="Go to MainFlow" onPress={() => console.log(navigation.navigate('MainFlow'))} />
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})
