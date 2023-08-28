import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, ScrollView, CheckBox } from 'react-native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = React.useState(false);
  return <SafeAreaView style={_styles.JRdDIEJz}>
      <ScrollView>
        <View style={_styles.vIwpWPSa}>
          <Text style={_styles.IHgucsRn}>Payment Details</Text>
          <Text style={_styles.ePiMvnVW}>Step 2 - Submit Payment</Text>

          <View style={_styles.dmcBdRGj}>
            <Text style={_styles.UuSRsJnL}>Offer Details</Text>
            <TextInput placeholder="Offer Name" style={_styles.MTOPwkLd} />
            <TextInput placeholder="Offer ID" style={_styles.MTYgVFxf} />
            <TextInput placeholder="Notice Balance" style={_styles.rMRowcHR} />
            <Button title="Edit Notice Details" />

            <Text style={_styles.YJWkBOlp}>Select Offer Type</Text>
            <View style={_styles.IzYlhRWi}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text>Discounted Settlement</Text>
            </View>
            <View style={_styles.wLzakEdl}>
              <CheckBox value={!isSelected} onValueChange={setSelection} />
              <Text>Payment Plan</Text>
            </View>

            <Text style={_styles.CAanJGMU}>Select a reason for discounted settlement</Text>
            <TextInput placeholder="Select a reason" style={_styles.cWbeEUQv} />

            <Text style={_styles.szogebLy}>How often do you want this payment?</Text>
            <TextInput placeholder="Select frequency" style={_styles.awwfYrnm} />

            <Text style={_styles.eprFwelL}>Settlement Offer</Text>
            <TextInput placeholder="Enter offer" style={_styles.oFWvEPnC} />

            <Text style={_styles.TurflIcM}>Payment Date</Text>
            <TextInput placeholder="Select date" style={_styles.fiTaxQBJ} />

            <Text style={_styles.tyjLAdVT}>Offer Note</Text>
            <TextInput placeholder="Enter note" style={_styles.JBsoeBoj} />

            <Text style={_styles.fMSiJMeg}>My Offer Payment Method</Text>
            <TextInput placeholder="Enter payment method" style={_styles.GpINMzJC} />

            <View style={_styles.DGIrSGgH}>
              <CheckBox />
              <Text>I understand and agree to my payment Terms of Conditions</Text>
            </View>

            <Pressable onPress={() => {
            navigation.navigate("ScreenAI43");
          }}><View style={_styles.JtdjmMXo}>
              <Button title="Back" />
              <Button title="Send My Offer" />
            </View></Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default PaymentScreen;

const _styles = StyleSheet.create({
  JRdDIEJz: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  vIwpWPSa: {
    padding: 20
  },
  IHgucsRn: {
    fontSize: 24,
    fontWeight: "bold"
  },
  ePiMvnVW: {
    fontSize: 18,
    color: "#888",
    marginTop: 10
  },
  dmcBdRGj: {
    marginTop: 20
  },
  UuSRsJnL: {
    fontSize: 18,
    fontWeight: "bold"
  },
  MTOPwkLd: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  MTYgVFxf: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  rMRowcHR: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  YJWkBOlp: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  IzYlhRWi: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  wLzakEdl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  CAanJGMU: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  cWbeEUQv: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  szogebLy: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  awwfYrnm: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  eprFwelL: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  oFWvEPnC: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  TurflIcM: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  fiTaxQBJ: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  tyjLAdVT: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  JBsoeBoj: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  fMSiJMeg: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  GpINMzJC: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  DGIrSGgH: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  JtdjmMXo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});