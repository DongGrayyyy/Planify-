import { View, Text, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
import React from 'react'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { signIn } from '../../lib/appwrite';



const SignIn = () => {
  const [form, setform] = useState({
    email:'',
    password:''
  })
const [isSubmitting, setisSubmitting] = useState(false)
const submit = async () => {
    
  if(!form.email || !form.password){
    Alert.alert('Error', 'Please fill all the fields')
  }
setisSubmitting(true);
try {
await signIn(form.email, form.password,)

  // set it to global state...
  router.replace('/home')
} catch (error) {
  Alert.alert('Error', error.message)
} finally{
  setisSubmitting(false)
}
  
}
  return (
    <SafeAreaView className="bg-gray-500 h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
        <Image source={images.logo} resizeMode='contain' className="w-[150px] h-[70px]" />

        <Text className="text-2xl text-white text-semibold mt-10 font-semibold">Sign In to Planify</Text>


        <FormField 
        title="Email"
        value={form.email}
        handleChangeText={(e) => setform({...form, 
          email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField 
        title="Password"
        value={form.password}
        handleChangeText={(e) => setform({...form, 
          password: e})}
          otherStyles="mt-7"
          keyboardType="email-address"/>

          <CustomButton 
            title="Sign in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row
          gap-2">
            <Text className="text-lg text-gray-100 font-normal">
              Don't have an account?
            </Text>
            <Link href={"/signup"} className="text-lg font-semibold text-gray-100">Sign up</Link>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn