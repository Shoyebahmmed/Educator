import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Dash_Post_Layout from './Dash_Post_Layout';

export default function Dash_Post_View() {

  return (
    <View style={styles.container}>

      <Dash_Post_Layout />

      <Dash_Post_Layout />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
});
