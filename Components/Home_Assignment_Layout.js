import React from 'react';
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
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    containerToday: {
        width: '90%', 
        borderWidth: 1,
        borderColor: '#FE958C',
        backgroundColor: '#FFE8E6',
        borderRadius: 15,
        paddingHorizontal: '5%', 
        paddingVertical: '5%', 
    },

    containerTomorrow: {
        width: '90%', 
        borderWidth: 1,
        borderColor: '#624DF6',
        backgroundColor: '#E6E8FB',
        borderRadius: 15,
        paddingHorizontal: '5%', 
        paddingVertical: '5%', 
    },

    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    subDetLine: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    subDayToday: {
        borderWidth: 1,
        borderColor: '#FF6255',
        backgroundColor: '#FFCFCB',
        paddingHorizontal: '3%', 
        paddingVertical: '1%', 
        borderRadius: 15,
    },

    subDayTomorrow: {
        borderWidth: 1,
        borderColor: '#624DF6',
        backgroundColor: '#CED2FF',
        paddingHorizontal: '3%', 
        paddingVertical: '1%', 
        borderRadius: 15,
    },

    subDayTextToday: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF2E2E',
    },

    subDayTextTomorrow: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0C23FF',
    },

    description: {
        marginTop: 10,
        width: '80%', 
        marginBottom: 20,
        fontSize: 17,
    },

    closingTime: {
        fontSize: 17,
        color: "#979E9B",
    },
});
