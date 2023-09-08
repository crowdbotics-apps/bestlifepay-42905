import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Image } from 'react-native';

const DonationScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What type of donation do you want to make?</Text>
      <View style={styles.optionContainer}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI79");
      }}><Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} /></Pressable>
        <Button title="Donate to someone you know" onPress={() => {}} />
      </View>
      <View style={styles.optionContainer}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI81");
      }}><Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} /></Pressable>
        <Button title="Create a group donation" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => {}} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default DonationScreen;