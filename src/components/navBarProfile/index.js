import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavBarProfile = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.link}>Home</Text>
      <Text style={styles.link}>Profile</Text>
      <Text style={styles.link}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'grey',
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NavBarProfile;
