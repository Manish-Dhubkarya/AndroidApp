import React from "react";
import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from "@react-navigation/native";
const {width, height}=Dimensions.get("screen")

export default function ProductDetailsHeading(){
    const navigation=useNavigation()
    return(
       <View style={{ alignItems: "center" }}>
            <View style={{shadowColor: '#000', width:width, flexDirection:"row", height:height*.09, alignItems:"center", justifyContent:"center", backgroundColor:"#fff"}}>
             <View style={{width:width*.94,justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
             <MCI size={30} color={"#454545"} name="keyboard-backspace" />
             </TouchableOpacity>
             <Text style={{fontWeight:700, fontSize:20, letterSpacing:1, color:"#000"}}> Product Details</Text>
             <Text style={{fontWeight:700, fontSize:20, color:"#1a8c0d", letterSpacing:1}}>Share</Text>
             </View></View>
        </View>
    )
}