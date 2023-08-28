import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Picker, ScrollView } from "react-native";

const CreatorProfileScreen = () => {
  const [language, setLanguage] = React.useState("english");
  const [plan, setPlan] = React.useState("basic");
  const plans = [{
    type: "Basic",
    price: "$10",
    feature: "Feature 1"
  }, {
    type: "Premium",
    price: "$20",
    feature: "Feature 2"
  }, {
    type: "Pro",
    price: "$30",
    feature: "Feature 3"
  }];
  return <SafeAreaView style={_styles.vYQaTMwn}>
      <ScrollView>
        <View style={_styles.vorEyqkU}>
          <Text style={_styles.QwcMNRHJ}>Set up creator profile</Text>
          <Text style={_styles.xIMduUey}>Language</Text>
          <Picker selectedValue={language} style={_styles.jxVdLmMS} onValueChange={itemValue => setLanguage(itemValue)}></Picker>
          <Text style={_styles.RdRoryGh}>Choose Membership plan</Text>
          {plans.map((plan, index) => <View key={index} style={_styles.CmQjmnqj}>
              <Text>{plan.type}</Text>
              <Text>{plan.price}</Text>
              <Text>{plan.feature}</Text>
              <TouchableOpacity onPress={() => setPlan(plan.type)}>
                <Text style={_styles.buttonText}>Choose plan</Text>
              </TouchableOpacity>
            </View>)}
          <View style={_styles.wuIEsBHt}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={_styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={_styles.JUbZGpbt}>
              <Text style={_styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default CreatorProfileScreen;

const _styles = StyleSheet.create({
  vYQaTMwn: {
    flex: 1,
    backgroundColor: "#fff"
  },
  vorEyqkU: {
    padding: 20
  },
  QwcMNRHJ: {
    fontSize: 24,
    fontWeight: "bold"
  },
  xIMduUey: {
    fontSize: 18,
    marginTop: 20
  },
  jxVdLmMS: {
    height: 50,
    width: "100%"
  },
  RdRoryGh: {
    fontSize: 18,
    marginTop: 20
  },
  CmQjmnqj: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  wuIEsBHt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: 306,
    height: 32
  },
  JUbZGpbt: {
    position: "relative"
  },
  buttonText: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center'
  }
});