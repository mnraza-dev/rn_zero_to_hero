import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Splash() {
  const { height, width } = Dimensions.get('screen');
  const navigation = useNavigation()

  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('Intro')
    }, 9000)

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <Text style={styles.firstText}>Quotes</Text>
        <Text style={styles.secondText}>hub</Text>

      </View>
      <View style={styles.bottomView}>
        <Text style={styles.tagline}>
          You will quotes for your posts.
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  centerView: {
    flexDirection: 'row',

  },
  firstText: {

    fontSize: 44,
    fontWeight: 600,
    color: '#000'

  },
  secondText: {
    fontSize: 44,
    color: 'red'


  },
  bottomView: {
    position: 'absolute',
    bottom: 40,
  },
  tagline: {
    fontSize: 24,
    fontStyle: 'italic',
    color: 'red'
  }
})