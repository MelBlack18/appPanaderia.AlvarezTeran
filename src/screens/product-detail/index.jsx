import {View} from 'react-native';
import React from 'react'
import { styles } from './style';
import ProductCard from '../../components/ProductCard';
import Breadcrumbs from '../../components/Breadcrumbs';

const ProductDetail = ({navigation, route}) => {
  
  return (
    <View style={styles.container}>
      <Breadcrumbs navigation={navigation} current={route.params} />
      <ProductCard product={route.params} />
    </View>
  )
}

export default ProductDetail