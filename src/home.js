import React,{useState,useEffect} from 'react'
import { Button, Platform, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import BloodData from './blood_data';
import axios from 'axios';

import Ava from './Ava';

export default function Home(props){
  const [Load, setLoad] = useState(null)
  const [da,setda] = useState({})

  useEffect(() => {
    console.log("==================== UseEffect ==============================");
    console.log(da);
    console.log("==================== UseEffect ==============================");
  }, [da])
  


  const d = "Treatment for a brain tumor depends on whether the tumor is a brain cancer or if it's not cancerous, also called a benign brain tumor. Treatment options also depend on the type, size, grade and location of the brain tumor. Options might include surgery, radiation therapy, radiosurgery, chemotherapy and targeted therapy. When considering your treatment options, your health care team also considers your overall health and your preferences. Treatment might not be needed right away. You might not need treatment right away if your brain tumor is small, isn't cancerous and doesn't cause symptoms. Small, benign brain tumors might not grow or might grow so slowly that they won't ever cause problems. You might have brain MRI scans a few times a year to check for brain tumor growth. If the brain tumor grows more quickly than expected or if you develop symptoms, you might need treatment."
  // const [formimg,setImageForm] = useState(null);

  const upload = (pickedImage) => {
    var form = new FormData();
    // https://youtu.be/Q9WMfd96qVo
    console.log({pickedImage});
    console.log("================ Universal Img===================");
    console.log(image);
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
            console.log("======================= Response 2 =============================");
            setda(response.data);
        })
        .catch((error) => {
          console.log("========================== Error ===============================");
            console.log(error);
        });
  }

  const [image, setImage] = useState(null)
    const PickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.All,
          allowsEditing:true,
          quality:1
        })
        console.log("sdsads :-- ",result.assets[0]);
        if (!result.canceled) {
          setImage(result.assets[0].uri);
          upload(result.assets[0]);
          console.log("======================= Home ==================================")
          console.log(result.assets[0]);
        }
      }
    


    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
        {image?<BloodData data={image} txt={da} fun={PickImage}/>:<Ava fun={PickImage}/>}
    </View>
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