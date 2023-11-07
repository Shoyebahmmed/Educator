import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import Home_Class_Layout from './Home_Class_Layout';

export default function Home_Class_View() {
    const [classData, setClassData] = useState([
        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            class: 'XII',
            section: 'A',
            location: '3.123',
            startTime: '09:30 AM',
            endTime: '10:30 AM',
            subID: 'ABCD123456'
        },

        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            class: 'XII',
            section: 'A',
            location: '3.123',
            startTime: '09:30 AM',
            endTime: '10:30 AM',
            subID: 'ABCD123456'
        },

        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            class: 'XII',
            section: 'A',
            location: '3.123',
            startTime: '09:30 AM',
            endTime: '10:30 AM',
            subID: 'ABCD123456'
        },

        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            class: 'XII',
            section: 'A',
            location: '3.123',
            startTime: '09:30 AM',
            endTime: '10:30 AM',
            subID: 'ABCD123456'
        },

        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            class: 'XII',
            section: 'A',
            location: '3.123',
            startTime: '09:30 AM',
            endTime: '10:30 AM',
            subID: 'ABCD123456'
        },

        {
            subCode: 'ENG101',
            subName: 'English 1st Paper',
            class: 'XII',
            section: 'A',
            location: '3.123',
            startTime: '09:30 AM',
            endTime: '10:30 AM',
            subID: 'ABCD123456'
        },
    ]);

    return (
        <View style={styles.container}>
            {classData.map((classItem) => {
                return <Home_Class_Layout key={classItem.subID} classItem={classItem} />;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

