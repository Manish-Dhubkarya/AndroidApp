import React, {useState} from "react"
import { View, TouchableOpacity } from "react-native"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
export default function CheckBox({}){
    const [check, setCheck]=useState(false)
    return(
        <TouchableOpacity onPress={()=>setCheck(!check)}>
                {check?
                <View style={{backgroundColor:"#00b200", borderRadius:5}}>
                <MCI size={20} color={"#fff"} name="check"/></View>:
                <View style={{borderColor:"#00b200", width:20, height:20, borderWidth:1.5, borderRadius:5}}>
                </View>}
        </TouchableOpacity>
    )
}