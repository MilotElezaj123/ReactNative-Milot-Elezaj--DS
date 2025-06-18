import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const [email, setEmail] = useState('user@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [paymentMethod, setPaymentMethod] = useState('Visa');

  const saveProfile = () => {
    Alert.alert(
      'Të dhënat u ruajtën!',
      `Email: ${email}\nTelefon: ${phone}\nPagesa: ${paymentMethod}`
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Profili Im</Text>

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Shkruani emailin tuaj"
          placeholderTextColor="#999"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Numri i Telefonit:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="+383 44 123 456"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Mënyra e Pagesës e Ruajtur:</Text>
        <TextInput
          style={styles.input}
          value={paymentMethod}
          onChangeText={setPaymentMethod}
          placeholder="Visa, Mastercard, etc."
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.saveButton} onPress={saveProfile} activeOpacity={0.8}>
          <Text style={styles.saveButtonText}>Ruaj</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#f0f4f8',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    color: '#2c3e50',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#d1d8e0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    color: '#2c3e50',
  },
  saveButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#4a90e2',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 7,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});
