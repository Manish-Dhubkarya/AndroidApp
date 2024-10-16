import React from "react";
import { Dimensions, View, Text, Image } from "react-native";
const {width, height}=Dimensions.get("screen")
import CheckBox from "./Checkbox";
import MCI from "react-native-vector-icons/MaterialCommunityIcons"

export default function Donation(){
    const handlePress=()=>{
        alert("Feeding India is a non-profit organization dedicated to eradicate hunger and improve malnutrition outcomes in India. ")
    }
    return(
        <View style={{alignItems:"center"}}>
        <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#fff", justifyContent:"space-between", borderRadius:15, width:width*.95, height:height*.1}}>
         <View style={{borderRadius:10, alignItems:"center", justifyContent:"center", backgroundColor:"#ffd1d1", height:50, width:50, marginLeft:15}}>
         <Image
style={{resizeMode:"contain",margin:10,  width:width*.09, borderRadius:10, height:height*.06}}
source={require("../../../../Assets/Donation.png")}></Image></View>
      <View style={{ justifyContent:"space-between", paddingTop:7, paddingBottom:7, width:width*.55}}>
        <Text style={{color:"#000", fontWeight:500, letterSpacing:1, fontSize:15, fontWeight:"bold"}}>Feeding India Donation </Text>
        <Text style={{color:"#808080", fontSize:13.5, fontWeight:500}}>Working towards a malnutrition free India. Feeding India...<Text onPress={handlePress} style={{color:"#00b200", fontStyle:"italic", fontSize:12}}>read more</Text></Text>
      </View>
         <View style={{alignItems:"center", flexDirection:"row", alignItems:"center", marginRight:15}}>
        <Text style={{fontSize:17,color:"#000", fontWeight:600, marginRight:7}}>₹1</Text>
        <CheckBox/>
      </View>
        </View>
        </View>
    )
}