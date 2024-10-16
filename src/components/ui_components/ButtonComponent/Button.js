import React, { useState } from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
const {width, height}=Dimensions.get('screen')

export default function Button({w, onPress, h, fontSize, label, backgroundColor, borderColor, color}) {
    return(<TouchableOpacity onPress={onPress} style={{margin:5}}>
        <View style={{justifyContent:"center", flexDirection:"row", borderColor, width:width*w, height:height*h, borderWidth:2, borderRadius:7, alignItems:"center", backgroundColor}}>
       <Text style={{color, fontSize,fontWeight:700}}>{label}</Text>
        </View>
        </TouchableOpacity>
    )
}
