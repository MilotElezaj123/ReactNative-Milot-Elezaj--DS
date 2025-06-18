import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try {
            const pergjigja = await fetch('https://dummyjson.com/auth/login', {
                method: "POST",
                headers: {
                    'Consent Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                credentials: 'omit',
            })
        const data =await pergjigja.json();
        if(data && data.refreshToken){
            navigation.navigate("Welcome",{username:username})
        }
        } catch(err) {
            console.log('Login error: ', err);
            alert('An error occured while logging in.');
        }
    }
    return (
        <View>
            <Text>Page Login</Text>
            <TextInput
                placeholder="Username"
                autoCapitalize="none"
                value={username}
                onChangeText={shkrimi => setUsername(shkrimi)}
            />
            <TextInput
                placeholder="Password"
                autoCapitalize="none"
                value={password}
                secureTextEntry
                onChangeText={shkrimi => setUsername(shkrimi)}
            />
            <Button title="Login" onPress={handleLogin}/>
        </View>
    )
}

export default Login