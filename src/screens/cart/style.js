import {StyleSheet} from 'react-native';
import {THEME} from '../../constants/theme'

export const styles = StyleSheet.create({
    wrapperTotal:{
        alignItems:"center",
        marginTop:"5%"
    },
    total:{
        fontFamily:"MontserratSemiBold", 
        fontSize:36
    },
    wrapperConfirm:{
        marginTop:"5%",
        backgroundColor:THEME.colors.primary,
        width:"60%",
        height:"20%",
        justifyContent:"center",
        alignItems:"center"
    },
    confirm:{
        fontFamily:"MontserratRegular", 
        fontSize:15,
        color:THEME.colors.lightGrey
    }
})