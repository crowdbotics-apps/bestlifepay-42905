import React from 'react';
import { SafeAreaView, View, Text, Button, Image, Picker, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <Button title="Download Sample Header" onPress={() => {}} />
      <Picker selectedValue="template1">
        <Picker.Item label="Select Header Template" value="" />
        <Picker.Item label="Template 1" value="template1" />
        <Picker.Item label="Template 2" value="template2" />
      </Picker>
      <Button title="Create a Header template" onPress={() => {}} />
      <Picker selectedValue="data1">
        <Picker.Item label="What is the data for?" value="" />
        <Picker.Item label="Data 1" value="data1" />
        <Picker.Item label="Data 2" value="data2" />
      </Picker>
      <Button title="Import File" onPress={() => {}} />
      <Text style={styles.header}>Header Mapping Preview</Text>
      <Text style={styles.header}>YouNegotiate Data Field</Text>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text>Your Uploaded Headers</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8
  }
});
export default ScreenComponent;