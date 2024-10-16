import React from 'react';
import {Image, Text, StyleSheet, View, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import {useNavigation, DrawerActions} from "@react-navigation/native"
const {width, height}=Dimensions.get('screen')
export default function AppHeader(props) {
  var navigation=useNavigation()
  const handleUpdate=()=>{
   
    navigation.dispatch(DrawerActions.openDrawer())
    props.navigation.setParams({x:""})
  }
  return (
    
    <View style={{width:width, backgroundColor:"#fff", padding:5, height:height*.1, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
   <TouchableOpacity>
    <MCI name="menu" size={35} color="#ff7a00"
    onPress={()=>handleUpdate()}
    />
    </TouchableOpacity>
    <Image
      style={{resizeMode:"contain", width:55, height:55}}
      source={require("../../../../Assets/MD.png")}
    />
    <TouchableOpacity>
     <MCI name="cart-outline" color="#008cff" size={35}/>
     </TouchableOpacity>
    </View>
    )};