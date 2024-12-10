import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import buttonStyles from '../../style/buttonStyles';

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah angka
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  // Fungsi untuk mereset angka ke 0
  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lifecycle Counter</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={buttonStyles.button} onPress={incrementCount}>
        <Text style={buttonStyles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[buttonStyles.button, styles.resetButton]}
        onPress={resetCount}
      >
        <Text style={buttonStyles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 16,
  },
  resetButton: {
    backgroundColor: '#d32f2f',
    marginTop: 10,
  },
});

export default LifecycleComponent;
