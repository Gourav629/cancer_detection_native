import React,{useState,useEffect} from 'react'
import { View} from 'react-native';
import BloodData from './blood_data';
import * as ImagePicker from 'expo-image-picker';
import Ava from './Ava';
import axios from 'axios';



export default function MyComponent (props){
  const [da,setda] = useState({})

  
  useEffect(() => {
    console.log("==================== UseEffect ==============================");
    console.log(da);
    console.log("==================== UseEffect ==============================");
  }, [da])
  
  const d = "The primary objective of blood cancer treatment is the complete eradication of cancer. Several therapies are provided by blood cancer hospital in India for this disease. A few of them are Bone Marrow Transplantation - This is typically a procedure to replace damaged or destroyed bone marrow with healthy bone marrow stem cells. Max Healthcare’s HEPA (High-Efficiency Particulate Air) filtered Bone Marrow Transplant unit offers stem cell transplantation for both benign and malignant conditions in children and adults."

    const upload = (pickedImage) => {
      var form = new FormData();
      console.log("================ Universal Img===================");
      console.log(image);
      let data = {
        name: "IMAGE.jpg",
        type: 'image/jpg',
        uri:Platform.OS === 'ios'
        ? pickedImage.uri.replace('file://', '')
        : pickedImage.uri,
      };
      form.append('file',data);
      var config = {
          method: 'post',
          url: 'http://192.168.43.226:5000/blood',
          headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
          },
          data: form,
      };
      axios(config)
          .then((response) => {
              if(response)
              console.log("======================= Response =============================");
              console.log(JSON.stringify(response.data));
            setda(response.data);

          })
          .catch((error) => {
            console.log("========================== Error ===============================");
              console.log(error);
          });
    }



    const [image, setImage] = React.useState(null)
    const PickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.All,
          allowsEditing:true,
          quality:1
        })
        console.log("sdsads",result.assets[0]);
        if (!result.canceled) {
          setImage(result.assets[0].uri);
          upload(result.assets[0]);
          console.log("======================= Components ==================================")
          console.log(result.assets[0]);
        }
      }
    

    return(
    <View style={{justifyContent:'center',alignItems:'center'}}>
        {image?<BloodData data={image} txt={da} fun={PickImage}/>:<Ava fun={PickImage}/>}
    </View>
);
}