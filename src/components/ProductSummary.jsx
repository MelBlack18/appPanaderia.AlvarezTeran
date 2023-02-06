import {View, Text, Button, Image} from 'react-native';
import React from 'react'
import { styles } from './style';

const ProductSummary = ({item, onSelected}) => {
    
  return (
    <View style={styles.wrapperSummary}>

        <View style={{width:"40%"}}>
            <Image style={styles.imageSummary} source={require('../../assets/img/producto.jpg')} />
        </View>

        <View style={{width:"60%", paddingRight:"2%", justifyContent:"space-between"}}>
            <View style={styles.wrapperSummaryName}>
                <Text style={{fontFamily:"MontserratLight", fontSize:24}}>{item.item.title}</Text>
                <Text style={{fontFamily:"MontserratSemiBold", fontSize:24}}>${item.item.price}</Text>
            </View>
            <View style={styles.wrapperSummaryButton}>
                <Button title='VER MÁS' onPress={() => {onSelected(item.item)}} />
            </View>
        </View>

    </View>
  )
}

export default ProductSummary