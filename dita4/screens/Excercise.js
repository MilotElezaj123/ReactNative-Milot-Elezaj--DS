import React from 'react'
import {View,Text, FlatList} from 'react-native'

const Exercise =()=>{
    const ListaeStudenteve=[
        {name:"Milot",surname:"Elezaj",age:18}
    ]
    return(
        
        <View>
        <Text>Hello from this Ekran</Text>
        <FlatList
        data={ListaeStudenteve}
        renderItem={({item})=>{
            return<Text>{item.name} {item.surname} {item.age }</Text>
        }}
        />
        </View>
    )

}

export default Exercise;