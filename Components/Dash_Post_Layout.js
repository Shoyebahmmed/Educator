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
import { Shadow } from 'react-native-shadow-2';
import Post_Bottom_Bar from './Post_Bottom_Bar';
import Dash_Post_Body from './Dash_Post_Body';
import Post_Top_Bar from './Post_Top_Bar';


export default function Dash_Post_Layout() {

  return (
    <Shadow style={styles.container}>
    <View style={{flex: 1}}>
      <Post_Top_Bar />
    </View>
    <View style={{flex: 10, padding: 10}}>
      <Dash_Post_Body />
    </View>
    <View style={{flex: 5, paddingHorizontal: 10}}>      
      <Post_Bottom_Bar />
    </View>

    </Shadow>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 40,
  },
});
