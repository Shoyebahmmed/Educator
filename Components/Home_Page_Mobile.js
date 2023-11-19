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
import Home_Mobile_Top_Bar from './Home_Mobile_Top_Bar';
import Home_Mobile_Bottom_Nav from './Home_Mobile_Bottom_Nav';

export default function Home_Page_Mobile() {
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
  }, [windowDimensions]);

  console.log(screenWidth, screenHeight);
  const userDetails = {
    name: 'Shoyeb Ahmmed',
    userID: 'sa108',
    profileImg: './img/profile.jpg',
  };

  return (
    <View style={[styles.container, { height: screenHeight, width: screenWidth }]}>

    <View style={styles.topBar}>
        <Home_Mobile_Top_Bar />
    </View>

    <View style={styles.body}>

    </View>

    <View style={styles.bottomBar}>
        <Home_Mobile_Bottom_Nav />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flex: 0.12,
  },
  body: {
    flex: 1,
  },
  bottomBar: {},
});
