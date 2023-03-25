import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {auth} from "../firebase";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import CakeCard from "./SingleItem";

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
        <CakeCard imageSource={"https://images.unsplash.com/photo-1426869884541-df7117556757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} title={"Chocolate Cupcake"} description={"This is the complete testing description for the following most precious sweet, AKA Cupcake and specifically, Chocolate Cupcake Description"}/>
    </View>);
};

export default Home;
