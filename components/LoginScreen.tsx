import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Button, FormControl, Input} from "native-base";

export type Props = {};

const LoginScreen: React.FC<Props> = () => {

    return (<View style={styles.container}>
        <FormControl mb="5">
            <FormControl.Label>Username</FormControl.Label>
            <Input />
        </FormControl>

        <FormControl mb="5">
            <FormControl.Label>Password</FormControl.Label>
            <Input />
        </FormControl>
        <Button style={{width: 100}}>Log In</Button>
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
