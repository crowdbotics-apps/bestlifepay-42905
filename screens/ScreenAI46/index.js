import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'File 1',
  uploadedOn: '01-01-2022',
  uploadedBy: 'User 1',
  uploadType: 'Type 1',
  totalRecords: 100,
  processedRecords: 90,
  status: 'Success'
}, {
  id: '2',
  name: 'File 2',
  uploadedOn: '02-02-2022',
  uploadedBy: 'User 2',
  uploadType: 'Type 2',
  totalRecords: 200,
  processedRecords: 180,
  status: 'Failed'
} // Add more dummy data here
];

const ScreenComponent = () => {
  const renderItem = ({
    item
  }) => <View style={_styles.eIRHhaew}>
      <Pressable><Text>{item.name}</Text></Pressable>
      <Text>{item.uploadedOn}</Text>
      <Text>{item.uploadedBy}</Text>
      <Text>{item.uploadType}</Text>
      <Text>{item.totalRecords}</Text>
      <Text>{item.processedRecords}</Text>
      <Text>{item.status}</Text>
      {item.status === 'Failed' && <Button title="Download file" onPress={() => {}} />}
    </View>;

  return <SafeAreaView style={_styles.lkneUVUo}>
      <Button title="Import a new file" onPress={() => {}} />
      <TextInput style={_styles.JOBcnwXv} placeholder="Search" />
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={_styles.WktODZYf}>
        <Button title="Previous" onPress={() => {}} />
        <Text>Page number</Text>
        <Button title="Next" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  eIRHhaew: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  lkneUVUo: {
    flex: 1,
    padding: 20
  },
  JOBcnwXv: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  },
  WktODZYf: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  }
});