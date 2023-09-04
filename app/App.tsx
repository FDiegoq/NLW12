import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'; 
import {BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'; 

export default function App(){
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  if (!hasLoadedFonts){
    return null
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <StatusBar translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"#fff",
    fontWeight:'bold',
    fontSize: 48,

  },
});
