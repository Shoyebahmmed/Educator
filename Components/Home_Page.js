import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home_Inbox_Noti_Layout from './Home_Inbox_Noti_Layout';

export default function Home_Page() {
  return (
    <View style={styles.container}>
        <Home_Inbox_Noti_Layout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});