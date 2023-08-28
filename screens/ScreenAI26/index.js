import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, Image, Picker, TextInput } from 'react-native';

const App = () => {
  return <SafeAreaView style={_styles.licVdgNJ}>
      <View style={_styles.ruTJjydN}>
        <Text style={_styles.xQhlXfZR}>Set up creator profile</Text>

        <Text style={_styles.rnnBPRLl}>Language</Text>
        <Picker>
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Spanish" value="spanish" />
        </Picker>

        <Text style={_styles.rRfleNLK}>Steps</Text>
        <Text>Merchant Account</Text>
        <Text>Master Pay Terms</Text>
        <Text>Import Header Profiles</Text>
        <Text>Create Sub Accounts</Text>
        <Text>Logo & links</Text>

        <Button title="Back" onPress={() => {}} />
        <Button title="Skip" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />

        <Image style={_styles.ZmFguFoB} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />

        <Text style={_styles.OUjjsOjV}>Select primary color</Text>
        <Picker>
          <Picker.Item label="Red" value="red" />
          <Picker.Item label="Blue" value="blue" />
        </Picker>

        <Text style={_styles.DsiqYqDP}>Select secondary color</Text>
        <Picker>
          <Picker.Item label="Green" value="green" />
          <Picker.Item label="Yellow" value="yellow" />
        </Picker>

        <Button title="Preview logo" onPress={() => {}} />
        <Button title="Save" onPress={() => {}} />
        <Button title="Cancel changes" onPress={() => {}} />

        <Text style={_styles.paQmmbbR}>Embed code for your website</Text>
        <TextInput style={_styles.GuLKeChR} />

        <Image style={_styles.WAbDmFye} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />

        <Text style={_styles.MwcQcOzt}>Join YouNegotiate QR Code</Text>
        <Image style={_styles.PYjuHHVQ} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />

        <Button title="Export QR Code" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  licVdgNJ: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  ruTJjydN: {
    padding: 20
  },
  xQhlXfZR: {
    fontSize: 24,
    fontWeight: "bold"
  },
  rnnBPRLl: {
    marginTop: 20
  },
  rRfleNLK: {
    marginTop: 20
  },
  ZmFguFoB: {
    width: 100,
    height: 100,
    marginTop: 20
  },
  OUjjsOjV: {
    marginTop: 20
  },
  DsiqYqDP: {
    marginTop: 20
  },
  paQmmbbR: {
    marginTop: 20
  },
  GuLKeChR: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  WAbDmFye: {
    width: 50,
    height: 50,
    marginTop: 20
  },
  MwcQcOzt: {
    marginTop: 20
  },
  PYjuHHVQ: {
    width: 100,
    height: 100,
    marginTop: 20
  }
});