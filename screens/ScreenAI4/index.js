import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, TouchableOpacity, FlatList } from 'react-native';

const ScreenComponent = () => {
  const dummyData = Array(10).fill({
    name: 'Company',
    logo: 'https://tinyurl.com/42evm3m3',
    message: 'We love this app!'
  });
  return <SafeAreaView style={_styles.snPQDlOp}>
      <View style={_styles.tddXNxSA}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.CCGFUDAM} />
        <Text>App Name</Text>
        <Button title="Access my account" onPress={() => {}} />
      </View>
      <ScrollView>
        <Text style={_styles.jHfGYmCu}>Textual description</Text>
        <Button title="Create My Profile" onPress={() => {}} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.HOTOaxwr} />
        <Text style={_styles.evzIQUhe}>Our partners love what we do for you</Text>
        <FlatList data={dummyData} renderItem={({
        item
      }) => <View style={_styles.lePgMcAI}>
              <Image source={{
          uri: item.logo
        }} style={_styles.JDVmPBau} />
              <Text>{item.name}</Text>
            </View>} keyExtractor={(item, index) => index.toString()} />
        <Button title="Create My Profile" onPress={() => {}} />
        <Text style={_styles.qgEnjbix}>How it works</Text>
        <Button title="Get started" onPress={() => {}} />
        <Text style={_styles.MRNnoTGZ}>Consumer like us, a lot!</Text>
        <FlatList horizontal data={dummyData} renderItem={({
        item
      }) => <View style={_styles.zVogajBI}>
              <Image source={{
          uri: item.logo
        }} style={_styles.wPwiQEek} />
              <Text>{item.message}</Text>
            </View>} keyExtractor={(item, index) => index.toString()} />
        <Button title="Sign up now!" onPress={() => {}} />
        <Text style={_styles.YvsLyuaJ}>Security is the highest priority</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.sgWHRzHs} />
        <Button title="Get started" onPress={() => {}} />
      </ScrollView>
      <View style={_styles.RPOnXjUV}>
        <Text>App Name</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text>How it works</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Creditor network</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Contact us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  snPQDlOp: {
    flex: 1
  },
  tddXNxSA: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  CCGFUDAM: {
    width: 50,
    height: 50
  },
  jHfGYmCu: {
    fontSize: 24,
    padding: 10
  },
  HOTOaxwr: {
    width: "100%",
    height: 200
  },
  evzIQUhe: {
    fontSize: 24,
    padding: 10
  },
  lePgMcAI: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  JDVmPBau: {
    width: 50,
    height: 50
  },
  qgEnjbix: {
    fontSize: 24,
    padding: 10
  },
  MRNnoTGZ: {
    fontSize: 24,
    padding: 10
  },
  zVogajBI: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  wPwiQEek: {
    width: 50,
    height: 50
  },
  YvsLyuaJ: {
    fontSize: 24,
    padding: 10
  },
  sgWHRzHs: {
    width: "100%",
    height: 200
  },
  RPOnXjUV: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  }
});