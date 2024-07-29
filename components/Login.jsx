import { View, Text, Image } from 'react-native'
import React from 'react'
import { getReactNavigationScreensConfig } from 'expo-router/build/getReactNavigationConfig'

export default function Login() {
  return (
    <View>
      <Image source={require('./../assets/images/Landing.jpg')}
      style={{
        width:'100%',
        height:500
      }}
      />
      <View>
      <Text style={{
        width:'50%',
        fontSize: 30,
        textAlign: 'center',
        fontFamily:'Lora-Bold'
      }}>
        Snowscape
      </Text>
      </View>
    </View>
  )
}

rnss