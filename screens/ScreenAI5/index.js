import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://tinyurl.com/42evm3m3',
    phoneNumber: '+1234567890',
    email: 'dummyemail@example.com',
    otherContactDetails: '123, ABC Street, XYZ City, 12345'
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{dummyData.text}</Text>
        <Image style={styles.image} source={{
        uri: dummyData.imageUrl
      }} />
        <Text style={styles.text}>{dummyData.phoneNumber}</Text>
        <Text style={styles.text}>{dummyData.email}</Text>
        <Text style={styles.text}>{dummyData.otherContactDetails}</Text>
        <Button title="Back" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  content: {
    flex: 1,
    padding: 16
  },
  text: {
    fontSize: 16,
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
export default ScreenComponent;