import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, Picker, StyleSheet } from 'react-native';

const CreatorProfile = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Set up creator profile</Text>
      <Text style={styles.subtitle}>Language</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Spanish" value="spanish" />
      </Picker>
      <Text style={styles.subtitle}>Steps</Text>
      <Text style={styles.text}>Merchant Account</Text>
      <Text style={styles.text}>Master Pay Terms</Text>
      <Text style={styles.text}>Import Header Profiles</Text>
      <Text style={styles.text}>Create Sub Accounts</Text>
      <Text style={styles.text}>Logo & links</Text>
      <Text style={styles.text}>Merchant Account</Text>
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View>
      <Text style={styles.subtitle}>Merchant Processor Integration</Text>
      <Text style={styles.text}>Integrated Processors</Text>
      <Text style={styles.text}>Specific Processor</Text>
      <Text style={styles.text}>Transaction service.</Text>
      <Button title="Connect" onPress={() => {}} />
      <Text style={styles.subtitle}>Reseller Management</Text>
      <Text style={styles.text}>Enter your unique invitation code to access your customized processor options.</Text>
      <TextInput style={styles.input} placeholder="Invitation Code" />
      <Button title="Proceed" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  text: {
    fontSize: 16,
    marginTop: 10
  },
  picker: {
    height: 50,
    width: '100%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10
  }
});
export default CreatorProfile;