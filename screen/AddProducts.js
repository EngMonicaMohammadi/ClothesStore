import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import *as SQLite from 'expo-sqlite';
import { TextInput } from 'react-native-gesture-handler'
import colors from '../utils/colors'  

const db = SQLite.openDatabase('shops.db');
export default function AddProducts({navigation}){
    const [title, setTitle] = useState(null);
    const [price, setPrice] = useState(null);
    const [code, setCode] = useState(null);
    const [size, setSize] = useState(null);
    const addProducts = (title, price, code, size) => {
            navigation.navigate('Login', {title, price, code, size})
    }
    return (
        <View style={styles.formContainer}>
            <TextInput placeholder="Title" style={styles.input} value={title} onChangeText={(title)=> setTitle(title)}/>
            <TextInput placeholder="Price" style={styles.input} value={price} onChangeText={(price)=> setPrice(price)}/>
            <TextInput placeholder="Code"  style={styles.input} value={code} onChangeText={(code)=> setCode(code)}/>
            <TextInput placeholder="Size" style={styles.input} value={size} onChangeText={(size)=> setSize(size)}/>
            <TouchableOpacity style={[styles.button,{backgroundColor:colors.primary}]}>
                <Text style={styles.buttonText} onPress={()=>addProducts(title, price, code, size)}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    formContainer: {
        borderRadius:30,
        marginTop:60,
        paddingVertical:20,
        paddingHorizontal:40,
        backgroundColor: colors.white
    },
    input: {
     paddingBottom:10,
     marginBottom:10,
     borderBottomColor: colors.primary,
     borderBottomWidth:1
    },
    button: {
        padding:20,
        marginTop:20,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
       color: colors.white 
    }
})