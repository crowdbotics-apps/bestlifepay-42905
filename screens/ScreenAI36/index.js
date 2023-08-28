import React from 'react';
import { SafeAreaView, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Step 4- Create My Response</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Bank name" />
      <TextInput style={styles.input} placeholder="Bank number" />
      <TextInput style={styles.input} placeholder="Notice Balance" />
      <Button title="Edit Notice Details" />
      <Text style={styles.title}>Pay Balance</Text>
      <TextInput style={styles.input} placeholder="Amount to be paid" />
      <Button title="Create Offer" />
      <TouchableOpacity>
        <Text style={styles.link}>Report I’m not paying? Click here</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  link: {
    color: '#007BFF',
    marginTop: 20
  }
});
export default ScreenComponent;