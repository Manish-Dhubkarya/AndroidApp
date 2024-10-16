import React from 'react';
import {Dimensions, View} from 'react-native';
import CircleComponent from '../components/ui_components/CircleComponent/CircleComponent';
import InputText from '../components/ui_components/TextField/InputText';
import AddToCart from '../components/ui_components/AddToCartComponent/AddToCartComponent';
import { getData, postData } from '../Services/FetchNodeServices';
import { useState, useEffect } from 'react';
import BannerComponent from '../components/ui_components/BannerComponent/BannerComponent';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import FlottingCart from '../components/ui_components/FlottingCart/FlottingCart';
const{width, height}=Dimensions.get("screen")
export default function Home() {
  const [subcategory, setSubcategory]=useState([])
  const [product, setProduct]=useState([])
  const [banners, setBanners]=useState([])
  const [status, setStatus]=useState(false)
   const fetchAllSubcategory=async()=>{
    var result=await getData("Subcategory/subcategory_list")
    setSubcategory(result.data)
   }
   const fetchAllProducts=async()=>{
    var result=await postData("userInterface/fetch_products_by_subcategory",{subcategoryname:"Snacks & Branded Foods"})
    setProduct(result.data)
   }
   const fetchAllBanners=async()=>{
     var result=await getData("userInterface/fetch_all_banner")
     var images = result.data.banners.split(",")
     setBanners(images)
   }
   useEffect(function(){
    fetchAllSubcategory()
    fetchAllProducts()
    fetchAllBanners()
   },[])
   
  return (
    <View style={{backgroundColor:"#EDE4E3", position:"relative", height:height*.8, alignItems:"flex-start" }}>
      <View style={{marginVertical:5}}>
      <InputText icon={"shield-search"} borderRadius={40} fontSize={16} iconSize={27} textWidth={width*.75} inputMode='email' h={47} iconEnd1={"store-search-outline"} w={.97} placeholder="Search any product here"/></View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <BannerComponent banners={banners}/>
      <CircleComponent data={subcategory}/>
     <AddToCart setStatus={setStatus} status={status} data={product}/>
    </ScrollView>
    <FlottingCart/>
    </View>
    )}