import react,{useEffect, useState} from "react";
import {View, Text,FlatList} from 'react-native';
const Main =()=>{
    const[posts,setPosts]=useState([])
    const APICALL = async()=>{
       const pergjigja = await fetch("https://jsonplaceholder.typicode.com/photos")
       const data = await pergjigja.json()
       setPosts(data)
       
    }
    useEffect(()=>{
        APICALL()
       },[])
       
    return(
        <FlatList
        data={posts}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
            <View>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
        )}
        />
    )

}
export default Main;