import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image } from 'react-native';

const ScreenComponent = () => {
  const [template, setTemplate] = useState('');
  const [email, setEmail] = useState('');
  const [showQR, setShowQR] = useState(false);
  return <SafeAreaView style={_styles.bhgLJOkE}>
      <View style={_styles.qlyorZtS}>
        <Text style={_styles.ztMwgntF}>Print Template</Text>
        <View style={_styles.mqWXayTx}>
          <Button title="Portrait" onPress={() => {}} />
          <Button title="Landscape" onPress={() => {}} />
        </View>
        <View style={_styles.ydyhCVIQ}>
          <Button title="All" onPress={() => {}} />
          <Button title="Even" onPress={() => {}} />
          <Button title="Odd" onPress={() => {}} />
        </View>
        <View style={_styles.zwzMsESz}>
          <Button title="Print" onPress={() => {}} />
          <Button title="Send" onPress={() => {}} />
        </View>
        <Text style={_styles.JqBrwUKI}>Template Preview</Text>
        <Image style={_styles.comougFn} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={_styles.tDSMOxoL}>Template Email</Text>
        <TextInput style={_styles.MuITvLLW} onChangeText={text => setEmail(text)} value={email} />
        <Button title="Show QR Code" onPress={() => setShowQR(!showQR)} />
        {showQR && <Image style={_styles.BxtpWudP} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />}
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  bhgLJOkE: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  qlyorZtS: {
    padding: 20
  },
  ztMwgntF: {
    fontSize: 24,
    fontWeight: "bold"
  },
  mqWXayTx: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  ydyhCVIQ: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  zwzMsESz: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  JqBrwUKI: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  comougFn: {
    width: "100%",
    height: 200,
    marginTop: 10
  },
  tDSMOxoL: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  MuITvLLW: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  },
  BxtpWudP: {
    width: "100%",
    height: 200,
    marginTop: 10
  }
});