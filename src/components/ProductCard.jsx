import {View, Text, Button, Image, Pressable} from 'react-native';
import React from 'react'
import { styles } from './style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.wrapperDetail}>
      <Image source={require('../../assets/img/producto.jpg')} />

      <View style={styles.wrappersBloques}>
        <Text style={{fontFamily:"MontserratRegular", fontSize:24}}>{product.name}</Text>
        <Text style={{fontFamily:"MontserratSemiBold", fontSize:24}}>${product.price}</Text>
      </View>

      <View style={styles.wrappersBloques}>
        <Text style={{fontFamily:"MontserratRegular", fontSize:18}}>Descripción:</Text>
        <Text style={styles.textosCard}>{product.description}</Text>
      </View>
      
      <View style={styles.wrappersBloques}>
        <Text style={{fontFamily:"MontserratRegular", fontSize:18}}>Presentacion:</Text>
        <View style={{flexDirection:"row", justifyContent:"flex-start", width:"100%"}}>
            <Text style={styles.selectorVariaciones}>{product.presentacion}</Text>
            {/* <Pressable style={styles.selectorVariaciones}><Text>4 Porciones</Text></Pressable>
            <Pressable style={styles.selectorVariaciones}><Text>8 Porciones</Text></Pressable> */}
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