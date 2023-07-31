
import React, { useState } from 'react'

import {KeyboardAvoidingView, Platform, TouchableOpacity,Text} from 'react-native'
import InputText from '../components/InputText'
import Colors from '../config/Colors';
import { HStack, Link } from 'native-base';
import EmoplyeLoginButton from '../components/EmoplyeLoginButton';


const Home = ({navigation}) => {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    
   
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:'11%'}}>

    
   <InputText
           onFocus={handleFocus}
           onBlur={handleBlur}

           autoCapitalize='none'
           autoCorrect={false}
      placeholder={isFocused ? '' : 'Email or Phone Number'}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='email' />
     
     <InputText 
     placeholder={isFocused ? '' : 'Password'}

     
     onFocus={handleFocus}
     onBlur={handleBlur}
     autoCapitalize='none'
     autoCorrect={false}
      secureTextEntry={true}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='lock' />


<InputText placeholder={isFocused ? '' : 'Sap Code'}


onFocus={handleFocus}

onBlur={handleBlur}
autoCapitalize='none'
autoCorrect={false}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='qr-code' />

<TouchableOpacity 

style={{width:'100%',backgroundColor:'white',height:50,justifyContent:'center',alignItems:'center',borderRadius:25,marginTop:20,borderColor:Colors.primary,borderWidth:2,}}>
 <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Login</Text>
</TouchableOpacity>

<HStack mt="6" justifyContent="center">
            <Text  style={{fontSize: 16, fontWeight:'bold',fontWeight: 700}}>
              I'm a new user.{" "}
            </Text>
            <Text style={{
            color: Colors.primary,
            fontSize: 17,  
            fontWeight: 700   
          }} 
          onPress={()=>{navigation.navigate('RegisterScreen')}}
          >
              Create New Account
            </Text>
          </HStack>

<EmoplyeLoginButton />
  </KeyboardAvoidingView>
  
  )
}

export default Home