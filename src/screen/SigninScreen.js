import { NavigationEvents } from '@react-navigation/compat'
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthForm from '../component/AuthForm'
import NavLink from '../component/NavLink'
import { Context } from '../context/AuthContext'

const SigninScreen = () => {
    const {state, signin, clearErrorMessage } = useContext(Context)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
            headerText='Sign In to Your Account'
            errorMessage={state.errorMessage}
            onSubmit={signin}
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
