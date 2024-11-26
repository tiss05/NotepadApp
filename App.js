import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import TodoScreen from './src/screens/TodoScreen'

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <TodoScreen />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})