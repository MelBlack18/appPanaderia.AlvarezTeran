import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Categories, ProductDetail, ProductList } from '../../screens/index'
import HeaderImage from "../../components/HeaderImage"

const Stack = createNativeStackNavigator()

const ShopNavigator = () => (
    <Stack.Navigator screenOptions={() => ({header: HeaderImage})}>
        <Stack.Screen name="Home" component={Categories} />
        <Stack.Screen name="Product List" component={ProductList} />
        <Stack.Screen name="Product Detail" component={ProductDetail} />
    </Stack.Navigator>

)

export default ShopNavigator