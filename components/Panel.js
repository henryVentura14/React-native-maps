import React from 'react'
import { StyleSheet, Button, View } from 'react-native'

export default ({ onPressLeft, textLeft, togglePointerFilter }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft} />
      <Button title='Show/Hide' onPress={togglePointerFilter} />
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
