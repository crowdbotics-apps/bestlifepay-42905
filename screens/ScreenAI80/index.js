import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, ScrollView, CheckBox, Switch, Picker } from 'react-native';

const DonationScreen = () => {
  const [isSelected, setSelection] = React.useState(false);
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return <SafeAreaView style={_styles.iFVsvhZT}>
      <ScrollView>
        <View style={_styles.LeqTQctX}>
          <Text style={_styles.ADmRhNMh}>Donation steps</Text>
          <Text style={_styles.iNMyAvHD}>Type of Donation: Someone you know</Text>
          <Text style={_styles.RalZNJPH}>Recipient Details</Text>
          <Text style={_styles.lDJEoMgw}>Donation Details</Text>
          <Text style={_styles.FiuYpJaH}>Payment</Text>
          <Text style={_styles.AObWiTNF}>How would you like to help the provided user?</Text>
          <Text style={_styles.PlgManrE}>Breakdown of users all debts in BestLifePay</Text>
          <View style={_styles.SJFXEorD}>
            <Text>Type of Debt</Text>
            <CheckBox value={isSelected} onValueChange={setSelection} />
          </View>
          <Text style={_styles.eILHNTGA}>Total Amount</Text>
          <Text style={_styles.TyqTGCiG}>Past Due</Text>
          <Text style={_styles.ylUtOYBa}>Your Contribution</Text>
          <View style={_styles.eqZbUPib}>
            <Text>Payoff all past due balances</Text>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
          </View>
          <Text style={_styles.OJGqPDil}>Your Total Contribution</Text>
          <Text style={_styles.AfTrDYyj}>Repeat My Donation(s)</Text>
          <Picker style={_styles.bkDAzKar}>
            <Picker.Item label="Date of the month" value="date" />
            <Picker.Item label="For number of Months" value="months" />
          </Picker>
          <View style={_styles.SedwXatt}>
            <Button title="Previous" onPress={() => {}} />
            <Button title="Next" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default DonationScreen;

const _styles = StyleSheet.create({
  iFVsvhZT: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  LeqTQctX: {
    padding: 20
  },
  ADmRhNMh: {
    fontSize: 24,
    fontWeight: "bold"
  },
  iNMyAvHD: {
    fontSize: 18,
    marginTop: 10
  },
  RalZNJPH: {
    fontSize: 18,
    marginTop: 10
  },
  lDJEoMgw: {
    fontSize: 18,
    marginTop: 10
  },
  FiuYpJaH: {
    fontSize: 18,
    marginTop: 10
  },
  AObWiTNF: {
    fontSize: 18,
    marginTop: 10
  },
  PlgManrE: {
    fontSize: 18,
    marginTop: 10
  },
  SJFXEorD: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  eILHNTGA: {
    fontSize: 18,
    marginTop: 10
  },
  TyqTGCiG: {
    fontSize: 18,
    marginTop: 10
  },
  ylUtOYBa: {
    fontSize: 18,
    marginTop: 10
  },
  eqZbUPib: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  OJGqPDil: {
    fontSize: 18,
    marginTop: 10
  },
  AfTrDYyj: {
    fontSize: 18,
    marginTop: 10
  },
  bkDAzKar: {
    height: 50,
    width: 150
  },
  SedwXatt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});