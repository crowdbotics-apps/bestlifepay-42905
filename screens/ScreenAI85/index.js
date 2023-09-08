import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ScrollView, TextInput, Picker } from 'react-native';

const DonationScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Donation steps</Text>
        <Text style={styles.subtitle}>Type of Donation</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="Group Donation" value="group" />
        </Picker>
        <Text style={styles.subtitle}>Location</Text>
        <TextInput style={styles.input} placeholder="San Diego" />
        <Text style={styles.subtitle}>Type of Debt</Text>
        <TextInput style={styles.input} placeholder="Recipient Details" />
        <Text style={styles.subtitle}>Amount</Text>
        <TextInput style={styles.input} placeholder="Payment" />
        <Text style={styles.subtitle}>Choose your payment method</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="Credit card" value="credit" />
          <Picker.Item label="Venmo" value="venmo" />
          <Picker.Item label="Paypal" value="paypal" />
          <Picker.Item label="Apple Pay" value="apple" />
          <Picker.Item label="Amazon Pay" value="amazon" />
          <Picker.Item label="Crypto Currency" value="crypto" />
          <Picker.Item label="ACH" value="ach" />
        </Picker>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI86");
      }}><View style={styles.buttonContainer}>
          <Button title="Previous" onPress={() => {}} />
          <Button title="Next" onPress={() => {}} />
        </View></Pressable>
      </ScrollView>
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
    fontWeight: '600',
    marginTop: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    padding: 10
  },
  picker: {
    height: 50,
    width: '100%',
    marginTop: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default DonationScreen;