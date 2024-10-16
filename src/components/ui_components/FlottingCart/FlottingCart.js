import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Dimensions, Image } from "react-native"
import { TouchableOpacity } from "react-native";
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import { useSelector } from "react-redux";
const {width, height}=Dimensions.get("screen")

export default function FlottingCart(){
  var navigation=useNavigation()
  var cart=useSelector(state=>state.products)
  var cartitems=Object.keys(cart).length
  var cartlist=Object.values(cart)
  var ta=cartlist.reduce(totalAmount,0)
  function totalAmount(a, b){
   price=b.offer>0?b.offer*b.qty:b.rate*rate
   return(a+price)
  }
    return(
      <>
     {ta > 0?
     <TouchableOpacity onPress={()=>navigation.navigate("Checkout")}>
        <View style={{alignItems:"center"}}>
         <View style={{backgroundColor:"#fff", padding:10, width:width, justifyContent:"center", alignItems:"center"}}>
        <View style={{elevation:2, flexDirection:"row", alignItems:"center", backgroundColor:"#00b200", justifyContent:"space-between", borderRadius:12, width:width*.95, height:height*.08}}>
         <View style={{flexDirection:"row"}}>
         <Image
style={{resizeMode:"contain",margin:10,  width:width*.11, borderRadius:10, height:height*.06}}
source={require("../../../../Assets/cart.gif")}></Image>
      <View style={{ justifyContent:"space-between", paddingTop:7, paddingBottom:7}}>
        <Text style={{color:"#fff", fontWeight:500, fontSize:18}}>{cartitems} {cartitems==1?"item":"items"}</Text>
        <Text style={{color:"#fff", fontSize:20, fontWeight:500}}>₹{ta}</Text>
      </View>
         </View>
         <View style={{alignItems:"center", flexDirection:"row", justifyContent:"center", marginRight:10}}>
        <Text style={{fontSize:21,color:"#fff", fontWeight:600, marginRight:7}}>View cart</Text>
        <MCI size={25} color={"#fff"} name="arrow-right-drop-circle-outline"/>
      </View>
        </View></View>
        </View></TouchableOpacity>:<></>}
        </>
    )
}