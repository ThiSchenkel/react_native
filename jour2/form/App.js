import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulaire</Text>
      <TextInput style={styles.input}
        placeholder="Enter your name" />
      <TextInput style={styles.input}
        placeholder="Passeword" />
      <Pressable onPress={() => alert("All is ok")} style={{ height: 100, width: 100 }}><Text>Enter</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  input: {
    width: 300,
    height: 50,
    borderWidth: 2,
    margin: 20,
    textAlign: 'center',
  }
});
