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
  return <SafeAreaView style={_styles.zysTtHnG}>
      <View style={_styles.EkSNGKmj}>
        <Text style={_styles.YaiENqhW}>Campaign History</Text>
        <TextInput placeholder="Search" style={_styles.GTMdJQYK} />
        <FlatList data={data} keyExtractor={(item, index) => index.toString()} renderItem={({
        item
      }) => <View style={_styles.xCbqTpOx}>
              <View>
                <Text>{item.fileName}</Text>
                <Text>{item.createdOn}</Text>
                <Text>{item.uploadedOn}</Text>
                <Text>{item.createdBy}</Text>
                <Text>{item.numberOfConsumers}</Text>
                <Text>{item.totalBalance}</Text>
                <Image source={{
            uri: item.qrCode
          }} style={_styles.DxnHtJdM} />
                <Text>{item.type}</Text>
                <Text>{item.sentVia}</Text>
              </View>
              <View>
                <Button title="Resend" onPress={() => {}} />
                <Button title="Delete" onPress={() => {}} style={_styles.HBJJljir} />
                <Button title="Export" onPress={() => {}} style={_styles.yUdbQTqC} />
              </View>
            </View>} />
        <View style={_styles.JbYXeXvi}>
          <Button title="Previous" onPress={() => {}} />
          <Button title="Next" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  zysTtHnG: {
    flex: 1,
    backgroundColor: "#fff"
  },
  EkSNGKmj: {
    padding: 20
  },
  YaiENqhW: {
    fontSize: 24,
    fontWeight: "bold"
  },
  GTMdJQYK: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5
  },
  xCbqTpOx: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5
  },
  DxnHtJdM: {
    width: 50,
    height: 50
  },
  HBJJljir: {
    marginTop: 10
  },
  yUdbQTqC: {
    marginTop: 10
  },
  JbYXeXvi: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});