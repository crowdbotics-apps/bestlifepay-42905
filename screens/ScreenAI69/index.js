import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TextInput, FlatList } from 'react-native';
const data = Array(10).fill({
  fileName: 'File Name',
  createdOn: 'Created On',
  uploadedOn: 'Uploaded On',
  createdBy: 'Created By',
  numberOfConsumers: 'Number of Consumers',
  totalBalance: 'Total Balance',
  qrCode: 'https://tinyurl.com/42evm3m3',
  type: 'Type',
  sentVia: 'Sent Via'
});

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.KStuTCOU}>
      <View style={_styles.CrMBeEcd}>
        <Text style={_styles.rsELDZjb}>Campaign History</Text>
        <TextInput placeholder="Search" style={_styles.yKJXZfGU} />
        <FlatList data={data} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <View style={_styles.SSxXbvMv}>
              <View>
                <Text>{item.fileName}</Text>
                <Text>{item.createdOn}</Text>
                <Text>{item.uploadedOn}</Text>
                <Text>{item.createdBy}</Text>
                <Text>{item.numberOfConsumers}</Text>
                <Text>{item.totalBalance}</Text>
                <Image source={{
            uri: item.qrCode
          }} style={_styles.lvrWQqIe} />
                <Text>{item.type}</Text>
                <Text>{item.sentVia}</Text>
              </View>
              <View>
                <Button title="Resend" onPress={() => {}} />
                <Button title="Delete" onPress={() => {}} style={_styles.DUKEQPkN} />
                <Button title="Export" onPress={() => {}} style={_styles.geKEDzwj} />
              </View>
            </View>} />
        <View style={_styles.ToNKTaJS}>
          <Button title="Previous" onPress={() => {}} />
          <Button title="Next" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  KStuTCOU: {
    flex: 1,
    backgroundColor: "#fff"
  },
  CrMBeEcd: {
    padding: 20
  },
  rsELDZjb: {
    fontSize: 24,
    fontWeight: "bold"
  },
  yKJXZfGU: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5
  },
  SSxXbvMv: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 20
  },
  lvrWQqIe: {
    width: 50,
    height: 50
  },
  DUKEQPkN: {
    marginTop: 10
  },
  geKEDzwj: {
    marginTop: 10
  },
  ToNKTaJS: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});