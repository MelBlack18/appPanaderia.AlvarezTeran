import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Categories, ProductDetail, ProductList } from '../screens/index'
import HeaderImage from "../components/HeaderImage"

const Stack = createNativeStackNavigator()

const ShopNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={() => ({header: HeaderImage})}>
            <Stack.Screen name="Home" component={Categories} />
            <Stack.Screen name="Product List" component={ProductList} />
            <Stack.Screen name="Product Detail" component={ProductDetail} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default ShopNavigator