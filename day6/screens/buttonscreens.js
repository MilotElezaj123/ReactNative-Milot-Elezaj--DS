import React, { useState } from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const ButtonScreen = () => {
    let counter = 0;
    let tek = 0;
    return(
        <View>
        <Text style ={styles.TextStyle}>Butoni</Text>
        <Button
        title='Klikoni kit butonin'
        color="purple"
        onPress={() => console.log("Butoni eshte klikuar", counter = counter+2,"here")}
        />
         <Button
        title='Klikoni kit butonin'
        color="blue"
        onPress={() => console.log("Butoni eshte klikuar",  tek+=1,"here")}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    TextStyle:{
        fontSize:15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    }
});

export default ButtonScreen;