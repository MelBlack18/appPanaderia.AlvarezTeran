import {View} from 'react-native';
import React from 'react'
import { styles } from './style';
import ProductCard from '../../components/ProductCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useSelector } from 'react-redux';

const ProductDetail = ({navigation}) => {
 
  const detail = useSelector((state) => state.products.selected)
  
  const currentCategory = useSelector((state) => state.categories.selected)
  const crumbs = " > " + currentCategory.title + " > " + detail.title

  return (
    <View style={styles.container}>
      <Breadcrumbs navigation={navigation} crumb={crumbs}  />
      <ProductCard product={detail} />
    </View>
  )
}

export default ProductDetail