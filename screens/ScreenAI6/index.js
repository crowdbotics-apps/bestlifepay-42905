import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, FlatList } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  const dummyData = Array(10).fill({
    name: 'Company',
    logo: 'https://tinyurl.com/42evm3m3',
    message: 'We love this app!'
  });
  return <SafeAreaView style={_styles.nKcekGdY}>
      <View style={_styles.AVijOYpk}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.lWLwhhhh} />
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI3");
      }}><Text>{"Credit network"}</Text></Pressable>
        <Button title="Access my account" onPress={() => {}} />
      </View>
      <ScrollView>
        <View style={_styles.ixHZmxWo}>
          <Text>Textual description</Text>
          <Button title="Create My Profile" onPress={() => {}} />
          <Text>Trustpilot rating</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.exQLalPr} />
          <Text>Our partners love what we do for you</Text>
          <FlatList data={dummyData} renderItem={({
          item
        }) => <View style={_styles.efYiuXFQ}>
                <Image source={{
            uri: item.logo
          }} style={_styles.LPLzKopK} />
                <Text>{item.name}</Text>
              </View>} keyExtractor={(item, index) => index.toString()} />
          <Text>We are perfect</Text>
          <Text>Textual details</Text>
          <Button title="Create My Profile" onPress={() => {}} />
          <Text>How it works</Text>
          <Text>Steps 1 to 5</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.emmLGqhZ} />
          <Button title="Get started" onPress={() => {}} />
          <Text>Consumer like us, a lot!</Text>
          <FlatList horizontal data={dummyData} renderItem={({
          item
        }) => <View style={_styles.HdKPhWMi}>
                <Image source={{
            uri: item.logo
          }} style={_styles.bLSxjevu} />
                <Text>{item.name}</Text>
                <Text>{item.message}</Text>
              </View>} keyExtractor={(item, index) => index.toString()} />
          <Button title="Sign up now!" onPress={() => {}} />
          <Text>Security is the highest priority</Text>
          <Text>Textual details</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.sAvgoCUy} />
          <Button title="Get started" onPress={() => {}} />
        </View>
      </ScrollView>
      <View style={_styles.CohGkkKO}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.ctiVTfCG} />
        <Text>App Name</Text>
        <Button title="Contact us" onPress={() => {}} />
      <Pressable onPress={() => {
        navigation.navigate("ScreenAI4");
      }}><Text style={_styles.MdpAxMLr}>{"About the app/ FAQ"}</Text></Pressable></View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI7");
    }}><Text style={_styles.iVQwwZTw}></Text></Pressable><Pressable onPress={() => {
      navigation.navigate("ScreenAI5");
    }}><Text style={_styles.IMHsMwvL}></Text></Pressable></SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  nKcekGdY: {
    flex: 1
  },
  AVijOYpk: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  lWLwhhhh: {
    width: 50,
    height: 50
  },
  ixHZmxWo: {
    padding: 10
  },
  exQLalPr: {
    width: "100%",
    height: 200
  },
  efYiuXFQ: {
    flexDirection: "row",
    alignItems: "center"
  },
  LPLzKopK: {
    width: 50,
    height: 50
  },
  emmLGqhZ: {
    width: "100%",
    height: 200
  },
  HdKPhWMi: {
    flexDirection: "row",
    alignItems: "center"
  },
  bLSxjevu: {
    width: 50,
    height: 50
  },
  sAvgoCUy: {
    width: "100%",
    height: 200
  },
  CohGkkKO: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  ctiVTfCG: {
    width: 50,
    height: 50
  },
  iVQwwZTw: {
    width: 329,
    height: 32,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 10,
    top: -539
  },
  MdpAxMLr: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  IMHsMwvL: {
    width: 103,
    height: 51,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 138,
    top: -61
  }
});