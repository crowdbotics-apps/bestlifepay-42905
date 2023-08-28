import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const CalendarScreen = () => {
  const calendars = [{
    name: 'Exchange Calendar',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    name: 'Google Calendar',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    name: 'iCloud Calendar',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    name: 'Office 365',
    image: 'https://tinyurl.com/42evm3m3'
  }];
  return <SafeAreaView style={styles.container}>
      {calendars.map((calendar, index) => <View key={index} style={styles.calendarContainer}>
          <Image source={{
        uri: calendar.image
      }} style={styles.calendarImage} />
          <Text style={styles.calendarText}>{calendar.name}</Text>
          <Button title="Connect" onPress={() => {}} />
        </View>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  calendarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  calendarImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  calendarText: {
    fontSize: 18,
    marginRight: 10
  }
});
export default CalendarScreen;