import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View } from 'react-native';


const MenuScreen = ({navigation}) => {
    return(
        <View style={styles.conatiner}>
            <Text style={styles.text}>Mire se vini tek Aplikacioni i Studenteve</Text>
            <Button title='Test'/>
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        fontSize:20,
        marginBottom:20
    }
})
export default MenuScreen;