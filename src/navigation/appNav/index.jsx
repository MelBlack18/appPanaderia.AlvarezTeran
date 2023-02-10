import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import TabNavigator from '../tab'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF"
  }
}

const AppNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
        <TabNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
