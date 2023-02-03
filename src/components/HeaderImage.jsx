import { View, Image, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

const HeaderImage = () => {
  return (
    <View style={styles.ContainterHeaderImage}>
        <Image source={require('../../assets/img/LogoTomaTuTeTotita.jpg')} />
        <Text style={styles.TextHeaderImage}>Toma tu te Totita</Text>
    </View>
  )
    
}

export default HeaderImage