import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home_Inbox_Noti_Layout from './Home_Inbox_Noti_Layout';
import Home_Assignment_Layout from './Home_Assignment_Layout';
import Home_Class_Layout from './Home_Class_Layout';
import Home_Calendar_Layout from './Home_Calendar_Layout';
import Navigation_Side_Tab_Layout from './Navigation_Side_Tab_Layout';
import TESTYYYP from './TESTYYYP';
import Indicator_Layout from './Indicator_Layout';

export default function Home_Page() {
  return (
    <View style={styles.container}>
        <Navigation_Side_Tab_Layout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});