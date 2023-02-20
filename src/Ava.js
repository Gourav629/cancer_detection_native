import {TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';


export default function Ava(props) {
  return (
    <TouchableOpacity onPress={props.fun}>
    <Avatar.Icon size={200} icon="folder" />
    </TouchableOpacity>
  )
}