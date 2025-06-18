import React from "react";
import { View,Text,FlatList,Image,StyleSheet,Dimensions } from "react-native";
import IOS from "../data/IOS.json"
const IOSProducts=()=>{
    return <View>
        <Text>
            IOS Product screen
        </Text>
    </View>
}
const Product=({item})=>{
    return(
        <View style={styles.card}>
            <Image source={{uri: item.image}} style={styles.image}>
                <View style={styles.info}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </Image>
        </View>
    )
}

export default IOSProducts


const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 16,
      overflow: 'hidden',
      elevation: 3, // for Android shadow
      shadowColor: '#000', // for iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    image: {
      width: '100%',
      height: 200,
    },
    info: {
      padding: 12,
    },
    name: {
      fontSize: 18,
      fontWeight: '600',
    },
    category: {
      fontSize: 14,
      color: '#888',
      marginVertical: 4,
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 4,
    },
    description: {
      fontSize: 13,
      color: '#555',
      marginTop: 4,
    },
  });