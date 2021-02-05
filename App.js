import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
//import {createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from 'react-navigation-stack'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from './src/screen/AccountScreen'
import SigninScreen from './src/screen/SigninScreen'
import SignupScreen from './src/screen/SignupScreen'
import TrackCreateScreen from './src/screen/TrackCreateScreen'
import TrackDetailScreen from './src/screen/TrackDetailScreen'
import TrackListScreen from './src/screen/TrackListScreen'

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator()


function LoginFlow () {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen}/>
      <Stack.Screen name="Signin" component={SigninScreen}/>
    </Stack.Navigator>
  )
}
function OtherTrackList(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  )
}
  

function MainFlow() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="OtherTrackList" component={OtherTrackList} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}


export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginFlow" component={LoginFlow} options={{ headerShown: false}} />
        <Stack.Screen name="MainFlow" component={MainFlow} options={{ headerShown: false}} />
      </Stack.Navigator>      
    </NavigationContainer>
  )
};