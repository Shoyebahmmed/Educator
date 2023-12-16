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
import Dash_Page_Tab from './Dash_Page_Tab';


export default function Dash_Page() {

  return (
    <View style={styles.container}>
      <Dash_Page_Tab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
