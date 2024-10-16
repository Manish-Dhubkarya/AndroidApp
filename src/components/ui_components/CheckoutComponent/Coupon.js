import React from "react";
import { View, Text, Dimensions } from "react-native";
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import MI from "react-native-vector-icons/MaterialIcons"
const {width, height}=Dimensions.get("screen")
export default function Coupon(){
    return(
        <View style={{alignItems:"center"}}>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderRadius:15, backgroundColor:"#fff", width:width*.95, padding:15}}>
            <View style={{flexDirection:"row", width:width*.4, alignItems:"center", justifyContent:"space-between"}}>
                <MCI color={"#0066ff"} size={25} name="brightness-percent"/>
             <Text style={{fontSize:19, fontWeight:"bold", color:"#000", letterSpacing:1}}>Use Coupons</Text>
            </View>
            <MI color={"#0066ff"} size={25} name="keyboard-arrow-right"/>
        </View>
        </View>
    )
}