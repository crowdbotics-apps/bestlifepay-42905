import React from "react";
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Video from "react-native-video";

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.appName}>App Name</Text>
      </View>
      <Video source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} style={styles.video} />
      <View style={styles.reviewContainer}>
        <Text style={styles.review}>User Review</Text>
        <Text style={styles.stars}>★★★★☆</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image style={styles.profilePic} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.name}>Name</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold"
  },
  video: {
    width: "100%",
    height: 200
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20
  },
  review: {
    fontSize: 18,
    fontWeight: "bold"
  },
  stars: {
    fontSize: 18,
    color: "#f1c40f"
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});
export default ScreenComponent;