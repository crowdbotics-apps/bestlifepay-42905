import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, Button } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.messageContainer}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.messageText}>Confirmation Message</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={() => console.log('Next Button Pressed')} />
        <Button title="Logout" color="red" onPress={() => console.log('Logout Button Pressed')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  messageText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  }
});
export default ScreenComponent;