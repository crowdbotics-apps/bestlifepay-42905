import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, Text, TextInput, Button, Image, Picker } from 'react-native';

const ScreenComponent = () => {
  const [selectedGroup, setSelectedGroup] = React.useState();
  const dummyGroups = ['Group 1', 'Group 2', 'Group 3'];
  return <SafeAreaView style={_styles.QcXeKmyx}>
      <Button title="Export pdf template" onPress={() => {}} />
      <TextInput placeholder="First name" style={_styles.wqYmrMBs} />
      <TextInput placeholder="Last name" style={_styles.ZvUpwtep} />
      <TextInput placeholder="Master account number" style={_styles.lMiyOxUJ} />
      <TextInput placeholder="Master phone number" style={_styles.iSjWfeCi} />
      <TextInput placeholder="Account name" style={_styles.wPBubdIE} />
      <TextInput placeholder="Account number" style={_styles.UMufZJha} />
      <TextInput placeholder="Master sub1 name" style={_styles.HBTCDXCy} />
      <TextInput placeholder="Account lender sub 1 name" style={_styles.XIruxFGb} />
      <Text>YouNegotiate embed link to the Consumer authentication</Text>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.JukUYXAk} />
      <Button title="Export QR code" onPress={() => {}} />
      <Text>For E-Letter</Text>
      <Picker selectedValue={selectedGroup} style={_styles.eRStdVBd} onValueChange={itemValue => setSelectedGroup(itemValue)}>
        {dummyGroups.map((group, index) => <Picker.Item key={index} label={group} value={group} />)}
      </Picker>
      <Button title="Save" onPress={() => {}} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  QcXeKmyx: {
    flex: 1,
    padding: 20
  },
  wqYmrMBs: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  ZvUpwtep: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  lMiyOxUJ: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  iSjWfeCi: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  wPBubdIE: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  UMufZJha: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  HBTCDXCy: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  XIruxFGb: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  JukUYXAk: {
    width: 100,
    height: 100
  },
  eRStdVBd: {
    height: 50,
    width: 150
  }
});