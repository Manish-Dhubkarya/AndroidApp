import React, { useEffect, useState } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer"
import Home from '../Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, Alert } from 'react-native';
import ProductDetails from '../Screens/ProductDetails';
import AD from "react-native-vector-icons/AntDesign"
import FA from "react-native-vector-icons/FontAwesome"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from '../components/ui_components/AppHeader/AppHeader';
import PhoneNumberDialog from '../components/ui_components/DialogComponent/PhoneNumberDialog';
import { useNavigation } from '@react-navigation/native';
import Checkout from '../Screens/Checkout';
import { removeStoreData } from '../Storage/AsyncStorage';
import { getStoreData } from '../Storage/AsyncStorage';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  // var navigation = useNavigation()
    
  function Logout() {
    return (
      <View>

        {!login ?
          Alert.alert('User Already Logout, please login to continue!') :
          Alert.alert(
            'Confirmation',
            'Are you sure you want to Logout?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: async() => {
                  removeStoreData("login")
                  // Handle the confirmation here
                  Alert.alert("User Logout Successfully!")
                  // navigation.navigate("Home")
                  var log = await getStoreData("login")
                  setLogin(log)
                },
              },
            ]
          )}
      </View>)
  }
  const [login, setLogin] = useState("")
  const checkUser = async () => {
    var log = await getStoreData("login")
    setLogin(log)
  }




  useEffect(function () {
    checkUser()
  }, [])
  const ProjectDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} options={{
          headerShown: false,
          drawerIcon: () => <FA color={"#1083EF"} name={"home"} size={24} />
        }} />

         <Drawer.Screen name="Log in/ Sign in" component={PhoneNumberDialog} options={{headerShown: false,drawerIcon: () => <AD color={"#4FDF03"} name={"login"} size={24} />}} />
        <Drawer.Screen name="Logout" component={Logout} options={{
          headerShown: false,
          drawerIcon: () => <AD color={"#F82C12"} name={"logout"} size={24} />
        }} />
      </Drawer.Navigator> 
    );
  };
  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image style={{ borderRadius: 25, margin: 5, resizeMode: "contain", width: 50, height: 50 }}
              source={require("../../Assets/User.jpg")}></Image>
            <Text style={{ fontSize: 17, fontWeight: "bold", margin: 2, color: "#0066ff" }}>{login?.username}</Text>
            <Text style={{ fontSize: 14, margin: 2, color: "#ff5cd6" }}>{login?.emailid}</Text>
          </View>
        </View>
        <DrawerItemList {...props}>
          <DrawerItem
            label="My Profile"
            icon={() => <MCI name={"account-box"} size={24} />}
          >
          </DrawerItem>
          <DrawerItem
            label="Settings"
            icon={() => <MCI name={"account-setting"} size={24} />}
          >
          </DrawerItem>
        </DrawerItemList>
      </DrawerContentScrollView>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home1'}
      >
        <Stack.Screen name="Home1" component={ProjectDrawer} options={{ header: AppHeader }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ header: AppHeader }} />
        <Stack.Screen name="AppHeader" component={AppHeader} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneNumberDialog" component={PhoneNumberDialog} options={{ header: AppHeader }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}