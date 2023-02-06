import { Pressable, Text, View } from 'react-native'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { styles } from './style';
import {CATEGORIES} from '../constants/data'

const Breadcrumbs = ({navigation, current}) => {
  let crumbs = ""

  if(current.categoria){
    
    const category = CATEGORIES.filter(category => category.id === current.categoria)

    crumbs = " > "+category[0].title+" > "+current.name

  } else {
    crumbs = " > "+current
  }

  return (
    <View style={styles.wrapperBreadCrumbs}>
      <Pressable onPress={() => {navigation.navigate("Home")}}>
        <FontAwesomeIcon icon={faHouse} size={24} />
      </Pressable>
      <Text style={styles.textBreadCrumbs}>{crumbs}</Text>
    </View>
  )
}

export default Breadcrumbs