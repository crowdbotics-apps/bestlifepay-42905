import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Switch, Picker, Image, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Communication Permissions</Text>
      <Text style={styles.label}>Phone number</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>From time</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Morning" value="morning" />
        <Picker.Item label="Afternoon" value="afternoon" />
        <Picker.Item label="Evening" value="evening" />
      </Picker>
      <Text style={styles.label}>To</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Morning" value="morning" />
        <Picker.Item label="Afternoon" value="afternoon" />
        <Picker.Item label="Evening" value="evening" />
      </Picker>
      <Text style={styles.label}>Timezone</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="EST" value="est" />
        <Picker.Item label="CST" value="cst" />
        <Picker.Item label="MST" value="mst" />
        <Picker.Item label="PST" value="pst" />
      </Picker>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Text Communication</Text>
        <Switch trackColor={{
        false: "#767577",
        true: "#81b0ff"
      }} thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <Button title="Save" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  }
});
export default ScreenComponent;