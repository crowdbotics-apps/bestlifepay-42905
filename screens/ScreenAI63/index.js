import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, Image, Picker } from 'react-native';

const ScreenComponent = () => {
  const [templateName, setTemplateName] = useState('');
  const [sendLinkVia, setSendLinkVia] = useState('Email');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.label}>Template name</Text>
      <TextInput style={styles.input} onChangeText={setTemplateName} value={templateName} placeholder="Enter template name" />
      <Text style={styles.label}>Send Link via</Text>
      <Picker selectedValue={sendLinkVia} style={styles.picker} onValueChange={itemValue => setSendLinkVia(itemValue)}>
        <Picker.Item label="Email" value="Email" />
        <Picker.Item label="E-Letter" value="E-Letter" />
      </Picker>
      <Button title="Next" onPress={() => console.log('Next Pressed')} />
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
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 20
  }
});
export default ScreenComponent;