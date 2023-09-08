import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const paymentsData = [{
  date: '01/01/2022',
  amount: '$100',
  balance: '$900',
  id: '1'
}, {
  date: '02/01/2022',
  amount: '$200',
  balance: '$700',
  id: '2'
}, {
  date: '03/01/2022',
  amount: '$300',
  balance: '$400',
  id: '3'
}, {
  date: '04/01/2022',
  amount: '$400',
  balance: '$0',
  id: '4'
}];

const PaymentScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <FlatList data={paymentsData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.row}>
            <Text style={styles.text}>{item.date}</Text>
            <Text style={styles.text}>{item.amount}</Text>
            <Text style={styles.text}>{item.balance}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  text: {
    fontSize: 16
  }
});
export default PaymentScreen;