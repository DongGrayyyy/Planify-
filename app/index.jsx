import { StatusBar } from 'expo-status-bar';
import { Image ,ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'; 
import CustomButton from '../components/CustomButton';
import { Link } from 'expo-router'

export default function App() {
  return (
    <SafeAreaView className="bg-gray-500 h-full">
     <ScrollView contentContainerStyle={{ height: '100'}}>
    <View className="w-full justify-center items-center min-h-[85vh] px-4">
    <Image
          source={images.logo}
          className="w-[250px] h-[300px]" 
          resizeMode="contain"
    />
    <View>
      <Text className="text-sm font-semibold text-gray-100 mt-7 text-center">Effortless event planning at your fingertips.</Text>
      <CustomButton 
      title="Sign in"
      handlePress={() => router.push('/signin')}
      containerStyles="w-full mt-7"
      /> 
      <CustomButton 
      title="Sign up"
      handlePress={() => router.push('/signup')}
      containerStyles="w-full mt-7"
      /> 
    </View>
    </View>
     </ScrollView>

     <StatusBar backgroundColor='gray' style='light' />
    </SafeAreaView>

    
  );
}