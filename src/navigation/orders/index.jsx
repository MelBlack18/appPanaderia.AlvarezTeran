import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HeaderImage from '../../components/HeaderImage';
import OrderList from '../../screens/order-list';
import OrderDetail from '../../screens/order-detail';

const Stack = createNativeStackNavigator()

const OrderNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({header: HeaderImage})}>
        <Stack.Screen name="Resumen de Pedidos" component={OrderList} />
        <Stack.Screen name="Detalle de Pedido" component={OrderDetail} />
    </Stack.Navigator>
  )
}

export default OrderNavigator