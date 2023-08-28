import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, Button, View } from 'react-native';

const ConfirmationScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.message}>Confirmation Message</Text>
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={() => console.log('Next Button Pressed')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" color="red" onPress={() => console.log('Logout Button Pressed')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20
  }
});
export default ConfirmationScreen;