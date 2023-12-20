import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Dash_Post_View from './Dash_Post_View';
import Top_Bar_Layout from './Top_Bar_Layout';
import Navigation_Side_Tab_Layout from './Navigation_Side_Tab_Layout';
import Dash_Post_Layout from './Dash_Post_Layout';


export default function Dash_Page_Tab() {

  const windowDimensions = useWindowDimensions();

  const [screenHeight, setScreenHeight] = useState(windowDimensions.height);
  const [screenWidth, setScreenWidth] = useState(windowDimensions.width);

  useEffect(() => {
    setScreenHeight(windowDimensions.height);
    setScreenWidth(windowDimensions.width);

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
  }, [windowDimensions]);





  return (
    <View style={[styles.container, { height: screenHeight, width: screenWidth }]}>

    {/* <Dash_Post_Layout /> */}
      <View style={styles.content}>
        <View style={styles.mainView}>
          <View style={styles.leftSide}>
            <Navigation_Side_Tab_Layout />
          </View>
          <View style={styles.rightSide}>
            <View style={styles.topbar}>
              <Top_Bar_Layout />
            </View>
            <View style={styles.postBody}>
              <ScrollView style={{ padding: 20, paddingHorizontal: '13%' }}>
              <Dash_Post_View />
              </ScrollView>
            </View>
          </View>
        </View>
      </View>

      {/* <Dash_Photo_View /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: '#ECE9FF',
    padding: 20,
    overflow: 'hidden',
  },

  mainView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },

  leftSide: {
    flex: 1,
  },

  topbar: {
    flex: 1,
    paddingHorizontal: 20,
    marginHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#A4A5FD',
  },

  rightSide: {
    flex: 4.8,
  },

  postBody: { 
    flex: 7, 
    flexDirection: 'row',
  },
});
