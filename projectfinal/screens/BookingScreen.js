import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BookingScreen() {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleBooking = () => {
    if (!name.trim()) {
      Alert.alert('Gabim', 'Ju lutem shkruani emrin tuaj');
      return;
    }
    Alert.alert(
      'Rezervim',
      `Faleminderit ${name}, rezervimi juaj u ruajt për datën ${date.toLocaleDateString()}`
    );
    setName('');
    setDate(new Date());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rezervime</Text>

      <Text style={styles.label}>Emri Juaj</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Shkruani emrin"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <Text style={styles.label}>Zgjidh datën e rezervimit</Text>
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.dateButton}>
        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
          minimumDate={new Date()}
          style={styles.datePicker}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button title="Bëj rezervimin" onPress={handleBooking} color="#4a90e2" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    padding: 25,
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#4a90e2',
    marginBottom: 40,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#34495e',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#a2b1c6',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 18,
    marginBottom: 25,
    backgroundColor: '#fff',
    shadowColor: '#4a90e2',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  dateButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#a2b1c6',
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#4a90e2',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  dateText: {
    fontSize: 18,
    color: '#34495e',
  },
  buttonContainer: {
    marginTop: 30,
    borderRadius: 8,
    overflow: 'hidden', // për të pasur butonin me kënde të rrumbullakosura në Android
  },
  datePicker: {
    backgroundColor: '#fff',
  },
});
