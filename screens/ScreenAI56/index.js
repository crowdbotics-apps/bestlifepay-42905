import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, Picker } from 'react-native';

const ScreenComponent = () => {
  const [selectedValue, setSelectedValue] = React.useState("paypal");
  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount to Withdraw</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Payment Processor</Text>
        <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Paypal" value="paypal" />
          <Picker.Item label="Stripe" value="stripe" />
        </Picker>
      </View>
      <View style={styles.accountsContainer}>
        <Text style={styles.label}>Connected Accounts</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Withdraw" onPress={() => {}} />
        <Button title="Cancel" onPress={() => {}} color="red" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  pickerContainer: {
    marginBottom: 20
  },
  picker: {
    height: 50,
    width: 150
  },
  accountsContainer: {
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default ScreenComponent;