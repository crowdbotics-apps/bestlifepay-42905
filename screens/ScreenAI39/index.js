import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, Image, ScrollView, FlatList } from 'react-native';
const paymentsData = [{
  id: '1',
  name: 'Bill 1',
  dueDate: '2022-09-15',
  amount: '$100',
  method: 'Credit Card'
}, {
  id: '2',
  name: 'Bill 2',
  dueDate: '2022-09-20',
  amount: '$200',
  method: 'Debit Card'
} // Add more data as needed
];

const MyPaymentsScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={_styles.DEsjMaYm}>
      <ScrollView>
        <View style={_styles.TlSCfXGa}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI40");
        }}><Text style={_styles.KQJfIlOU}>My Payments Calendar</Text></Pressable>
          <Button title="Add To My Calendar" onPress={() => {}} />
          <Button title="Print Payment Calendar" onPress={() => {}} />
          <Text style={_styles.DpmFjymR}>Month view</Text>
          <Image style={_styles.wLbWahQa} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Button title="Add Event" onPress={() => {}} />
          <Text style={_styles.HVrWDDeq}>Upcoming Payments</Text>
        </View>
        <FlatList data={paymentsData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.aWEPuSqt}>
              <Text>{item.name}</Text>
              <Text>{item.dueDate}</Text>
              <Text>{item.amount}</Text>
              <Text>{item.method}</Text>
              <Button title="Edit" onPress={() => {}} />
              <Button title="Manage Payment" onPress={() => {}} />
            </View>} />
      </ScrollView>
    </SafeAreaView>;
};

export default MyPaymentsScreen;

const _styles = StyleSheet.create({
  DEsjMaYm: {
    flex: 1,
    backgroundColor: "#fff"
  },
  TlSCfXGa: {
    alignItems: "center",
    padding: 20
  },
  KQJfIlOU: {
    fontSize: 24,
    fontWeight: "bold"
  },
  DpmFjymR: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  wLbWahQa: {
    width: "100%",
    height: 200,
    resizeMode: "contain"
  },
  HVrWDDeq: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  aWEPuSqt: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  }
});