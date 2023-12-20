import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Post_Top_Bar() {
    const [inst_Name, setInstName] = useState('University of Wollongong');
    const [post_Time, setPost_Time] = useState('45 min ago');
    const [postLocation, setPostLocation] = useState('Sydney, Australia');


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.account}>
                <View style={styles.imgShape}>
                    <Image source={require('./img/uni_logo.png')} style={styles.roundImage} />
                </View>
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.institutionName}>
                    {inst_Name}
                </Text>
                <View style={styles.timeContainer}>
                    <MaterialIcons name="public" size={18} color="black" />
                    <Text style={styles.postTime}>
                        {post_Time}
                    </Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    account: {
        marginRight: 15,
    },
    imgShape: {
        width: 60,
        height: 60,
        borderRadius: 40,
        overflow: 'hidden',
        borderWidth: 3,
        padding: 2,
        borderColor: '#A4A5FD',
    },
    roundImage: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
    },
    textContainer: {
        flex: 1,
    },
    institutionName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postTime: {
        marginLeft: 5,
    },
});
