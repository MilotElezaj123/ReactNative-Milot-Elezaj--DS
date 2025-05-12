import React  from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,ScrollView } from "react-native";

const Profile=()=>{
   <ScrollView style={styles.container}>
    <View style={styles.profileContainer}>
     <Image style={styles.avatar} source={{uri:""}}/>
     <View style={styles.profileDetail}/>
     <Text style={styles.name}>Milot Elezaj</Text>
     <Text style={styles.role}>Programmer</Text>
     <Text style={styles.description}>Programeri i ri</Text>
    <TouchableOpacity>
        <Text style={styles.hireText}>Hire me</Text>
    </TouchableOpacity>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.projectContainer}>
     <Image style={styles.projectImage} source={{uri:""}}/>
     <Image style={styles.projectImage} source={{uri:""}}/>

     
   </ScrollView>
 </ScrollView> 
}
const styles=StyleSheet.create({
     container:{
        flex:1,
        backgroundColor:"#ffffff"
     },
     profileContainer:{
        alignItems:"center",
        padding:20,
        backgroundColor:"f8f9fa",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
     },
     avatar:{
        width:120,
        height:120,
        borderRadius:60,
        marginBottom:10
     },
     profileDetail:{
        alignItems:"center",
        fontWeight:"bold"
     },
     name:{
        fontSize:20,
        fontWeight:"bold"
     },
     role:{
        fontSize:16,
        color:"grey",
        marginVertical:5
     },
     description:{
        textAlign:"center",
        fontSize:14,
        marginBottom:15
    },
    hireButton:{
        backgroundColor:"#FFD700",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:25
    },
    hireText:{
        fontSize:16,
        fontWeight:"bold",
        color:"#000"
    },
    projectHeader:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        paddingHorizontal:20,
        marginTop:20
    },
    projectTitle:{
        fontSize:18,
        fontWeight:"bold"
    },
    viewAll:{
        fontSize:14,
        color:"#FFD700",
        fontWeight:"bold"
    },
    projectContainer:{
        flexDirection:"row",
        paddingHorizontal:20,
        marginTop:10,
    },
    projectImage:{
        width:150,
        height:100,
        borderRadius:10,
        marginRight:10
    }
})

export default Profile;