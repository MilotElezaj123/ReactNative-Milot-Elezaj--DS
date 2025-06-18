import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const hotelsData = [
  { id: '1', name: 'The Ritz-Carlton', city: 'New York', country: 'US' },
  { id: '2', name: 'Hotel California', city: 'Los Angeles', country: 'US' },
  { id: '3', name: 'Hotel Tirana', city: 'Tirana', country: 'AL' },
  { id: '4', name: 'Hotel Dajti', city: 'Dajti', country: 'AL' },
  { id: '5', name: 'Taj Mahal Palace', city: 'Mumbai', country: 'IN' },
  { id: '6', name: 'Oberoi Amarvilas', city: 'Agra', country: 'IN' },
];

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

  const handleSearch = (text) => {
    setQuery(text);
    if (text.trim() === '') {
      setFilteredHotels(hotelsData);
    } else {
      const filtered = hotelsData.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(text.toLowerCase()) ||
          hotel.city.toLowerCase().includes(text.toLowerCase()) ||
          hotel.country.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredHotels(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kërko Hotelet</Text>
      <TextInput
        style={styles.input}
        placeholder="Shkruaj emrin, qytetin ose vendin"
        value={query}
        onChangeText={handleSearch}
        placeholderTextColor="#999"
      />

      <FlatList
        data={filteredHotels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.hotelItem}
            onPress={() => navigation.navigate('Payment', { hotel: item })}
            activeOpacity={0.7}
          >
            <Text style={styles.hotelName}>{item.name}</Text>
            <Text style={styles.hotelDetails}>
              {item.city}, {item.country}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nuk u gjet asnjë hotel</Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#34495e',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#d1d8e0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    color: '#34495e',
  },
  hotelItem: {
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 15,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 6,
  },
  hotelDetails: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  emptyText: {
    marginTop: 40,
    fontSize: 18,
    color: '#bdc3c7',
    textAlign: 'center',
  },
});
