import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons } from '../constants'

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [ showPassword, setshowPassword] = useState(false)
  return (
    
    <View className="border-2 border-black-200 w-full h-10 px-5 bg-black-100 rounded-2xl focus:border-blue-100 items-center flex-row ">
    <TextInput 
        className="text-base mt-0.5 text-white flex-1 font-normal"
        value={value}
        placeholder="Search for a Event topic"
        placeholderTextColor="white"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
    />

    <TouchableOpacity>
    <Image
    source={icons.search}
    className= 'w-5 h-5'
    />

    </TouchableOpacity>
    </View>

  )
}

export default SearchInput