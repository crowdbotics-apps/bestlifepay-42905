import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
const data = [{
  id: '1',
  date: '2021-09-01',
  name: 'John Doe',
  client: 'Client A',
  balance: '1000',
  status: 'New',
  paymentProfile: 'Profile A',
  paymentProfileOn: '2021-09-01'
}, {
  id: '2',
  date: '2021-09-02',
  name: 'Jane Doe',
  client: 'Client B',
  balance: '2000',
  status: 'Approved',
  paymentProfile: 'Profile B',
  paymentProfileOn: '2021-09-02'
} // Add more data here
];

const Item = ({
  item
}) => <View style={_styles.thxNBbyv}>
    <Text>{item.date}</Text>
    <Text>{item.name}</Text>
    <Pressable><Text>{item.client}</Text></Pressable>
    <Text>{item.balance}</Text>
    <Text>{item.status}</Text>
    <Text>{item.paymentProfile}</Text>
    <Text>{item.paymentProfileOn}</Text>
    <TouchableOpacity style={_styles.YanghVMB}>
      <Text style={_styles.CisKPcuP}>Action</Text>
    </TouchableOpacity>
  </View>;

const App = () => {
  return <SafeAreaView style={_styles.BftczXNf}>
      <Text style={_styles.tKHxqXcD}>List of consumer offers</Text>
      <Text>Filter</Text>
      <Text>Offers Summary</Text>
      <Text>New Offers</Text>
      <Text>Approved Offers</Text>
      <Text>Counter Offers Sent</Text>
      <Text>Show 7 entries</Text>
      <Button title="Download report" onPress={() => {}} />
      <TextInput placeholder="Search" style={_styles.jLSLhWHt} />
      <FlatList data={data} renderItem={({
      item
    }) => <Item item={item} />} keyExtractor={item => item.id} />
      <View style={_styles.eTyWxLdp}>
        <Button title="Previous" onPress={() => {}} />
        <Text>Page number</Text>
        <Button title="Next" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  thxNBbyv: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  YanghVMB: {
    backgroundColor: "blue",
    padding: 10
  },
  CisKPcuP: {
    color: "white"
  },
  BftczXNf: {
    flex: 1,
    padding: 20
  },
  tKHxqXcD: {
    fontSize: 24,
    fontWeight: "bold"
  },
  jLSLhWHt: {
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  },
  eTyWxLdp: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});