import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons } from '../constants'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [ showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-medium">{title}</Text>
    
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-blue-100 items-center flex-row ">
    <TextInput 
        className="flex-1 text-white font-semibold text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="gray"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
    />

    {title === 'Password' &&(
        <TouchableOpacity onPress={() => setshowPassword (!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyehide} className="w-6 h-6" resizeMode='contain'
            
            />

        </TouchableOpacity>

    )}
    </View>

    </View>
  )
}

export default FormField