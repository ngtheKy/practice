import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Login from './components/login'
import Todo from './components/todolist'
import InputData from './InputData'

const App = () => {

  return (
    <View style={styles.container}>
      {/* <InputData /> */}
      {/* <Todo /> */}
      <Login />
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