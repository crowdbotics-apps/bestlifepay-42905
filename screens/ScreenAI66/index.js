import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, Picker, ScrollView } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.cHFwKpNo}>
      <ScrollView>
        <View style={_styles.LFvtaUxK}>
          <Text style={_styles.vghhEfNF}>Schedule Campaign</Text>

          <Text>Choose Template</Text>
          <Picker>
            <Picker.Item label="Template 1" value="template1" />
            <Picker.Item label="Template 2" value="template2" />
          </Picker>

          <Text>Choose Group</Text>
          <Picker>
            <Picker.Item label="Group 1" value="group1" />
            <Picker.Item label="Group 2" value="group2" />
          </Picker>

          <Text>Schedule Campaign</Text>
          <Picker>
            <Picker.Item label="Campaign 1" value="campaign1" />
            <Picker.Item label="Campaign 2" value="campaign2" />
          </Picker>

          <Text>Frequency</Text>
          <Picker>
            <Picker.Item label="Once" value="once" />
            <Picker.Item label="Daily" value="daily" />
            <Picker.Item label="Weekly" value="weekly" />
            <Picker.Item label="Monthly" value="monthly" />
          </Picker>

          <Text>Date</Text>
          <TextInput placeholder="Select Date" />

          <Text>Time Zone</Text>
          <TextInput placeholder="Search Time Zone" />

          <Button title="Next" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  cHFwKpNo: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  LFvtaUxK: {
    padding: 20
  },
  vghhEfNF: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  }
});