import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native';

const App = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.welcome}>Welcome message</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="I'm a Creator" onPress={() => {}} color="#841584" />
        <Button title="I'm a Consumer" onPress={() => {}} color="#841584" />
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI6");
    }}><Text style={styles.xlcYHnyR}></Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10
  },
  buttonsContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 50
  },
  xlcYHnyR: {
    width: 259,
    height: 75,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 48,
    top: -251
  }
});
export default App;