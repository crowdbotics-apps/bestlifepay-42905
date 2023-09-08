import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const UserScreen = () => {
  const [search, setSearch] = useState('');
  const dummyData = Array.from({
    length: 10
  }, (_, i) => ({
    id: i.toString(),
    firstName: `User ${i + 1}`,
    lastName: `Lastname ${i + 1}`,
    email: `user${i + 1}@example.com`,
    accessTo: 'Creditor',
    status: 'Active'
  }));

  const renderItem = ({
    item
  }) => <View style={styles.row}>
      <Text style={styles.cell}>{item.firstName}</Text>
      <Text style={styles.cell}>{item.lastName}</Text>
      <Text style={styles.cell}>{item.email}</Text>
      <Text style={styles.cell}>{item.accessTo}</Text>
      <Text style={styles.cell}>{item.status}</Text>
      <View style={styles.cell}>
        <Button title="Edit" onPress={() => {}} />
        <Button title="Reset Password" onPress={() => {}} />
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <Button title="Create User" onPress={() => {}} />
      <TextInput style={styles.search} placeholder="Search..." value={search} onChangeText={setSearch} />
      <View style={styles.row}>
        <Text style={styles.header}>First Name</Text>
        <Text style={styles.header}>Last Name</Text>
        <Text style={styles.header}>Email Address</Text>
        <Text style={styles.header}>Access To</Text>
        <Text style={styles.header}>User Status</Text>
        <Text style={styles.header}>Action</Text>
      </View>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  search: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold'
  }
});
export default UserScreen;