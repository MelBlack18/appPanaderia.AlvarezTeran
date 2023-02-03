import {View, Text, Button, Image, Pressable} from 'react-native';
import React from 'react'
import { styles } from './style';

const ProductCard = () => {
  return (
    <View style={styles.wrapperDetail}>
      <Image source={require('../../assets/img/producto.jpg')} />

      <View style={styles.wrappersBloques}>
        <Text style={{fontFamily:"MontserratRegular", fontSize:24}}>Brownie</Text>
        <Text style={{fontFamily:"MontserratSemiBold", fontSize:24}}>$1.500,00</Text>
      </View>
      
      <View style={styles.wrappersBloques}>
        <Text style={{fontFamily:"MontserratRegular", fontSize:18}}>Presentaciones:</Text>
        <View style={{flexDirection:"row", justifyContent:"space-around", width:"100%", marginTop:"2%"}}>
            <Pressable style={styles.selectorVariaciones}><Text>Individual</Text></Pressable>
            <Pressable style={styles.selectorVariaciones}><Text>4 Porciones</Text></Pressable>
            <Pressable style={styles.selectorVariaciones}><Text>8 Porciones</Text></Pressable>
        </View>
      </View>
      <View style={styles.wrappersBloques}>
        <Text style={{fontFamily:"MontserratRegular", fontSize:18}}>Cantidad</Text>
        <View style={{flexDirection:"row"}}>
            <Text style={{borderWidth:1, height:30, width:25, textAlign:"center", fontFamily:"MontserratRegular"}}>-</Text>
            <Text style={{borderWidth:1, height:30, width:100, textAlign:"center", fontFamily:"MontserratRegular"}}>1</Text>
            <Text style={{borderWidth:1, height:30, width:25, textAlign:"center", fontFamily:"MontserratRegular"}}>+</Text>
        </View>
      </View>
      <View style={styles.wrappersBloques}>
        <Pressable style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>AGREGAR AL CARRITO</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ProductCard