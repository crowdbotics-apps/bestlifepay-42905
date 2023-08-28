import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.messageContainer}>
        <Image style={styles.image} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.messageText}>Confirmation Message</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI17");
      }}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonLogout]} onPress={() => console.log("Logout Button Pressed")}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  messageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  messageText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5
  },
  buttonLogout: {
    backgroundColor: "red"
  },
  buttonText: {
    color: "#fff"
  }
});
export default ScreenComponent;