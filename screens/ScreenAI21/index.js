import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, Picker, Linking } from 'react-native';

const CreatorProfile = () => {
  return <SafeAreaView style={_styles.JOkpQHUO}>
      <View style={_styles.ZltfsAbp}>
        <Text style={_styles.TKffpuSb}>Set up creator profile</Text>
        <Text style={_styles.cGYCmhjj}>Language</Text>
        <Picker>
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Spanish" value="spanish" />
        </Picker>
        <Text style={_styles.qDljwgaY}>Steps</Text>
        <Text>Merchant Account</Text>
        <Text>Master Pay Terms</Text>
        <Text>Import Header Profiles</Text>
        <Text>Create Sub Accounts</Text>
        <Text>Logo & links</Text>
        <Text>Merchant Account</Text>
        <View style={_styles.ZPLExZvX}>
          <Button title="Back" onPress={() => {}} />
          <Button title="Next" onPress={() => {}} />
        </View>
        <Text style={_styles.NvVUCKIX}>Pay Terms</Text>
        <Text>Custom Master Terms & Conditions</Text>
        <Text>Pay Plan Rules</Text>
        <Text style={_styles.jqaCnoWV} onPress={() => Linking.openURL('http://example.com')}>
          Download Pay Term Definitions
        </Text>
        <Text style={_styles.WFzgwFID}>Custom Master Terms & Conditions</Text>
        <Button title="Create new template" onPress={() => {}} />
        <Text style={_styles.xMJRpcsd}>Custom Terms and Conditions</Text>
        <TextInput style={_styles.ytQGkoPz} multiline />
        <Button title="Open default template" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default CreatorProfile;

const _styles = StyleSheet.create({
  JOkpQHUO: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  ZltfsAbp: {
    padding: 20
  },
  TKffpuSb: {
    fontSize: 24,
    fontWeight: "bold"
  },
  cGYCmhjj: {
    fontSize: 18,
    marginTop: 20
  },
  qDljwgaY: {
    fontSize: 18,
    marginTop: 20
  },
  ZPLExZvX: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  NvVUCKIX: {
    fontSize: 18,
    marginTop: 20
  },
  jqaCnoWV: {
    color: "blue"
  },
  WFzgwFID: {
    fontSize: 18,
    marginTop: 20
  },
  xMJRpcsd: {
    fontSize: 18,
    marginTop: 20
  },
  ytQGkoPz: {
    height: 200,
    borderColor: "gray",
    borderWidth: 1
  }
});