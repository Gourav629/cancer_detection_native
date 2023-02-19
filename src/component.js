import * as React from 'react';
import { TouchableOpacity,Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import BloodData from './blood_data';
import * as ImagePicker from 'expo-image-picker';


export default function MyComponent (props){
    const d = "The primary objective of blood cancer treatment is the complete eradication of cancer. Several therapies are provided by blood cancer hospital in India for this disease. A few of them are Bone Marrow Transplantation - This is typically a procedure to replace damaged or destroyed bone marrow with healthy bone marrow stem cells. Max Healthcare’s HEPA (High-Efficiency Particulate Air) filtered Bone Marrow Transplant unit offers stem cell transplantation for both benign and malignant conditions in children and adults."
const [image, setImage] = React.useState(null)
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
    

    return(
    <TouchableOpacity onPress={PickImage} style={{justifyContent:'center',alignItems:'center'}}>
        {image?<BloodData data={image} txt={d}/>:<Avatar.Icon size={200} icon="folder" />}
    </TouchableOpacity>
);
}