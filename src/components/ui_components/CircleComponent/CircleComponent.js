import {View, ScrollView, FlatList, Image, Text } from "react-native"
import { serverURL } from "../../../Services/FetchNodeServices"
export default function CircleComponent(props){
  
    var colors=["#d3952c", "#28bfd7", "#b826d9", "#37c4c8", "#b7aa48", "#b347b8", "#ba454a", "#B4FEE7", "#C197D2", "#F1E488"]
    const ShowCategory=({item})=>{
     return(
        <View style={{marginVertical:5, flexDirection:"column", alignItems:"center", justifyContent:"center", height:120}}>
        <View style={{marginHorizontal:5, flexDirection:"column", alignItems:"center", justifyContent:"center", width:90, height:90, borderRadius:45, backgroundColor:colors[parseInt(Math.random()*4)]}}>
         <Image style={{width:60, height:60, resizeMode:'contain'}} source={{uri:`${serverURL}/images/${item.icon}`}} />
        </View>
        <Text style={{padding:7, fontWeight:700, fontSize:12, color:"#000"}}>{item.subcategoryname}</Text>
        </View>
     )
    }
    return(
      <View style={{height:130}}>
        <ScrollView>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={({item}) => <ShowCategory item={item} />}
        key={"#"}
  keyExtractor={item=>"#" + item.id}
      />
        </ScrollView>
        </View>
    )
}