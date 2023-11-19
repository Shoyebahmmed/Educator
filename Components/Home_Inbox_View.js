import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import Home_Inbox_Noti_Layout from './Home_Inbox_Noti_Layout';

export default function Home_Inbox_View() {
    const messageDetails = [
        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '1',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '2',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '3',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '4',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '5',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '6',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '7',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '8',
            senderProfImg: './img/profile.jpg',
        },
        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '9',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '10',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '11',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '12',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '13',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '14',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '15',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: '16',
            senderProfImg: './img/profile.jpg',
        },
    ];

    return (
        <View style={styles.container}>
            {messageDetails.map((messageItem) => {
                return <Home_Inbox_Noti_Layout key={messageItem.senderMessageID} messageItem={messageItem} />;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

