import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home_Page() {

    const [classData, setClassData] = useState({
        subCode: 'ENG101',
        subName: 'English 1st Paper',
        class: 'XII',
        section: 'A',
        location: '3.123',
        startTime: '09:30 AM',
        endTime: '10:30 AM',
        assignmentID: 'ABCD123456'
    });


    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={styles.subDetLine}>{classData.subCode}: {classData.subName}</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.row2}>
                    <Text style={styles.details}>Class: {classData.class}</Text>
                    <Text style={styles.details}>Section: {classData.section}</Text>
                </View>
                <Text style={styles.details}>Location: {classData.location}</Text>
            </View>
            <Text style={styles.closingTime}>{classData.startTime} - {classData.endTime}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#5AB08F',
        backgroundColor: 'rgba(183, 255, 229, 0.44)',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },

    row1: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    content: {
        paddingBottom: 5,
    },

    row2: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    subDetLine: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 15,
    },

    details: {
        width: '80%',
        fontSize: 18,
    },

    closingTime: {
        fontSize: 18,
        color: "#979E9B",
    },
});