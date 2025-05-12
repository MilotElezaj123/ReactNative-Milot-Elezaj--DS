import react from "react";
import { View,Text,StyleSheet,Dimensions } from "react-native";
import Swiper from 'react-native-swiper'
import { Image } from "react-native-web";

const{width,height}= Dimensions.get("windows")

const Main =()=>{
    return(
        <Swiper showsButtons={true}>
            <View style={styles.slide1}>
                <Image source={require("../assets/argentina.png")}
                style={{width:2500, height:900}}/>
            </View>
            <View style={styles.slide2}>
            <Image source={require("../assets/portugal.jpg")}
                style={{width:2500, height:900}}/>
            </View>
            <View style={styles.slide3}>
            <Image source={require("../assets/france.png")}
                style={{width:2500, height:900}}/>
            </View>
            <View style={styles.slide4}>
            <Image source={require("../assets/germany.png")}
                style={{width:2500, height:900}}/>
            </View>
        </Swiper>
    )
}
export default Main
const styles=StyleSheet.create({
    wrapper:{

    },
    slide1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#97CAE5",
        image: require(".../assets/")
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"9DD6EB"
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#92BBD9"
    },
    text:{
        color:"#fff",
        fontSize:30,
        fontWeight:"bold"
    }
})