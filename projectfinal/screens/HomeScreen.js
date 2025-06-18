import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Picker, Platform, Image } from 'react-native';
import { getPublicHolidays } from '../api/holidays';

const countries = [
  { label: 'Dubai', code: 'AE' },
  { label: 'Shqipëri', code: 'AL' },
  { label: 'Hungary (Budapest)', code: 'HU' },
  { label: 'Hollandë (Amsterdam)', code: 'NL' },
];

// Logo as a simple text with style or you can replace it with an image URI if you want.
const Logo = () => (
  <View style={styles.logoContainer}>
    {/* Optional: Replace this Text with Image if you have a logo image */}
    <Text style={styles.logoText}>AlbozTravel</Text>
  </View>
);

export default function HomeScreen({ user, onLogout }) {
  const [holidays, setHolidays] = useState([]);
  const [countryCode, setCountryCode] = useState('AE'); // default Dubai
  const year = 2025; // Fixed year

  useEffect(() => {
    async function fetchHolidays() {
      const data = await getPublicHolidays(year, countryCode);
      setHolidays(data);
    }
    fetchHolidays();
  }, [countryCode]);

  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.welcome}>Mirësevini, {user?.email}!</Text>

      <Button title="Log Out" onPress={onLogout} color="#d9534f" />

      <Text style={styles.sectionTitle}>Zgjidh vendin:</Text>
      {Platform.OS === 'web' ? (
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          style={styles.pickerWeb}
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label}
            </option>
          ))}
        </select>
      ) : (
        <Picker
          selectedValue={countryCode}
          onValueChange={(val) => setCountryCode(val)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          {countries.map((c) => (
            <Picker.Item key={c.code} label={c.label} value={c.code} />
          ))}
        </Picker>
      )}

      <Text style={styles.sectionTitle}>
        Festat Publike për {year} në {countries.find((c) => c.code === countryCode)?.label}:
      </Text>

      {holidays.length === 0 ? (
        <Text style={styles.loadingText}>Po ngarkohen...</Text>
      ) : (
        <FlatList
          data={holidays}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <View style={styles.holidayItem}>
              <Text style={styles.holidayDate}>{item.date}</Text>
              <Text style={styles.holidayName}>{item.localName}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f7f9fc',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#4a90e2',
  },
  logoText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#4a90e2',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-DemiBold' : 'Roboto',
    letterSpacing: 2,
  },
  welcome: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: '700',
    color: '#2c3e50',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  pickerItem: {
    fontSize: 18,
  },
  pickerWeb: {
    padding: 12,
    marginBottom: 20,
    width: '100%',
    fontSize: 18,
    borderRadius: 8,
    borderColor: '#4a90e2',
    borderWidth: 1,
  },
  holidayItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#4a90e2',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  holidayDate: {
    fontWeight: '700',
    color: '#4a90e2',
    fontSize: 16,
  },
  holidayName: {
    fontSize: 16,
    color: '#34495e',
    flexShrink: 1,
    marginLeft: 10,
  },
  loadingText: {
    fontStyle: 'italic',
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 20,
  },
});
