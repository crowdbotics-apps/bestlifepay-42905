import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const CreatorProfile = () => {
  return <SafeAreaView style={styles.container}>
      <Picker>
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Spanish" value="spanish" />
      </Picker>
      <Text style={styles.header}>Step 2- Business info</Text>
      <TextInput style={styles.input} placeholder="Business Name" />
      <TextInput style={styles.input} placeholder="Legal Business Name" />
      <TextInput style={styles.input} placeholder="Company Email" />
      <TextInput style={styles.input} placeholder="Tax Id Number" />
      <TextInput style={styles.input} placeholder="Phone Number" />
      <TextInput style={styles.input} placeholder="Company Website" />
      <TextInput style={styles.input} placeholder="Address 1" />
      <TextInput style={styles.input} placeholder="Address 2" />
      <TextInput style={styles.input} placeholder="State" />
      <TextInput style={styles.input} placeholder="Country Name" />
      <TextInput style={styles.input} placeholder="Zip Code" />
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default CreatorProfile;