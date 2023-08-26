import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, TouchableOpacity, CheckBox } from 'react-native';

const ScreenComponent = () => {
  const [isSelected, setSelection] = React.useState(false);
  return <SafeAreaView style={_styles.zPUVYrPc}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.uTGvYGTZ} />
      <Text style={_styles.OjjnEbzU}>App Name</Text>
      <View style={_styles.yrjIezAC}>
        <Text>Video Player</Text>
      </View>
      <View style={_styles.itSZNusT}>
        <Text>User Review: </Text>
        <Text>**** </Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.xMViIRqz} />
        <Text>Name</Text>
      </View>
      <Button title="Back to Home" onPress={() => {}} />
      <TextInput placeholder="Username" style={_styles.WyOFKfgd} />
      <TextInput placeholder="Email Address" style={_styles.CEWyBrRe} />
      <TextInput placeholder="OTP" style={_styles.lXUuzgkp} />
      <Button title="Send Code" onPress={() => {}} />
      <TextInput placeholder="Password" style={_styles.eBAWRbFp} />
      <TextInput placeholder="Confirm Password" style={_styles.ZoIuKSLZ} />
      <View style={_styles.JvAJoxeS}>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        <Text>I agree to all the </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={_styles.EMNxchtG}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
      <Button title="Create my Profile" onPress={() => {}} />
      <TouchableOpacity onPress={() => {}}>
        <Text style={_styles.soHQFisH}>Already a member? Login</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  zPUVYrPc: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  uTGvYGTZ: {
    width: 100,
    height: 100
  },
  OjjnEbzU: {
    fontSize: 24,
    fontWeight: "bold"
  },
  yrjIezAC: {
    width: "90%",
    height: 200,
    backgroundColor: "#ddd"
  },
  itSZNusT: {
    flexDirection: "row",
    alignItems: "center"
  },
  xMViIRqz: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  WyOFKfgd: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  CEWyBrRe: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  lXUuzgkp: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  eBAWRbFp: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  ZoIuKSLZ: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  JvAJoxeS: {
    flexDirection: "row",
    alignItems: "center"
  },
  EMNxchtG: {
    color: "blue"
  },
  soHQFisH: {
    color: "blue"
  }
});