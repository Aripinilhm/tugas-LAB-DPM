import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import ProfilePage from './src/pages/profile';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfilePage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
