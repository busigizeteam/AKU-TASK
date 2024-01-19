// DashboardScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation, route }) => {
  const handleViewProfile = () => {
    // Navigate to View Profile with user data
    navigation.navigate('Profile', { userData: route.params?.userData });
  };

  const handleLogout = () => {
    // Placeholder for logout functionality
    console.log('Logout');
    // Navigate back to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View Profile"
          onPress={handleViewProfile}
          color="#007bff"
          style={styles.button}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Logout"
          onPress={handleLogout}
          color="#d9534f"
          style={styles.button}
        />
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
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  },
  button: {
    marginBottom: 10,
  },
});

export default DashboardScreen;

