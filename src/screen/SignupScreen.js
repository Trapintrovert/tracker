import React, { useContext, useEffect} from 'react'
import { StyleSheet, View,  } from 'react-native'
import { NavigationEvents } from '@react-navigation/compat'
import { Context as AuthContext } from '../context/AuthContext'
import  AuthForm from '../component/AuthForm'
import NavLink from '../component/NavLink'

const SignupScreen = () => {
    const { state, signup, clearErrorMessage, tryLocalSignin } =  useContext(AuthContext)

    useEffect(() => {
        tryLocalSignin()
    }, [])
    return (
        <View style={ styles.container }>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead"
            />
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },

})


export default SignupScreen

