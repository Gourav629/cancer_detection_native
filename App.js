import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Image ,SafeAreaView, TouchableOpacity, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import SwitchSelector from "react-native-switch-selector";
import Home from './src/home';
import MyComponent from './src/component';

export default function App() {
  const [formimg,setImage] = useState(null);
  const [toggle, setToggle] = useState(false)


  const options =[
    { label: "Blood", value: false},
    { label: "Brain", value: true}
 ];

//   fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     file: image,
//   }),
// });


// if (response?.assets) {
//   let data = {
//     name: response?.assets[0].fileName,
//     type: response?.assets[0].type,
//     uri:
//       Platform.OS === 'ios'
//         ? response?.assets[0].uri.replace('file://', '')
//         : response?.assets[0].uri,
//   };
//   console.log({data});
//   props.onSelectImage && props.onSelectImage(data);
//   setTimeout(() => {
//     props.onClose();
//   }, 1000);
// }






const upload = (pickedImage) => {
  var form = new FormData();
  // https://youtu.be/Q9WMfd96qVo
  console.log({pickedImage});
  console.log("================ Universal Img===================");
  console.log(formimg);
  let data = {
    // name: img.fileName,
    name: "IMAGE.jpg",
    // type: img.type,
    type: 'image/jpg',
    uri:Platform.OS === 'ios'
    ? pickedImage.uri.replace('file://', '')
    : pickedImage.uri,
  };
  form.append('file',data);
  var config = {
    
      method: 'post',
      url: 'http://192.168.43.226:5000/brain',
      headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
      },
      data: form,
  };
  console.log("=======================================================================");
  console.log({config});
  console.log("=======================================================================");
  axios(config)
      .then((response) => {
          if(response)
          console.log("======================= Response =============================");
          console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("========================== Error ===============================");
          console.log(error);
      });
}


  return(
    <SafeAreaView style={{backgroundColor:'#ffff99',paddingTop:100,flex:1}}>
    <SwitchSelector
               initial={0}
                  onPress={value=>setToggle(value)}
                  textColor={'#ccceeaa'}
                  selectedColor={'#7a44cf'}
                  bold
                  backgroundColor={'#ff6666'}
                  buttonColor={'#ffff99'}
                  borderColor={'#ccc'}
                  hasPadding
                  options={options}
            />
    <View style={{marginHorizontal:20, marginVertical:50}}>
      {toggle?<Home />:<MyComponent/>}
      </View>
    </SafeAreaView>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

