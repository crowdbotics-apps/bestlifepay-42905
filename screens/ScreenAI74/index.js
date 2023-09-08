import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';

const PasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setNewPassword} value={newPassword} placeholder="New Password" secureTextEntry />
      <TextInput style={styles.input} onChangeText={setConfirmPassword} value={confirmPassword} placeholder="Confirm Password" secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => {}} color="#f44336" />
        <Button title="Save" onPress={() => {}} color="#4caf50" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  input: {
    height: 40,
    borderColor: '#9e9e9e',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 4
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default PasswordScreen;