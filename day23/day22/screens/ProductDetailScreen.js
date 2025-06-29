import React from "react";
import { View } from "react-native-web";

export default function ProductDetailScreen({ route }){
    const {product} = route.params;

    return(
        <View style={styles.container}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    price:{
        fontSize: 20,
        marginTop: 10
    },
    description:{
        fontSize: 16,
        marginTop: 20
    },
});