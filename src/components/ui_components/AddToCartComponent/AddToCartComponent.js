import React, { useState} from 'react';
import {Text, Image, View, Dimensions, ScrollView, FlatList, TouchableOpacity} from 'react-native';
const {width, height}=Dimensions.get('screen')
import { useDispatch } from 'react-redux';
import PlusMinusButton from '../PlusMinusButton/PlusMinusButton';
import { serverURL } from '../../../Services/FetchNodeServices';
import { useNavigation } from '@react-navigation/native';
export default function AddToCart(props) {
  var dispatch=useDispatch()
  const [qty, setQty]=useState(0)
   const CartView=({item})=>{
    var navigation=useNavigation()
    const handleClick=(value, item)=>{
      setQty(value)
      item["qty"]=value
     dispatch({type:"ADD_PRODUCT", payload:[item.productlistid, item]})
     props.setStatus(!props.status)
    }
    var pricePercentOff=parseInt(100-[100/(item.rate)*(item.offer)])
  return (
    <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
     <View style={{flexDirection:"column", marginVertical:10, marginHorizontal:5, backgroundColor:"#fff",  elevation:2, width:width*.34, borderRadius:10, padding:5, justifyContent:"center", alignItems:"center"}}>
     <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{state:{product:item}})}>
     <View style={{justifyContent:"center", alignItems:"center", borderRadius:13, borderWidth:1, borderColor:"#C5C6D0", width:width*.3, height:height*.14}}>

<View style={{position:'absolute', paddingLeft:4, borderBottomLeftRadius:10, paddingTop:2, paddingBottom:1, alignItems:"center",  width:width*.08, backgroundColor:"#0059ff",top:0,zIndex:1,left:10}}>
   <Text style={{color:"#fff", fontSize:10, fontWeight:"bold"}}>{pricePercentOff}% OFF</Text>
</View>
<Image
style={{resizeMode:"contain", width:width*.25, height:height*.12}}
source={{uri:`${serverURL}/images/${item.picture}`}}></Image>
     </View></TouchableOpacity>
     <View style={{flexDirection:"column", justifyContent:"flex-start", width:width*.3}}>
        <Text style={{fontSize:14, color:"#000000", marginTop:7, fontWeight:700}}>{item.productlistname}</Text>
        <Text style={{fontSize:13, color:"#444444", letterSpacing:1, marginTop:3}}>{item.weight}</Text>
        <View style={{flexDirection:"row", marginTop:7, alignItems:"center", width:width*.31, justifyContent:"space-between"}}>
        <View> 
        <Text style={{fontSize:14, color:"#030001", fontWeight:500}}>₹{item.offer}</Text>
        <Text style={{fontSize:12, color:"#808080", fontWeight:500, textDecorationLine:"line-through"}}>₹{item.rate}</Text>
        </View>
       <PlusMinusButton qty={item.qty==undefined?0:item?.qty} onChange={(value)=>handleClick(value, item)}/>
        </View>
     </View>
     </View>
    </View>
)}
return(
  <View style={{height:height}}>
  <ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  >
  <FlatList
  showsVerticalScrollIndicator={false}
    numColumns={6}
  
  data={props.data}
  renderItem={({item})=><CartView item={item}/>}
  key={"#"}
  keyExtractor={item=>"#" + item.id}
  />
  </ScrollView>
  </View>
)

}