import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Picker, Linking } from 'react-native';

const CreatorProfile = () => {
  return <SafeAreaView style={_styles.LnqlqUvJ}>
      <Text style={_styles.MBzVPHBP}>Set up creator profile</Text>

      <Text style={_styles.VpcoRBMB}>Language</Text>
      <Picker>
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Spanish" value="spanish" />
      </Picker>

      <Text style={_styles.uMemSZvG}>Steps</Text>
      <Text>Merchant Account</Text>
      <Text>Master Pay Terms</Text>
      <Text>Import Header Profiles</Text>
      <Text>Create Sub Accounts</Text>
      <Text>Logo & links</Text>
      <Text>Merchant Account</Text>

      <View style={_styles.uofBVLjy}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Next" onPress={() => {}} />
      </View>

      <Text style={_styles.UHKBULmU}>Pay Terms</Text>
      <Text>Custom Master Terms & Conditions</Text>
      <Text>Pay Plan Rules</Text>
      <Text style={_styles.XCMVZZeN} onPress={() => Linking.openURL('https://tinyurl.com/42evm3m3')}>Download Pay Term Definitions</Text>

      <Text style={_styles.IvysnQSX}>Regular Pay-terms</Text>
      <Text>Pay in Full Balance Discount %</Text>
      <TextInput style={_styles.eaOcyjmD} />
      <Text>Payment Plan Balance Discount %</Text>
      <TextInput style={_styles.XvoKOyeS} />
      <Text>Minimum Monthly Payment %</Text>
      <TextInput style={_styles.csxVFAUF} />
      <Text>Maximum Days to Receive 1st Payment</Text>
      <TextInput style={_styles.QGmwmvaa} />

      <Text style={_styles.bxdBcUQl}>Lowest Offer Auto Approve Terms</Text>
      <Text>Pay in Full Balance Discount %</Text>
      <TextInput style={_styles.vEtDwVsA} />
      <Text>Payment Plan Balance Discount %</Text>
      <TextInput style={_styles.UKdxVOKW} />
      <Text>Minimum Monthly Payment %</Text>
      <TextInput style={_styles.wRNmQEGU} />
      <Text>Maximum Days to Receive 1st Payment</Text>
      <TextInput style={_styles.hOlgaAKA} />
    </SafeAreaView>;
};

export default CreatorProfile;

const _styles = StyleSheet.create({
  LnqlqUvJ: {
    flex: 1,
    padding: 20
  },
  MBzVPHBP: {
    fontSize: 24,
    fontWeight: "bold"
  },
  VpcoRBMB: {
    marginTop: 20
  },
  uMemSZvG: {
    marginTop: 20
  },
  uofBVLjy: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  UHKBULmU: {
    marginTop: 20
  },
  XCMVZZeN: {
    color: "blue"
  },
  IvysnQSX: {
    marginTop: 20
  },
  eaOcyjmD: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  XvoKOyeS: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  csxVFAUF: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  QGmwmvaa: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  bxdBcUQl: {
    marginTop: 20
  },
  vEtDwVsA: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  UKdxVOKW: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  wRNmQEGU: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  hOlgaAKA: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});