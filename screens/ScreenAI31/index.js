import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Image, CheckBox, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={_styles.SACpscXA}>
      <Text style={_styles.UwYcmpPg}>Steps</Text>
      <Text>See My Options</Text>
      <Text>Choose My Response</Text>
      <Text style={_styles.evmJKHsF}>Step 2- Create My Response</Text>
      <Text>Payment Date</Text>
      <Text>Calendar</Text>
      <Text>List of all linked Payment methods</Text>
      <Text>Your debit and credit cards</Text>
      <Text>Expiration Date</Text>
      <Button title="Add a credit card or debit card" onPress={() => {}} />
      <View style={_styles.ylSXTMmK}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={_styles.ptbePjwA} />
        <Text style={_styles.sYnPLzYJ}>I understand and agree to my payment terms of conditions</Text>
      </View>
      <Image style={_styles.QxtivnIj} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TouchableOpacity style={_styles.suCKlJjV}>
        <Text style={_styles.wvKoQmwL}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.IitGXjDL}>
        <Text style={_styles.GzhGnKzX}>Process My Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  SACpscXA: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  UwYcmpPg: {
    fontSize: 24,
    fontWeight: "bold"
  },
  evmJKHsF: {
    fontSize: 20,
    fontWeight: "bold"
  },
  ylSXTMmK: {
    flexDirection: "row",
    alignItems: "center"
  },
  ptbePjwA: {
    alignSelf: "center"
  },
  sYnPLzYJ: {
    margin: 8
  },
  QxtivnIj: {
    width: 50,
    height: 50
  },
  suCKlJjV: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10
  },
  wvKoQmwL: {
    color: "white"
  },
  IitGXjDL: {
    backgroundColor: "green",
    padding: 10,
    margin: 10
  },
  GzhGnKzX: {
    color: "white"
  }
});