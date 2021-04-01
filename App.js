import React, {useEffect} from 'react';
import { View, TouchableOpacity, Text ,StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import * as SQLite from 'expo-sqlite';
const Stack = createStackNavigator();
const db = SQLite.openDatabase('shops.db')

import Products from './screen/Products'
import AddProducts from './screen/AddProducts'
import Login from './screen/Login'
import SearchScreen from './screen/SearchScreen'
import Nav from './screen/Nav'
export default function App() {
  useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql('create table if not exists shop(id integer primary key autoincrement, title text, price text, code text, size text);'
      ,[], ()=> console.log('Table created successfully'));
    })
  })
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Products}>
          <Stack.Screen name="Products" component={Products} options={({navigation}) => ({
             headerRight:()=> (
              <TouchableOpacity style={{paddingRight:20}} onPress={()=> navigation.navigate('SearchScreen')}>
                <Text>
                                                                                         
                  <MaterialIcons name="search" size={24} color="black" />
                </Text>
              </TouchableOpacity>
             ),
    
             headerLeft:()=> (
              <TouchableOpacity style={{marginLeft:20}} onPress={() => navigation.navigate('Nav')}>
  
  
  
                <Text>
                  <MaterialIcons name="menu" size={24} color="black" />
                </Text>
              </TouchableOpacity>
             ),
           })} />
          <Stack.Screen name="AddProducts" component={AddProducts} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="Nav" component={Nav}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4'
  },
});
