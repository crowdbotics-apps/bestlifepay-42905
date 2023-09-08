import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, FlatList } from 'react-native';

const MyEcoMailbox = () => {
  const dummyData = [{
    id: '1',
    date: '2021-09-01',
    sender: 'John Doe'
  }, {
    id: '2',
    date: '2021-09-02',
    sender: 'Jane Doe'
  }, {
    id: '3',
    date: '2021-09-03',
    sender: 'Bob Smith'
  }];
  return <SafeAreaView style={_styles.JLAparxP}>
      <View style={_styles.nNXNXkeb}>
        <Text style={_styles.xlKhcJar}>MyEcoMailbox</Text>
        <Text style={_styles.gWRRHfTM}>Number of unread mails: {dummyData.length}</Text>

        <TextInput style={_styles.UgaXOUzK} placeholder="Search" />

        <Button title="Download All" onPress={() => {}} />

        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.nCTGdeHJ}>
              <Pressable><Text>{item.date}</Text></Pressable>
              <Text>{item.sender}</Text>
              <View style={_styles.DRhskxen}>
                <Button title="View" onPress={() => {}} />
                <Button title="Download" onPress={() => {}} />
                <Button title="Delete" onPress={() => {}} />
              </View>
            </View>} />

        <Button title="View My Offers" onPress={() => {}} />

        <View style={_styles.qyhjsjeq}>
          <Button title="Previous" onPress={() => {}} />
          <Button title="Next" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

export default MyEcoMailbox;

const _styles = StyleSheet.create({
  JLAparxP: {
    flex: 1,
    backgroundColor: "#fff"
  },
  nNXNXkeb: {
    padding: 20
  },
  xlKhcJar: {
    fontSize: 24,
    fontWeight: "bold"
  },
  gWRRHfTM: {
    fontSize: 18,
    color: "gray"
  },
  UgaXOUzK: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  },
  nCTGdeHJ: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  DRhskxen: {
    flexDirection: "row"
  },
  qyhjsjeq: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});