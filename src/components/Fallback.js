import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/note.png")}
        style={styles.image}
        />
        <Text style={styles.text}> Ainda sem notas ! </Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
  },
  image:{
    width: 300,
    height: 300,
  },
  text:{
    color: "#A7AFB2"
  },
})