import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, TextInput, Button, Picker } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.dIOYwLHp}>
      <TextInput placeholder="Phone number" style={_styles.nOdBduqA} />
      <Picker>
        <Picker.Item label="From time" value="fromTime" />
        <Picker.Item label="To" value="to" />
        <Picker.Item label="Timezone" value="timezone" />
      </Picker>
      <Button title="Consumer Details" onPress={() => {}} />
      <Button title="Communication Permissions" onPress={() => {}} />
      <Button title="Custom Pay Terms" onPress={() => {}} />
      <Button title="Payments" onPress={() => {}} />
      <TextInput placeholder="First Name" style={_styles.gtDwdDba} />
      <TextInput placeholder="Last Name" style={_styles.uOGPtUWR} />
      <TextInput placeholder="Mobile Number 1" style={_styles.zShUPJBM} />
      <Button title="Opt out" onPress={() => {}} />
      <TextInput placeholder="Mobile Number 2" style={_styles.CxPZpGLF} />
      <Button title="Opt out" onPress={() => {}} />
      <TextInput placeholder="Email Address 1" style={_styles.vyYXrkyM} />
      <Button title="Opt out" onPress={() => {}} />
      <TextInput placeholder="Email Address 2" style={_styles.phUpuYtA} />
      <Button title="Opt out" onPress={() => {}} />
      <TextInput placeholder="Date of Birth" style={_styles.yDCVtIle} />
      <TextInput placeholder="SSN" style={_styles.LlhjusDz} />
      <Picker>
        <Picker.Item label="Timezone" value="timezone" />
      </Picker>
      <TextInput placeholder="Account Number" style={_styles.FOhhmEmm} />
      <TextInput placeholder="Account Name" style={_styles.YrzzdxYy} />
      <TextInput placeholder="Original Balance" style={_styles.ozsztDbI} />
      <TextInput placeholder="Discounted Payoff Balance" style={_styles.MHuajyli} />
      <TextInput placeholder="Payment Plan Current Balance" style={_styles.LVZPftvn} />
      <TextInput placeholder="First Payment Date" style={_styles.bZtOWFVq} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  dIOYwLHp: {
    flex: 1,
    padding: 20
  },
  nOdBduqA: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  gtDwdDba: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  uOGPtUWR: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  zShUPJBM: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  CxPZpGLF: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  vyYXrkyM: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  phUpuYtA: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  yDCVtIle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  LlhjusDz: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  FOhhmEmm: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  YrzzdxYy: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  ozsztDbI: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  MHuajyli: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  LVZPftvn: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  bZtOWFVq: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});