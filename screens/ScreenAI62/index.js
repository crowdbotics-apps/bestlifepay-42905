import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, Image, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const dummyData = Array(10).fill({
    fileName: 'File 1',
    createdOn: '01/01/2021',
    uploadedOn: '01/02/2021',
    createdBy: 'User 1',
    numberOfConsumers: 100,
    totalBalance: 1000,
    type: 'E-Letter',
    sentVia: 'Email'
  });
  return <SafeAreaView style={_styles.hQGdNyIl}>
      <ScrollView>
        <View style={_styles.aCLIzFlK}>
          <Text style={_styles.nEPJOXXf}>Options</Text>
          <Text>Click on any option to go to the respective screen</Text>
          <Button title="Summery" onPress={() => {}} />
          <Button title="Campaign History" onPress={() => {}} />
          <Button title="Consumer Status" onPress={() => {}} />
          <Button title="Campaign Performance" onPress={() => {}} />
          <Button title="Summery" onPress={() => {}} />
          <Button title="Show 10 (Edit) entries" onPress={() => {}} />
          <Button title="Download report- CSV Download" onPress={() => {}} />
          <Button title="Choose template" onPress={() => {}} />
          <Button title="Create group" onPress={() => {}} />
          <Button title="Schedule campaign" onPress={() => {}} />
          <TextInput placeholder="Search bar" style={_styles.FXgVFHNU} />
          <Text style={_styles.zEQwslnI}>List of all campaigns</Text>
          {dummyData.map((data, index) => <View key={index} style={_styles.bBGZbfNA}>
              <Text>{data.fileName}</Text>
              <Text>{data.createdOn}</Text>
              <Text>{data.uploadedOn}</Text>
              <Text>{data.createdBy}</Text>
              <Text>{data.numberOfConsumers}</Text>
              <Text>{data.totalBalance}</Text>
              <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.TUrlCbGr} />
              <Text>{data.type}</Text>
              <Text>{data.sentVia}</Text>
              <View style={_styles.UluUtDfD}>
                <Button title="Manage template" onPress={() => {}} />
                <Button title="Preview template" onPress={() => {}} />
                <Button title="Resend" onPress={() => {}} />
                <Button title="Delete" onPress={() => {}} />
                <Button title="Export" onPress={() => {}} />
              </View>
            </View>)}
          <View style={_styles.owWTkAeC}>
            <Button title="Previous" onPress={() => {}} />
            <Button title="Next" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  hQGdNyIl: {
    flex: 1,
    backgroundColor: "#fff"
  },
  aCLIzFlK: {
    padding: 20
  },
  nEPJOXXf: {
    fontSize: 24,
    fontWeight: "bold"
  },
  FXgVFHNU: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 20
  },
  zEQwslnI: {
    fontSize: 24,
    fontWeight: "bold"
  },
  bBGZbfNA: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  TUrlCbGr: {
    width: 50,
    height: 50
  },
  UluUtDfD: {
    flexDirection: "row"
  },
  owWTkAeC: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});