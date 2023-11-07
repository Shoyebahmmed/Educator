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
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },
        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
            senderProfImg: './img/profile.jpg',
        },

        {
            senderName: 'James Oliver',
            senderMessagePrv: 'Just to remind everyone to bring along a coaxial…',
            senderSendTime: '17 min ago',
            senderMessageID: 'ABCD123456',
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

