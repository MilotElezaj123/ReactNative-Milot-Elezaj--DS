import React from 'react'
import {View,Text, FlatList, StyleSheet} from 'react-native'

const Exercise =()=>{
    const TedhenatPersonale=[
        { username:"Milot", surname:"Elezaj", age:18, city:"Prishtina", country:"Kosova",}
    ]
    return(
        
        <View style={styles.container}>
        <Text>Te dhenat e mia personale</Text>
        <FlatList
        data={TedhenatPersonale}
        renderItem={({item})=>{
            return<Text style={styles.title}>{item.username} {item.surname} {item.age } {item.city } {item.country}</Text>
        }}
        />
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        backgroundColor:'f45fj6',
        flex:1,
        padding:25,
    },
    title:{
      fontSize:24,
      fontWeight: 'bold',
      marginBottom : 10,
    },
});

export default Exercise;