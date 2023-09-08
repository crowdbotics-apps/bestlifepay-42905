import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';

const DonationScreen = () => {
  return <SafeAreaView style={_styles.HvhXuqLq}>
      <ScrollView>
        <View style={_styles.bZGtPTtF}>
          <Text style={_styles.zRlmHdRy}>Donation steps</Text>
          <Text>Type of Donation: Group Donation</Text>
          <Text>Location: San Diego</Text>
          <Text>Type of Debt</Text>
          <Text>Recipient Details</Text>
          <Text>Amount</Text>
          <Text>Payment</Text>
          <Text>Enter your payment information *</Text>
          <TextInput placeholder="Name on Card" style={_styles.IQRngSZA} />
          <TextInput placeholder="Card Number" style={_styles.NCSRiukB} />
          <TextInput placeholder="Month" style={_styles.ovnuUVrl} />
          <TextInput placeholder="Year" style={_styles.EehPBLRn} />
          <TextInput placeholder="CVV" style={_styles.yVEHlaum} />
          <TextInput placeholder="Address 1" style={_styles.NBHRSiZz} />
          <TextInput placeholder="Address 2" style={_styles.RzJzHKwl} />
          <TextInput placeholder="City" style={_styles.XISmYKSF} />
          <TextInput placeholder="State" style={_styles.oIIZwpbO} />
          <TextInput placeholder="Zipcode" style={_styles.wkCboOwM} />
          <Text>Save card info for next time</Text>
          <Text>List of saved cards- Option to choose any saved card</Text>
          <Text>Card details</Text>
          <TouchableOpacity>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.RjlMKuBe} />
            <Text>Remove</Text>
          </TouchableOpacity>
          <Button title="Previous" onPress={() => {}} />
          <Button title="Process payment" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default DonationScreen;

const _styles = StyleSheet.create({
  HvhXuqLq: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  bZGtPTtF: {
    padding: 20
  },
  zRlmHdRy: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  IQRngSZA: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  NCSRiukB: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  ovnuUVrl: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  EehPBLRn: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  yVEHlaum: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  NBHRSiZz: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  RzJzHKwl: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  XISmYKSF: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  oIIZwpbO: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  wkCboOwM: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10
  },
  RjlMKuBe: {
    width: 50,
    height: 50
  }
});