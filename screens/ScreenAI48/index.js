import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Image, Picker, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedData, setSelectedData] = useState('');
  return <SafeAreaView style={styles.container}>
      <Button title="Download Sample Header" onPress={() => {}} />
      <Picker selectedValue={selectedTemplate} style={styles.picker} onValueChange={itemValue => setSelectedTemplate(itemValue)}>
        <Picker.Item label="Select Header Template" value="" />
        <Picker.Item label="Template 1" value="template1" />
        <Picker.Item label="Template 2" value="template2" />
      </Picker>
      <Button title="Create a Header template" onPress={() => {}} />
      <Picker selectedValue={selectedData} style={styles.picker} onValueChange={itemValue => setSelectedData(itemValue)}>
        <Picker.Item label="What is the data for?" value="" />
        <Picker.Item label="Data 1" value="data1" />
        <Picker.Item label="Data 2" value="data2" />
      </Picker>
      <Button title="Import File" onPress={() => {}} />
      <Text style={styles.headerPreview}>Header Mapping Preview</Text>
      <Text style={styles.dataField}>YouNegotiate Data Field</Text>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.iconText}>Your Uploaded Headers</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20
  },
  headerPreview: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  dataField: {
    fontSize: 16,
    marginBottom: 10
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  iconText: {
    fontSize: 16
  }
});
export default ScreenComponent;