import React, { useState } from "react"
import { postData } from "../../../Services/FetchNodeServices"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { View, Text, Pressable, StyleSheet, Dimensions, Alert, TouchableOpacity } from "react-native"
import MI from "react-native-vector-icons/MaterialIcons"
import Dropdown from "../DropdownComponent/Dropdown"
import InputText from "../TextField/InputText"
import {storeData } from "../../../Storage/AsyncStorage"
import { useDispatch } from "react-redux"
const { width, height } = Dimensions.get("screen")
export default function PutAddress({ setModalVisible, mobileNo, modalVisible, setShow, show }) {
  var DDText1="Mr"
  var DDText2="Mrs"
  var DDText3="Miss"
  const [title, setTitle]=useState("")
   var navigation=useNavigation()
   var cart=useSelector(state=>state.products)
   var cartitems=Object.keys(cart).length
  const [tipBox, setTipBox] = useState(0)
  const [name, setName] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [pin, setPin] = useState("")
  const [mail, setMail] = useState("")
  var AddressStatus = (tipBox == 1 ? "Home" : tipBox == 2 ? "Office" : tipBox == 3 ? "Other" : '')
  const dispatch=useDispatch()
  const handleClick = () => {
    setModalVisible(!modalVisible)
    setShow(!show)
    Alert.alert('Enter your mandatory info again, you are going back to sign in page...!');
  }
  const handleSubmit = async () => {
    var body = {emailid: mail, mobileno: mobileNo, addressone: address1, addresstwo: address2, city: city, state: state, pincode: pin, username:title+" "+name, addressstatus: AddressStatus}
    var result = await postData("userInterface/add_address", body)
    if (result.status) {
      dispatch({ type: "ADD_USER", payload:body })
      await storeData('login', body)
      Alert.alert("User Login Successfully!")
      {cartitems>=1?
        navigation.navigate("Checkout"):
        navigation.navigate("Home")}
     }
     else{
       Alert.alert("Fail to Submit!")
      }
  }
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={{ width: width * .77, alignItems: "flex-start" }}>
          <Pressable onPress={handleClick}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MI color={"#00D100"} size={20} name={"arrow-back-ios"} />
              <Text style={styles.BottomText3}>Back</Text>
            </View>
          </Pressable>
        </View>
        <Text style={styles.headingText}>Enter Complete Details</Text>
        <Text style={styles.modalText}>This allow us to find easily and give you timely delivery experience!</Text>
        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <Dropdown Title={title==""?"Title":title} onPress2={()=>setTitle(DDText2)} onPress3={()=>setTitle(DDText3)} onPress1={()=>setTitle(DDText1)} w={.2} iconEnd={"arrow-drop-up"} iconEnd2={"arrow-drop-down"} DDText1={DDText1} DDText2={DDText2} DDText3={DDText3} />
            <InputText onChangeText={event => setName(event)} inputMode="email" w={.55} borderRadius={7} fontSize={14} textWidth={width * .47} h={45} placeholder={"Reciever's name"} />
          </View>
          <InputText onChangeText={event => setAddress1(event)} inputMode="email" w={.77} borderRadius={7} fontSize={14} textWidth={width * .7} h={45} placeholder={"Address 1"} />
          <InputText onChangeText={event => setAddress2(event)} inputMode="email" w={.77} borderRadius={7} fontSize={14} textWidth={width * .7} h={45} placeholder={"Address 2"} />
          <View style={{ flexDirection: "row" }}>
            <InputText onChangeText={event => setCity(event)} inputMode="email" w={.37} borderRadius={7} fontSize={14} textWidth={width * .33} h={45} placeholder={"City"} />
            <InputText onChangeText={event => setState(event)} inputMode="email" w={.37} borderRadius={7} fontSize={14} textWidth={width * .33} h={45} placeholder={"State"} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <InputText onChangeText={event => setPin(event)} inputMode="tel" w={.26} borderRadius={7} fontSize={14} textWidth={width * .23} h={45} placeholder={"Pin code"} />
            <InputText onChangeText={event => setMail(event)} inputMode="email" w={.48} borderRadius={7} fontSize={14} textWidth={width * .45} h={45} placeholder={"Email"} />
          </View>
          <View style={{ alignItems: "flex-start", width: width * .75 }}>
            <Text style={{ fontSize: 15, color: "#ecae13", marginTop: 5, fontWeight: "600" }}>Save Address As</Text>
            <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-evenly", width: width * .7 }}>
              <TouchableOpacity onPress={() => setTipBox(1)}>
                <View style={{ elevation: tipBox == 1 ? 4 : 1, backgroundColor: "#fff", width: 60, justifyContent: "center", alignItems: "center", height: 30, borderRadius: 5, borderColor: tipBox == 1 ? "#f7a008" : "#B9B7BD", borderWidth: 1.5 }}>
                  <Text style={{ color: "#0E86D4", fontSize: 17, fontWeight: "600" }}>Home</Text>
                </View></TouchableOpacity>
              <TouchableOpacity onPress={() => setTipBox(2)}>
                <View style={{ elevation: tipBox == 2 ? 4 : 1, backgroundColor: "#fff", width: 60, justifyContent: "center", alignItems: "center", height: 30, borderRadius: 5, borderColor: tipBox == 2 ? "#f7a008" : "#B9B7BD", borderWidth: 1.5 }}>
                  <Text style={{ color: "#0E86D4", fontSize: 17, fontWeight: "600" }}>Office</Text>
                </View></TouchableOpacity>
              <TouchableOpacity onPress={() => setTipBox(3)}>
                <View style={{ elevation: tipBox == 3 ? 4 : 1, backgroundColor: "#fff", width: 60, justifyContent: "center", alignItems: "center", height: 30, borderRadius: 5, borderColor: tipBox == 3 ? "#f7a008" : "#B9B7BD", borderWidth: 1.5 }}>
                  <Text style={{ color: "#0E86D4", fontSize: 17, fontWeight: "600" }}>Other</Text>
                </View></TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.button, styles.buttonClose]}
        >
          <Text style={styles.textStyle}>Save Address</Text>
        </TouchableOpacity>
      </View></View>
  )
}
const styles = StyleSheet.create({
  centeredView: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    marginTop: width * .15,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 5
  },
  buttonClose: {
    elevation: 5,
    backgroundColor: '#2196F3',
  },
  BottomText3: {
    fontWeight: "600",
    color: "#00D100",
    fontSize: 18,
    paddingVertical: 10
  },
  BottomText1: {
    paddingTop: 15,
    fontWeight: "600",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#ff7400",
  },
  modalText: {
    marginTop: 5,
    marginBottom: 15,
    textAlign: 'center',
    color: "#A16AE8",
    fontSize: 15,
    fontWeight: "600",
    fontStyle: "italic"
  },
  OtpTextStyle: {
    paddingVertical: 5,
    paddingLeft: 16.5,
    fontSize: 20
  },
  OtpBox: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#5CD85A",
    borderWidth: 2,
    width: width * .12,
    height: height * .06,
    fontSize: 10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 15
  },
})