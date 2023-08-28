import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text, Picker, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const CreatorProfileScreen = () => {
  const navigation = useNavigation();
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
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Set up creator profile</Text>
          <Text style={styles.subtitle}>Language</Text>
          <Picker selectedValue={language} style={styles.picker} onValueChange={itemValue => setLanguage(itemValue)}></Picker>
          <Text style={styles.subtitle}>Choose Membership plan</Text>
          {plans.map((plan, index) => <View key={index} style={styles.planContainer}>
              <Text>{plan.type}</Text>
              <Text>{plan.price}</Text>
              <Text>{plan.feature}</Text>
              <TouchableOpacity onPress={() => setPlan(plan.type)}>
                <Text style={styles.buttonText}>Choose plan</Text>
              </TouchableOpacity>
            </View>)}
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            navigation.navigate("ScreenAI15");
          }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default CreatorProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  innerContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20
  },
  picker: {
    height: 50,
    width: "100%"
  },
  planContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  buttonText: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: 10,
    borderRadius: 5,
    textAlign: "center"
  }
});