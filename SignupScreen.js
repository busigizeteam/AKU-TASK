// SignupScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from './firebase'; // Update the path based on your project structure

const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const auth = getAuth(firebaseApp);

  const handleSignup = async () => {
    try {
      if (firstName && lastName && email && password) {
        // Create user with email and password
        await createUserWithEmailAndPassword(auth, email, password);

        // Simulate signup logic
        Alert.alert('Signup Successful', 'Welcome, ' + firstName);

        // Navigate to Dashboard upon successful signup
        navigation.navigate('Dashboard', {
          userData: { firstName, lastName, email },
        });
      } else {
        Alert.alert('Signup Failed', 'Please fill in all fields');
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
      Alert.alert('Signup Failed', 'Error creating user');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <Text style={styles.instructions}>Enter your first name:</Text>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <Text style={styles.instructions}>Enter your last name:</Text>
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <Text style={styles.instructions}>Enter your email:</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Text style={styles.instructions}>Enter your password:</Text>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Signup" onPress={handleSignup} color="#d9534f" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  },
});

export default SignupScreen;