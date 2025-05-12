import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "/data/countries.json";


class CountriesScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            countries:[]
        }
    }
    componentDidMount(){
        this.setState({
            countries:data
        })
    }
    render(){
        return(
            <View>
                <Text style={styles.screenTitle}></Text>
                <FlatList
                 data ={this.state.countries}
                 keyExtractor={countries => countries.id}
                 renderItem={({item})=(
                    <View style = {styles.cardWrapper}>
                        <Text>City name: {item.name}</Text>
                        <Text>Country name: {item.country}</Text>
                        <Text>Descripton name: {item.description}</Text>
                    </View>
                 )
                }
                >

                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenTitle:{
        fontSize:20,
        textAlign:'center',
        marginVertical: 15,
        fontWeight: 'bold'
    },
    cardWrapper:{
        backgroundColor: 'lightgrey',
        marginVertical: 5
    }
});

export default CountriesScreen