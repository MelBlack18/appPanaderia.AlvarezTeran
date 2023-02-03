import { Pressable, Text, View } from 'react-native'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { styles } from './style';

const Breadcrumbs = ({navigation}) => {
  return (
    <View style={styles.wrapperBreadCrumbs}>
      <Pressable onPress={() => {navigation.navigate("Home")}}>
        <FontAwesomeIcon icon={faHouse} size={24} />
      </Pressable>
      <Text style={styles.textBreadCrumbs}> - Categoria</Text>
    </View>
  )
}

export default Breadcrumbs