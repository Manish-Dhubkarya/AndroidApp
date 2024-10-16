import React, { useState } from "react";
import { View, Text, Dimensions,} from "react-native";
import { useDispatch } from "react-redux";
import PlusMinusButton from "../PlusMinusButton/PlusMinusButton";
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
const {width, height}=Dimensions.get("screen")
export default function ShowProductData({product, refresh, setRefresh}){
  const [qty, setQty]=useState(0)
  var dispatch=useDispatch()
  const handleClick=(value, product)=>{
    setQty(value)
    product["qty"]=value
   dispatch({type:"ADD_PRODUCT", payload:[product.productlistid, product]})
    setRefresh(!refresh)
  }
  
    return(
     <View style={{alignItems:"center"}}>
       <View style={{paddingVertical:10, alignItems:"center", borderWidth:2, borderBottomWidth:0, borderColor:"#0E86D4", width:width*.95, borderTopLeftRadius:15, borderTopRightRadius:15, backgroundColor:"#fff"}}>
        <Text style={{ fontWeight:"bold", fontSize:19, color:"#db2483"}}>{product.productlistname}</Text>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginVertical:5}}>
        <Text style={{ color:"#00D100", fontSize:17, fontWeight:"600"}}>View all by {product.productname} </Text>
        <MCI  color={"#00D100"}size={18} name="arrow-right-drop-circle-outline"/></View>

        <View style={{ alignItems:"flex-start", width:width*.9}}>
         <View style={{flexDirection:"row", width:width*.9, justifyContent:"space-between", alignItems:"center"}}>
            <View>
        <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:17, color:"#1158ee", letterSpacing:1}}>Specifications</Text>
        <MCI  color={"#1158ee"}size={18} name="arrow-down-right"/>
        </View>
        
        <View>
        <Text style={{fontSize:15, color:"#444444", letterSpacing:1}}><Text style={{color:"#000"}}>Weight:</Text>{product.weight}</Text>
        <View style={{flexDirection:"row", alignItems:"center"}}>
        <Text style={{fontSize:16, color:"#030001", fontWeight:500, paddingRight:10}}>Price: ₹{product.offer}</Text>
        <Text style={{fontSize:15, color:"#808080", fontWeight:500, textDecorationLine:"line-through"}}>₹{product.rate}</Text></View>
        </View>
        </View>
        
        <View>
        <PlusMinusButton qty={product.qty==undefined?0:product?.qty} onChange={(value)=>handleClick(value, product)}/>
        </View>
        </View>
        </View>
       </View>
     </View>
    )
}