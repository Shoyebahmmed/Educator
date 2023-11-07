import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Home_Inbox_Noti_Layout({ messageItem }) {

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.bodyPart}>
        <View style={styles.column1}>
          <View style={styles.imgShape}>
            <Image source={require('./img/profile.jpg')} style={styles.roundImage} />
          </View>
        </View>

        <View style={styles.column2}>
          <Text style={styles.sender_name_style}>{messageItem.senderName}</Text>
          <Text style={styles.message_prv_style}>{messageItem.senderMessagePrv}</Text>
          <Text style={styles.send_time_style}>{messageItem.senderSendTime}</Text>
        </View>

        <View style={styles.column3}>
          <AntDesign name="arrowright" size={24} color="#624DF6" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
    alignassignmentItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  bodyPart: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  column1: {
    width: "15%",
    padding: 10,
  },

  column2: {
    width: "75%",
    flexDirection: 'column',
    paddingLeft: 30,
    paddingRight: 20,
  },

  column3: {
    width: "10%",
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  imgShape: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
  },

  roundImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },

  sender_name_style: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },

  message_prv_style: {

  },

  send_time_style: {
    color: '#7A7A7A',
    paddingTop: 10,
  },
});