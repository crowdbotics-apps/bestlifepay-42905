import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, Picker } from 'react-native';

const AddFundsScreen = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.balance}>Current balance: $100</Text>
      <Text style={styles.label}>Amount to Add</Text>
      <TextInput style={styles.input} onChangeText={setAmount} value={amount} placeholder="Enter amount" keyboardType="numeric" />
      <Text style={styles.label}>Payment Method</Text>
      <Picker selectedValue={paymentMethod} style={styles.picker} onValueChange={itemValue => setPaymentMethod(itemValue)}>
        <Picker.Item label="Credit Card" value="creditCard" />
        <Picker.Item label="Debit Card" value="debitCard" />
        <Picker.Item label="PayPal" value="paypal" />
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="Add Funds" onPress={() => {}} />
        <Button title="Cancel" color="red" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default AddFundsScreen;