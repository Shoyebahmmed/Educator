import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Home_Page from './Components/Home_Page';
import Load_Screen from './Components/Load_screen';
import Orientation from 'react-native-orientation-locker';
import Home_Mobile_Top_Bar from './Components/Home_Mobile_Top_Bar';
import Navigation_Side_Tab_Layout from './Components/Navigation_Side_Tab_Layout';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  const windowDimensions = useWindowDimensions();
  const [screenHeight, setScreenHeight] = useState(windowDimensions.height);
  const [screenWidth, setScreenWidth] = useState(windowDimensions.width);

  useEffect(() => {
    setScreenHeight(windowDimensions.height);
    setScreenWidth(windowDimensions.width);
  }, [windowDimensions]);


  const isTabletView = screenWidth > 600 && screenHeight > 600;

  useEffect(() => {
    const setOrientation = async () => {
      await ScreenOrientation.lockAsync(
        isTabletView
          ? ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
          : ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };

    setOrientation();

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, [isTabletView]);
 
  return (
<View style={[styles.component, { height: screenHeight, width: screenWidth }]}>
<StatusBar
        animated={true}
      />
  <Home_Page />
</View>

  );
}


const styles = StyleSheet.create({
  component: {
    flex: 1,
  },

});
