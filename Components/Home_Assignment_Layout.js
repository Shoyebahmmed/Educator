import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home_Assignment_Layout({ assignmentItem }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={assignmentItem.closingDay === 'Today' ? styles.containerToday : styles.containerTomorrow}>
                <View style={styles.row1}>
                    <Text style={styles.subDetLine}>{assignmentItem.subCode}: {assignmentItem.subName}</Text>
                    <View style={assignmentItem.closingDay === 'Today' ? styles.subDayToday : styles.subDayTomorrow}>
                        <Text style={assignmentItem.closingDay === 'Today' ? styles.subDayTextToday : styles.subDayTextTomorrow}>
                            {assignmentItem.closingDay}
                        </Text>
                    </View>
                </View>
                <Text style={styles.description}>{assignmentItem.smallDesc}</Text>
                <Text style={styles.closingTime}>Closing: {assignmentItem.closingTime}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        flex: 1,
        alignassignmentItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    containerToday: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#FE958C',
        backgroundColor: '#FFE8E6',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    containerTomorrow: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#624DF6',
        backgroundColor: '#E6E8FB',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 20,
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
        borderColor: '#624DF6',
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