import React, {useEffect, useState} from "react";
import RazorpayCheckout from 'react-native-razorpay';
import { useSelector } from "react-redux";
import Button from "../components/ui_components/ButtonComponent/Button";
import BillDetails from "../components/ui_components/CheckoutComponent/BillDetails";
import CheckoutHeading from "../components/ui_components/CheckoutComponent/CheckoutHeading";
import { View, Dimensions, Text } from "react-native";
import Donation from "../components/ui_components/CheckoutComponent/Donation";
import DeliveryInstructions from "../components/ui_components/CheckoutComponent/DeliveryInstructions";
import DeliveryTip from "../components/ui_components/CheckoutComponent/DeliveryTip";
import { ScrollView } from "react-native";
import Coupon from "../components/ui_components/CheckoutComponent/Coupon";
import AddedProducts from "../components/ui_components/CheckoutComponent/AddedProducts";
import MI from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from "@react-navigation/native";
import { getStoreData } from "../Storage/AsyncStorage";
import { useDispatch } from "react-redux";
const {width, height}=Dimensions.get("screen")
export default function Checkout(){
  var dispatch=useDispatch()
    const [refresh, setRefresh]=useState()
    const [login, setLogin]=useState(null)
    const checkUser=async()=>{
     var log=await getStoreData("login")
      setLogin(log)
      }
     useEffect(function(){
        checkUser()
     },[])
    var navigation=useNavigation()
    var cart=useSelector(state=>state.products)
  var cartitems=Object.keys(cart).length
  var cartlist=Object.values(cart)
  var ta=cartlist.reduce(totalOfferPrice,0)
  function totalOfferPrice(a, b){
   price=b.offer>0?b.offer*b.qty:b.rate*rate
   return(a+price)
  }
  var total=cartlist.reduce(totalAmount,0)
  function totalAmount(a, b){
   price=b.offer>0?b.rate*b.qty:b.rate*rate
   return(a+price)
  }
 const handlePayment=async()=>{
  if(login==null)
  navigation.navigate("PhoneNumberDialog")
  else
 await makePayment()
 }
 const makePayment=async()=>{
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: "rzp_test_GQ6XaPC6gMPNwH", // Your api key
      amount: ta*100,
      name: login?.username,
      prefill: {
        email:login?.emailid,
        contact: login?.mobileno,
        name: 'Razorpay Software'
      },
      theme: {color: '#F37254'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
      dispatch({type:"CLEAR_CART", payload:[]})
      navigation.navigate("Home")
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  


  }
  

    return(
        <View style={{ backgroundColor:"#EDE4E3", alignItems:"center"}}>
            <View>
            <CheckoutHeading/></View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginVertical:12}}>
            <AddedProducts refresh={refresh} setRefresh={setRefresh} cartlist={cartlist} cartitems={cartitems}/></View>
            <View style={{marginBottom:12}}>
            <Coupon/></View>
            <View style={{marginBottom:12}}>
            <BillDetails total={total} ta={ta}/></View>
            <View style={{marginBottom:12}}>
                <Donation/>
            </View>
            <View style={{marginBottom:12}}>
                <DeliveryInstructions/>
            </View>
            <View>
                <DeliveryTip/>
            </View>
            <View style={{flexDirection:"column", marginBottom:100, marginTop:10, justifyContent:"center", alignItems:"flex-start", width:width*.95, borderRadius:15, backgroundColor:"#fff", padding:10}}>
            {login?
            <View>
            <View>
                <Text style={{color:"#00478F", fontSize:15, fontWeight:"600"}}><Text style={{color:"#F41F4E", fontSize:15}}>Name:</Text>{" "}{login?.username}</Text>
            </View>
            <View>
                <Text style={{color:"#00478F", fontSize:15, fontWeight:"600"}}><Text style={{color:"#F41F4E", fontSize:15}}>Mobile No.:</Text>{" "}+91{login?.mobileno}</Text>
            </View>
            <View style={{marginBottom:10}}>
                <Text style={{color:"#00478F", fontSize:15, fontWeight:"600"}}><Text style={{color:"#F41F4E", fontSize:15}}>Address:</Text>{" "}{login?.addressone}, {login?.city}, {login?.pincode}, {login?.state} ({login?.addressstatus}).</Text>
            </View></View>:<></>}
            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
            <MI size={35} color={"#278ED5"} name={"payment"}/> 
            <Button onPress={handlePayment} w={0.8} color={"#0F1E64"} h={0.055} backgroundColor={"#e4e1ff"} label={login?'PLACE ORDER':"PROCEED TO CONTINUE"}  fontSize={15} borderColor={"#04D010"}/></View></View>
            </ScrollView>
            </View>
            
    )
}