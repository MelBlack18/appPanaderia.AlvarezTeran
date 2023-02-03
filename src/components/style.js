import {StyleSheet} from 'react-native';
import {theme} from '../constants/theme'

export const styles = StyleSheet.create({
    ContainterHeaderImage: {
      flexDirection:"row",
      backgroundColor: "#FFF",
      alignItems:"center",
      justifyContent:"space-between",
      width:"100%",
      paddingLeft: "4%",
      paddingRight:"6%",
      marginTop:"10%"
    },
    TextHeaderImage:{
        fontFamily:"MontserratExtraBold",
        fontSize:28,
        color:theme.colors.primary
    },
    wrapperItemMenu:{
      marginBottom:50,
      backgroundColor:theme.colors.accent,
      width:"100%",
      height:60,
      alignItems:"center",
      justifyContent:"center"
    },
    textItemMenu:{
      fontFamily:"MontserratExtraBold",
        fontSize:28
    },
    wrapperBreadCrumbs:{
      flexDirection:"row",
      marginTop:"3%",
      marginBottom:"2%",
      marginLeft:"2%",
      alignItems:"center"
    },
    textBreadCrumbs:{
      fontFamily:"MontserratRegular",
      fontSize:18
    },
    wrapperSummary:{
      flexDirection:"row",
      width:"100%",
      borderBottomColor: theme.colors.grey,
      borderBottomWidth: 1,
      marginTop:"2%",
      marginBottom: "2%",
      paddingBottom:"2%"
    },
    imageSummary:{
      width:130,
      height:130,
      margin:"4%"
    },
    wrapperSummaryName:{
      width:"100%"
    },
    wrapperSummaryButton:{
      flexDirection:"row",
      width:"100%",
      justifyContent: "flex-end"
    },
    wrapperDetail:{
      width:"100%",
      alignItems:"center",
      marginTop:"2%"
    },
    wrappersBloques:{
      width:"90%", 
      alignItems:"flex-start", 
      marginTop:"4%"
    },
    selectorVariaciones:{
      backgroundColor:theme.colors.accent,
      width:94,
      height:24,
      alignItems:"center",
      justifyContent:"center"
    },
    addToCartButton:{
      width:"100%",
      backgroundColor: theme.colors.primary,
      alignItems:"center",
      justifyContent:"center"
    },
    addToCartText:{
      fontFamily:"MontserratRegular",
      fontSize:20,
      color:"#fff"
    }
});