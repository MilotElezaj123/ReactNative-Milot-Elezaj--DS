import React from "react";
import { View,Text,TextInput,Button,StyleSheet } from "react-native";

const Login=()=>{
    const handleLogin = async () => {
        console.log(username,password)
        try {
            const response = await fetch('http://dummyjson.com/auth/login', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                credentials: 'omit'
            });

            const data = await response.json();
            console.log(data);

            if (data?.token) {
                navigator.navigate('Welcome', {
                    username: username
                });
            } else {
                alert(data.message || 'Login failed. Please check your credentials');
            }
        } catch (err) {
            console.log('Login error: ', err);
            alert('An error occured while logging in.');
        }

  };
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Fake API Login</Text>
        <TextInput 
         style={styles.input}
         placeholder="Username"
         autoCapitalize="none"
         value={username}
         onChangeText={test=>setUsername(test)}
        />
        <TextInput 
         style={styles.input}
         placeholder="Password"
         autoCapitalize="none"
         value={password}
         onChangeText={test=>setPassword(test)}
        />
        <Button title="Login" onPress={handle}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title:{
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    error:{
        color: 'red',
        marginBottom: 10,
        textAlign: 'center'
    },
})
export default Login;