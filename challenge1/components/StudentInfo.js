import React from "react";
import { View,Text,Image,StyleSheet } from "react-native";

const StudentInfo = ({ fullname,position,description,profileImage}) => {
    return (
        <View style={styles.container}>
            <Image source={profileImage} style={styles.image} />
            <Text style={styles.name}>{fullname}</Text>
            <Text style={styles.position}>{position}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width:100,
        height: 100,
        borderRadius:50,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    position : {
        fontSize: 16,
        color: 'gray',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
});

export default StudentInfo;