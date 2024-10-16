import {Text, StyleSheet, Button, View, Dimensions, TextInput} from 'react-native';
const {width, height}=Dimensions.get('screen')
export default styles = StyleSheet.create({
    textStyle:{
     fontWeight:"bold", letterSpacing:2, fontSize:23, 
    },
    box:{
     padding:10,  width:width*.5, height:height*.3, backgroundColor:"#fff"
    }
    });