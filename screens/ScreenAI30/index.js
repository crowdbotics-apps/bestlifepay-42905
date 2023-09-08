import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView, View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  const dummyData = {
    name: 'John Doe',
    id: '123456',
    paymentOptions: ['Option 1', 'Option 2', 'Option 3'],
    requiredPayments: 5,
    savingAmount: 1000
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.accountDetails}>
        <Text style={styles.title}>Account details</Text>
        <Text style={styles.text}>Name: {dummyData.name}</Text>
        <Text style={styles.text}>ID number: {dummyData.id}</Text>
        <Button title="Edit Notice Details" onPress={() => {}} />
      </View>
      <View style={styles.paymentOptions}>
        <Text style={styles.title}>Payment options</Text>
        {dummyData.paymentOptions.map((option, index) => <Pressable onPress={() => {
        navigation.navigate("ScreenAI53");
      }}><Text key={index} style={styles.text}>
            {option}
          </Text></Pressable>)}
        <Text style={styles.text}>Number of required payments: {dummyData.requiredPayments}</Text>
        <Text style={styles.text}>Saving amount: ${dummyData.savingAmount}</Text>
      </View>
      <TouchableOpacity onPress={() => {
      navigation.navigate("ScreenAI32");
    }}>
        <Text style={styles.link}>Report I’m not paying? Click here</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  accountDetails: {
    marginBottom: 20
  },
  paymentOptions: {
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  },
  link: {
    fontSize: 16,
    color: '#0000FF',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200
  }
});
export default ScreenComponent;