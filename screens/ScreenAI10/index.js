import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, CheckBox, Linking } from 'react-native';

const ScreenComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ssn, setSsn] = useState('');
  const [authMethod, setAuthMethod] = useState('');
  const [isChecked, setChecked] = useState(false);
  return <SafeAreaView style={_styles.vDSshykV}>
      <Text style={_styles.RCPbYSTm}>App Name/Logo</Text>
      <Text style={_styles.vsIkPTyH}>Textual Description</Text>
      <Image style={_styles.vLzBrdXn} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={_styles.vVJQSTjJ}>Display Name of User</Text>
      <Text style={_styles.ySkhLPzA}>Creditor Name</Text>
      <TextInput style={_styles.KQswAzjA} onChangeText={text => setUsername(text)} value={username} placeholder="Username" />
      <TextInput style={_styles.uakPdKws} onChangeText={text => setPassword(text)} value={password} placeholder="Password" secureTextEntry={true} />
      <TextInput style={_styles.bDGGseGL} onChangeText={text => setSsn(text)} value={ssn} placeholder="Last 4 digits of your SSN" keyboardType="numeric" maxLength={4} />
      <TextInput style={_styles.IMWNfflY} onChangeText={text => setAuthMethod(text)} value={authMethod} placeholder="Authentication Method" />
      <View style={_styles.HMUCSeyo}>
        <CheckBox value={isChecked} onValueChange={setChecked} />
        <Text style={_styles.JjsHzOIF} onPress={() => Linking.openURL('https://younegotiate.com/terms')}>I agree to YouNegotiate’s Terms and Conditions</Text>
      </View>
      <Button title="Validate my account" onPress={() => alert('Account Validated')} disabled={!isChecked} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  vDSshykV: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  RCPbYSTm: {
    fontSize: 24,
    fontWeight: "bold"
  },
  vsIkPTyH: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20
  },
  vLzBrdXn: {
    width: 200,
    height: 200
  },
  vVJQSTjJ: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  ySkhLPzA: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  KQswAzjA: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginTop: 20
  },
  uakPdKws: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginTop: 20
  },
  bDGGseGL: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginTop: 20
  },
  IMWNfflY: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginTop: 20
  },
  HMUCSeyo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  JjsHzOIF: {
    marginLeft: 10
  }
});