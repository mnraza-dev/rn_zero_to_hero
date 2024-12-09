import { View, Text, StyleSheet,Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Splash() {
  const navigation = useNavigation()

  useEffect(() => {

  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground source={
        require("../images/splashscreen.png")
      } style={{
        width: '100%',
        height: '100%'
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})