import react,{useEffect, useState} from "react";
import {View, Text,FlatList} from 'react-native';
const Main =()=>{

    const[data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const[posts,setPosts]=useState([])
    useEffect(() => {
    const fetchData = async()=>{
        try{
       const response = await fetch("https://fakestoreapi.com/products")
       const json = await response.json()
       setPosts(json);
        }catch(error){
            console.error('Error fetching data',error);
        }finally{
           setLoading(false);
        }
       
    };
    fetchData();
}, []);

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

};

const styles = StyleSheet.create({
    container: {
    padding:20,
    flex: 1,
    },


})
export default Main;