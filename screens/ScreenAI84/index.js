import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Switch, Picker } from 'react-native';

const DonationScreen = () => {
  const [amount, setAmount] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [donateAll, setDonateAll] = useState(false);
  const [minDebt, setMinDebt] = useState('');
  const [maxDebt, setMaxDebt] = useState('');
  const [pastDue, setPastDue] = useState(false);
  const [amountPerPerson, setAmountPerPerson] = useState('');
  const [totalDonation, setTotalDonation] = useState('');
  return <SafeAreaView style={_styles.OgHhHrPs}>
      <Text>Type of Donation: Group Donation</Text>
      <Text>Location: San Diego</Text>
      <Text>Type of Debt: Student Loan</Text>
      <Text>Recipient Details: 25 Females of Asian ethnicity between the ages of 18 and 24</Text>
      <Text>How much do you want to donate?</Text>
      <TextInput style={_styles.lEIFWagu} onChangeText={text => setAmount(text)} value={amount} />
      <Text>For Each:</Text>
      <Picker>
        <Picker.Item label="Option 1" value="1" />
        <Picker.Item label="Option 2" value="2" />
      </Picker>
      <Text>Number of People:</Text>
      <TextInput style={_styles.CohujEEE} onChangeText={text => setNumPeople(text)} value={numPeople} />
      <Text>Donate to all 25 People:</Text>
      <Switch trackColor={{
      false: "#767577",
      true: "#81b0ff"
    }} thumbColor={donateAll ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={() => setDonateAll(previousState => !previousState)} value={donateAll} />
      <Text>Min Debt:</Text>
      <TextInput style={_styles.NnAnmFDD} onChangeText={text => setMinDebt(text)} value={minDebt} />
      <Text>Max Debt:</Text>
      <TextInput style={_styles.fAwlqZPL} onChangeText={text => setMaxDebt(text)} value={maxDebt} />
      <Text>Donate to people who currently have past due balances:</Text>
      <Switch trackColor={{
      false: "#767577",
      true: "#81b0ff"
    }} thumbColor={pastDue ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={() => setPastDue(previousState => !previousState)} value={pastDue} />
      <Text>Amount per person:</Text>
      <TextInput style={_styles.LcLDzChG} onChangeText={text => setAmountPerPerson(text)} value={amountPerPerson} />
      <Text>Your Total Donation:</Text>
      <TextInput style={_styles.FWUXDOiS} onChangeText={text => setTotalDonation(text)} value={totalDonation} />
      <View style={_styles.zHrwLdSM}>
        <Button title="Previous" onPress={() => console.log('Previous')} />
        <Button title="Next" onPress={() => console.log('Next')} />
      </View>
    </SafeAreaView>;
};

export default DonationScreen;

const _styles = StyleSheet.create({
  OgHhHrPs: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lEIFWagu: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  CohujEEE: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  NnAnmFDD: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  fAwlqZPL: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  LcLDzChG: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  FWUXDOiS: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  zHrwLdSM: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 50
  }
});