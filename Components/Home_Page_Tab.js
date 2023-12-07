import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Load_Screen from './Load_screen';
import Navigation_Side_Tab_Layout from './Navigation_Side_Tab_Layout';
import Home_Inbox_View from './Home_Inbox_View';
import Home_Assignment_View from './Home_Assignment_View';
import Home_Class_View from './Home_Class_View';
import Home_Calendar_Layout from './Home_Calendar_Layout';
import * as ScreenOrientation from 'expo-screen-orientation';
import Top_Bar_Layout from './Top_Bar_Layout';
//import { ScrollView } from 'expo-faded-scrollview';

export default function Home_Page_Tab() {
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



  return (
    <View style={[styles.container, { height: screenHeight, width: screenWidth }]}>
        <View style={styles.content}>
          <View style={styles.mainView}>
            <View style={styles.sidNavBar}>
              <Navigation_Side_Tab_Layout />
            </View>

            <View style={styles.rightSide}>
              <View style={styles.topBar}>
                <Top_Bar_Layout />
              </View>

              <View style={styles.bodyPart}>
                <View style={styles.classSchedule}>
                  <View style={styles.titleBar}>
                    <Text style={styles.title}>Today's Schedule</Text>
                    <View style={styles.notiBack}>
                      <Text style={styles.hiNotifi}>{totalClassToday}</Text>
                    </View>
                  </View>
                  <View style={styles.calenderBar}>
                    <Home_Calendar_Layout />
                  </View>
                  <ScrollView
                    style={styles.classes}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    showsVerticalScrollIndicator={false}
                  >
                    <Home_Class_View />
                  </ScrollView>
                </View>

                <View style={styles.assignments}>
                  <View style={styles.titleBar}>
                    <Text style={styles.title}>Assignments</Text>
                    <View style={styles.notiBack}>
                      <Text style={styles.hiNotifi}>{totalAssignmentDue}</Text>
                    </View>
                  </View>
                  <ScrollView
                    style={styles.assignmentBar}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    showsVerticalScrollIndicator={false}
                  >
                    <Home_Assignment_View />
                  </ScrollView>
                </View>

                <View style={styles.inboxMessages}>
                  <View style={styles.titleBarInbox}> 
                    <Text style={styles.title}>Inbox</Text>
                    <View style={styles.notiBackMess}>
                      <Text style={styles.hiNotifi}>{totalInboxMessage}</Text>
                    </View>
                  </View>
                  <ScrollView
                    style={styles.inboxMess}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    showsVerticalScrollIndicator={false}
                  >
                    <Home_Inbox_View />
                  </ScrollView>
                </View>
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

  sidNavBar: {
    flex: 1,
    height: '100%',
  },

  rightSide: {
    flex: 4.8,
    flexDirection: 'column',
  },

  topBar: {
    flex: 1,
    paddingHorizontal: 20,
    marginHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#A4A5FD',
  },
  
  bodyPart: {
    flex: 7,
    flexDirection: 'row',
    marginLeft: 20,
  },

  calenderBar: {
    flex: 0.25,
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
  classSchedule: {
    flex: 0.8,
    marginTop: 30,
    marginBottom: 30,
    flexDirection: 'column',
    borderRightWidth: 1,
    borderRightColor: '#A4A5FD',
    alignItems: 'center',
  },

  titleBar: {
    flexDirection: 'row',
    marginBottom: 30,
    marginLeft: 50,
    alignSelf: 'flex-start',
  },

  titleBarInbox: {
    flexDirection: 'row',
    marginBottom: 30,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  classes: {
    width: '100%',
    flex: 1,
  },

  notiBack: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#DC0049',
    borderRadius: 15,
    marginLeft: 10,
  },

  notiBackMess: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#5AB08F',
    borderRadius: 15,
    marginLeft: 10,
  },

  hiNotifi: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  assignments: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

  assignmentBar: {
    marginTop: 10,
    width: '100%',
    flex: 1,
  },

  inboxMessages: {
    flex: 0.52,
    flexDirection: 'column',
    borderLeftWidth: 1,
    borderLeftColor: '#A4A5FD',
    paddingTop: 30,
    paddingBottom: 10,
  },

  inboxMess: {
    flex: 1,
  },
});
