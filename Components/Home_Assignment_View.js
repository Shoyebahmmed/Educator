import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useState } from 'react';
import Home_Assignment_Layout from './Home_Assignment_Layout';

export default function Home_Assignment_View() {
    const [assignmentData, setAssignmentData] = useState([
        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            smallDesc: 'Write an essay discussing the impact of social media on society and its role in shaping modern communication.',
            closingTime: '11:59 PM',
            closingDate: '10/13/2023',
            closingDay: 'Today',
            assignmentID: '1'
        },

        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            smallDesc: 'Write an essay discussing the impact of social media on society and its role in shaping modern communication.',
            closingTime: '11:59 PM',
            closingDate: '10/13/2023',
            closingDay: 'Today',
            assignmentID: '2'
        },

        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            smallDesc: 'Write an essay discussing the impact of social media on society and its role in shaping modern communication.',
            closingTime: '11:59 PM',
            closingDate: '10/13/2023',
            closingDay: 'Tomorrow',
            assignmentID: '3'
        },

        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            smallDesc: 'Write an essay discussing the impact of social media on society and its role in shaping modern communication.',
            closingTime: '11:59 PM',
            closingDate: '10/13/2023',
            closingDay: 'Tomorrow',
            assignmentID: '4'
        },

        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            smallDesc: 'Write an essay discussing the impact of social media on society and its role in shaping modern communication.',
            closingTime: '11:59 PM',
            closingDate: '10/13/2023',
            closingDay: 'Tomorrow',
            assignmentID: '5'
        }
    ]);

    return (
        <View style={styles.container}>
            {assignmentData.map((assignmentItem) => {
                return <Home_Assignment_Layout key={assignmentItem.assignmentID} assignmentItem={assignmentItem} />;
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

