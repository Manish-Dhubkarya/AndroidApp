import React, { useState } from 'react';
import {Text, View, Dimensions, TextInput, TouchableOpacity, Pressable, Alert} from 'react-native';
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
const {width, height}=Dimensions.get('screen')
export default function InputText({w, onChangeText, inpText, borderRadius, textWidth, iconEnd1, h, fontSize, iconSize,  iconEnd, iconEnd2, icon, text, placeholder, errorMessage, inputMode="Text", error=false, password=false, ...props}) {
    const [inputText, setInputText]=useState("")
    const [pwd,setPwd] = useState(false)
    return(<View style={{margin:5}}>
        <View style={{flexDirection:"row", width:width*w, height:h, borderWidth:2, borderRadius:borderRadius, borderColor:error?"#ff0066":"#00ccff", alignItems:"center", backgroundColor:"#F8FAFD"}}>
        <MCI style={{padding:3}} color={"#80ff00"} name={icon} size={iconSize}/>
        <Text style={{fontSize:fontSize, color:"grey", alignItems:"center"}}>{text}</Text>
        <TextInput placeholderTextColor={"grey"} onChangeText={onChangeText} secureTextEntry={pwd?password=false:password=true} width={textWidth}  inputMode={inputMode}  style={{fontSize:fontSize, color:"#000"}} placeholder={placeholder}/>
        <MCI style={{padding:7}} color={"blue"} name={iconEnd1} size={iconSize}/>
       <TouchableOpacity onPress={()=>setPwd(!pwd)}>
       {pwd? <MCI style={{marginLeft:10}} color={"blue"} name={iconEnd} size={iconSize}/>:
       <MCI style={{marginLeft:10}} color={"blue"} name={iconEnd2} size={iconSize}/>
       }
        </TouchableOpacity>
        </View>
       {error? <View >
        <Text style={{margin:4, color:"#ff0066", fontSize:12}} >{errorMessage}</Text>
        </View>:<></>}
        </View>
    )
}
