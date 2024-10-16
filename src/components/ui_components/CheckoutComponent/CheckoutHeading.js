import React, { useState } from "react";
import { Text, View, Dimensions, Image, TouchableOpacity, Alert } from "react-native"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from "@react-navigation/native";
const {width, height}=Dimensions.get("screen")

export default function CheckoutHeading(){
    var navigate=useNavigation()
    return(
       <View style={{ alignItems: "center" }}>
            <View style={{elevation:7,shadowColor: '#000',
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity:2,  width:width, flexDirection:"row", height:height*.09, alignItems:"center", justifyContent:"center", backgroundColor:"#fff"}}>
             <View style={{width:width*.94,justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
             <TouchableOpacity>
             <MCI onPress={()=>navigate.navigate("Home")} size={30} color={"#454545"} name="keyboard-backspace" /></TouchableOpacity>
             <Text style={{fontWeight:700, fontSize:20, letterSpacing:1, color:"#000"}}> Checkout</Text>
             <Text style={{fontWeight:700, fontSize:20, color:"#1a8c0d", letterSpacing:1}}>Share</Text>
             </View></View>
        </View>
    )
}