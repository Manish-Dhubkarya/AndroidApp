import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, TouchableOpacity, Dimensions, StyleSheet, TextInput, Alert, Modal } from "react-native"
import MI from "react-native-vector-icons/MaterialIcons"
import { useSelector } from "react-redux";
import PutAddress from "./PutAddress";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { postData } from "../../../Services/FetchNodeServices";
import { getStoreData, storeData } from "../../../Storage/AsyncStorage";
const { width, height } = Dimensions.get("screen")
export default function OTPDialog({ setModalVisible, modalVisible, setShow, show, mobileNo,...props }) {
  const [refresh, setRefresh] = useState(false)
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  var cart = useSelector(state => state.products)
  var cartitems = Object.keys(cart).length
  var navigation = useNavigation()
  var dispatch = useDispatch()
  const [OtpVisible, setOtpVisible] = useState(false)
  const [showOtp, setShowOtp] = useState(true)
  const [OOTP, setOOTP] = useState("")
  const [otp, setOtp] = useState("")
  const [firstDigit, setFirstDigit] = useState("")
  const [secondDigit, setSecondDigit] = useState("")
  const [thirdDigit, setThirdDigit] = useState("")
  const [fourthDigit, setFourthDigit] = useState("")
  const [counter, setCounter] = React.useState(40);
  var OTP = parseInt(Math.random() * 8999) + 1000
  const handleCode = () => {
    setOOTP(OTP)
    Alert.alert("Your 4 Digit OTP is " + OTP)
  }
  const Timer = () => {
    
    useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

      return () => clearInterval(timer);
    }, [counter]);

    return (
      <View style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} className="Timer">
        <Text> Resend Code in {counter} sec</Text>
        {counter == 0 ?
          <TouchableOpacity
            onPress={handleCode}
            style={[styles.button, styles.buttonClose]}
          >
            <Text style={styles.textStyle}>Resend OTP</Text>
          </TouchableOpacity>
          : <></>}

      </View>
    );
  }
  const handleClick = () => {
    setModalVisible(!modalVisible)
    setShow(!show)
    Alert.alert('Enter your mandatory info again, you are going back...!');
  }
  const generateOtp = () => {
    var otp = parseInt(Math.random() * 8999) + 1000;
    setOtp(otp)
    Alert.alert("Your 4 digit OTP is " + otp)
  }
  const [login, setLogin] = useState(null)
  const checkUser = async () => {
    var log = await getStoreData("login")
    setLogin(log)
  }
  useEffect(function () {
    checkUser()
  }, [])
  const handleSubmit = async () => {
    var iotp = firstDigit + secondDigit + thirdDigit + fourthDigit;
    if (counter == 0 ? OOTP == iotp : otp == iotp) {
      var result = await postData("userInterface/check_mobileno", { mobileno: mobileNo })
      if (result.status) {
        var res = await postData("userInterface/check_address_by_mobileno", { mobileno: mobileNo })
        if (res.status) {
          dispatch({ type: "ADD_USER", payload: [res.data[0]] })
          await storeData('login', res.data[0])
          setOtpVisible(!OtpVisible)
          Alert.alert("User Login Successfully!")
          
          {
            cartitems >= 1 ?
              navigation.navigate("Checkout") :
              navigation.navigate("Home")
              var log = await getStoreData("login")
              setLogin(log)
          }
        }
        else {
          setOtpVisible(!OtpVisible)
          setShowOtp(!showOtp)
        }
      }
      else {
        setOtpVisible(!OtpVisible)
      }
    }
    else {
      Alert.alert("Invalid OTP, Please Enter Your OTP Again Or Resend It!")
    }
  }
  useEffect(function () {
    generateOtp()
  }, [])
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={OtpVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
          setShow(!show)
          Alert.alert('Enter your mobile number again, you are going back to sign in page...!');

        }}>
        <PutAddress mobileNo={mobileNo} setShow={setShow} show={show} setModalVisible={setModalVisible} modalVisible={modalVisible} />
      </Modal>
      {showOtp ?
        <View style={styles.modalView}>
          <View style={{ width: width * .75, alignItems: "flex-start" }}>
            <Pressable onPress={handleClick}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MI color={"#00D100"} size={20} name={"arrow-back-ios"} />
                <Text style={styles.BottomText3}>Back</Text>
              </View>
            </Pressable>
          </View>
          <Text style={styles.headingText}>OTP Verification</Text>
          <Text style={styles.modalText}>Enter OTP send to your phone {`+91XXXXXX${mobileNo.substring(6)}`}</Text>
          <View style={{ flexDirection: "row", padding: 15, justifyContent: "space-between", width: width * .7 }}>
            <View style={styles.OtpBox}>
              <TextInput ref={ref_input1} returnKeyType={"next"} onTextInput={() => { firstDigit.length == 1 ? ref_input2.current?.focus() : false, firstDigit.length == 0 ? ref_input1.current?.focus() : false }} autoFocus={true} maxLength={1} onChangeText={(txt) => setFirstDigit(txt)} style={styles.OtpTextStyle} />
            </View>
            <View style={styles.OtpBox}>
              <TextInput ref={ref_input2} onTextInput={() => { secondDigit.length == 1 ? ref_input3.current?.focus() : false, secondDigit.length == 0 ? ref_input1.current?.focus() : false }} returnKeyType={"next"} maxLength={1} onChangeText={(txt) => setSecondDigit(txt)} style={styles.OtpTextStyle} />
            </View>
            <View style={styles.OtpBox}>
              <TextInput ref={ref_input3} onTextInput={() => { thirdDigit.length == 1 ? ref_input4.current?.focus() : false, thirdDigit.length == 0 ? ref_input2.current?.focus() : false }} maxLength={1} onChangeText={(txt) => setThirdDigit(txt)} style={styles.OtpTextStyle} />
            </View>
            <View style={styles.OtpBox}>
              <TextInput ref={ref_input4} onTextInput={() => { fourthDigit.length == 0 ? ref_input3.current?.focus() : false, fourthDigit.length == 1 ? ref_input4.current?.focus() : false }} maxLength={1} onChangeText={(txt) => setFourthDigit(txt)} style={styles.OtpTextStyle} />
            </View>
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.button, styles.buttonClose]}
          >
            <Text style={styles.textStyle}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.BottomText1}>{Timer()}</Text>
        </View> : <></>}
    </View>
  )
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    marginTop: width * .1,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
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
    marginTop: 10
  },
  buttonClose: {
    elevation: 5,
    backgroundColor: '#2196F3',
  },
  BottomText3: {
    fontWeight: "600",
    color: "#00D100",
    fontSize: 18
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
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    color: "#A16AE8",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "italic"
  },
  OtpTextStyle: {
    paddingVertical: 5,
    paddingLeft: 16.5,
    fontSize: 20,
    color: "#000"
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