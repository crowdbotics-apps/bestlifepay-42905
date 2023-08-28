import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Consumer name</Text>
          <Text style={styles.title}>Consumer id</Text>
          <Text style={styles.title}>More options</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Account Name</Text>
          <Text style={styles.title}>Original Balance</Text>
          <Text style={styles.title}>Current Balance</Text>
          <Text style={styles.title}>Discounted Pay off</Text>
          <Text style={styles.title}>Account Status</Text>
          <Text style={styles.title}>Invitation Link</Text>
        </View>
        <View style={styles.section}>
          <Button title="Accept" onPress={() => {}} />
          <Button title="Counter" onPress={() => {}} />
          <Button title="Decline" onPress={() => {}} />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Offer details</Text>
          <Text style={styles.title}>Offer date</Text>
          <Text style={styles.title}>Frequency</Text>
          <Text style={styles.title}>Pay/month</Text>
          <Text style={styles.title}>First Pay Date</Text>
          <Text style={styles.title}>Payment Profile Status</Text>
          <Text style={styles.title}>Not yet setup</Text>
          <Text style={styles.title}>Active</Text>
          <Text style={styles.title}>Current Balance</Text>
          <Text style={styles.title}>Notes from your Customer</Text>
          <Text style={styles.title}>Current Offer Summary</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Tabular view</Text>
          <Text style={styles.title}>Offer Description</Text>
          <Text style={styles.title}>Our Offer</Text>
          <Text style={styles.title}>Customer’s Offer</Text>
          <Text style={styles.title}>Counter Offer</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  section: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
export default ScreenComponent;