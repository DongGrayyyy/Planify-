import { TouchableOpacity,Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress,containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
    className={`bg-blue-200 rounded-xl min-h-[62px] min-w-[220] justify-center items-center ${containerStyles} $
    {isLoading ? 'opacity-50 : ''}`}
    disabled={isLoading}
    >
        <Text className={`text-primary font-semibold text-lg ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}


export default CustomButton