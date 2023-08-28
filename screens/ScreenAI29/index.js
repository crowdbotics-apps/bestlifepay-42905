import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const AccountScreen = () => {
  const dummyData = {
    account: 'Current Account Placement',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    email: 'example@example.com'
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.accountContainer}>
        <Text style={styles.title}>Account Contact Details</Text>
        <Text style={styles.account}>{dummyData.account}</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.info}>{dummyData.phone}</Text>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.info}>{dummyData.address}</Text>
        <Text style={styles.label}>Email Address</Text>
        <Text style={styles.info}>{dummyData.email}</Text>
        <Button title="Close" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  account: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start'
  },
  info: {
    fontSize: 14,
    marginBottom: 20,
    alignSelf: 'flex-start'
  }
});
export default AccountScreen;