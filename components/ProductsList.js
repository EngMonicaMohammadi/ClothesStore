import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native'
import colors from '../utils/colors'

export default function ProductsList({title, price, image, code, size, onDeleteProduct}){
    return (
    <TouchableOpacity style={{ height: 290, width: 300, justifyContent: 'center', marginHorizontal: 8,marginLeft:45, marginTop:30}}>
    <View
        style={[{
            flex:1,
            justifyContent: 'flex-end',
            borderRadius: 10,
            marginTop: 8,
            marginRight: 24,
            paddingLeft: 12,
            paddingRight: 24,
            paddingBottom: 12,
            backgroundColor: colors.white
        }, styles.tredingShadow]}
    >
        <View style={{ height: '35', justifyContent: 'space-between'}}>
            <Text style={{ color: colors.primary, fontSize:14}}>Title: {title}</Text>
            <Image source={{uri: image}} style={{height: 150}} />
            <Text style={{ color: colors.primary, fontSize:16}}>Price: {price}</Text>
            <Text style={{ color: colors.primary, fontSize:16}}>Code: {code}</Text>
            <Text style={{ color: colors.primary, fontSize:12}}>Size: {size}</Text>
            <Button title="Delete" color="#52C0B4" onPress={onDeleteProduct} />

        </View>
    </View>
</TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    tredingShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
})