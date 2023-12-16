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
import Dash_Photo_Layout from './Dash_Photo_Layout';

export default function Dash_Photo_View() {
  const [images, setImages] = useState([
    require('./img/sample1.jpg'),
    require('./img/sample2.jpg'),
    require('./img/sample3.jpg'),
    require('./img/sample4.jpg'),
  ]);
  return (
    <View style={styles.container}>
      <Dash_Photo_Layout images={images}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
