import { View, Image, Button, Text } from 'react-native'
import React from 'react'


const Splashscreen = ({navigation}) => {

  setTimeout(() => {
    navigation.replace('HomeScreen')
  }, 3000);
  
  return (
   
    <View style={{flex:1,justifyContent: 'center',alignItems:'center',backgroundColor:'white'}}>
  
<Image source={require('../assets/img/logo.jpg')} style={{height: 100,width:160,resizeMode: "stretch" }} />



<Text >Welcome to React Native</Text>
    </View>
  )
}

export default Splashscreen