import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';

// Import ekranet
import LoginScreen from './auth/LoginScreen';
import SignUpScreen from './auth/SignUpScreen';
import SearchScreen from './screens/SearchScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    setUser({ email });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
            >
              {props => <LoginScreen {...props} onLogin={handleLogin} />}
            </Stack.Screen>
            <Stack.Screen
              name="Sign Up"
              component={SignUpScreen}
              options={{ headerTitleAlign: 'center' }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={({ navigation }) => ({
                title: 'Kërko Hotelet',
                headerRight: () => <SettingsButton navigation={navigation} />,
                headerTitleAlign: 'center',
              })}
            />
            <Stack.Screen
              name="Payment"
              component={PaymentScreen}
              options={({ route }) => ({ title: `Pagesa - ${route.params.hotel.name}` })}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ title: 'Profili Im', headerTitleAlign: 'center' }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ title: 'Cilësimet', headerTitleAlign: 'center' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SettingsButton({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Settings')}
      style={{ marginRight: 15 }}
    >
      <Text style={{ color: '#007AFF', fontSize: 16 }}>Cilësimet</Text>
    </TouchableOpacity>
  );
}
