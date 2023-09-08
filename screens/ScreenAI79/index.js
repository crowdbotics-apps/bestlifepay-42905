import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const DonationScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Donation steps</Text>
      <Text style={styles.subtitle}>Type of Donation: Someone you know</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.sectionTitle}>Recipient Details</Text>
      <TextInput style={styles.input} placeholder="First name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="Date of birth (MM/DD/YYYY)" />
      <TextInput style={styles.input} placeholder="Last 4 digits of SSN (optional)" />
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI80");
    }}><View style={styles.buttonContainer}>
        <Button title="Previous" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View></Pressable>
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
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default DonationScreen;