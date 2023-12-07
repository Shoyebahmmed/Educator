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
import Home_Calendar_Mobile_View from './Home_Calendar_Mobile_View';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function Home_Page_Mobile() {
  const [totalClassToday, setTotalClassToday] = useState('5');
  const [totalAssignmentDue, setTotalAssignmentDue] = useState('12');
  const [totalInboxMessage, setTotalInboxMessage] = useState('15');
  const [selectedOption, setSelectedOption] = useState('Classes');
  const [newNotificationStatus, setNewNotificationStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const windowDimensions = useWindowDimensions();

  const [screenHeight, setScreenHeight] = useState(windowDimensions.height);
  const [screenWidth, setScreenWidth] = useState(windowDimensions.width);

  useEffect(() => {
    setScreenHeight(windowDimensions.height);
    setScreenWidth(windowDimensions.width);
  }, [windowDimensions]);


  const renderContentView = () => {
    switch (selectedOption) {
      case 'Classes':
        return <Home_Class_View />;
      case 'Assignments':
        return <Home_Assignment_View />;
      default:
        return null;
    }
  };

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
        <View style={styles.titleBar}>
          <Text style={styles.title}>Today's Schedule</Text>
        </View>
        <View style={styles.calendar}>
          <Home_Calendar_Mobile_View />
        </View>


        <View style={styles.buttonArea}>
          <TouchableOpacity style={[styles.button,
          {
            borderBottomWidth: selectedOption === 'Classes' ? 2 : null,
            borderBottomColor: selectedOption === 'Classes' ? '#624DF6' : null
          }]}
            onPress={() => setSelectedOption('Classes')}
          >
            <Text
              style={[styles.buttonText,
              {
                color: selectedOption === 'Classes' ? 'black' : '#C5C5C5',
              }]}>
              Classes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button,
            {
              borderBottomWidth: selectedOption === 'Assignments' ? 2 : null,
              borderBottomColor: selectedOption === 'Assignments' ? '#624DF6' : null
            }]}
            onPress={() => setSelectedOption('Assignments')}
          >
            <Text
              style={[styles.buttonText,
              {
                color: selectedOption === 'Assignments' ? 'black' : '#C5C5C5',
              }]}>
              Assignments
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        >
        {renderContentView()}
        </ScrollView>

      </View>

      <View style={styles.bottomBar}>
        <View style={styles.classes}>
          <Home_Mobile_Bottom_Nav />
        </View>

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
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  titleBar: {
    flexDirection: 'row',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  calendar: {
    height: '15%',
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  content: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  bottomBar: {
    flex: 0.09,
  },
});
