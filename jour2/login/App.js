import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';


export default function App() {
  const [emailInput, setEmailInput] = useState(styles.inputInvalid);
  const [passwordInput, setPasswordInput] = useState(styles.inputInvalid);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [reg, setReg] = useState(/^\S+@\S+\.\S+$/g)

  const validInputEmail = (text) => {
    if (text.length >= 6) {
      setEmailInput(styles.inputValid)
    } else {
      setEmailInput(styles.inputInvalid)
    }
    setEmail(text);
  }

  const validInputPassword = (text) => {
    if (text.length >= 6) {
      setPasswordInput(styles.inputValid)
    } else {
      setPasswordInput(styles.inputInvalid)
    }
    setPassword(text);
  }

  const login = () => {
    alert(`Email : ${email} , Password : ${password}`);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput style={emailInput}
        placeholder="Enter your Email"
        value={email}
        keyboardType="email-address"
        onChangeText={(email) => { validInputEmail(email) }}
      />

      <TextInput style={passwordInput}
        placeholder="Passeword"
        value={password}
        secureTextEntry={true}
        onChangeText={(password) => { validInputPassword(password) }}
      />

      <Pressable
        style={styles.button}
        onPress={login}>
        <Text style={styles.btnText}>Connection</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  // '#f8f8f8'
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

  inputInvalid: {
    height: 40,
    marginBottom: 30,
    color: 'white',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },

  inputValid: {
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
    borderRadius: 25,
  },

  btnText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
