import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, Picker, Linking } from 'react-native';

const CreatorProfileScreen = () => {
  return <SafeAreaView style={_styles.TzlmYcyC}>
      <Text style={_styles.PNRZXaQm}>Set up creator profile</Text>
      <Text style={_styles.UyZqqnKX}>Language</Text>
      <Picker>
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Spanish" value="spanish" />
      </Picker>
      <Text style={_styles.SnKaYbmK}>Steps</Text>
      <Text>Merchant Account</Text>
      <Text>Master Pay Terms</Text>
      <Text>Import Header Profiles</Text>
      <Text>Create Sub Accounts</Text>
      <Text>Logo & links</Text>
      <Text>Merchant Account</Text>
      <View style={_styles.ZqKSOKQM}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View>
      <Text style={_styles.gsxizAOG}>Pay Terms</Text>
      <Text>Custom Master Terms & Conditions</Text>
      <Text>Pay Plan Rules</Text>
      <Text style={_styles.noqVLsbH} onPress={() => Linking.openURL('http://example.com')}>
        Download Pay Term Definitions
      </Text>
      <Text style={_styles.XVkcpawa}>In case of a failed payment</Text>
      <Picker>
        <Picker.Item label="Never cancel" value="neverCancel" />
        <Picker.Item label="Cancel if payment fails more than X times in 30 days" value="cancelIfFails" />
        <Picker.Item label="Add custom value" value="customValue" />
      </Picker>
      <TextInput placeholder="Times" />
      <TextInput placeholder="Period" />
      <Text style={_styles.UzFVTZkA}>In case of a Skipped payment</Text>
      <Picker>
        <Picker.Item label="Never cancel" value="neverCancel" />
        <Picker.Item label="Cancel if payment fails more than X times in 30 days" value="cancelIfFails" />
        <Picker.Item label="Add custom value" value="customValue" />
      </Picker>
      <TextInput placeholder="Times" />
      <TextInput placeholder="Period" />
      <Text style={_styles.JnvmtvUK}>In case of payment change date</Text>
      <Picker>
        <Picker.Item label="Never cancel" value="neverCancel" />
        <Picker.Item label="Cancel if payment fails more than X times in 30 days" value="cancelIfFails" />
        <Picker.Item label="Add custom value" value="customValue" />
      </Picker>
      <TextInput placeholder="Times" />
      <TextInput placeholder="Period" />
    </SafeAreaView>;
};

export default CreatorProfileScreen;

const _styles = StyleSheet.create({
  TzlmYcyC: {
    flex: 1,
    padding: 20
  },
  PNRZXaQm: {
    fontSize: 24,
    fontWeight: "bold"
  },
  UyZqqnKX: {
    marginTop: 20
  },
  SnKaYbmK: {
    marginTop: 20
  },
  ZqKSOKQM: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  gsxizAOG: {
    marginTop: 20
  },
  noqVLsbH: {
    color: "blue"
  },
  XVkcpawa: {
    marginTop: 20
  },
  UzFVTZkA: {
    marginTop: 20
  },
  JnvmtvUK: {
    marginTop: 20
  }
});