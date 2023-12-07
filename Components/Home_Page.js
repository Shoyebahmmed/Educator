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
import Load_Screen from './Load_screen';
import Navigation_Side_Tab_Layout from './Navigation_Side_Tab_Layout';
import Home_Inbox_View from './Home_Inbox_View';
import Home_Assignment_View from './Home_Assignment_View';
import Home_Class_View from './Home_Class_View';
import Home_Calendar_Layout from './Home_Calendar_Layout';
import Home_Page_Mobile from './Home_Page_Mobile';
import Home_Page_Tab from './Home_Page_Tab';
import Home_Mobile_Top_Bar from './Home_Mobile_Top_Bar';
import Home_Mobile_Bottom_Nav from './Home_Mobile_Bottom_Nav';
import Side_Navigation_Bar_Mobile from './Side_Navigation_Bar_Mobile';

export default function Home_Page() {
  const [totalClassToday, setTotalClassToday] = useState('5');
  const [totalAssignmentDue, setTotalAssignmentDue] = useState('12');
  const [totalInboxMessage, setTotalInboxMessage] = useState('15');
  const [newNotificationStatus, setNewNotificationStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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

  const isTabletView = screenWidth > 600 && screenHeight > 600;
  // console.log(screenHeight, screenWidth);



  return (
    <View style={[styles.container, { height: screenHeight, width: screenWidth }]}>
        {isTabletView ? (
        <Home_Page_Tab />
      ) : (
        <Home_Page_Mobile />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
