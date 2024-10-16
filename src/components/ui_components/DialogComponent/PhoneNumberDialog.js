import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, Modal, Alert, TouchableOpacity} from 'react-native';
import InputText from '../TextField/InputText';
import OTPDialog from './OTPDialog';
import { getStoreData } from '../../../Storage/AsyncStorage';
const {width, height}=Dimensions.get("screen")
export default function PhoneNumberDialog(){
  const [mobileNo, setMobileNo]=useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [show, setShow]=useState(true)
  const [login, setLogin]=useState(null)
    const checkUser=async()=>{
     var log=await getStoreData("login")
      setLogin(log)
      }
     useEffect(function(){
        checkUser()
     },[])
  const handleClick=()=>{
    if(login)
    {
    Alert.alert("You are already login, please logout first to login again!")}
    else
    {
    setModalVisible(!modalVisible)
    setShow(!show)}
  }
  return (
    <View style={styles.centeredView}>
   <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
          setShow(!show)
          Alert.alert('Enter your mobile number again, you are going back to sign in page...!');
          
        }}>
      <OTPDialog mobileNo={mobileNo} setShow={setShow} show={show} setModalVisible={setModalVisible} modalVisible={modalVisible}/>
    </Modal>
      {show?
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <Text style={styles.headingText}>Sign In</Text>
          <Text style={styles.textStyleThree}>Mandatory *</Text>
          <InputText onChangeText={(txt)=>setMobileNo(txt)} iconSize={25} borderRadius={10} fontSize={16} h={50} textWidth={width*.4} text={"+91"} inputMode={"tel"} icon={"cellphone-text"} w={.65}  placeholder="Mobile No."/>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleClick}>
              <Text style={styles.textStyle}>Get OTP</Text>
            </TouchableOpacity>
            <Text style={styles.BottomText1}>By Continuing, you agree to our</Text>
            <View style={{flexDirection:"row", justifyContent:"space-evenly", width:width*.6}}>
            <Text style={styles.BottomText2}>Terms of services</Text>
            <Text style={styles.BottomText2}>Privacy policy</Text></View>

          </View>
        </View>:<></>}
        </View>
  );
};

const styles = StyleSheet.create({

  BottomText1:{
    paddingTop:15,
    fontWeight:"600",
  },
  BottomText2:{
    textDecorationLine:"underline",
    paddingTop:5,
    fontWeight:"600",
    color:"#00D100"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText:{
   fontSize:20,
   fontWeight:"bold",
   fontStyle:"italic",
   color:"#ff7400",
  },
  textStyleThree:{
    color:"#ff00ac", 
    fontWeight:"700", 
    letterSpacing:1, 
    alignItems:"flex-start", 
    width:240, 
    marginTop:10
  },
  textStyleTwo:{
    color:"#868B8E", 
    fontWeight:"700", 
    letterSpacing:1, 
    alignItems:"flex-start", 
    width:240, 
    marginTop:10
  },
  modalView: {
    marginBottom:width*.1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems:"center",
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
    marginTop:10
  },
  buttonClose: {
    elevation:5,
    backgroundColor: '#2196F3',
  },  
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal:15
  },
});