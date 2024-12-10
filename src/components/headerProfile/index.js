import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HeaderProfile = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: 'https://via.placeholder.com/150',
        }}
        style={styles.avatar}
      />
      <Text style={styles.title}>Arifin</Text>
      <Text style={styles.subtitle}>223510762</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
  },
});

export default HeaderProfile;
