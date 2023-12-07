import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import IndicatorLayout from './Indicator_Layout';


export default function Navigation_Side_Tab_Layout() {
  const [selectedOption, setSelectedOption] = useState('Home');


  const options = [
    {
      id: 1,
      name: 'Home',
      nav_Icon: 'home',
    },
    {
      id: 2,
      name: 'Dashboard',
      nav_Icon: 'view-dashboard',
    },
    {
      id: 3,
      name: 'All Classes',
      nav_Icon: 'book-variant',
    },
    {
      id: 4,
      name: 'Mails',
      nav_Icon: 'email',
    },
    {
      id: 5,
      name: 'Messages',
      nav_Icon: 'ios-paper-plane',
    },
    {
      id: 6,
      name: 'Timetable',
      nav_Icon: 'calendar',
    },
    {
      id: 7,
      name: 'Profile',
      nav_Icon: 'account',
    },
    {
      id: 8,
      name: 'Settings',
      nav_Icon: 'settings-sharp',
    },
    {
      id: 9,
      name: 'Logout',
      nav_Icon: 'logout',
    },
  ];


  const renderOption = (option) => {
    const isActive = option.name === selectedOption;
    const iconProb = option.name === 'Messages' || option.name === 'Settings';

    const content = isActive ? (
      <IndicatorLayout inkey={option.id}>
        <TouchableOpacity
          style={styles.option}
          key={option.id}
          onPress={() => setSelectedOption(option.name)}
        >
          <View
            style={[styles.circle, { backgroundColor: isActive ? '#FFEEC6' : '#DCDDFF' }]}
          >
            {iconProb ? (
              <Ionicons
                name={option.nav_Icon}
                size={22}
                color={isActive ? '#FF9011' : '#624DF6'}
              />
            ) : (
              <MaterialCommunityIcons
                name={option.nav_Icon}
                size={22}
                color={isActive ? '#FF9011' : '#624DF6'}
              />
            )}
          </View>
          <Text style={[styles.optionText, { color: isActive ? '#FF9011' : '#624DF6'}]}>{option.name}</Text>
        </TouchableOpacity>
      </IndicatorLayout>
    ) : (
      <TouchableOpacity
        style={[styles.option, { paddingLeft: 25, paddingTop: 15 }]}
        key={option.id}
        onPress={() => setSelectedOption(option.name)}
      >
        <View style={[styles.circle, { backgroundColor: isActive ? '#FFEEC6' : '#DCDDFF' }]}>
          {iconProb ? (
            <Ionicons
              name={option.nav_Icon}
              size={22}
              color={isActive ? '#FF9011' : '#624DF6'}
            />
          ) : (
            <MaterialCommunityIcons
              name={option.nav_Icon}
              size={22}
              color={isActive ? '#FF9011' : '#624DF6'}
            />
          )}
        </View>
        <Text style={[styles.optionText, { color: isActive ? '#FF9011' : '#624DF6'}]}>{option.name}</Text>
      </TouchableOpacity>
    );

    return (
      <View key={option.id} style={{ marginBottom: 20, paddingLeft: 20 }}>
        {content}
      </View>
    );
  };






  return (
    <View style={styles.sidebar}>
      <View style={styles.logoCont}>
        <Image source={require('./img/logo.png')} style={styles.logo} />
      </View>

      {options.map(renderOption)}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F9F8FF',
    paddingLeft: "10%",
    paddingTop: "20%",
    borderRadius: 30,
  },
  logoCont: {
    width: 189,
    height: 38,
    overflow: 'hidden',
    marginBottom: 90,
    marginLeft: '10%',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  optionText: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  indicator: {
    backgroundColor: '#FFFFFF',
    width: "100%",
    height: "auto",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
    padding: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  roundedBox: {
    width: 200,
    height: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#FF5733',
    overflow: 'hidden',
  },
  topBox1: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 50,
    borderRightWidth: 50,
    borderBottomEndRadius: 25,
    backgroundColor: 'transparent',
    borderTopColor: '#FF5733',
    borderRightColor: '#FF5733',
  },
  topBox2: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 50,
    borderRightWidth: 50,
    borderTopRightRadius: 25,
    backgroundColor: 'transparent',
    borderTopColor: '#FF5733',
    borderRightColor: '#FF5733',
    overflow: 'hidden',
    padding: 0,
  },
});
