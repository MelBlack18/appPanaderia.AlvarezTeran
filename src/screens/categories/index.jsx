import { View } from 'react-native'
import React from 'react'
import { styles } from './style'
import ItemMenu from '../../components/ItemMenu'

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>

      <ItemMenu item={"Dulce"} navigation={navigation} />

      <ItemMenu item={"Salado"} navigation={navigation} />

      <ItemMenu item={"Desayunos"} navigation={navigation} />

    </View>
  )
}

export default Categories