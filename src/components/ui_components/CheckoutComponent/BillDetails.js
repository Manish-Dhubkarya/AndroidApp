import React from "react";
import { Text, View, Dimensions} from "react-native"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import MI from "react-native-vector-icons/MaterialIcons";
const {width, height}=Dimensions.get("screen")

export default function BillDetails(props){
    var saved=props.total-props.ta;
    return(
        <View style={{alignItems:"center"}}>
            <View style={{width:width*.95,  backgroundColor:"#fff", height:"auto", justifyContent:"space-between", borderRadius:15}}>
             <View style={{margin:10}}>
                <Text style={{fontSize:20, letterSpacing:.5, color:"#000", fontWeight:"bold"}}>Bill Details</Text>
             </View>
             <View style={{width:width*.9, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
             <View style={{marginLeft:10, marginBottom:10,flexDirection:"row", width:width*.3, justifyContent:"space-between", alignItems:"center"}}>
                <MCI size={25} color={"#5A5A5A"} name="clipboard-list-outline"/>
                <Text style={{fontSize:14, color:"#000", marginLeft:2, fontWeight:500}}>Sub Total</Text>
                <View style={{borderRadius:20, width:width*.05, backgroundColor:"#CCCCCC", alignItems:"center", justifyContent:"center", marginLeft:4}} >
                <MI size={18} color={"#000"} name="keyboard-arrow-down" /></View>
                <View style={{width:"auto", borderRadius:5, marginLeft:10, backgroundColor:"#e6e6ff"}}>
               <Text style={{fontSize:10, color:"#0066ff", fontWeight:"bold", letterSpacing:1, padding:3}}>Saved ₹{saved}</Text>
                </View>
                </View>
                <View style={{marginLeft:10, marginBottom:10, flexDirection:"row", width:"auto", alignItems:"center", justifyContent:"space-between"}}>
                    <Text style={{textDecorationLine:"line-through", fontSize:16, color:"#5C5C5C", fontWeight:600}}>₹{props.total}</Text>
                    <Text style={{fontSize:16, fontWeight:500, color:"#000", marginLeft:7}}>₹{props.ta}</Text>
                </View>
             </View>

             <View style={{width:width*.9, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
             <View style={{marginLeft:10, marginBottom:10,flexDirection:"row", width:width*.3, justifyContent:"space-between", alignItems:"center"}}>
                <MI size={25} color={"#5A5A5A"} name="delivery-dining"/>
                <Text style={{fontSize:14, color:"#000", marginLeft:2, fontWeight:500}}>Delivery Charges</Text>
                <View style={{borderRadius:20, width:width*.045, borderWidth:1, borderColor:"#000", alignItems:"center", justifyContent:"center", marginLeft:4}} >
                <MCI size={14} color={"#000"} name="information-variant" /></View>
                </View>
                <View style={{marginLeft:10, marginBottom:10, flexDirection:"row", width:"auto", alignItems:"center", justifyContent:"space-between"}}>
                    <Text style={{textDecorationLine:"line-through", fontSize:16, color:"#5C5C5C", fontWeight:600}}>₹15</Text>
                    <Text style={{fontSize:17, color:"#0066ff", fontWeight:500, marginLeft:7}}>FREE</Text>
                </View>
             </View>

             <View style={{width:width*.9, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
             <View style={{marginLeft:10, marginBottom:10,flexDirection:"row", width:width*.3, justifyContent:"space-between", alignItems:"center"}}>
                <Text style={{fontSize:17, letterSpacing:1, color:"#000", marginLeft:2, fontWeight:"bold"}}>Grand Total</Text>
                </View>
                <View style={{marginLeft:10, marginBottom:10, flexDirection:"row", width:"auto", alignItems:"center", justifyContent:"space-between"}}>
                    <Text style={{fontSize:18, color:"#000", fontWeight:"bold"}}>₹{props.ta}</Text>
                </View>
             </View>

             <View style={{backgroundColor:"#d1d1ff", width:width*.95,paddingTop:15, paddingBottom:5, borderBottomLeftRadius:15, borderBottomRightRadius:15, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
             <View style={{flexDirection:"row", width:width*.9, alignItems:"center", justifyContent:"space-between"}}>
             <View style={{marginLeft:10, marginBottom:10,flexDirection:"row", width:width*.5, justifyContent:"space-between", alignItems:"center"}}>
                <Text style={{fontSize:16, letterSpacing:1, color:"#0066ff", marginLeft:2, fontWeight:"bold"}}>Your Total Savings</Text>
                </View>
                <View style={{marginLeft:10, marginBottom:10, flexDirection:"row", width:"auto", alignItems:"center", justifyContent:"space-between"}}>
                    <Text style={{fontSize:16, color:"#0066ff", fontWeight:500}}>₹{saved+15}</Text>
                </View>
                </View>
             </View>
             
            </View>
        </View>
    )}
