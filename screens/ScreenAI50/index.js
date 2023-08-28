import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  title: 'Document 1'
}, {
  id: '2',
  title: 'Document 2'
}, {
  id: '3',
  title: 'Document 3'
}, {
  id: '4',
  title: 'Document 4'
}, {
  id: '5',
  title: 'Document 5'
}];

const TaxDocumentsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>List of all Tax Documents</Text>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Button title="Download" onPress={() => {}} />
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10
  }
});
export default TaxDocumentsScreen;