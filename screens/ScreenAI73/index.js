import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet, Image, Picker } from 'react-native';

const ScreenComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [access, setAccess] = useState('');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setFirstName} value={firstName} placeholder="First Name" />
      <TextInput style={styles.input} onChangeText={setLastName} value={lastName} placeholder="Last Name" />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" />
      <Picker selectedValue={access} style={styles.picker} onValueChange={itemValue => setAccess(itemValue)}>
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="User" value="user" />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => {}} />
        <Button title="Add and Send Invite" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  picker: {
    height: 50,
    width: '80%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20
  }
});
export default ScreenComponent;