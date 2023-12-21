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
import Dash_Ques_View from './Dash_Ques_View';

export default function Dash_Page_Tab() {

  const windowDimensions = useWindowDimensions();
  const [selectedOption, setSelectedOption] = useState('Community Wall');

  const [screenHeight, setScreenHeight] = useState(windowDimensions.height);
  const [screenWidth, setScreenWidth] = useState(windowDimensions.width);

  useEffect(() => {
    setScreenHeight(windowDimensions.height);
    setScreenWidth(windowDimensions.width);

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
  }, [windowDimensions]);



  const renderContentView = () => {
    switch (selectedOption) {
      case 'Community Wall':
        return (
          <ScrollView style={{ padding: 20 }}>
          <Dash_Post_View />
          </ScrollView>
        );
      case 'QueryHub':
        return <Dash_Ques_View />;
      default:
        return null;
    }
  };



  return (
    <View style={[styles.container, { height: screenHeight, width: screenWidth }]}>
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

            <View style={styles.buttonArea}>
          <TouchableOpacity style={[styles.button,
          {
            borderBottomWidth: selectedOption === 'Community Wall' ? 2 : null,
            borderBottomColor: selectedOption === 'Community Wall' ? '#624DF6' : null
          }]}
            onPress={() => setSelectedOption('Community Wall')}
          >
            <Text
              style={[styles.buttonText,
              {
                color: selectedOption === 'Community Wall' ? 'black' : '#C5C5C5',
              }]}>
              Community Wall
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button,
            {
              borderBottomWidth: selectedOption === 'QueryHub' ? 2 : null,
              borderBottomColor: selectedOption === 'QueryHub' ? '#624DF6' : null
            }]}
            onPress={() => setSelectedOption('QueryHub')}
          >
            <Text
              style={[styles.buttonText,
              {
                color: selectedOption === 'QueryHub' ? 'black' : '#C5C5C5',
              }]}>
              QueryHub
            </Text>
          </TouchableOpacity>
        </View>

              {renderContentView()}
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

  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },

  button: {
    flex: 1,
    padding: 10,
  },

  buttonText: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  postBody: { 
    flex: 7, 
    flexDirection: 'column',
    paddingHorizontal: '13%',
  },
});
