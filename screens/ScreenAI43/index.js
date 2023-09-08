import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button } from 'react-native';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI27");
      }}><Text style={styles.message}>Confirmation message</Text></Pressable>
        <Button title="Jump Back to My Home Page" onPress={() => console.log('Button pressed')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  message: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  }
});
export default ConfirmationScreen;