import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ route }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch user details from storage or database
    const userData = route.params?.userData; // Access user data passed from navigation

    console.log('User Data in Profile:', userData);

    if (userData) {
      setUserDetails(userData);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Profile</Text>
      {userDetails ? (
        <View>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.value}>{userDetails.firstName}</Text>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.value}>{userDetails.lastName}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userDetails.email}</Text>
        </View>
      ) : (
        <Text>Loading profile...</Text>
      )}
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;
