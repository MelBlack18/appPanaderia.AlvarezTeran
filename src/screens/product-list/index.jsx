import {View} from 'react-native';
import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductSummary from '../../components/ProductSummary';
import { styles } from './style';
import { PRODUCTS } from '../../constants/data/products';
import { FlatList } from 'react-native-gesture-handler';

const ProductList = ({navigation, route}) => {

  const products = PRODUCTS.filter(product => product.categoryId === route.params.categoryId)

  const onHandleSelectedCategory = (item) => {
    navigation.navigate("Product Detail", {
      productId: item.id,
      name: item.title,
      price: item.price,
      description: item.description,
      presentacion: item.weight,
      categoria: item.categoryId
    })
  }

  return (
    <View style={styles.container}>
      <Breadcrumbs navigation={navigation} current={route.params.name} />

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