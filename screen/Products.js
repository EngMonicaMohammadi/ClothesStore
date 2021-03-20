import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import *as SQLite from 'expo-sqlite';
import ProductsList from '../components/ProductsList'
import colors from '../utils/colors';
const db =SQLite.openDatabase('shops.db');

export default function Products({navigation}){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        db.transaction((tx)=>{
           tx.executeSql('select * from shop', [], (tx,{rows})=>{
            var data = [];
            for(var i = 0; i< rows.length; i++){
                data.push(rows[i]);
            }
            setProducts(data);
           })
        })
    })
    const deleteProduct = (id) => {
        db.transaction(tx => {
            tx.executeSql('delete from shop where id = ?', [id])
        })
    }

    const images = [
        require("../assets/images/white.jpg"),
        require("../assets/images/black.jpg"),
        require("../assets/images/black1.jpg"),
        require("../assets/images/orange.jpg"),
        require("../assets/images/green.jpg"),
        require("../assets/images/lightgray.jpg"),
        require("../assets/images/pink.jpg"),
        require("../assets/images/red.jpg"),
        require("../assets/images/gray.jpg"),
        require("../assets/images/10.jpg"),
    ]
   return (
       <View>
        {products.length > 0 ? <FlatList
        data={products}
        keyExtractor={(item)=>item.id}
        renderItem={({item}) => {
            return <ProductsList image={images[item.id]} title={item.title} price={item.price} code={item.code} size={item.size} onDeleteProduct={()=> deleteProduct(item.id)} />
        }}
        />: <View>
                <Text>No Products to display</Text>
            </View>}
    <TouchableOpacity style={styles.floatButton} onPress={()=> navigation.navigate('AddProducts')}> 
        <Text>
        <Feather name="plus" size={28} color="white" />
        </Text>
    </TouchableOpacity>
    </View>
   )

}
const styles = StyleSheet.create({
    floatButton: {
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: '50%',
        position: 'absolute',
        bottom: 40,
        right: 5
    }
})
