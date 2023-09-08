import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';

const TransferScreen = () => {
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Recipient's Email Address" />
      <TextInput style={styles.input} placeholder="Amount to Transfer" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Notes" />
      <View style={styles.buttonContainer}>
        <Button title="Transfer" color="#841584" />
        <Button title="Cancel" color="#841584" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default TransferScreen;