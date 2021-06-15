import React from 'react';
import Login from "./screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Cooking from "./screens/Cooking"
import Tabs from "./navigation/tabs";
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import { StyleSheet, useState, useEffect } from "react";
import Home from './screens/Home';

const Stack = createStackNavigator();


const getFonts = () => Font.loadAsync({
  "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
  "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
  "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
})

export default function App  () {




      return (
        <NavigationContainer>
  
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Cooking"
                    component={Cooking}
                />
            </Stack.Navigator>
          </NavigationContainer>
      )
}

