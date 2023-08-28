import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, ScrollView, CheckBox } from 'react-native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = React.useState(false);
  return <SafeAreaView style={_styles.BBkWhGaC}>
      <ScrollView>
        <View style={_styles.DiePfcSy}>
          <Text style={_styles.LwOSCTax}>Payment Details</Text>
          <Text style={_styles.uqpSdmhq}>Step 1 - Payment Details</Text>

          <View style={_styles.yOLKhxwD}>
            <Text style={_styles.WUSURMZP}>Offer Details</Text>
            <Text style={_styles.LBXLnCYI}>Offer Name</Text>
            <Text style={_styles.PZjJKrBN}>Offer ID</Text>
            <Text style={_styles.zYafbrda}>Notice Balance</Text>
            <Button title="Edit Notice Details" onPress={() => {}} />
          </View>

          <View style={_styles.PMgOmPdU}>
            <Text style={_styles.dFpqanRL}>Payment Date</Text>
            <TextInput style={_styles.sTjSmOyt} />
          </View>

          <View style={_styles.ixjMhYro}>
            <Text style={_styles.YPMTKpKU}>Payment Amount</Text>
            <TextInput style={_styles.ANCanIiB} />
          </View>

          <View style={_styles.rtkbeobt}>
            <Text style={_styles.ASAWBHva}>My Payment Methods</Text>
            <Text style={_styles.iSyNfkGj}>List of all added methods</Text>
            <Text style={_styles.tPsrUByR}>Expiration Date</Text>
            <Text style={_styles.HXofyVPZ}>Expiration date of each method</Text>
            <Button title="Add a credit card or debit card" onPress={() => {}} />
          </View>

          <View style={_styles.OSnjssbJ}>
            <CheckBox value={isSelected} onValueChange={setSelection} style={_styles.lNFAVLzF} />
            <Text style={_styles.HeQZMbCJ}>I understand and agree to my payment Terms of Conditions</Text>
          </View>

          <Pressable onPress={() => {
          navigation.navigate("ScreenAI42");
        }}><View style={_styles.kxWOsJSk}>
            <Button title="Back" onPress={() => {}} />
            <Button title="Send My Payment" onPress={() => {}} />
          </View></Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default PaymentScreen;

const _styles = StyleSheet.create({
  BBkWhGaC: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  DiePfcSy: {
    padding: 20
  },
  LwOSCTax: {
    fontSize: 24,
    fontWeight: "bold"
  },
  uqpSdmhq: {
    fontSize: 18,
    color: "#888",
    marginTop: 10
  },
  yOLKhxwD: {
    marginTop: 20
  },
  WUSURMZP: {
    fontSize: 16,
    fontWeight: "bold"
  },
  LBXLnCYI: {
    fontSize: 16,
    color: "#888",
    marginTop: 10
  },
  PZjJKrBN: {
    fontSize: 16,
    color: "#888",
    marginTop: 10
  },
  zYafbrda: {
    fontSize: 16,
    color: "#888",
    marginTop: 10
  },
  PMgOmPdU: {
    marginTop: 20
  },
  dFpqanRL: {
    fontSize: 16,
    fontWeight: "bold"
  },
  sTjSmOyt: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  ixjMhYro: {
    marginTop: 20
  },
  YPMTKpKU: {
    fontSize: 16,
    fontWeight: "bold"
  },
  ANCanIiB: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  rtkbeobt: {
    marginTop: 20
  },
  ASAWBHva: {
    fontSize: 16,
    fontWeight: "bold"
  },
  iSyNfkGj: {
    fontSize: 16,
    color: "#888",
    marginTop: 10
  },
  tPsrUByR: {
    fontSize: 16,
    color: "#888",
    marginTop: 10
  },
  HXofyVPZ: {
    fontSize: 16,
    color: "#888",
    marginTop: 10
  },
  OSnjssbJ: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  lNFAVLzF: {
    alignSelf: "center"
  },
  HeQZMbCJ: {
    marginLeft: 8
  },
  kxWOsJSk: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});