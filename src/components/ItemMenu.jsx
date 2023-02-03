import {Text, Pressable, View} from 'react-native';
import React from 'react'
import { styles } from './style';

const ItemMenu = ({item, navigation}) => {
  return (

    <View style={styles.wrapperItemMenu}>
        <Pressable onPress={() => {navigation.navigate("Product List")}}>
            <Text style={styles.textItemMenu}>{item}</Text>
        </Pressable>
    </View>
    
  )
}

export default ItemMenu