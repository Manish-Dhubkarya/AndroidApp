import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Button from '../ButtonComponent/Button';
import {useState} from 'react';

const {width,height}=Dimensions.get('screen')

export default function PlusMinusButton(props){
  const [values, setValues] = useState(props.qty);
  const btnplus = () => {
    if (values < 5) {
      setValues(prev => prev + 1);
      props.onChange(values+1);
    }
  };
  const btnminus = () => {
    if (values > 0) {
      setValues(prev => prev - 1);
      props.onChange(values-1);
    }
  };
  return (
    <>
      {!values ? (
        <Button
          onPress={() => {
            btnplus();
          }}
          w={0.17} color={"#00AA26"} h={0.045} backgroundColor={"#e9ffed"} label={'ADD'}  fontSize={15} borderColor={"#5C00FD"}
        />
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center', padding:5}}>
          <TouchableOpacity
            onPress={() => {
              btnminus();
            }}
            style={{
              width: width * 0.06,
              backgroundColor: '#e9ffed',
              height: height*.045,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderWidth:2,
              borderColor:"#5C00FD"
            }}>
            <Text style={{color:'#00AA26', fontWeight:"bold", fontSize:15}}>—</Text>
          </TouchableOpacity>
          <View
            style={{
              width: width * 0.05,
              backgroundColor:'#fff',
              height: height*.045,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderColor: '#5C00FD',
              borderTopWidth: 2,
              borderBottomWidth:2,

            }}>
            <Text style={{color:"#f9a906", fontSize:20, fontWeight:"bold"}}>{values}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              btnplus();
            }}
            style={{
              width: width * 0.06,
              backgroundColor: '#e9ffed',
              height: height*.045,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderColor: '#5C00FD',
              borderWidth: 2.2,
            }}>
            <Text style={{color:'#00AA26', fontWeight:"bold", fontSize:20}}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
