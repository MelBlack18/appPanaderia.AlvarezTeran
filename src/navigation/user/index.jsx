import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HeaderImage from '../../components/HeaderImage';
import UserDetails from '../../screens/user';

const Stack = createNativeStackNavigator()

const UserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({header: HeaderImage})}>
        <Stack.Screen name="Usuario" component={UserDetails} />
    </Stack.Navigator>
  )
}

export default UserNavigator