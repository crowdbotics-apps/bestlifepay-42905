import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, Image, View } from 'react-native';

const AccountDetailsScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Step 3- Account Details- Provide required details</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Your Full Name" />
      <TextInput style={styles.input} placeholder="Account Name" />
      <TextInput style={styles.input} placeholder="Last 4 of SSN" />
      <TextInput style={styles.input} placeholder="Account" />
      <TextInput style={styles.input} placeholder="DOB" />
      <TextInput style={styles.input} placeholder="Notice Balance" />
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI36");
    }}><View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View></Pressable>
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default AccountDetailsScreen;