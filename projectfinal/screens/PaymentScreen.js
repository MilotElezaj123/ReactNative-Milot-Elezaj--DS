import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

const cardOptions = [
  {
    id: 'visa',
    name: 'Visa',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
  },
  {
    id: 'mastercard',
    name: 'Mastercard',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
  },
  {
    id: 'amex',
    name: 'American Express',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg',
  },
];

export default function PaymentScreen({ route }) {
  const { hotel } = route.params;
  const [isPaid, setIsPaid] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
      Alert.alert(
        'Gabim',
        'Ju lutem plotësoni të gjitha fushat e formës së pagesës.'
      );
      return;
    }

    setIsPaid(true);
    Alert.alert('Pagesa e suksesshme', `Keni rezervuar ${hotel.name} në ${hotel.city}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Paguaj për {hotel.name}</Text>
      <Text style={styles.details}>Vendndodhja: {hotel.city}</Text>
      <Text style={styles.details}>Çmimi: $200/natë</Text>

      <Text style={styles.selectTitle}>Zgjidh Metodën e Pagesës</Text>
      <View style={styles.cardsContainer}>
        {cardOptions.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.cardOption,
              selectedCard === card.id && styles.cardOptionSelected,
            ]}
            onPress={() => setSelectedCard(card.id)}
            activeOpacity={0.8}
          >
            <Image source={{ uri: card.image }} style={styles.cardImage} resizeMode="contain" />
            <Text style={styles.cardName}>{card.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedCard && (
        <View style={styles.paymentForm}>
          <TextInput
            placeholder="Numri i Kartës"
            placeholderTextColor="#999"
            keyboardType="numeric"
            maxLength={16}
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <TextInput
            placeholder="Emri mbi Kartë"
            placeholderTextColor="#999"
            style={styles.input}
            value={cardHolder}
            onChangeText={setCardHolder}
          />
          <TextInput
            placeholder="Data e skadencës (MM/YY)"
            placeholderTextColor="#999"
            style={styles.input}
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            placeholder="CVV"
            placeholderTextColor="#999"
            keyboardType="numeric"
            maxLength={4}
            style={styles.input}
            secureTextEntry={true}
            value={cvv}
            onChangeText={setCvv}
          />

          <TouchableOpacity style={styles.payButton} onPress={handlePayment} activeOpacity={0.7}>
            <Text style={styles.payButtonText}>Paguaj me Kartë</Text>
          </TouchableOpacity>
        </View>
      )}

      {isPaid && <Text style={styles.success}>Rezervimi u krye me sukses!</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#f9faff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
    color: '#222',
    textAlign: 'center',
  },
  details: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
    textAlign: 'center',
  },
  selectTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20,
    color: '#444',
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  cardOption: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    width: 110,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardOptionSelected: {
    borderColor: '#4A90E2',
    backgroundColor: '#e8f0fe',
  },
  cardImage: {
    width: 65,
    height: 40,
    marginBottom: 8,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  paymentForm: {
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 17,
    marginBottom: 18,
    color: '#222',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  payButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#4A90E2',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },
  payButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  success: {
    marginTop: 25,
    color: '#27ae60',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
