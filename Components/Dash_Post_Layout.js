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
import Post_Bottom_Bar from './Post_Bottom_Bar';
import Dash_Post_Body from './Dash_Post_Body';
import Post_Top_Bar from './Post_Top_Bar';


export default function Dash_Post_Layout() {

  return (
    <View style={styles.container}>
    <View style={{flex: 1.5}}>
      <Post_Top_Bar />
    </View>
    <View style={{flex: 13.5}}>
      <Dash_Post_Body />
    </View>
    <View style={{flex: 1, paddingHorizontal: 10}}>      
      <Post_Bottom_Bar />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20
  },
});
