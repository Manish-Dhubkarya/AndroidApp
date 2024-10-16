import React, { useState } from "react";
import { Dimensions, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
const {width, height}=Dimensions.get("screen")
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import CheckBox from "./Checkbox";

export default function DeliveryInstructions(){
    return(
        <View style={{alignItems:"center"}}>
        <View style={{flexDirection:"column", backgroundColor:"#fff", borderRadius:15, width:width*.95}}>
            <View>
                <Text style={{padding:10, fontWeight:"bold", fontSize:17, letterSpacing:1, color:"#000"}}>Delivery Instructions</Text></View>
                <View style={{margin:7, flexDirection:"column", backgroundColor:"#fff", borderRadius:10, width:width*.9, height:"auto"}}>
                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    
                <View style={{flexDirection:"row", justifyContent:"center"}}>

                <View style={{alignItems:"center", margin:7, flexDirection:"column", elevation:4, width:width*.27, borderRadius:20, alignItems:"center", backgroundColor:"#fff"}}>
                <View style={{flexDirection:"row",paddingLeft:5, padding:10, alignItems:"center"}}>
                <MCI size={24} color={"#338533"} name="microphone-outline"/>
                <Text style={{color:"#338533", fontSize:17, fontWeight:600}}>Record</Text></View>
                <View style={{margin:10, width:width*.2}}>
                    <Text style={{color:"#000", fontSize:15, fontWeight:500}}>Press here and hold</Text></View>
                </View>
            
                <View style={{alignItems:"center", margin:7, flexDirection:"column", justifyContent:"space-between",  elevation:4, width:width*.27, borderRadius:20, alignItems:"center", backgroundColor:"#fff"}}>
                <View style={{justifyContent:"space-between", width:width*.25, padding:10, flexDirection:"row"}}>
                <MCI size={20} color={"#000"} name="phone-off-outline"/>
                <CheckBox/>
                </View>
                <View style={{margin:10, width:width*.2, justifyContent:"flex-start", alignItems:"flex-start"}}>
                    <Text style={{color:"#000", fontSize:15, fontWeight:500}}>Avoid Calling</Text></View>
                </View>

                <View style={{alignItems:"center", margin:7, flexDirection:"column", justifyContent:"space-between", elevation:4, width:width*.27, borderRadius:20, alignItems:"center", backgroundColor:"#fff"}}>
                <View style={{justifyContent:"space-between", width:width*.25, padding:10, flexDirection:"row"}}>
                <MCI size={20} color={"#000"} name="bell-off-outline"/>
                <CheckBox/>
                </View>
                <View style={{margin:10, width:width*.2, justifyContent:"flex-start", alignItems:"flex-start"}}>
                    <Text style={{color:"#000", fontSize:15, fontWeight:500}}>Don't ring the bell</Text></View>
                </View>

                <View style={{alignItems:"center", margin:7, flexDirection:"column", justifyContent:"space-between", elevation:4, width:width*.27, borderRadius:20, alignItems:"center", backgroundColor:"#fff"}}>
                <View style={{justifyContent:"space-between", width:width*.25, padding:10, flexDirection:"row"}}>
                <MCI size={20} color={"#000"} name="account-tie-hat-outline"/>
                <CheckBox/>
                </View>
                <View style={{margin:10, width:width*.2, justifyContent:"flex-start", alignItems:"flex-start"}}>
                    <Text style={{color:"#000", fontSize:15, fontWeight:500}}>Leave with guard</Text></View>
                </View>
                <View style={{alignItems:"center", margin:7, flexDirection:"column", justifyContent:"space-between", elevation:4, width:width*.27, borderRadius:20, alignItems:"center", backgroundColor:"#fff"}}>
                <View style={{justifyContent:"space-between", width:width*.25, padding:10, flexDirection:"row"}}>
                <MCI size={20} color={"#000"} name="door-closed"/>
                <CheckBox/>
                </View>
                <View style={{margin:10, width:width*.2, justifyContent:"flex-start", alignItems:"flex-start"}}>
                    <Text style={{color:"#000", fontSize:15, fontWeight:500}}>Leave at door</Text></View>
                </View>

                </View>
                </ScrollView>
                <View style={{flexDirection:"row", justifyContent:"flex-start", padding:7, paddingTop:15}}>
                <CheckBox/>
                <Text style={{fontSize:14.5, marginLeft:10, color:"#000", letterSpacing:.3}}>Save for all orders at this address</Text>
                </View>
                </View>
            </View>
        </View>
    )
}