import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./components/LoginScreen";
import React from "react";
import { NativeBaseProvider } from "native-base";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <NativeBaseProvider>
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
