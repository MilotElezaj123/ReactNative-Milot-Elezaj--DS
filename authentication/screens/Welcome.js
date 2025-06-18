import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

const Welcome =() =>{
    const route = useRoute();
    const handleUsername = async() =>{
    const {username} = await fetch('https://dummy.json.com/docs/users#usersall',{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
        },
        credentials: 'omit',
    });
    return(
        <View>
            <Text>Welcome Back,{username}</Text>
        </View>
    )
}
}