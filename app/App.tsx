import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'; 
import {BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'; 

import luz from '../app/src/assets/luz.svg'

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
    <View>
      <ImageBackground source={luz}>

      <Text >RocketSeat</Text>
      <StatusBar style='light' translucent/>
      </ImageBackground>

    </View>
  );
}


