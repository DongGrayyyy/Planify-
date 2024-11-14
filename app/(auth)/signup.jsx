import { View, Text, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
import React from 'react'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite'


const SignUp = () => {
  const [form, setform] = useState({
   username: '',
    email:'',
    password:''
  })
const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () => {
    
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error', 'Please fill all the fields')
    }
  setisSubmitting(true);
  try {
    const result = await createUser(form.email, form.password, form.username)

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
        <View className="w-full justify-center min-h-[100vh] px-4 my-6">
        <Image source={images.logo} resizeMode='contain' className="w-[150px] h-[70px]" />

        <Text className="text-2xl text-white text-semibold mt-10 font-semibold">Sign up to Planify</Text>

        <FormField 
        title="Username"
        value={form.username}
        handleChangeText={(e) => setform({...form, 
          username: e})}
          otherStyles="mt-10"
        />

        <FormField 
        title="Email"
        value={form.email}
        handleChangeText={(e) => setform({...form, 
          email: e})}
          otherStyles="mt-10"
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
            title="Sign up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row
          gap-2">
            <Text className="text-lg text-gray-100 font-normal">
              Already have an account?
            </Text>
            <Link href={"/signin"} className="text-lg font-semibold text-gray-100">Sign In</Link>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp