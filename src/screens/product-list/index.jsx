import {View} from 'react-native';
import React, { useEffect } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductSummary from '../../components/ProductSummary';
import { styles } from './style';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct, filteredProducts } from '../../store/actions/products.actions';

const ProductList = ({navigation}) => {

  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.categories.selected)
  const products = useSelector((state) => state.products.filteredProducts)

  const crumbs = " > " + selectedCategory.title
  

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id))
  }, [])


  const onHandleSelectedCategory = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate("Product Detail")
  }

  return (
    <View style={styles.container}>
      <Breadcrumbs navigation={navigation} crumb={crumbs} />

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={(data) => (<ProductSummary 
          item={data}
          onSelected={onHandleSelectedCategory} 
        />)}
      />
      
    </View>
  )
}

export default ProductList