import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, Text, TextInput, Button, Picker } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.cbJnYJMS}>
      <Text>Phone number</Text>
      <TextInput style={_styles.MdNyDzAP} />

      <Text>From time</Text>
      <Picker>
        <Picker.Item label="Morning" value="morning" />
        <Picker.Item label="Afternoon" value="afternoon" />
      </Picker>

      <Text>To</Text>
      <Picker>
        <Picker.Item label="Evening" value="evening" />
        <Picker.Item label="Night" value="night" />
      </Picker>

      <Text>Timezone</Text>
      <Picker>
        <Picker.Item label="EST" value="est" />
        <Picker.Item label="PST" value="pst" />
      </Picker>

      <Button title="Consumer Details" onPress={() => {}} />
      <Button title="Communication Permissions" onPress={() => {}} />
      <Button title="Custom Pay Terms" onPress={() => {}} />
      <Button title="Payments" onPress={() => {}} />

      <Text>Default Pay Terms</Text>

      <Text>Pay in Full Balance Discount %</Text>
      <TextInput style={_styles.vOkSbcoA} />

      <Text>Payment Plan Balance Discount %</Text>
      <TextInput style={_styles.MYRPeoaI} />

      <Text>Minimum monthly Payment % of balance</Text>
      <TextInput style={_styles.RdOyUFXp} />

      <Text>Days to first payment</Text>
      <TextInput style={_styles.rcvfLAmX} />

      <Text>Lowest auto offer approve terms</Text>
      <TextInput style={_styles.XaMWHmie} />

      <Button title="Override" onPress={() => {}} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  cbJnYJMS: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  MdNyDzAP: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  vOkSbcoA: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  MYRPeoaI: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  RdOyUFXp: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  rcvfLAmX: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  XaMWHmie: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});