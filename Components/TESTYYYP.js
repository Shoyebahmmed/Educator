import React from 'react';
import { View, StyleSheet } from 'react-native';

const TYSTYYYP = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBox1} />
      <View style={styles.roundedBox} />
      <View style={styles.topBox2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    margin: 20,
  },
  roundedBox: {
    width: 200,
    height: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#FF5733', // Add your desired color here
  },
  topBox1: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 50,
    borderRightWidth: 50,
    borderBottomEndRadius: 25,
    backgroundColor: 'transparent',
    borderTopColor: '#FF5733', // Match the color of the rounded box
    borderRightColor: '#FF5733', // Match the color of the rounded box
  },
  topBox2: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 50,
    borderRightWidth: 50,
    borderTopRightRadius: 25,
    backgroundColor: 'transparent',
    borderTopColor: '#FF5733', // Match the color of the rounded box
    borderRightColor: '#FF5733', // Match the color of the rounded box
  },
});

export default TYSTYYYP;
