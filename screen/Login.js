import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import *as SQLite from 'expo-sqlite';
import { TextInput } from 'react-native-gesture-handler'
import colors from '../utils/colors'  
import {useRoute} from '@react-navigation/native'

const db = SQLite.openDatabase('shops.db');
export default function Login({navigation}){

    const {title, size, code, price} = useRoute().params
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const login = (username, password) => {
            if(username == "Monica" & password == "96309"){
            db.transaction(tx => {
                tx.executeSql('insert into shop(title, price, code, size) values(?, ?, ?, ?);',
                [title, price, code, size], () =>navigation.navigate('Products'));
            })
            }else{
                console.log("You are not Admin to add product")
            }
        }
    return (
        <View style={styles.formContainer}>
            <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={(username)=> setUsername(username)}/>
            <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={(password)=> setPassword(password)}/>
            <TouchableOpacity style={[styles.button,{backgroundColor:colors.primary}]}>
                <Text style={styles.buttonText} onPress={()=>login(username, password)}>Login</Text>
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