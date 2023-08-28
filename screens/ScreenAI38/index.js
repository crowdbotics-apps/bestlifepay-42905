import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const EmailView = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.emailHeader}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.subject}>Subject</Text>
        <Text style={styles.date}>Date</Text>
      </View>
      <View style={styles.emailBody}>
        <Text style={styles.message}>Message</Text>
      </View>
      <View style={styles.emailFooter}>
        <Button title="View My Offers" onPress={() => {}} />
        <Button title="Download pdf" onPress={() => {}} />
        <Button title="Close" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  emailHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subject: {
    fontSize: 20,
    color: 'gray'
  },
  date: {
    fontSize: 16,
    color: 'gray'
  },
  emailBody: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    fontSize: 18
  },
  emailFooter: {
    flex: 1,
    justifyContent: 'space-around'
  }
});
export default EmailView;