import { View, FlatList, Pressable, Text } from 'react-native'
import React from 'react'
import { CART } from '../../constants/data/cart'
import CartItem from '../../components/CartItem'
import { styles } from './style'

const CartScreen = () => {
  return (
    <View>
      <FlatList
        data={CART}
        keyExtractor={item => item.id}
        renderItem={CartItem}
      />

      <View style={styles.wrapperTotal}>
        <Text style={styles.total}>Total: $4500</Text>
        <Pressable style={styles.wrapperConfirm}>
          <Text style={styles.confirm}>CONFIRMAR COMPRA</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CartScreen