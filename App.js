
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './navigation/Navigator';
import { NativeBaseProvider} from "native-base";
import Colors from './config/Colors';
import { StyleSheet } from 'react-native';
export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView  style={styles.container}>       
    <Navigator /> 
    </SafeAreaView>
    </NativeBaseProvider> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.primary,
  },

});