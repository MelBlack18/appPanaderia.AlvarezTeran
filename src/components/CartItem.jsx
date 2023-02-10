import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { styles } from './style'

const CartItem = () => {
  return (
    <View style={styles.wrapperCartItem}>
        <View style={styles.wrapperCartItemData}>
            <Text style={styles.cartDataTitle}>Nombre</Text>
            <Text style={styles.cartDataText}>Cantidad</Text>
            <Text style={styles.cartDataText}>Precio</Text>
        </View>
        <View style={styles.wrapperCartItemDelete}>
            <Pressable>
                <FontAwesomeIcon icon={faTrash} size={24} />
            </Pressable>
        </View>
    </View>
  )
}

export default CartItem