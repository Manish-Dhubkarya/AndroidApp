import React from "react";
import { View, Image, FlatList, ScrollView, Dimensions } from "react-native";
import { serverURL } from "../../../Services/FetchNodeServices";
const {width, height}=Dimensions.get("screen")

export default function BannerComponent(props){
  var images=[]
  try{
  images=props.banners.split(",")
  }catch(e){}
    const BannerView=({item})=>{
    return(
        <View style={{alignItems:"center"}}>
         <View style={{alignItems:"center", width:width*.94, height:height*.22, marginBottom:5}}>
         <Image style={{resizeMode:"contain", width:width*.94, borderRadius:15, height:height*.22}}
source={{uri:`${serverURL}/images/${item}`}} />
         </View>
        </View>
    )}
    return(
        
  <ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  >
  <FlatList
  horizontal
  data={props.banners}
  renderItem={({item})=><BannerView item={item}/>}
  key={"#"}
  keyExtractor={item=>"#" + item.id}
  />
  </ScrollView>
    )
}