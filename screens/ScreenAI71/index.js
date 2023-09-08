import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList } from 'react-native';
const data = Array(10).fill({
  name: 'Consumer',
  status: 'Received',
  linkAction: 'Clicked',
  auth: 'Authorised',
  payment: 'Paid in Full',
  negotiations: '2',
  offers: '1'
});

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.lqwfnpMn}>
      <View style={_styles.XoKYcJJL}>
        <Text style={_styles.ddJDDsEw}>Options</Text>
        <Text style={_styles.kUPERYSG}>Click on any option to go to the respective screen</Text>
        <Text style={_styles.DAngtCky}>Summery</Text>
        <Text style={_styles.LlEBBMtn}>Campaign History</Text>
        <Text style={_styles.IiemHMXr}>Consumer Status</Text>
        <Text style={_styles.DzOEHAvh}>Campaign Performance</Text>
        <Text style={_styles.luZRbDLH}>Consumer Status- Display a list of all Consumer Who has received campaings</Text>
        <Text style={_styles.ucUVUcmx}>Show 10 (Edit) entries</Text>
        <TextInput style={_styles.auVtUvIb} placeholder="Search bar" />
        <Text style={_styles.PqyXKhgY}>List of all previous Campaign-Tabular view</Text>
        <Text style={_styles.dElAfaqi}>All consumers</Text>
        <FlatList data={data} renderItem={({
        item
      }) => <View style={_styles.rvZxtBvU}>
              <Text>{item.name}</Text>
              <Text>{item.status}</Text>
              <Text>{item.linkAction}</Text>
              <Text>{item.auth}</Text>
              <Text>{item.payment}</Text>
              <Text>{item.negotiations}</Text>
              <Text>{item.offers}</Text>
            </View>} />
        <View style={_styles.sNQwTVuK}>
          <Button title="Previous" onPress={() => {}} />
          <Button title="Next" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  lqwfnpMn: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  XoKYcJJL: {
    padding: 20
  },
  ddJDDsEw: {
    fontSize: 24,
    fontWeight: "bold"
  },
  kUPERYSG: {
    marginTop: 10
  },
  DAngtCky: {
    marginTop: 10
  },
  LlEBBMtn: {
    marginTop: 10
  },
  IiemHMXr: {
    marginTop: 10
  },
  DzOEHAvh: {
    marginTop: 10
  },
  luZRbDLH: {
    marginTop: 10
  },
  ucUVUcmx: {
    marginTop: 10
  },
  auVtUvIb: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  },
  PqyXKhgY: {
    marginTop: 10
  },
  dElAfaqi: {
    marginTop: 10
  },
  rvZxtBvU: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  sNQwTVuK: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});