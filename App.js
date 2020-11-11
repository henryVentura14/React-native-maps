import React, { useState, useEffect } from 'react'
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import Constants from 'expo-constants'

export default function App () {
  const initialState = {
    userLat: '',
    userLng: '',
    navGeoStatus: true,
    lat: '',
    lng: ''
  }
  const [location, setLocation] = useState({})

  const searchLocation = async () => {
    const { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      return Alert.alert('No permissions')
    } else {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High
      })
      setLocation(location)
    }
  }
  useEffect(() => {
    searchLocation()
  })
  return (
    <View style={styles.container}>
      <MapView style={styles.map} >
        {location.coords
        ?<Marker
          coordinate={location.coords}
          title="Title"
          description="Description"
        />
        :null
        }
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22
  }
})
