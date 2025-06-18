import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const toggleNotifications = () =>
    setNotificationsEnabled((prev) => !prev);
  const toggleDarkMode = () => setDarkModeEnabled((prev) => !prev);
  const toggleLocation = () => setLocationEnabled((prev) => !prev);

  const handleLogout = () => {
    Alert.alert('Dalja', 'A jeni të sigurt që doni të dilni?', [
      { text: 'Jo', style: 'cancel' },
      { text: 'Po', onPress: () => console.log('User logged out') },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cilësimet</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Njoftimet</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: '#ccc', true: '#4CAF50' }}
          thumbColor={notificationsEnabled ? '#2e7d32' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Mënyra e Errët (Dark Mode)</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#ccc', true: '#2196F3' }}
          thumbColor={darkModeEnabled ? '#0d47a1' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Shfrytëzimi i Vendndodhjes</Text>
        <Switch
          value={locationEnabled}
          onValueChange={toggleLocation}
          trackColor={{ false: '#ccc', true: '#f39c12' }}
          thumbColor={locationEnabled ? '#d35400' : '#f4f3f4'}
        />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Dil nga llogaria</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    color: '#34495e',
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#e1e1e1',
  },
  settingText: {
    fontSize: 18,
    color: '#2c3e50',
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
