import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Camera } from 'expo-camera'

export default function App () {
  const [permissions, setPermissions] = useState({})
  const [typecamera, setTypecamera] = useState(Camera.Constants.Type.back)

  const getPermissions = async () => {
    const { status } = await Camera.requestPermissionsAsync()
    setPermissions(status == 'granted')
    console.log(status)
  }

  useEffect(() => {
    getPermissions()
  })
  if (permissions === null) {
    return (
      <View>
        <Text>WAITING</Text>
      </View>
    )
  }
  if (permissions === false) {
    return (
      <View>
        <Text>No permissions =/</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.comera} type={typecamera}>
        <Button
          title='Flip'
          onPress={() => {
            const { front, back } = Camera.Constants.Type
            const newType = typecamera ? front : back
            setTypecamera(newType)
          }}
        ></Button>
      </Camera>
    </View>
  )
}

const styles = StyleSheet.create({
  comera: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22
  }
})
