import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Dimensions, StyleSheet } from 'react-native'

export default ({ onLongPress, points, pointsfilter }) => {
  return (
    <MapView style={styles.map} onLongPress={onLongPress}>
      {pointsfilter &&
        points.map(x => (
          <Marker key={x.name} coordinate={x.coordinate} title={x.name} />
        ))}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width
  }
})
