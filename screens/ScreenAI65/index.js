import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, Image, Picker } from 'react-native';

const ScreenComponent = () => {
  const [groupName, setGroupName] = useState('');
  const [consumerGroup, setConsumerGroup] = useState('');
  const consumerGroups = ['Master', 'all'];
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.label}>Group Name</Text>
      <TextInput style={styles.input} onChangeText={setGroupName} value={groupName} placeholder="Enter Group Name" />
      <Text style={styles.label}>Consumer Group</Text>
      <Picker selectedValue={consumerGroup} style={styles.picker} onValueChange={itemValue => setConsumerGroup(itemValue)}>
        {consumerGroups.map((group, index) => <Picker.Item key={index} label={group} value={group} />)}
      </Picker>
      <Button title="Create" onPress={() => console.log('Create button pressed')} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  image: {
    width: 100,
    height: 100,
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
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 20
  }
});
export default ScreenComponent;