import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ScreenComponent = () => {
  const navigation = useNavigation();
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
        <Text>Name and profile picture</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>Forgot Password</Text>
        <TextInput style={styles.input} placeholder="Email Address" />
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI9");
      }}>
          <Text style={styles.buttonText}>Request Password Reset Link</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
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
    fontSize: 24,
    fontWeight: "bold"
  },
  videoContainer: {
    height: 200,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  reviewContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10
  },
  inputContainer: {
    marginTop: 20
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }
});
export default ScreenComponent;