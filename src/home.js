import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react'
import { Button, Platform, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-paper';
import BloodData from './blood_data';

export default function Home(props){
  const d = "Treatment for a brain tumor depends on whether the tumor is a brain cancer or if it's not cancerous, also called a benign brain tumor. Treatment options also depend on the type, size, grade and location of the brain tumor. Options might include surgery, radiation therapy, radiosurgery, chemotherapy and targeted therapy. When considering your treatment options, your health care team also considers your overall health and your preferences. Treatment might not be needed right away. You might not need treatment right away if your brain tumor is small, isn't cancerous and doesn't cause symptoms. Small, benign brain tumors might not grow or might grow so slowly that they won't ever cause problems. You might have brain MRI scans a few times a year to check for brain tumor growth. If the brain tumor grows more quickly than expected or if you develop symptoms, you might need treatment."

  const [image, setImage] = useState(null)
    const PickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.All,
          allowsEditing:true,
          // aspect:[1,1],
          quality:1
        })
        console.log("sdsads",result.assets[0]);
        if (!result.canceled) {
          setImage(result.assets[0].uri);
          // upload(result.assets[0]);
          // console.log(result.assets[0]);
        }
      }
    


    return (
      <TouchableOpacity onPress={PickImage} style={{justifyContent:'center',alignItems:'center'}}>
        {image?<BloodData data={image} txt={d}/>:<Avatar.Icon size={200} icon="folder" />}
    </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


//   export default function ImageViewer({ placeholderImageSource, selectedImage }) {
//     const imageSource = selectedImage !== null
//       ? { uri: selectedImage }
//       : placeholderImageSource;
  
//     return <Image source={imageSource} style={styles.image} />;
//   }