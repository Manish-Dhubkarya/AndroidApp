import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, FlatList, ScrollView } from "react-native";
import AddToCart from "../AddToCartComponent/AddToCartComponent";
const {width, height}=Dimensions.get("screen")
export default function BeforeCheckout({heading}){
    const [product, setProduct]=useState([])
    const fetchAllProducts=async()=>{
        var result=await postData("userInterface/fetch_products_by_subcategory",{subcategoryname:"Snacks & Branded Foods"})
        setProduct(result.data)
       }
       useEffect(function(){
        fetchAllProducts()
       },[])
       
    return(   
        
        <View style={{alignItems:"center"}}>
        <View style={{alignItems:"flex-start", flexDirection:"column", justifyContent:"space-between", borderRadius:15, backgroundColor:"#fff", width:width*.95}}>
            <Text style={{paddingTop:15, paddingLeft:15, fontSize:18, color:"#000", letterSpacing:1, fontWeight:800}}>{heading}</Text>
            <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
        > 
            <View style={{ flexDirection:"row", padding:5}}>
            <AddToCart data={product}/>
            </View>
            </ScrollView>
        </View>
        </View>
        
        
        )
    
}