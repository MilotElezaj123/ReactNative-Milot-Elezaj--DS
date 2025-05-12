import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import StudentInfo from './StudentInfo'; 
import Projects from './Projects'; 
import ProfileScreen from './ProfileScreen'; 



const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ProfileScreen />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    }
});

export default App