import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={[styles.marginText, styles.marginTextSize]}>Mon text avec un margin haut et bas 80 et TAILLE 30</Text>
        <Text style={[styles.marginText, styles.marginTextCenter]}>Mon text avec un margin haut et bas 80 et CENTRE</Text>
        <Text style={[styles.marginText, styles.marginTextBold]}>Mon text avec un margin haut et bas 80 et en GRAS</Text>
      </View>
      <Image
        source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
        style={{ margin: 16, height: 50, width: 100 }} />
      <Image
        source={require("./img/konexio-logo_1.png")}
        style={{ margin: 16, height: 50, width: 100 }} />
      <Pressable
        style={styles.button}
        onPress={() => alert("J'ai appuyé dessus")} ><Text>BOUTON A CLIQUER</Text>
      </Pressable>
      <ActivityIndicator size="large" color="#00ff00" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 30,
  },

  textContainer: {
    backgroundColor: 'white',
  },

  marginText: {
    marginVertical: 80,
  },
  marginTextSize: {
    fontSize: 30,
  },

  marginTextCenter: {
    textAlign: 'center',
  },

  marginTextBold: {
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'yellow'
  },

});


