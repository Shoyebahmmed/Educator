import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home_Inbox_Noti_Layout from './Home_Inbox_Noti_Layout';
import Home_Assignment_Layout from './Home_Assignment_Layout';
import Home_Class_Layout from './Home_Class_Layout';
import Home_Calendar_Layout from './Home_Calendar_Layout';
import Navigation_Side_Tab_Layout from './Navigation_Side_Tab_Layout';
import { MaterialCommunityIcons, Ionicons } from 'expo-vector-icons';
import TESTYYYP from './TESTYYYP';
import Indicator_Layout from './Indicator_Layout';
import { useState } from 'react';

export default function Home_Page() {

  const [totalClassToday, setTotalClassToday] = useState('5');
  const [totalAssignmentDue, setTotalAssignmentDue] = useState('12');
  const [totalInboxMessage, setTotalInboxMessage] = useState('15');

  const [userDetails, setUserDetails] = useState({
    name: "Shoyeb Ahmmed",
    userID: "sa108",
    profileImg: "./img/profile.jpg"
  });

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.sidNavBar}>
          <Navigation_Side_Tab_Layout />
        </View>

        <View style={styles.rightSide}>
          <View style={styles.topBar}>
            <View style={styles.notification}>
              <MaterialCommunityIcons
                name="bell"
                size={45}
                color='#624DF6'
              />
            </View>
            <View style={styles.account}>
              <View style={styles.imgShape}>
                <Image source={require('./img/profile.jpg')} style={styles.roundImage} />
              </View>
              <View style={styles.details}>
                <Text style={styles.userName}>{userDetails.name}</Text>
                <Text style={styles.userID}>{userDetails.userID}</Text>
              </View>
            </View>
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
              <View style={styles.classes}>
                <Home_Class_Layout />
              </View>
            </View>

            <View style={styles.assignments}>

              <View style={styles.titleBar}>
                <Text style={styles.title}>Assignments</Text>
                <View style={styles.notiBack}>
                  <Text style={styles.hiNotifi}>{totalAssignmentDue}</Text>
                </View>
              </View>

              <View style={styles.assignmentBar}>
                <Home_Assignment_Layout />
              </View>

            </View>

            <View style={styles.inboxMessages}>
              <View style={styles.titleBarInbox}>
                <Text style={styles.title}>Inbox</Text>
                <View style={styles.notiBackMess}>
                  <Text style={styles.hiNotifi}>{totalInboxMessage}</Text>
                </View>
              </View>

              <View style={styles.inboxMess}>
                <Home_Inbox_Noti_Layout />
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
    backgroundColor: '#ECE9FF',
    padding: 20,
  },

  mainView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#FFFFFF",
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
    flex: 0.45,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#A4A5FD',
  },

  imgShape: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
  },

  roundImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },

  notification: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 30,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    borderLeftWidth: 1,
    borderLeftColor: '#A4A5FD',
  },
  details: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userID: {
    fontSize: 14,
    color: '#ccc',
  },

  bodyPart: {
    flex: 2.5,
    flexDirection: 'row',
    marginLeft: 20,
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
    paddingTop: 20,
  },

  notiBack: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: "#DC0049",
    borderRadius: 15,
    marginLeft: 10,
  },

  notiBackMess: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: "#5AB08F",
    borderRadius: 15,
    marginLeft: 10,
  },

  hiNotifi: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  class: {
    paddingTop: 10,
  },

  assignments: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },

  assignmentBar: {
    marginTop: 10,
  },

  inboxMessages: {
    flex: 0.52,
    flexDirection: 'column',
    borderLeftWidth: 1,
    borderLeftColor: '#A4A5FD',
    paddingLeft: 20,
    paddingTop: 30,
  },

  inboxMess: {

  },
});