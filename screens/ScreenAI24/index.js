import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView, Text, TextInput, Picker, ScrollView } from "react-native";

const App = () => {
  return <SafeAreaView style={_styles.RRGBxtqG}>
      <ScrollView style={_styles.IQUGnGGX}>
        <Text style={_styles.ZfdWMQRo}>Creator Profile</Text>
        <Text>Language</Text>
        <Picker>
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Spanish" value="spanish" />
        </Picker>
        <Text>Steps</Text>
        <Text>Merchant Account</Text>
        <Text>Master Pay Terms</Text>
        <Text>Import Header Profiles</Text>
        <Text>Create Sub Accounts</Text>
        <Text>Logo & links</Text>
        <Text>Create Sub Accounts</Text>
        <TouchableOpacity style={_styles.button}>
          <Text style={_styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.button}>
          <Text style={_styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.button}>
          <Text style={_styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.button}>
          <Text style={_styles.buttonText}>Create sub account</Text>
        </TouchableOpacity>
        <TextInput placeholder="Name of sub-account" />
        <TextInput placeholder="Unique Identifier" />
        <TextInput placeholder="Upload sub-account list" />
        <Text>Pay Terms</Text>
        <TextInput placeholder="Pay in Full Balance Discount %" />
        <TextInput placeholder="Payment Plan Balance Discount %" />
        <TextInput placeholder="Minimum Monthly Payment %" />
        <TextInput placeholder="Maximum Days to Receive 1st Payment" />
        <Text>Lowest Offer Auto Approve Terms</Text>
        <TextInput placeholder="Pay in Full Balance Discount %" />
        <TextInput placeholder="Payment Plan Balance Discount %" />
        <TextInput placeholder="Minimum Monthly Payment %" />
        <TextInput placeholder="Maximum Days to Receive 1st Payment" />
        <Text>Custom Master Terms & Conditions</Text>
        <TouchableOpacity style={_styles.button}>
          <Text style={_styles.buttonText}>Create new template</Text>
        </TouchableOpacity>
        <Text>Custom Terms and Conditions</Text>
        <TextInput multiline={true} numberOfLines={4} placeholder="Rich text editor" />
        <TouchableOpacity style={_styles.button}>
          <Text style={_styles.buttonText}>Open default template</Text>
        </TouchableOpacity>
        <Text>Pay Plan Rules</Text>
        <Text>In case of a failed payment</Text>
        <Picker>
          <Picker.Item label="Never cancel" value="neverCancel" />
          <Picker.Item label="Cancel if payment fails more than X times in 30 days" value="cancelIfFails" />
        </Picker>
        <TextInput placeholder="Times" />
        <TextInput placeholder="Period" />
        <Text>In case of a Skipped payment</Text>
        <Picker>
          <Picker.Item label="Never cancel" value="neverCancel" />
          <Picker.Item label="Cancel if payment fails more than X times in 30 days" value="cancelIfFails" />
        </Picker>
        <TextInput placeholder="Times" />
        <TextInput placeholder="Period" />
        <Text>In case of payment change date</Text>
        <Picker>
          <Picker.Item label="Never cancel" value="neverCancel" />
          <Picker.Item label="Cancel if payment fails more than X times in 30 days" value="cancelIfFails" />
        </Picker>
        <TextInput placeholder="Times" />
        <TextInput placeholder="Period" />
      </ScrollView>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  RRGBxtqG: {
    flex: 1
  },
  IQUGnGGX: {
    padding: 20
  },
  ZfdWMQRo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});