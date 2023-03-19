import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {auth} from "../firebase";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type Props = {};

const Home: React.FC<Props> = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            if (!user) {
                navigate("Login")
            }
        })
    }, [])

    return (<View>
        <Text>This is the Home Page</Text>
    </View>);
};

export default Home;
