import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationConatiner} from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import Student from './screens/MenuScreen';

const Stack = createStackNavigator();

export default function App(){
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen name="Menu" component = {MenuScreen} options={{title: 'Main Menu'}}/>
      <Stack.Screen name="Student" component = {StudentScreen} options={{title: 'Profilet e Studenteve'}}/>
    </Stack.Navigator>
    </NavigationContainer>
}
