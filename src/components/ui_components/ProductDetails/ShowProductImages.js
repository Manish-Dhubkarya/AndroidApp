import React from "react";
import { View, Text, Dimensions, FlatList, Image} from "react-native";
import { serverURL } from "../../../Services/FetchNodeServices";
const {width, height}=Dimensions.get("screen")

export default function ShowProductImages({pimages, pricePercentOff}){
   console.log("xxxxxxxxxxxx", images)
   var priceoffP=pricePercentOff
    var images=[]
    try{
    images=pimages[0].picture.split(",")
    }catch(e){}
    const ShowDetails=({item})=>{
        return(
        <View style={{width:width*.75, paddingLeft:width*.17, alignItems:"center", justifyContent:"center"}}>
        <Image
style={{resizeMode:"contain", width:width*.5,  height:height*.3}}
source={{uri:`${serverURL}/images/${item}`}}></Image>
        </View>
    )}
    return(
        <View style={{justifyContent:"center", alignItems:"center"}}>
        
        <View style={{justifyContent:"center", backgroundColor:"#fff", resizeMode:"contain", marginVertical:10, alignItems:"center", borderRadius:15, borderWidth:2.5, borderColor:"#ec8d13", width:width*.95, height:height*.35}}>
<View style={{position:'absolute', paddingLeft:4, borderBottomLeftRadius:10, paddingTop:2, paddingBottom:1, alignItems:"center",  width:width*.18, backgroundColor:"#0059ff",top:0,zIndex:1,left:20}}>
   <Text style={{color:"#fff", fontSize:18, fontWeight:"bold"}}>{priceoffP}% OFF</Text>
</View>
<FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={images}
        renderItem={({item})=><ShowDetails item={item}/>}
        key={"#"}
        keyExtractor={item=>"#" + item.id}
        />
     </View>
     
        </View>
        
    )
}