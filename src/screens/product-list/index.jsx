import {View} from 'react-native';
import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductSummary from '../../components/ProductSummary';
import { styles } from './style';

const ProductList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Breadcrumbs navigation={navigation} />

      <View>
        <ProductSummary navigation={navigation} />
      </View>
      
    </View>
  )
}

export default ProductList