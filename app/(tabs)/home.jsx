import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/searchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'

const Home = () => {
  return (
    <SafeAreaView className="bg-gray-500">
      <FlatList 
      //data={[{ id: 1 }, { id: 2 }, { id: 3},]}
      data={[]}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) =>(
        <Text className="text-3xl text-white">{ item.id }</Text>
      )}
      ListHeaderComponent={() => (
        <View className="my-6 px-4 space-y-6">
          <View className="justify-between items-start flex-row mb-6"> 
          <View>
            <Text className="font-medium text-sm text-gray-600-100">
              Welcome Back
            </Text>
            <Text className="text-2xl font-semibold text-white">
              DongGray
            </Text>
          </View>
          <View className="mt-1.5">
            <Image
            source={images.logo}
            className="w-9 h-10"
            resizeMode='contain'
            />
          </View>
          </View>
          <SearchInput />
          <View className="w-full flex-1 pt-5 pb-8">
          <Text className="text-gray-100 text-lg  font-normal -mb-0">
            Latest Events
          </Text>
          </View>
          <Trending posts={[]} 
          
          />

          </View>
      )}
      ListEmptyComponent={() =>(
        <EmptyState 
        title="No Events Found"
        subtitle="No Events Created yet"
        />
      )}
      />
    </SafeAreaView>
    )
}

export default Home