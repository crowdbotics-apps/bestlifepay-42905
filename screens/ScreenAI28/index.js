import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList, TouchableOpacity } from 'react-native';

const MyAccountsScreen = () => {
  const accounts = [{
    id: '1',
    name: 'Account 1',
    originalBalance: '1000',
    saveNow: '10',
    status: 'Active'
  } // Add more accounts as needed
  ];
  return <SafeAreaView style={_styles.uzrFoGEM}>
      <TextInput placeholder="Search" style={_styles.GAOgBpal} />

      <View style={_styles.ysXoHqfj}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.WdmCllZP} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.EAyKoIqE} />
      </View>

      <FlatList data={accounts} keyExtractor={item => item.id} renderItem={({
      item
    }) => <Pressable><View style={_styles.RCTuqXNZ}>
            <Pressable><Text>{item.name}</Text></Pressable>
            <Text>{item.originalBalance}</Text>
            <Text>{item.saveNow}</Text>
            <Text>{item.status}</Text>
            <Button title="See My Offers" onPress={() => {}} />
          </View></Pressable>} />

      <View style={_styles.kbieWvYO}>
        <TouchableOpacity onPress={() => {}}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>My Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Pending Creditor Response</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Accepted Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Pending Payments Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Paid in Full</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Reported / No Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Active Payment Plans</Text>
        </TouchableOpacity>
      </View>

      <Button title="Create Notice Response" onPress={() => {}} />
    </SafeAreaView>;
};

export default MyAccountsScreen;

const _styles = StyleSheet.create({
  uzrFoGEM: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  GAOgBpal: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  ysXoHqfj: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10
  },
  WdmCllZP: {
    width: 50,
    height: 50
  },
  EAyKoIqE: {
    width: 50,
    height: 50
  },
  RCTuqXNZ: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  kbieWvYO: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10
  }
});