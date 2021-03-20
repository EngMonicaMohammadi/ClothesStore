import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import colors from '../utils/colors'  

export default function Nav ({navigation}) {
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate("Products") }>
            <Text style={styles.text}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddProducts")}>
            <Text style={styles.text}>AddProduct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
            <Text style={styles.text}>SearchScreen</Text>
        </TouchableOpacity>
    
    </View>
  )
} 
const styles = StyleSheet.create({
    text: {
        paddingBottom:10,
        marginBottom:10,
        borderBottomColor: colors.primary,
        borderBottomWidth:1,
        textAlign:'center',
       },
})