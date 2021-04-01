import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import InputData from './InputData'

const App = () => {

  return (
    <View style={styles.container}>
      <InputData />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center'
  },
})

export default App