import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

const FAQScreen = () => {
  const faqData = [{
    section: 'General',
    faqs: [{
      question: 'How to use the app?',
      answer: 'You can start by signing up and creating your profile.'
    }, {
      question: 'Is the app free?',
      answer: 'Yes, the app is free to download and use.'
    }]
  }, {
    section: 'Account',
    faqs: [{
      question: 'How to reset my password?',
      answer: 'You can reset your password from the account settings.'
    }, {
      question: 'How to delete my account?',
      answer: 'You can delete your account from the account settings.'
    }]
  }];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.title}>Frequently Asked Questions</Text>
        </View>
        {faqData.map((section, index) => <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.section}</Text>
            {section.faqs.map((faq, index) => <View key={index} style={styles.faq}>
                <Text style={styles.question}>{faq.question}</Text>
                <Text style={styles.answer}>{faq.answer}</Text>
              </View>)}
          </View>)}
        <Button title="Back" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  faq: {
    marginBottom: 10
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  answer: {
    fontSize: 16
  }
});
export default FAQScreen;