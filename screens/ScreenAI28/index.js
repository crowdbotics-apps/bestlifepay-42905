import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList, TouchableOpacity } from 'react-native';

const MyAccountsScreen = () => {
  const navigation = useNavigation();
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

      <View style={_styles.ysXoHqfj} onPress={() => {
      navigation.navigate("ScreenAI31");
    }}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.WdmCllZP} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.EAyKoIqE} />
      </View>

      <FlatList data={accounts} keyExtractor={item => item.id} renderItem={({
      item
    }) => <Pressable onPress={() => {
      navigation.navigate("ScreenAI30");
    }}><View style={_styles.RCTuqXNZ}>
            <Pressable onPress={() => {
          navigation.navigate("ScreenAI29");
        }}><Text>{item.name}</Text></Pressable>
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

      <Button title="Create Notice Response" onPress={() => {}} style={_styles.MentWHVk} />
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI33");
    }}><Text style={_styles.nmnjXcoT}>{"Create offer "}</Text></Pressable><Pressable onPress={() => {
      navigation.navigate("ScreenAI37");
    }}><Text style={_styles.wtzBEGqZ}>{"EcoMailbox"}</Text></Pressable><Pressable onPress={() => {
      navigation.navigate("ScreenAI39");
    }}><Text style={_styles.MArrLtDb}>{"My Pay Calendar"}</Text></Pressable></SafeAreaView>;
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
    borderRadius: 5,
    width: 356,
    height: 57
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
    margin: 10,
    width: 313,
    height: 54,
    position: "absolute",
    left: 25,
    top: 366
  },
  MentWHVk: {
    width: 351,
    height: 32
  },
  nmnjXcoT: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  wtzBEGqZ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  MArrLtDb: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});