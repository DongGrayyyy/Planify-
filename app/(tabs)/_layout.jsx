import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect} from 'expo-router';


import { icons } from '../../constants';

const TabIcon = ({icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-.5">
      <Image
      source={icon}
      resizeMode="contain"
      className="w-6 h-6"
      tintColor={color}
      />
      <Text className={`$f{focused ? 'font-psemibold' :
      'font-pregular}text-xs`} style={{color: color}}
      >
        {name}
      </Text>
    </View>
  )
} 

const TabsLayout = () => {
  return (
    <>
    <Tabs
    screenOptions={{
    tabBarShowLabel: false,
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: 'black',
      borderTopColor: 'gray',
      borderTopWidth: 0,
      height: 50,
    }
    }} 
    >


      <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
          icon={icons.home}
          color={color}
          name="Home"
          focus={focused}
          />

        )
      }}
      />

<Tabs.Screen
      name="bookmark"
      options={{
        title: 'Bookmark',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
          icon={icons.bookmark}
          color={color}
          name="Bookmark"
          focus={focused}
          />

        )
      }}
      />
      
      <Tabs.Screen
      name="create"
      options={{
        title: 'Create',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
          icon={icons.create}
          color={color}
          name="Create"
          focus={focused}
          />

        )
      }}
      />  

      <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
          icon={icons.profile}
          color={color}
          name="profile"
          focus={focused}
          />

        )
      }}
      />   
      
    </Tabs>
    </>
  
  )
}

export default TabsLayout 