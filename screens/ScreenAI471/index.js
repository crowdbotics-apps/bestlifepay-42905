import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'File 1',
  uploadedOn: '01-01-2022',
  uploadedBy: 'User 1',
  uploadType: 'Type 1',
  status: 'Active'
}, {
  id: '2',
  name: 'File 2',
  uploadedOn: '02-01-2022',
  uploadedBy: 'User 2',
  uploadType: 'Type 2',
  status: 'Inactive'
} // Add more dummy data here
];

const ScreenComponent = () => {
  const navigation = useNavigation();

  const renderItem = ({
    item
  }) => <View style={_styles.RdDrcjeZ}>
      <Text>{item.name}</Text>
      <Text>{item.uploadedOn}</Text>
      <Text>{item.uploadedBy}</Text>
      <Text>{item.uploadType}</Text>
      <Text>{item.status}</Text>
      <TouchableOpacity onPress={() => console.log('Action pressed')}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.yFodSYEY} />
      </TouchableOpacity>
    </View>;

  return <SafeAreaView style={_styles.kpZDproQ}>
      <Button title="Import New Header" onPress={() => console.log('Import New Header pressed')} />
      <TextInput placeholder="Search" style={_styles.RGSVKwtx} />
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} ListHeaderComponent={() => <View style={_styles.RyLAnWAy}>
            <Text>Header Name</Text>
            <Text>Uploaded On</Text>
            <Text>Uploaded By</Text>
            <Text>Upload Type</Text>
            <Text>Status</Text>
            <Text>Action</Text>
          </View>} />
      <View style={_styles.bWLvtZSv}>
        <Button title="Previous" onPress={() => console.log('Previous pressed')} />
        <Text>Page Number</Text>
        <Button title="Next" onPress={() => console.log('Next pressed')} />
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI48");
    }}><Text style={_styles.AmraNQVJ}>{"Import new header "}</Text></Pressable></SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  RdDrcjeZ: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  yFodSYEY: {
    width: 20,
    height: 20
  },
  kpZDproQ: {
    flex: 1,
    padding: 20
  },
  RGSVKwtx: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  },
  RyLAnWAy: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  bWLvtZSv: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  AmraNQVJ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});