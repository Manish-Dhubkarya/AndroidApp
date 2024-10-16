import React, { useState } from 'react';
import {Text, View, Dimensions, TouchableOpacity, Pressable} from 'react-native';
import MI from "react-native-vector-icons/MaterialIcons"
const {width, height}=Dimensions.get('screen')
export default function Dropdown({w, iconEnd, onPress2, Title, onPress3, onPress1, iconEnd2, DDText1, DDText2, DDText3}) {
    const handle2=()=>{
        setdd(!dd)
        onPress2()
    }
    const handle1=()=>{
        setdd(!dd)
        onPress1()
    }
    const handle3=()=>{
        setdd(!dd)
        onPress3()
    }
    const [dd,setdd] = useState(false)
    return(<View style={{margin:5}}>
        <TouchableOpacity onPress={()=>setdd(!dd)}>
        <View style={{borderColor:"#00ccff", flexDirection:"row", width:width*w, height:45, borderWidth:2, borderRadius:7, alignItems:"center", justifyContent:"space-bewtween", backgroundColor:"#F8FAFD"}}>
        <View style={{flexDirection:"row", width:width*w, alignItems:"center", paddingHorizontal:5, justifyContent:"space-between"}}>
        <Text style={{fontSize:15, fontWeight:"bold", color:"#000"}}>{Title}</Text>
       {dd? <MI color={"blue"} name={iconEnd} size={30}/>:
       <MI color={"blue"} name={iconEnd2} size={30}/>
       }
       </View></View></TouchableOpacity>
{
    dd?
     <View style={{flexDirection:"column", alignItems:"center", position:"absolute", zIndex:1, top:45}}>
        <Pressable onPress={handle1}>
             <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:1, width:width*.2, borderRadius:5, fontSize:20, borderColor:"#00d100", borderWidth:1, height:30, backgroundColor:"#fff"}}>
                <Text style={{fontSize:15, color:"#00c2f0"}}>{DDText1}</Text>
             </View>
             </Pressable>
            
             <Pressable onPress={handle2}>
            <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row", width:width*.2, fontSize:20, borderRadius:5, borderColor:"#00d100", borderWidth:1, height:30, backgroundColor:"#fff"}}>
            <Text style={{fontSize:15, color:"#00c2f0"}}>{DDText2}</Text>
            </View>
            </Pressable>
            <Pressable onPress={handle3}>
            <View style={{justifyContent:"center", flexDirection:"row", alignItems:"center", width:width*.2, fontSize:20, borderRadius:5, borderColor:"#00d100", borderWidth:1, height:30, backgroundColor:"#fff"}}>
                <Text style={{fontSize:15, color:"#00c2f0"}}>{DDText3}</Text>
            </View>
            </Pressable>
        </View>:<></>}
        </View>
        
    )
}
