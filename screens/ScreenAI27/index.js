import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, Picker, ScrollView, FlatList } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  const data = Array(5).fill({
    consumerName: 'John Doe',
    accountNo: '123456',
    accountName: 'Account 1',
    discountedPayoff: '$1000',
    planType: 'Plan A',
    paymentAmount: '$200',
    payPlanStatus: 'Active'
  });
  return <SafeAreaView style={_styles.cwzOKOAR}>
      <View style={_styles.fUzbqXsE}>
        <Text style={_styles.rgxrDYUO}>Dashboard</Text>
        <TextInput placeholder="Search" style={_styles.EluNoJji} />
        <Picker style={_styles.nPtYzDpC}>
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Spanish" value="spanish" />
        </Picker>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.GBiGXCnG} />
      </View>
      <ScrollView style={_styles.deVuDEoB}>
        <View style={_styles.xzzMnrec}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI44");
        }}><Text style={_styles.BIGozqiF}>{"Consumer Offer"}</Text></Pressable>
          <Text style={_styles.DINPbrEz}>Value</Text>
        </View>
        <View style={_styles.AfTcWbHq}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI46");
        }}><Text style={_styles.PGmgNWpg}>{"Import header"}</Text></Pressable>
          <Text style={_styles.XBTlTltJ}>Value</Text>
        </View>
        <View style={_styles.lQFeFpaF}>
          <Text style={_styles.dMiiZTQV}>No. of pending offers from consumers</Text>
          <Text style={_styles.dyZNPWfT}>Value</Text>
        </View>
        <View style={_styles.ypqyfOGI}>
          <Text style={_styles.szCgjauu}>No of payment plans in place in YouNegotiate</Text>
          <Text style={_styles.NPNAkyXM}>Value</Text>
        </View>
        <View style={_styles.MFHKYsnb}>
          <Text style={_styles.PYoeZIuJ}>Balance recovered by payment plans in place</Text>
          <Text style={_styles.CtXdmMwC}>Value</Text>
        </View>
        <View style={_styles.WtRCHNcI}>
          <Text style={_styles.TukHpssJ}>30-day forecast for scheduled payments</Text>
          <Text style={_styles.zpekFDRt}>Value</Text>
        </View>
        <FlatList data={data} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <View style={_styles.jVzMDYSp}>
              <Pressable><Text>{item.consumerName}</Text></Pressable>
              <Text>{item.accountNo}</Text>
              <Text>{item.accountName}</Text>
              <Text>{item.discountedPayoff}</Text>
              <Text>{item.planType}</Text>
              <Text>{item.paymentAmount}</Text>
              <Text>{item.payPlanStatus}</Text>
            </View>} />
        <View style={_styles.MyqlzqJz}>
          <Button title="Previous" onPress={() => {}} />
          <Text>Page number</Text>
          <Button title="Next" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  cwzOKOAR: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  fUzbqXsE: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rgxrDYUO: {
    fontSize: 24,
    fontWeight: "bold"
  },
  EluNoJji: {
    flex: 1,
    marginLeft: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  nPtYzDpC: {
    width: 100
  },
  GBiGXCnG: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  deVuDEoB: {
    padding: 20
  },
  xzzMnrec: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  BIGozqiF: {
    fontSize: 18,
    fontWeight: "bold"
  },
  DINPbrEz: {
    fontSize: 18,
    fontWeight: "bold"
  },
  AfTcWbHq: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  PGmgNWpg: {
    fontSize: 18,
    fontWeight: "bold"
  },
  XBTlTltJ: {
    fontSize: 18,
    fontWeight: "bold"
  },
  lQFeFpaF: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  dMiiZTQV: {
    fontSize: 18,
    fontWeight: "bold"
  },
  dyZNPWfT: {
    fontSize: 18,
    fontWeight: "bold"
  },
  ypqyfOGI: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  szCgjauu: {
    fontSize: 18,
    fontWeight: "bold"
  },
  NPNAkyXM: {
    fontSize: 18,
    fontWeight: "bold"
  },
  MFHKYsnb: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  PYoeZIuJ: {
    fontSize: 18,
    fontWeight: "bold"
  },
  CtXdmMwC: {
    fontSize: 18,
    fontWeight: "bold"
  },
  WtRCHNcI: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  TukHpssJ: {
    fontSize: 18,
    fontWeight: "bold"
  },
  zpekFDRt: {
    fontSize: 18,
    fontWeight: "bold"
  },
  jVzMDYSp: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  MyqlzqJz: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});