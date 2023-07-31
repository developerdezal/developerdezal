
import React, { useState } from 'react'

import {KeyboardAvoidingView, Platform, TouchableOpacity,Text} from 'react-native'
import InputText from '../components/InputText'
import Colors from '../config/Colors';


const Register = () => {

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
      placeholder= 'Phone Number'

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='phone' />


<InputText
           onFocus={handleFocus}
           onBlur={handleBlur}

           autoCapitalize='none'
           autoCorrect={false}
      placeholder='Email Id'

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='email' />

     
     <InputText 
     placeholder='Password'
     autoCapitalize='none'
     autoCorrect={false}
      secureTextEntry={true}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='lock' />


<InputText placeholder= 'Name of the Outlet'
autoCapitalize='none'
autoCorrect={false}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='assignment' />


<InputText placeholder='Sap Code'


onFocus={handleFocus}

onBlur={handleBlur}
autoCapitalize='none'
autoCorrect={false}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='qr-code' />







<TouchableOpacity style={{width:'100%',backgroundColor:'white',height:50,justifyContent:'center',alignItems:'center',borderRadius:25,marginTop:20,borderColor:Colors.primary,borderWidth:2,}}>
 <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Sign Up</Text>
</TouchableOpacity>


  </KeyboardAvoidingView>
  
  )
}

export default Register