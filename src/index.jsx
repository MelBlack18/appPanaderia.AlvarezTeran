import { ActivityIndicator, View } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigator from './navigation/ShopNavigator';
import { styles } from './styles';

const App = () => {
  const [loaded] = useFonts({
    "MontserratBold" : require("../assets/fonts/Montserrat-Bold.ttf"),
    "MontserratExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    "MontserratLight": require("../assets/fonts/Montserrat-Light.ttf"),
    "MontserratRegular" : require("../assets/fonts/Montserrat-Regular.ttf"),
    "MontserratSemiBold" : require("../assets/fonts/Montserrat-SemiBold.ttf")
  })

  if (!loaded) {
    return(
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return <ShopNavigator />

}

export default App