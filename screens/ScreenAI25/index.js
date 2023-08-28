import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView, View, Text, Image, ScrollView, Picker, FlatList, TouchableOpacity } from "react-native";

const CreatorProfile = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = React.useState("english");
  const subAccounts = [{
    id: "1",
    name: "Sub Account 1"
  }, {
    id: "2",
    name: "Sub Account 2"
  }, {
    id: "3",
    name: "Sub Account 3"
  }];
  return <SafeAreaView style={_styles.jjGJvgEb}>
      <ScrollView>
        <View style={_styles.gXyRVeAD}>
          <Image style={_styles.BniDWfAM} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Picker selectedValue={language} onValueChange={itemValue => setLanguage(itemValue)}>
            <Picker.Item label="English" value="english" />
            <Picker.Item label="Spanish" value="spanish" />
          </Picker>
          <Text style={_styles.AZmBEKHr}>Steps</Text>
          <Text>Merchant Account</Text>
          <Text>Master Pay Terms</Text>
          <Text>Import Header Profiles</Text>
          <Text>Create Sub Accounts</Text>
          <Text>Logo & links</Text>
          <Text>Create Sub Accounts</Text>
          <View style={_styles.WzMtxsKy}>
            <TouchableOpacity style={_styles.button} onPress={() => {}}>
              <Text style={_styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.button} onPress={() => {}}>
              <Text style={_styles.buttonText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={_styles.button} onPress={() => {
            navigation.navigate("ScreenAI26");
          }}>
              <Text style={_styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
          <Text style={_styles.BqYpXtXE}>Sub Accounts</Text>
          <FlatList data={subAccounts} keyExtractor={item => item.id} renderItem={({
          item
        }) => <View style={_styles.cJbuGuiU}>
                <Text>ID: {item.id}</Text>
                <Text>Account Name: {item.name}</Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={_styles.mKZDqZmm}>Edit/View</Text>
                </TouchableOpacity>
              </View>} />
          <TouchableOpacity style={_styles.button} onPress={() => {}}>
            <Text style={_styles.buttonText}>Create Sub Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default CreatorProfile;

const _styles = StyleSheet.create({
  jjGJvgEb: {
    flex: 1,
    backgroundColor: "#fff"
  },
  gXyRVeAD: {
    padding: 20
  },
  BniDWfAM: {
    width: 100,
    height: 100,
    alignSelf: "center"
  },
  AZmBEKHr: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  WzMtxsKy: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  BqYpXtXE: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  cJbuGuiU: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  mKZDqZmm: {
    color: "blue"
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    margin: 5
  },
  buttonText: {
    color: "#000",
    textAlign: "center"
  }
});