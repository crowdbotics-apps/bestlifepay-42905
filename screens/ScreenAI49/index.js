import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
const donations = [{
  type: 'Medical',
  date: '01/01/2022',
  people: 5,
  amount: 500
}, {
  type: 'Student Loans',
  date: '02/01/2022',
  people: 3,
  amount: 300
}, {
  type: 'Miscellaneous',
  date: '03/01/2022',
  people: 2,
  amount: 200
}];
const totalAmount = donations.reduce((total, donation) => total + donation.amount, 0);

const DonationScreen = () => <SafeAreaView style={styles.container}>
    <Button title="Donate NOW" onPress={() => {}} />
    <Text style={styles.title}>Recent Donations</Text>
    <FlatList data={donations} keyExtractor={item => item.date} renderItem={({
    item
  }) => <View style={styles.listItem}>
          <Text>{item.type}</Text>
          <Text>{item.date}</Text>
          <Text>Donate to {item.people} people</Text>
          <Text>Amount donated: {item.amount}</Text>
        </View>} />
    <Text style={styles.title}>Total Amount Donated: {totalAmount}</Text>
    <Text style={styles.title}>Your Donation Breakdown</Text>
    <Image style={styles.image} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <Pressable><Text style={styles.title}>Tax Documents</Text></Pressable>
    <Button title="View now" onPress={() => {}} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  listItem: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    marginVertical: 5
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10
  }
});
export default DonationScreen;