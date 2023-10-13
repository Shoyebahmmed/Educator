import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home_Page() {

    const [assignmentData, setAssignmentData] = useState({
        subCode: 'ENG101',
        subName: 'English 1st Paper',
        smallDesc: 'Write an essay discussing the impact of social media on society and its role in shaping modern communication.',
        closingTime: '11:59 PM',
        closingDate: '10/13/2023',
        closingDay: 'Tomorrow',
        assignmentID: 'ABCD123456'
    });


    return (
        <View style={assignmentData.closingDay === 'Today' ? styles.containerToday : styles.containerTomorrow}>
            <View style={styles.row1}>
                <Text style={styles.subDetLine}>{assignmentData.subCode}: {assignmentData.subName}</Text>
                <View style={assignmentData.closingDay === 'Today' ? styles.subDayToday : styles.subDayTomorrow}>
                    <Text style={assignmentData.closingDay === 'Today' ? styles.subDayTextToday : styles.subDayTextTomorrow}>
                        {assignmentData.closingDay}
                    </Text>
                </View>
            </View>
            <Text style={styles.description}>{assignmentData.smallDesc}</Text>
            <Text style={styles.closingTime}>Closing: {assignmentData.closingTime}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerToday: {
        borderWidth: 1,
        borderColor: '#FE958C',
        backgroundColor: '#FFE8E6',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },

    containerTomorrow: {
        borderWidth: 1,
        borderColor: '#624DF6',
        backgroundColor: '#E6E8FB',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },

    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    subDetLine: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    subDayToday: {
        borderWidth: 1,
        borderColor: '#FF6255',
        backgroundColor: '#FFCFCB',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
    },

    subDayTomorrow: {
        borderWidth: 1,
        borderColor: '#624DF6 ',
        backgroundColor: '#CED2FF',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
    },

    subDayTextToday: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF2E2E',
    },

    subDayTextTomorrow: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0C23FF',
    },

    description: {
        marginTop: 10,
        width: '80%',
        marginBottom: 20,
        fontSize: 18,
    },

    closingTime: {
        fontSize: 18,
        color: "#979E9B",
    },
});