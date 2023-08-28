import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'File 1',
  uploadedOn: '2021-09-01',
  uploadedBy: 'User 1',
  uploadType: 'Type 1',
  status: 'Success'
}, {
  id: '2',
  name: 'File 2',
  uploadedOn: '2021-09-02',
  uploadedBy: 'User 2',
  uploadType: 'Type 2',
  status: 'Failed'
} // Add more dummy data here
];

const ScreenComponent = () => {
  const navigation = useNavigation();

  const renderItem = ({
    item
  }) => <View style={_styles.TVJuUNRd}>
      <Pressable><Text>{item.name}</Text></Pressable>
      <Text>{item.uploadedOn}</Text>
      <Text>{item.uploadedBy}</Text>
      <Text>{item.uploadType}</Text>
      <Text>{item.status}</Text>
      <TouchableOpacity onPress={() => console.log('Action pressed')}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.vMsfVVUi} />
      </TouchableOpacity>
    </View>;

  return <SafeAreaView style={_styles.xUdJhiHy}>
      
      <TextInput placeholder="Search" style={_styles.wbmIFWHQ} />
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} style={_styles.lSsQjEAx} />
      <View style={_styles.OvOmCZdk}>
        <Button title="Previous" onPress={() => console.log('Previous pressed')} />
        <Text>Page Number</Text>
        <Button title="Next" onPress={() => console.log('Next pressed')} />
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI48");
    }}><Text style={_styles.GglMdxEr}>{"Import new header"}</Text></Pressable></SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  TVJuUNRd: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  vMsfVVUi: {
    width: 20,
    height: 20
  },
  xUdJhiHy: {
    flex: 1,
    padding: 20
  },
  wbmIFWHQ: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  },
  lSsQjEAx: {
    marginTop: 20
  },
  OvOmCZdk: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  GglMdxEr: {
    width: 198,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  }
});