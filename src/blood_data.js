import { View, Text,Image } from 'react-native'
import React from 'react'

export default function BloodData(props) {
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image source={{ uri: props.data }} style={{ width: 250, height: 220 }} resizeMode={'contain'}/>
    <Text style={{marginVertical:20, fontStyle:'italic', fontSize:14, fontWeight:'bold'}}>{props.txt}</Text>
    </View>
    )
}