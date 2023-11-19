import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home_Class_Layout({ classItem }) {


    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.row1}>
                <Text style={styles.subDetLine}>{classItem.subCode}: {classItem.subName}</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.row2}>
                    <Text style={styles.details}>Class: {classItem.class}</Text>
                    <Text style={styles.details}>Section: {classItem.section}</Text>
                </View>
                <Text style={styles.details}>Location: {classItem.location}</Text>
            </View>
            <Text style={styles.closingTime}>{classItem.startTime} - {classItem.endTime}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        borderWidth: 1,
        borderColor: '#5AB08F',
        backgroundColor: 'rgba(183, 255, 229, 0.44)',
        borderRadius: 15,
        paddingHorizontal: '4%', 
        paddingTop: '4%', 
        paddingBottom: '6%', 
        marginBottom: '6%', 
    },

    row1: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    content: {
        paddingBottom: '2%', 
    },

    row2: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    subDetLine: {
        fontSize: 18, 
        fontWeight: 'bold',
        paddingBottom: '2%', 
    },

    details: {
        width: '80%',
        fontSize: 18, 
    },

    closingTime: {
        fontSize: 18, 
        color: "#979E9B",
        marginTop: '2%', 
    },
});
