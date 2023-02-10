import {StyleSheet} from 'react-native';
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: THEME.colors.lightGrey,
      height:90
    },
    tabItem:{
        justifyContent:"center",
        alignItems:"center"
    },
    tabText:{
      fontFamily:"MontserratRegular", 
      fontSize: 16, 
      marginTop:"7%"
    }
});