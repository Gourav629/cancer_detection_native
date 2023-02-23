import React,{useState} from 'react'
import { StyleSheet,View,SafeAreaView,Text} from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import Home from './src/home';
import MyComponent from './src/component';

export default function App() {
  const [toggle, setToggle] = useState(false)
  const options =[
    { label: "Blood", value: false},
    { label: "Brain", value: true}
 ];

  return(
    <SafeAreaView style={{backgroundColor:'#ffff99',paddingTop:100,flex:1}}>
    <SwitchSelector
               initial={0}
                  onPress={value=>setToggle(value)}
                  textColor={'#fff'}
                  selectedColor={'#7a44cf'}
                  bold
                  backgroundColor={'#ff6666'}
                  buttonColor={'#ffff99'}
                  borderColor={'#ccc'}
                  hasPadding
                  options={options}
            />
    <View style={{marginHorizontal:20, marginVertical:50}}>
      {toggle?<Home />:<MyComponent />}
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

