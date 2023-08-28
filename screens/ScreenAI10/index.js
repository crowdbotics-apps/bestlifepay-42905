import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TextInput, CheckBox, Linking } from "react-native";

const ScreenComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ssn, setSsn] = useState("");
  const [authMethod, setAuthMethod] = useState("");
  const [isChecked, setChecked] = useState(false);
  return <SafeAreaView style={_styles.fbNVobhH}>
      <Text style={_styles.wMsznkQQ}>App Name/Logo</Text>
      <Text style={_styles.KVhKXSNq}>Textual Description</Text>
      <Image style={_styles.cZPNFbWz} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <Text style={_styles.ofnGKtOn}>Display Name of User</Text>
      <Text style={_styles.qzvSlDgr}>Creditor Name</Text>
      <Text style={_styles.KvywUmbm}>Date of Birth</Text>
      <TextInput style={_styles.CUlilHpM} onChangeText={text => setUsername(text)} value={username} placeholder="Username" />
      <TextInput style={_styles.AhFXmjBk} onChangeText={text => setPassword(text)} value={password} placeholder="Password" secureTextEntry />
      <TextInput style={_styles.rgrbgWUu} onChangeText={text => setSsn(text)} value={ssn} placeholder="Last 4 digits of your SSN" keyboardType="numeric" maxLength={4} />
      <TextInput style={_styles.GPCkhVpd} onChangeText={text => setAuthMethod(text)} value={authMethod} placeholder="Authentication Method" />
      <View style={_styles.DIFKPuyK}>
        <CheckBox value={isChecked} onValueChange={setChecked} />
        <Text style={_styles.BotWsgjV} onPress={() => Linking.openURL("https://younegotiate.com/terms")}>
          I agree to YouNegotiate’s Terms and Conditions
        </Text>
      </View>
      <TouchableOpacity style={_styles.button} onPress={() => console.log("Account validated")}>
        <Text style={_styles.buttonText}>Validate my account</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  fbNVobhH: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wMsznkQQ: {
    fontSize: 24,
    fontWeight: "bold"
  },
  KVhKXSNq: {
    marginVertical: 20
  },
  cZPNFbWz: {
    width: 200,
    height: 200
  },
  ofnGKtOn: {
    fontSize: 18,
    fontWeight: "bold"
  },
  qzvSlDgr: {
    fontSize: 18,
    fontWeight: "bold"
  },
  KvywUmbm: {
    fontSize: 18,
    fontWeight: "bold"
  },
  CUlilHpM: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginVertical: 10
  },
  AhFXmjBk: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginVertical: 10
  },
  rgrbgWUu: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginVertical: 10
  },
  GPCkhVpd: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginVertical: 10
  },
  DIFKPuyK: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  BotWsgjV: {
    marginLeft: 10
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  }
});