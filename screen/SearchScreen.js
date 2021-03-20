import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import *as SQLite from 'expo-sqlite'
import ProductsList from '../components/ProductsList'
import colors from '../utils/colors'  

const db = SQLite.openDatabase('shops.db')
export default function SearchScreen(){
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=> {
        db.transaction(tx => {
            tx.executeSql('select * from shop', [], (tx, {rows}) => {
                var data = [];
                for(var i =0; i< rows.length; i++){
                    data.push(rows[i]);
                }
                setAllProducts(data);
            })
        })
    })
    const searchProducts = (text) => {
        const filterText = text.toLowerCase();
        const newProducts = allProducts.filter((product) => {
            const item = product.name.toLowerCase();
            return item.indexOf(filterText) > -1;
        })
        setFilteredProducts(newProducts);
        if(text.length < 1) 
        setFilteredProducts([])
    }
    return (
       <View>
        <View style={styles.searchContainer}>
            <TextInput placeholder="Search...." style={styles.searchInput} onChangeText={(text) => searchProducts(text)}/>
        </View>
        {filteredProducts.length > 0 ? <FlatList
            data={filteredProducts}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => {
                return <ProductsList title={item.title} price={item.price} code={item.code} size={item.size}  onPress={()=> navigation.navigate('Products',{item:item})} onDeleteProduct={()=> deleteProduct(item.id)} />
            }}
        /> : <View><Text style={{color:'red', fontSize:20}}>Nothing to display</Text></View>}
      </View>
    )
}
const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: colors.secondry
    },
    searchInput: {
        paddingHorizontal:20,
        paddingVertical:10,
        margin:20,
        borderRadius:10,
        backgroundColor: colors.white,
        
    }
})