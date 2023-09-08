import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TransactionScreen = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const transactions = [{
    id: '1',
    type: 'Deposit',
    amount: '100',
    status: 'Completed',
    date: '2021-09-01 10:00:00'
  }, {
    id: '2',
    type: 'Withdrawal',
    amount: '50',
    status: 'Pending',
    date: '2021-09-02 11:00:00'
  }, {
    id: '3',
    type: 'Transfer',
    amount: '200',
    status: 'Failed',
    date: '2021-09-03 12:00:00'
  }];
  return <SafeAreaView style={styles.container}>
      <DateTimePicker testID="dateTimePicker" value={date} mode="date" display="default" onChange={onChange} />
      <FlatList data={transactions} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.item}>
            <Text style={styles.title}>{item.type}</Text>
            <Text style={styles.details}>Amount: {item.amount}</Text>
            <Text style={styles.details}>Status: {item.status}</Text>
            <Text style={styles.details}>Date: {item.date}</Text>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
          </View>} />
      <Button title="Back" onPress={() => console.log('Back')} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  details: {
    fontSize: 16
  },
  image: {
    width: 50,
    height: 50
  }
});
export default TransactionScreen;