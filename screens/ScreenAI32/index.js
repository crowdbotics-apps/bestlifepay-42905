import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, CheckBox, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Reason for reporting this account</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>Please dispute. This is not my account</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>Update, I never plan to pay this account</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>Bankruptcy</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>Deceased</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>Need Credit Counseling. Too many bills</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>Need consolidation loan. Too many bills</Text>
      </View>
      <Button title="Cancel" color="#841584" />
      <Button title="Submit" color="#841584" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  }
});
export default ScreenComponent;