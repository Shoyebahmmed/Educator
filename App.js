import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home_Page from './Components/Home_Page';
import Load_Screen from './Components/Load_screen';

export default function App() {
  return (
    <Home_Page />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});