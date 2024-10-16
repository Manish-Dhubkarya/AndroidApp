import React from 'react';
import {useState, useEffect} from "react"
import {Dimensions, View, ScrollView, TouchableOpacity} from 'react-native';
import { Divider } from '@rneui/themed';
import { postData } from '../Services/FetchNodeServices';
import ShowProductImages from '../components/ui_components/ProductDetails/ShowProductImages';
import ShowProductData from '../components/ui_components/ProductDetails/ShowProductData';
import ProductDetailsHeading from '../components/ui_components/ProductDetails/ProductDetailsHeading';
import FlottingCart from '../components/ui_components/FlottingCart/FlottingCart';
import ShowProductUnits from '../components/ui_components/ProductDetails/ShowProductUnits';
const {width, height}=Dimensions.get("screen")
export default function ProductDetails(props) {
  const [refresh, setRefresh]=useState(false)
  var selectedProduct=props.route.params.state.product
  const [product, setProduct]=useState(selectedProduct)
  var pricePercentOff=parseInt(100-[100/(product.rate)*(product.offer)])
  const [images, setImages]=useState([])
  const [units, setUnits]=useState()
  const fetch_all_images=async()=>{
    var result= await postData("userInterface/fetch_all_multipleImages_by_productid",{productlistid:product.productlistid})
    setImages(result.data)
  }
  const fetch_all_units=async()=>{
    var result= await postData("userInterface/fetch_all_products_by_productid",{productid:product.productid})
    setUnits(result.data)
  }
  useEffect(function(){
    fetch_all_images()
    fetch_all_units()
  },[product])
  return (
    <View>
    <View style={{alignItems:"center", height:height*.8, backgroundColor:"#EDE4E3"}}>
      <ProductDetailsHeading/>
      
     <ScrollView showsVerticalScrollIndicator={false}>
     <ShowProductImages pricePercentOff={pricePercentOff}  pimages={images}/>
      <ShowProductData refresh={refresh} setRefresh={setRefresh} product={product}/>
      <View style={{alignItems:"center"}}>
      <Divider style={{borderWidth:1, borderColor:"#A1A9FE", width:width*.75}}/></View>
      <ShowProductUnits pproduct={product} product={units} setProduct={setProduct}/>
      </ScrollView>
      <FlottingCart/>
      
      </View>
      </View>
      
    )}