import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, Picker, Image, TouchableOpacity } from 'react-native';

const CreatorProfile = () => {
  return <SafeAreaView style={_styles.ondBtsSX}>
      <View style={_styles.NvkpotMK}>
        <Text style={_styles.mToOMlqD}>Set up creator profile</Text>
        <Text style={_styles.DmdtWzKz}>Language</Text>
        <Picker>
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Spanish" value="spanish" />
        </Picker>
        <Text style={_styles.vKkoZfwZ}>Steps</Text>
        <Text>Merchant Account</Text>
        <Text>Master Pay Terms</Text>
        <Text>Import Header Profiles</Text>
        <Text>Create Sub Accounts</Text>
        <Text>Logo & links</Text>
        <Text>Import Header Profiles</Text>
        <View style={_styles.lMFdeCiZ}>
          <Button title="Back" onPress={() => {}} />
          <Button title="Next" onPress={() => {}} />
          <Button title="Skip" onPress={() => {}} />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={_styles.oqUTMLeo}>Download sample header</Text>
        </TouchableOpacity>
        <Text style={_styles.EGkjHokc}>Import Header Profiles</Text>
        <Text>Header name</Text>
        <TextInput style={_styles.VVzKelZj} />
        <Text>What is the data for</Text>
        <Picker>
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
        </Picker>
        <Button title="Upload header file" onPress={() => {}} />
        <Text style={_styles.tFIbiJvA}>Map fields of the uploaded file</Text>
        <Text>YouNegotiate data fields</Text>
        <Image style={_styles.IizGjYNg} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text>Uploaded file data fields</Text>
        <Picker>
          <Picker.Item label="Field 1" value="field1" />
          <Picker.Item label="Field 2" value="field2" />
        </Picker>
      </View>
    </SafeAreaView>;
};

export default CreatorProfile;

const _styles = StyleSheet.create({
  ondBtsSX: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  NvkpotMK: {
    padding: 20
  },
  mToOMlqD: {
    fontSize: 24,
    fontWeight: "bold"
  },
  DmdtWzKz: {
    fontSize: 18,
    marginTop: 20
  },
  vKkoZfwZ: {
    fontSize: 18,
    marginTop: 20
  },
  lMFdeCiZ: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  oqUTMLeo: {
    color: "blue",
    marginTop: 20
  },
  EGkjHokc: {
    fontSize: 18,
    marginTop: 20
  },
  VVzKelZj: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  tFIbiJvA: {
    fontSize: 18,
    marginTop: 20
  },
  IizGjYNg: {
    width: 50,
    height: 50
  }
});