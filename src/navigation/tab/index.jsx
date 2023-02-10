import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopNavigator from '../shop'
import CartNavigator from '../cart'
import { styles } from './style'
import { faBasketShopping, faCartShopping, faList, faUser } from '@fortawesome/free-solid-svg-icons'
import OrderNavigator from '../orders'
import UserNavigator from '../user'
import TabIcons from '../../components/TabIcons'


const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: styles.tabBar
    }}>
        <BottomTabs.Screen
            name='Shop'
            component={ShopNavigator}
            options={{
                tabBarIcon:({focused}) => (<TabIcons focused={focused} name={"Tienda"} icon={faBasketShopping} />)
            }}
        />
        <BottomTabs.Screen 
            name='Cart'
            component={CartNavigator}
            options={{
                tabBarIcon:({focused}) => (<TabIcons focused={focused} name={"Carrito"} icon={faCartShopping} />)
            }}
        />
        <BottomTabs.Screen 
            name='Orders'
            component={OrderNavigator}
            options={{
                tabBarIcon:({focused}) => (<TabIcons focused={focused} name={"Órdenes"} icon={faList} />)
            }}
        />
        <BottomTabs.Screen 
            name='My Profile'
            component={UserNavigator}
            options={{
                tabBarIcon:({focused}) => (<TabIcons focused={focused} name={"Mi Perfil"} icon={faUser} />)
            }}
        />
    </BottomTabs.Navigator>
  )
}

export default TabNavigator