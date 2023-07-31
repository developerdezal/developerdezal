import * as React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Register from './Register';
import Splashscreen from './Splashscreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    
    
    <NavigationContainer>
<Stack.Navigator initialRouteName="Splashscreen">
       <Stack.Screen name="Splashscreen" component={Splashscreen} 
        options={{ headerShown: false }}
        /> 
        <Stack.Screen name="HomeScreen" component={Home} 
         options={{ headerShown: false }}
        />
         <Stack.Screen name="RegisterScreen" component={Register} 
         options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}