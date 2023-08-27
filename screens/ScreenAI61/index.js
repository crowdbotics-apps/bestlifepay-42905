import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, TouchableOpacity, CheckBox } from 'react-native';

const ScreenComponent = () => {
  const [isSelected, setSelection] = React.useState(false);
  return <SafeAreaView style={_styles.UBwmzKAI}>
      <Image style={_styles.bMjxwpPF} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={_styles.FodjiGnu}>App Name</Text>
      <View style={_styles.zDkjIHji} />
      <Text>User Review</Text>
      <Text>⭐⭐⭐⭐⭐</Text>
      <Image style={_styles.oYENdpgL} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text>Name</Text>
      <Button title="Back to Home" onPress={() => {}} />
      <TextInput placeholder="Username" style={_styles.KBTrOCFC} />
      <TextInput placeholder="Email Address" style={_styles.RkvSmkST} />
      <TextInput placeholder="OTP" style={_styles.HvxwBLYA} />
      <Button title="Send Code" onPress={() => {}} />
      <TextInput placeholder="Password" style={_styles.gaLQdfVR} />
      <TextInput placeholder="Confirm Password" style={_styles.bbUjRnYW} />
      <View style={_styles.yNgpkFba}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={_styles.ieqgdDot} />
        <Text style={_styles.IwkFwGzM}>I agree to all the Terms & Conditions</Text>
      </View>
      <Button title="Create my Profile" onPress={() => {}} />
      <TouchableOpacity onPress={() => {}}>
        <Text style={_styles.IjUunJIb}>Already a member? Login</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  UBwmzKAI: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bMjxwpPF: {
    width: 100,
    height: 100
  },
  FodjiGnu: {
    fontSize: 24,
    fontWeight: "bold"
  },
  zDkjIHji: {
    height: 200,
    width: "90%",
    backgroundColor: "black"
  },
  oYENdpgL: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  KBTrOCFC: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  RkvSmkST: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  HvxwBLYA: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  gaLQdfVR: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  bbUjRnYW: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  yNgpkFba: {
    flexDirection: "row",
    alignItems: "center"
  },
  ieqgdDot: {
    alignSelf: "center"
  },
  IwkFwGzM: {
    margin: 8
  },
  IjUunJIb: {
    color: "blue"
  }
});