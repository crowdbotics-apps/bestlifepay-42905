import React from "react";
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.appName}>App Name</Text>
      </View>
      <View style={styles.videoContainer}>
        <Text>Video Player</Text>
      </View>
      <View style={styles.reviewContainer}>
        <Text>User Review</Text>
        <Text>Stars</Text>
        <Image style={styles.profilePic} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text>Name</Text>
      </View>
      <View style={styles.passwordContainer}>
        <Text>Create a new password</Text>
        <TextInput style={styles.input} placeholder="New password" />
        <TextInput style={styles.input} placeholder="Confirm new password" />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Back to login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  videoContainer: {
    height: 63,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 356
  },
  reviewContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  passwordContainer: {
    alignItems: "center"
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});
export default ScreenComponent;