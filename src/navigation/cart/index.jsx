import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CartScreen } from '../../screens'
import HeaderImage from '../../components/HeaderImage';

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({header: HeaderImage})}>
        <Stack.Screen name="Carrito" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default CartNavigator