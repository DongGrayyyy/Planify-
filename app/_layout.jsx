import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();

const MainLayout = () =>{

  const [fontsLoaded, error] = useFonts({
    "pblack": require("../assets/fonts/Poppins-Black.ttf"),
    "pbold": require("../assets/fonts/Poppins-Bold.ttf"),
    "pregular": require("../assets/fonts/Poppins-Regular.ttf"),
    "pextrabold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "pextralight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "plight": require("../assets/fonts/Poppins-Light.ttf"),
    "pmedium": require("../assets/fonts/Poppins-Medium.ttf"),
    "psemibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "pthin": require("../assets/fonts/Poppins-Thin.ttf"),
  });


  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  return(
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="(auth)" options={{headerShown:false}}/>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
      {/*<Stack.Screen name="/search/[query]" options={{headerShown:false}}/>*/}
    </Stack>
  )
}

export default MainLayout