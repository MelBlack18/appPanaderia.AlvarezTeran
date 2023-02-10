import {StyleSheet} from 'react-native';
import {THEME} from '../constants/theme'

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
        color:THEME.colors.primary
    },
    wrapperItemMenu:{
      marginBottom:25,
      marginTop:25,
      backgroundColor:THEME.colors.accent,
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
      borderBottomColor: THEME.colors.grey,
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
    textosCard: {
      fontFamily:"MontserratRegular",
      fontSize:12
    },
    selectorVariaciones:{
      fontFamily:"MontserratRegular",
      fontSize:12,
      width:94,
      height:24,
      alignItems:"center",
      justifyContent:"center"
    },
    addToCartButton:{
      width:"100%",
      backgroundColor: THEME.colors.primary,
      alignItems:"center",
      justifyContent:"center"
    },
    addToCartText:{
      fontFamily:"MontserratRegular",
      fontSize:20,
      color:"#fff"
    },
    wrapperCartItem:{
      flexDirection:"row",
      width:"100%",
      borderBottomColor: THEME.colors.grey,
      borderBottomWidth: 1,
      marginTop:"2%",
      marginBottom: "2%",
      paddingBottom:"2%",
      justifyContent:"space-around"
    },
    wrapperCartItemData:{
      width:"50%",
      marginLeft:"8%"
    },
    wrapperCartItemDelete:{
      width:"50%",
      alignItems:"flex-end",
      justifyContent:"center",
      marginRight:"8%"
    },
    cartDataTitle:{
      fontFamily:"MontserratRegular", 
      fontSize:20
    },
    cartDataText:{
      fontFamily:"MontserratRegular", 
      fontSize:15
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