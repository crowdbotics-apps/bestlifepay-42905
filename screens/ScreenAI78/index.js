import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const dummyData = Array.from({
    length: 10
  }, (_, i) => ({
    id: i,
    paidAmount: Math.random() * 100,
    payMethod: 'Credit Card',
    dueDate: new Date().toISOString().split('T')[0],
    paymentStatus: 'Paid',
    paymentDate: new Date().toISOString().split('T')[0],
    transactionId: Math.floor(Math.random() * 10000)
  }));
  return <SafeAreaView style={_styles.zsYPKlnS}>
      <TextInput placeholder="Phone number" style={_styles.roQSJIEG} />
      <TextInput placeholder="From time" style={_styles.gEQSjUiC} />
      <TextInput placeholder="To" style={_styles.IqAYZIQt} />
      <TextInput placeholder="Timezone" style={_styles.hLEZOEQe} />
      <Button title="Consumer Details" onPress={() => {}} style={_styles.eXQpXJRO} />
      <Button title="Communication Permissions" onPress={() => {}} />
      <Button title="Custom Pay Terms" onPress={() => {}} />
      <Button title="Payments" onPress={() => {}} />
      <Button title="Download" onPress={() => {}} />
      <TextInput placeholder="Search" style={_styles.TYxBrRDK} />
      <FlatList data={dummyData} keyExtractor={item => item.id.toString()} renderItem={({
      item
    }) => <View style={_styles.MmFYIoKi}>
            <Text>{item.paidAmount}</Text>
            <Text>{item.payMethod}</Text>
            <Text>{item.dueDate}</Text>
            <Text>{item.paymentStatus}</Text>
            <Text>{item.paymentDate}</Text>
            <Text>{item.transactionId}</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={_styles.qjgSbxum}>Action</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text style={_styles.XZprZmMH}>Change Date</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text style={_styles.vwmlyVbh}>Skip</Text>
            </TouchableOpacity>
          </View>} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  zsYPKlnS: {
    flex: 1,
    padding: 20
  },
  roQSJIEG: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  gEQSjUiC: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  IqAYZIQt: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  hLEZOEQe: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  TYxBrRDK: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  MmFYIoKi: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  qjgSbxum: {
    color: "blue"
  },
  XZprZmMH: {
    color: "blue"
  },
  vwmlyVbh: {
    color: "blue"
  },
  eXQpXJRO: {
    position: "relative"
  }
});