import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from './style'

const OrderItem = ({orden, onSelected}) => {
  return (
    <View style={styles.wrapperSummary}>
        <View style={{width:"60%"}}>
            <Text style={{fontFamily:"MontserratSemiBold", fontSize:24}}>Pedido #{orden.item.id}</Text>
            <Text style={{fontFamily:"MontserratLight", fontSize:18}}>Fecha: {orden.item.creationDate}</Text>
            <Text style={{fontFamily:"MontserratRegular", fontSize:20}}>Total: ${orden.item.total}</Text>
        </View>

        <View style={{width:"40%", justifyContent:"center"}}>
            <Button title='VER DETALLE' onPress={() => {onSelected(orden.item)}} />
        </View>
    </View>
  )
}

export default OrderItem