import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView, View, Text, Image, Picker, TextInput, TouchableOpacity } from "react-native";

const CreatorProfile = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={_styles.lQdMJKlt}>
      <View style={_styles.ZHmwkflZ}>
        <Text>Set up creator profile</Text>
        <Picker>
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Spanish" value="spanish" />
        </Picker>
        <Text>Steps</Text>
        <Text>Merchant Account</Text>
        <Text>Master Pay Terms</Text>
        <Text>Import Header Profiles</Text>
        <Text>Create Sub Accounts</Text>
        <Text>Logo & links</Text>
        <TouchableOpacity style={_styles.button}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.button}>
          <Text>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.button} onPress={() => {
        navigation.navigate("ScreenAI27");
      }}>
          <Text>Next</Text>
        </TouchableOpacity>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={_styles.QlYSjgFv} />
        <Picker>
          <Picker.Item label="Select primary color" value="primary" />
        </Picker>
        <View style={_styles.QtfXFOPe} />
        <Picker>
          <Picker.Item label="Select secondary color" value="secondary" />
        </Picker>
        <View style={_styles.exARpCor} />
        <TouchableOpacity style={_styles.button}>
          <Text>Preview logo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.button}>
          <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.button}>
          <Text>Cancel changes</Text>
        </TouchableOpacity>
        <Text>Embed code for your website</Text>
        <TextInput placeholder="Code" />
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={_styles.XbWaaoin} />
        <Text>Join YouNegotiate QR Code</Text>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={_styles.ukojZxwq} />
        <TouchableOpacity style={_styles.button}>
          <Text>Export QR Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default CreatorProfile;

const _styles = StyleSheet.create({
  lQdMJKlt: {
    flex: 1,
    backgroundColor: "#fff"
  },
  ZHmwkflZ: {
    padding: 20
  },
  QlYSjgFv: {
    width: 100,
    height: 100
  },
  QtfXFOPe: {
    width: 50,
    height: 50,
    backgroundColor: "blue"
  },
  exARpCor: {
    width: 50,
    height: 50,
    backgroundColor: "red"
  },
  XbWaaoin: {
    width: 50,
    height: 50
  },
  ukojZxwq: {
    width: 100,
    height: 100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10
  }
});