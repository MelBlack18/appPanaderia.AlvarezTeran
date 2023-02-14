import React from 'react'
import ItemMenu from '../../components/ItemMenu'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../../store/actions/categories.actions'


const Categories = ({navigation}) => {

  const categories = useSelector((state)=>state.categories.categories)
  const dispatch = useDispatch()

  const onHandleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate("Product List", {
      name: item.title
    })
  }

  return (
    <FlatList 
      data={categories}
      keyExtractor={item => item.id}
      renderItem={(data) => (<ItemMenu 
        item={data} 
        onSelected={onHandleSelectedCategory} 
        />)}
    />
  )
}

export default Categories