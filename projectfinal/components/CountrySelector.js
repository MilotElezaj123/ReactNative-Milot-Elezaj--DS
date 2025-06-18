import React from 'react';
import { View, Text, Picker, Image, StyleSheet, Platform } from 'react-native';

const countries = [
  { label: 'United States', value: 'US', flag: 'https://flagcdn.com/us.png' },
  { label: 'Germany', value: 'DE', flag: 'https://flagcdn.com/de.png' },
  { label: 'India', value: 'IN', flag: 'https://flagcdn.com/in.png' },
  { label: 'Canada', value: 'CA', flag: 'https://flagcdn.com/ca.png' },
  { label: 'Australia', value: 'AU', flag: 'https://flagcdn.com/au.png' },
];

export default function CountrySelector({ selected, onChange }) {
  return (
    <View style={{ marginBottom: 10 }}>
      {Platform.OS === 'web' ? (
        <select value={selected} onChange={(e) => onChange(e.target.value)} style={{ padding: 10 }}>
          {countries.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      ) : (
        <Picker selectedValue={selected} onValueChange={onChange} style={{ height: 50 }}>
          {countries.map((c) => (
            <Picker.Item key={c.value} label={c.label} value={c.value} />
          ))}
        </Picker>
      )}
    </View>
  );
}
