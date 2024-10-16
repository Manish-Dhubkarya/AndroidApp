import React, { useState } from "react";
import { Text, View, Dimensions, TouchableOpacity, FlatList} from "react-native"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
const {width} = Dimensions.get("screen")

export default function ShowProductUnits({product, pproduct, setProduct}) {
    const [selectedBox, setSelectedBox]=useState(product)
    const [dd,setdd] = useState(false)
    const handleUnits=(item)=>{
        setSelectedBox(item)
        setProduct(item)
    }
    const ShowUnits=({item})=>{
    var priceoffPercent=parseInt(100-[100/(item.rate)*(item.offer)])
    return (
        <View style={{alignItems: "center"}}>
                     {!dd?
                    <View style={{ flexDirection:"row", width: width * .55,  marginVertical: 10 }}>
                        <TouchableOpacity onPress={()=>handleUnits(item)}>
                            <View style={{ elevation:item.productlistid == pproduct.productlistid ? 5 : 1.5, padding: 10, alignItems: "center", justifyContent: "space-between", flexDirection: "row", borderWidth: 1.5, borderColor: item.productlistid == pproduct.productlistid? "orange" : "#B9B7BD", borderRadius: 10, width: width * .5, backgroundColor: "#fff" }}>
                            <View style={{position:'absolute', paddingLeft:2, borderBottomLeftRadius:7, borderBottomRightRadius:7, paddingVertical:5, alignItems:"center",  width:width*.3, backgroundColor:"#0059ff",top:0,zIndex:1,right:width*.095}}>
                      <Text style={{color:"#fff", fontSize:14, fontWeight:"bold"}}>{priceoffPercent}% OFF</Text>
                      </View>
                      <View style={{ width:width*.44, justifyContent:"center", alignItems:"center"}}>
                                <Text style={{marginTop:20,  color: "#000", fontSize: 14, fontWeight: "bold", letterSpacing:1 }}>Weight:{item.weight}</Text>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text style={{marginTop:5,  color: "#000", fontSize: 14, fontWeight: "bold", letterSpacing:1}}>Price:₹{item.offer}</Text><Text style={{fontSize:12, color:"#000", textDecorationLine:"line-through"}}>₹{item.rate}</Text></View>
                                </View>
                            </View>
                        </TouchableOpacity >
                        
                    </View>:<></>}
               
        </View>
    )}
    return(
        <View style={{marginBottom:200, width: width * .95, borderWidth:2, borderTopWidth:0, borderColor:"#0E86D4", padding: 15, borderBottomLeftRadius:15, borderBottomRightRadius: 15, alignItems: "flex-start", backgroundColor: "#fff" }}>
        <View style={{ alignItems: "flex-start", width: width * .75}}>
            <TouchableOpacity onPress={()=>setdd(!dd)}>
                    <View style={{flexDirection:"row",width:width*.63, alignItems:"center",  justifyContent:"space-between"}}>
                    <Text style={{ fontSize: 17, color: "#000", letterSpacing: 1, fontWeight: "bold", marginBottom: 4 }}>Select Other Specifications</Text>
                    
                    {!dd? 
                    <MCI color={"blue"} name="arrow-down-drop-circle-outline" size={25}/>:
                     <MCI color={"blue"} name="arrow-up-drop-circle-outline" size={25}/>
                     }
            </View>
            </TouchableOpacity></View>
  <FlatList
  horizontal
  data={product}
  renderItem={({item})=><ShowUnits item={item}/>}
  key={"#"}
  keyExtractor={item=>"#" + item.id}
  /></View>
    )
}