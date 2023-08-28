import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Picker, CheckBox } from "react-native";

const CreatorProfile = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState("english");
  const [individual, setIndividual] = useState(false);
  const [company, setCompany] = useState(false);
  return <SafeAreaView style={_styles.MqjheXYm}>
      <Text>Set up creator profile</Text>
      <Picker selectedValue={language} style={_styles.GJHRUSgx} onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}>
        <Picker.Item label="English" value="english" />
        <Picker.Item label="Spanish" value="spanish" />
      </Picker>
      <Text>Steps</Text>
      <Text>Business type</Text>
      <Text>Business info</Text>
      <Text>Owners info</Text>
      <Text>Choose Membership plan</Text>
      <Text>Billing details</Text>
      <Text>Step-1 Business type</Text>
      <View style={_styles.XTiRxczD}>
        <TouchableOpacity style={_styles.button} onPress={() => console.log("Go to previous screen")}>
          <Text style={_styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.button} onPress={() => {
        navigation.navigate("ScreenAI12");
      }}>
          <Text style={_styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={_styles.mpRtDnXU}>
        <CheckBox value={individual} onValueChange={setIndividual} />
        <Text>Individual</Text>
      </View>
      <View style={_styles.wTIyJBzw}>
        <CheckBox value={company} onValueChange={setCompany} />
        <Text>Company</Text>
      </View>
    </SafeAreaView>;
};

export default CreatorProfile;

const _styles = StyleSheet.create({
  MqjheXYm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  GJHRUSgx: {
    height: 50,
    width: 150
  },
  XTiRxczD: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20
  },
  mpRtDnXU: {
    flexDirection: "row",
    alignItems: "center"
  },
  wTIyJBzw: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#008CBA",
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  }
});