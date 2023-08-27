import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    title: 'Credit Network',
    description: 'This is a detailed description about the Credit Network.',
    imageUrl: 'https://tinyurl.com/42evm3m3'
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{
        uri: dummyData.imageUrl
      }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{dummyData.title}</Text>
          <Text style={styles.description}>{dummyData.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  contentContainer: {
    padding: 16
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16
  },
  textContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  description: {
    fontSize: 16,
    color: '#333333'
  }
});
export default ScreenComponent;