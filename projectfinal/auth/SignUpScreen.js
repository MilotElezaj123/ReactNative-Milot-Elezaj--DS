import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSignUp = () => {
    setError('');
    setSuccess(false);

    if (!validateEmail(email)) {
      setError('Ju lutem shkruani një email të vlefshëm.');
      return;
    }

    if (password.length < 6) {
      setError('Fjalëkalimi duhet të ketë të paktën 6 karaktere.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Fjalëkalimet nuk përputhen.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      Alert.alert('Sukses', 'Llogaria u krijua me sukses!');
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.title}>Krijo Llogari</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? <Text style={styles.success}>Llogaria u krijua me sukses!</Text> : null}

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

      <TextInput
        placeholder="Konfirmo Fjalëkalimin"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#2980b9" style={{ marginVertical: 15 }} />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Regjistrohu</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 12,
    shadowColor: '#2980b9',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  error: {
    color: '#e74c3c',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '600',
  },
  success: {
    color: '#27ae60',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '700',
  },
});
