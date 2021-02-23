import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';


export default function App() {
  const [value, setValue] = useState({})
  const [email, setEmail] = useState({})

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Formulaire</Text>

      <TextInput style={styles.input}
        placeholder="Enter your name"
        onChangeText={(text) => setValue({ value: text })}
      />

      <TextInput style={styles.input}
        placeholder="Passeword"
        secureTextEntry={true}
        minLength={6} />

      <Pressable
        style={styles.button}
        onPress={() => alert("All is ok")}>
        <Text style={styles.btnText}>Enter</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },

  input: {

    height: 40,
    marginBottom: 30,
    color: 'white',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },

  button: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },

  btnText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
