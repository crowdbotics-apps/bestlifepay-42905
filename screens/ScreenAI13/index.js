import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";

const CreatorProfile = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Step 3 - Owner's Info</Text>
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="Phone" />
      <TextInput style={styles.input} placeholder="Percentage Owned" />
      <TextInput style={styles.input} placeholder="Job Title" />
      <TextInput style={styles.input} placeholder="DOB" />
      <TextInput style={styles.input} placeholder="SSN" />
      <TextInput style={styles.input} placeholder="Owner's Address" />
      <TextInput style={styles.input} placeholder="Street" />
      <TextInput style={styles.input} placeholder="State" />
      <TextInput style={styles.input} placeholder="City" />
      <TextInput style={styles.input} placeholder="Country" />
      <TextInput style={styles.input} placeholder="Zip Code" />
      <View style={styles.buttonContainer}>
        <Text style={styles.button}>Back</Text>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI14");
      }}><Text style={styles.button}>Next</Text></Pressable>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    color: "#fff",
    textAlign: "center"
  }
});
export default CreatorProfile;