import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {Button, FormControl, Input} from "native-base";
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "../firebase";
import {ParamListBase, useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type Props = {};

const LoginScreen: React.FC<Props> = () => {

    const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                navigate("Home")
            }
        })
    }, [])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handling SingUp method.
    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, username, password).then((userCredential) => {
            const user = userCredential.user;
            console.log("Registration Success! " + user.getIdToken());
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }

    // Handle LogIn method
    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, username, password).then((userCredentials) => {
            const user = userCredentials.user;
            console.log("Login Success! " + user.getIdToken());
            navigate("Home")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        })

    }

    return (<View style={styles.container}>
        <FormControl mb="5">
            <FormControl.Label>Username</FormControl.Label>
            <Input
                value = {username}
                onChangeText={text => setUsername(text)}
            />
        </FormControl>

        <FormControl mb="5">
            <FormControl.Label>Password</FormControl.Label>
            <Input
                value = {password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />
        </FormControl>
        <Button
            onPress={() => handleLogIn()}
            style={{width: 100, marginBottom: 4}}>Login</Button>
        <Button
            onPress={() => handleSignup()}
            style={{width: 100, backgroundColor: 'red'}}>Register</Button>
    </View>)
    ;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
});

export default LoginScreen;
