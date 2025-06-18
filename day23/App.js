import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Welcome from './screen/WelcomeScreen'

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Welcome" component={Welcome}/>
    </Stack.Navigator>
    <StatusBar style='auto'/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
