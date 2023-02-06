import React from 'react'
import { styles } from './style'
import ItemMenu from '../../components/ItemMenu'
import { FlatList } from 'react-native-gesture-handler'
import { CATEGORIES } from '../../constants/data'

const Categories = ({navigation}) => {

  const onHandleSelectedCategory = (item) => {
    navigation.navigate("Product List", {
      categoryId: item.id,
      name: item.title
    })
  }

  return (
    <FlatList 
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={(data) => (<ItemMenu 
        item={data} 
        onSelected={onHandleSelectedCategory} 
        />)}
    />
  )
}

export default Categories