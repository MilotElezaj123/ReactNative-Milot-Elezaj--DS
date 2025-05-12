import React  from "react";
import { View,Image,StyleSheet } from "react-native";

const Projects = ({ image }) => {
    return(
        <View style={styles.container}>
        <Image source={image} style ={styles.projectImage} />
        </View>
    );
};

const styles = StyleSheet.create ({
    container : {
        alignItems: 'center',
        marginTop: 20,
    },
    projectImage: {
        width: 200,
        height: 200,
        border: 10,
    },
});

export default Projects;
