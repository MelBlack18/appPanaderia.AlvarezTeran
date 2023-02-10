import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './style'
import OrderItem from '../../components/OrderItem'
import { ORDERS } from '../../constants/data/orders'

const OrderList = ({navigation}) => {

  const onHandleSelectedCategory = (order) => {
    navigation.navigate("Detalle de Pedido", {
      id: order.id,
      fechaCreacion: order.creationDate,
      total: order.total,
      status: order.status,
      productos:order.productos
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Historial de Pedidos</Text>

      <FlatList
        data={ORDERS}
        keyExtractor={item => item.id}
        renderItem={(data) => (<OrderItem 
          orden={data}
          onSelected={onHandleSelectedCategory}
        />)}
      />
    </View>
  )
}

export default OrderList