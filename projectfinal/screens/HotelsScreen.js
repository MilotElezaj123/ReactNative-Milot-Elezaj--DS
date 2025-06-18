import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const hotelsData = {
  US: [
    {
      id: '1',
      name: 'The Ritz-Carlton',
      city: 'New York',
      image:
        'https://images.unsplash.com/photo-1501117716987-c8e9e3ff4a13?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: '2',
      name: 'Hotel California',
      city: 'Los Angeles',
      image:
        'https://imgs.search.brave.com/Hb4yquc1E9x3SP1ctgzOVMcgwdXOxYenQ6a2952JKj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRpYS5nZXR0eWltYWdlcy5jb20vaWQvNTMxMTA1NzIzL3Bob3RvL21vdGVscy1hbG9uZy1haC1oaWdod2F5LmpwZw==',
    },
  ],
  AL: [
    {
      id: '1',
      name: 'Hotel Tirana',
      city: 'Tirana',
      image:
        'https://imgs.search.brave.com/s3S70CAKzzpVTEMP_jFZ4zGkNqUeTZDMNHuYPs1oe7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hay1kLnRyaXBjZG4uY29tL2ltYWdlcy8wMjI0bDEyMDAwaDl4bWpmc0VFQkRfRF81NTBfNDEyX1I1X1E0MC5qcGc',
    },
    {
      id: '2',
      name: 'Hotel Dajti',
      city: 'Dajti',
      image:
        'https://imgs.search.brave.com/K1m3-tz1jVCSG8E_NoIPccwS_9l0Lq-fygf4gEMSCMw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRpYS1jZG4udHJpcGFkdmlzb3IuY29tL21lZGlhL3Bob3RvLW8vMTIvNWYvMjMvZmYvZGFqdGktdG93ZXItYmVsdmVkZXJlLmpwZw',
    },
  ],
  // ... more data here
};

const countryImages = {
  US: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  AL: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
  // ... more flags here
};

export default function HotelsScreen({ navigation }) {
  const [country, setCountry] = useState('US');
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setHotels(hotelsData[country] || []);
  }, [country]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zgjidh një Shtet</Text>

      <Image source={{ uri: countryImages[country] }} style={styles.flag} />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={country}
          onValueChange={(val) => setCountry(val)}
          style={styles.picker}
          dropdownIconColor="#007aff"
        >
          <Picker.Item label="USA" value="US" />
          <Picker.Item label="Shqipëri" value="AL" />
          {/* Shto shtetet tjera */}
        </Picker>
      </View>

      <Text style={styles.subtitle}>Hotelet në {country}</Text>

      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.hotelImage} />
            <View style={styles.cardContent}>
              <Text style={styles.hotelName}>{item.name}</Text>
              <Text style={styles.hotelCity}>{item.city}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Payment', { hotel: item })}
              >
                <Text style={styles.buttonText}>Rezervo</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f7', paddingHorizontal: 16, paddingTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#222' },
  subtitle: { fontSize: 20, fontWeight: '600', marginVertical: 15, color: '#444' },
  flag: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  pickerContainer: {
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 15,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#007aff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
    overflow: 'hidden',
  },
  hotelImage: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 15,
    alignItems: 'center',
  },
  hotelName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },
  hotelCity: {
    fontSize: 16,
    color: '#777',
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 10,
    minWidth: 120,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
