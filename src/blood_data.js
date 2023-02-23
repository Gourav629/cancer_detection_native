import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BloodData(props) {
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={props.fun} style={{borderRadius:50}}>
    <Image source={{ uri: props.data }} style={{ width: 250, height: 220,borderRadius:15 }} resizeMode={'contain'}/>
    </TouchableOpacity>
    <Text style={{marginVertical:20, fontStyle:'italic', fontSize:14, fontWeight:'bold'}}>{props.txt.head}</Text>
    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
      <Text style={{color:'red', fontSize:42}}>{props.txt.Confidence} % {props.txt.class}</Text>
    </View>
    <Text style={{marginVertical:20, fontStyle:'italic', fontSize:14, fontWeight:'bold'}}>{props.txt.Text}</Text>
    </View>
    )
}