import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dimensions, View, Text, Image, FlatList } from "react-native";
const {width, height}=Dimensions.get("screen")
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import PlusMinusButton from "../PlusMinusButton/PlusMinusButton";
import { serverURL } from "../../../Services/FetchNodeServices";
export default function AddedProducts(props){
   const [qty, setQty]=useState(0)
   var dispatch=useDispatch()
   const handleClick=(value, item)=>{
      setQty(value)
      item["qty"]=value
     dispatch({type:"ADD_PRODUCT", payload:[item.productlistid, item]})
     props.setRefresh(!props.refresh)
    }
  const WholeView=({item})=>{
   var priceoffPercent=parseInt(100-[100/(item.rate)*(item.offer)])
   return(
        <View style={{alignItems:"center"}}>
         {!item.qty==0?
        <View style={{flexDirection:"column", justifyContent:"space-between", borderRadius:15, backgroundColor:"#fff", width:width*.95, padding:15}}>
         <View style={{paddingTop:5, flexDirection:"row", alignItems:"center"}}>
         <View style={{justifyContent:"center", alignItems:"center", borderRadius:13, borderWidth:1, borderColor:"#C5C6D0", width:width*.2, height:height*.11}}>

<View style={{position:'absolute', paddingLeft:4, borderBottomLeftRadius:10, paddingTop:2, paddingBottom:1, alignItems:"center",  width:width*.07, backgroundColor:"#0059ff",top:0,zIndex:1,left:10}}>
   <Text style={{color:"#fff", fontSize:9, fontWeight:"bold"}}>{priceoffPercent}% OFF</Text>
</View>
<Image
style={{resizeMode:"contain", width:width*.14, height:height*.15}}
source={{uri:`${serverURL}/images/${item.picture}`}}></Image>
     </View>
     <View style={{paddingLeft:15, width:width*.4}}>
    <Text style={{fontSize:15, color:"#000", fontWeight:500}}>{item.productlistname}</Text>
    <Text style={{fontSize:13.5, color:"#444444", letterSpacing:1}}>{item.weight}/Qty:{item.qty}</Text>
    <View style={{flexDirection:"row", alignItems:"center"}}>
        <Text style={{fontSize:16, color:"#030001", fontWeight:500, paddingRight:10}}>₹{item.offer*item.qty}</Text>
        <Text style={{fontSize:15, color:"#808080", fontWeight:500, textDecorationLine:"line-through"}}>₹{item.rate*item.qty}</Text>
        </View>
     </View>
     <View style={{alignItems:"flex-end", width:width*.27, justifyContent:"center"}}>
     <PlusMinusButton qty={item.qty==undefined?0:item?.qty} onChange={(value)=>handleClick(value, item)}/>
     </View>
         </View>
        </View>
        :<></>}
        </View>
    )}
    return(
      <View style={{alignItems:"center"}}>
      <View style={{ flexDirection:"column", justifyContent:"space-between", borderRadius:15, backgroundColor:"#fff", width:width*.95, padding:15}}>
  <View style={{alignItems:"center", justifyContent:"space-between", flexDirection:"row", width:width*.65}}>
         <View style={{borderRadius:10, marginRight:15, padding:7, backgroundColor:"#E3E8F0"}}>
            <MCI color={"#000"} size={25} name="timer-outline"/>
         </View>
         <View>
            <Text style={{color:"#000", fontWeight:800, fontSize:18.5, letterSpacing:.5}}>Free delivery in 16 minutes</Text>
            <Text style={{fontWeight:500, letterSpacing:1}}>{props.cartitems} {props.cartitems==1?"item":"items"}</Text>
            </View>
         </View>
        
            
  <FlatList
  data={props.cartlist}
  renderItem={({item})=><WholeView item={item}/>}
  keyExtractor={item=>item.productid}
  />
  </View>
  </View>
  
  )

}