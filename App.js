import React, { useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import { Map, Modal, Panel, Input, List } from './components'

export default function App () {
  const [points, setPoints] = useState([])
  const [pointstemps, setPointsTemps] = useState({})
  const [name, setName] = useState('')
  const [filter, setfilter] = useState('new_point')
  const [visibility, setVIsibility] = useState(false)
  const [pointsfilter, setPointsFilter] = useState(true)

  const togglePointerFilter = () => {
    setPointsFilter(!pointsfilter)
  }
  const handleLongPress = ({ nativeEvent }) => {
    setPointsTemps(nativeEvent.coordinate)
    setVIsibility(true)
    setfilter('new_point')
  }
  const handleChangeText = text => {
    setName(text)
  }
  const handleSubmit = () => {
    const newPoint = { coordinate: pointstemps, name: name }
    setPoints(points.concat(newPoint))
    setVIsibility(false)
    setName('')
  }
  const handleList = () => {
    setfilter('list')
    setVIsibility(true)
  }
  const closeModal = () => {
    setVIsibility(false)
  }
  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        points={points}
        pointsfilter={pointsfilter}
      />
      <Panel
        onPressLeft={handleList}
        textLeft='List'
        togglePointerFilter={togglePointerFilter}
      />
      <Modal visibility={visibility}>
        {filter === 'new_point' ? (
          <View style={styles.form}>
            <Input
              title='Name'
              placeholder='Point Name'
              onChangeText={handleChangeText}
            />
            <Button
              style={styles.button}
              title='Accept'
              onPress={handleSubmit}
            />
          </View>
        ) : (
          <List points={points} closeModal={closeModal} />
        )}
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  form: {
    padding: 10
  }
})
