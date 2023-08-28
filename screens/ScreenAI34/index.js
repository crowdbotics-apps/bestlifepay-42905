import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Image, CheckBox, Text, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.header}>Step 2- Sender Details</Text>
      <TextInput style={styles.input} placeholder="Search name of sender" />
      <TextInput style={styles.input} placeholder="Company Name" />
      <TextInput style={styles.input} placeholder="Company Phone Number" />
      <TextInput style={styles.input} placeholder="Company Email Address" />
      <TextInput style={styles.input} placeholder="Company Address" />
      <TextInput style={styles.input} placeholder="Company City" />
      <TextInput style={styles.input} placeholder="Company State" />
      <TextInput style={styles.input} placeholder="Company Zip" />
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>Agree to terms</Text>
      </View>
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI35");
    }}><View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View></Pressable>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default ScreenComponent;