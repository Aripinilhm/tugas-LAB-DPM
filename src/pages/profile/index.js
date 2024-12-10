import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderProfile from '../../components/headerProfile';
import NavBarProfile from '../../components/navBarProfile';
import LifecycleComponent from '../../components/lifecycle';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <HeaderProfile />
      <LifecycleComponent />
      <NavBarProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
});

export default ProfilePage;
