import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function LoginScreen({ navigation, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    onLogin(email, password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png',
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>HotelApp</Text>
      </View>

      <Text style={styles.subtitle}>Hyr në llogarinë tënde</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#aaa"
      />

      <TextInput
        placeholder="Fjalëkalimi"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Hyr</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('Sign Up')}
      >
        <Text style={styles.signupButtonText}>Nuk ke llogari? Regjistrohu</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 18,
    color: '#34495e',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  loginButton: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#2980b9',
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  signupButton: {
    paddingVertical: 10,
  },
  signupButtonText: {
    color: '#2980b9',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
});
