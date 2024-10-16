import React, { useState } from "react";
import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import FI from "react-native-vector-icons/Fontisto"
import OI from "react-native-vector-icons/Octicons"
const {width, height} = Dimensions.get("screen")

export default function DeliveryTip() {
    const [tipBox, setTipBox] = useState(0)
    return (
        <View style={{ alignItems: "center" }}>
            <View style={{ width: width * .95, padding: 15, borderRadius: 15, alignItems: "flex-start", backgroundColor: "#fff" }}>
                <View style={{ alignItems: "flex-start", width: width * .75 }}>
                    <Text style={{ fontSize: 17, color: "#000", letterSpacing: 1, fontWeight: "bold", marginBottom: 4 }}>Tip your delivery partner</Text>
                    <Text style={{ fontSize: 14, letterSpacing: .2, color:"#000" }}>Your Kindness means a lot! 100% of your will go directly to your delivery partner.</Text>
                    <View style={{ flexDirection: "row", width: width * .875, justifyContent: "space-between", marginTop: 15 }}>
                        <TouchableOpacity onPress={() => setTipBox(1)}>
                            <View style={{ elevation: tipBox==1? 4 : 1.5, padding: 10, alignItems: "center", justifyContent: "space-between", flexDirection: "row", borderWidth: 1.5, borderColor: tipBox == 1 ? "orange" : "#fff", borderRadius: 10, width: width * .21, backgroundColor: "#fff" }}>
                                <FI style={{ color: "#595E60", backgroundColor: "#FFE019", borderRadius: 20 }} size={22} name="slightly-smile" />
                                <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>₹10</Text>
                            </View>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => setTipBox(2)}>
                            <View style={{ elevation: tipBox==2 ? 4 : 1.5, padding: 10, alignItems: "center", justifyContent: "space-between", flexDirection: "row", borderWidth: 1.5, borderColor: tipBox == 2 ? "orange" : "#fff", borderRadius: 10, width: width * .21, backgroundColor: "#fff" }}>
                                <OI style={{ color: "#595E60", backgroundColor: "#FFE019", borderRadius: 20 }} size={22} name="smiley" />
                                <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>₹25</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setTipBox(3)}>
                            <View style={{ elevation: tipBox==3 ? 4 : 1.5, padding: 10, alignItems: "center", justifyContent: "space-between", flexDirection: "row", borderWidth: 1.5, borderColor: tipBox == 3 ? "orange" : "#fff", borderRadius: 10, width: width * .21, backgroundColor: "#fff" }}>
                                <FI style={{ color: "#595E60", backgroundColor: "#FFE019", borderRadius: 20 }} size={22} name="smiley" />
                                <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>₹50</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setTipBox(4)}>
                            <View style={{ elevation: tipBox==4 ? 4 : 1.5, padding: 10, alignItems: "center", justifyContent: "space-between", flexDirection: "row", borderWidth: 1.5, borderColor: tipBox == 4 ? "orange" : "#fff", borderRadius: 10, width: width * .21, backgroundColor: "#fff" }}>
                                <MCI style={{ color: "#595E60", backgroundColor: "#FFE019", borderRadius: 20 }} size={22} name="hand-clap" />
                                <Text style={{ color: "#000", fontSize: 11, fontWeight: "bold" }}>Custom</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}