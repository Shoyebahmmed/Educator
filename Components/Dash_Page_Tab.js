import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';
import Dash_Post_View from './Dash_Post_View';
import Top_Bar_Layout from './Top_Bar_Layout';
import Navigation_Side_Tab_Layout from './Navigation_Side_Tab_Layout';
import Dash_Post_Layout from './Dash_Post_Layout';
import Dash_Ques_View from './Dash_Ques_View';
import Dash_Add_Post_Layout from './Dash_Add_Post_Layout';
import Dash_Switch_Button_Layout from './Dash_Switch_Button_Layout';

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
          <ScrollView style={{ paddingHorizontal: 20 }}>
            <Dash_Post_View />
          </ScrollView>
        );
      case 'QueryHub':
        return <Dash_Ques_View />;
      default:
        return null;
    }
  };


  const handleOptionSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
    setSelectedOption(selectedOption);
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
              <View style={{ flex: 3 }}>

                <View style={{ flex: 1.5}}>

                <View style={{
                  flex: 1,
                  backgroundColor: '#FAFAFF', 
                  marginTop: 20, 
                  marginHorizontal: 20, 
                  borderRadius: 30,
                  paddingBottom: 20
                  }}>
                <Dash_Add_Post_Layout />
                </View>
                  
                </View>

                <View style={{flex: 0.5, marginTop: 2}}>
                  <Dash_Switch_Button_Layout onSelectOption={handleOptionSelect} />
                </View>

                <View style={{flex: 5}}>
                  {renderContentView()}
                </View>



              </View>

              <View style={{ flex: 1, borderLeftWidth: 1, borderLeftColor: '#A4A5FD' }}></View>
            </View>
          </View>
        </View>
      </View>

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
    paddingHorizontal: '3%',
  },
});
