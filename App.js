import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Home_Page from './Components/Home_Page';
import Load_Screen from './Components/Load_screen';
import Orientation from 'react-native-orientation-locker';
import Home_Mobile_Top_Bar from './Components/Home_Mobile_Top_Bar';
import Navigation_Side_Tab_Layout from './Components/Navigation_Side_Tab_Layout';

export default function App() {
 
  return (
        <Home_Page />
  );
}
