import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthForm from '../component/AuthForm'
import NavLink from '../component/NavLink'

const SigninScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AuthForm
            headerText='Sign In to Your Account'
            errorMessage=""
            onSubmit={() => {}}
            submitButtonText="Sign In"
            />
            <NavLink
                text="Don't have an account? Sign up instead"
                routeName="Signup"
            />
        </View>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
})
