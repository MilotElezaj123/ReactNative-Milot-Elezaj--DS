import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
const Welcome = () => {
    const route=useRoute();
    const {username} =route.parents;
    <View>
        <Text>Welcome,{username} </Text>
    </View>
}

export default Welcome; 