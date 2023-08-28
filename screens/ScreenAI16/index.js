import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Code</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Did not receive Code? Resend Code?" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Return to Account Creation" onPress={() => {}} />
      </View>
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI28");
    }}><View style={styles.buttonContainer}>
        <Button title="Verify Account and Login" onPress={() => {}} />
      </View></Pressable>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  imageContainer: {
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200
  },
  inputContainer: {
    width: '80%',
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
    borderRadius: 5,
    paddingLeft: 10
  },
  buttonContainer: {
    width: 283,
    marginBottom: 20,
    height: 48
  }
});
export default ScreenComponent;