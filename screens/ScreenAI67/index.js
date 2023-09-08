import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Would you like to include a QR code?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Don't include" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="With QR code" onPress={() => {}} />
      </View>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  buttonContainer: {
    margin: 20
  },
  image: {
    width: 200,
    height: 200
  }
});
export default App;