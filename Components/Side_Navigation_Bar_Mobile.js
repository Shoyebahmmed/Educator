import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


export default function Side_Navigation_Bar_Mobile() {
    const [selectedOption, setSelectedOption] = useState('Home');


    return (
        <View style={styles.sidebar}>
            <View style={styles.logoCont}>
                <Image source={require('./img/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.menue}>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setSelectedOption('Home')}
                >
                    <View style={[styles.circle, { backgroundColor: selectedOption === 'Home' ? '#FFEEC6' : '#DCDDFF' }]}>
                        <MaterialCommunityIcons
                            name="home"
                            size={20}
                            color={selectedOption === 'Home' ? '#FF9011' : '#624DF6'}
                        />
                    </View>
                    <Text style={[styles.optionText, { color: selectedOption === 'Home' ? '#FF9011' : '#624DF6' }]}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setSelectedOption('email')}
                >
                    <View style={[styles.circle, { backgroundColor: selectedOption === 'email' ? '#FFEEC6' : '#DCDDFF' }]}>
                        <MaterialCommunityIcons
                            name="email"
                            size={20}
                            color={selectedOption === 'email' ? '#FF9011' : '#624DF6'}
                        />
                    </View>
                    <Text style={[styles.optionText, { color: selectedOption === 'email' ? '#FF9011' : '#624DF6' }]}>Mail</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setSelectedOption('timetable')}
                >
                    <View style={[styles.circle, { backgroundColor: selectedOption === 'timetable' ? '#FFEEC6' : '#DCDDFF' }]}>
                        <MaterialCommunityIcons
                            name="calendar"
                            size={20}
                            color={selectedOption === 'timetable' ? '#FF9011' : '#624DF6'}
                        />
                    </View>
                    <Text style={[styles.optionText, { color: selectedOption === 'timetable' ? '#FF9011' : '#624DF6' }]}>Timetable</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setSelectedOption('profile')}
                >
                    <View style={[styles.circle, { backgroundColor: selectedOption === 'profile' ? '#FFEEC6' : '#DCDDFF' }]}>
                        <MaterialCommunityIcons
                            name="account"
                            size={20}
                            color={selectedOption === 'profile' ? '#FF9011' : '#624DF6'}
                        />
                    </View>
                    <Text style={[styles.optionText, { color: selectedOption === 'profile' ? '#FF9011' : '#624DF6' }]}>Profie</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setSelectedOption('settings')}
                >
                    <View style={[styles.circle, { backgroundColor: selectedOption === 'settings' ? '#FFEEC6' : '#DCDDFF' }]}>
                        <Ionicons
                            name="settings-sharp"
                            size={20}
                            color={selectedOption === 'settings' ? '#FF9011' : '#624DF6'}
                        />
                    </View>
                    <Text style={[styles.optionText, { color: selectedOption === 'settings' ? '#FF9011' : '#624DF6' }]}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setSelectedOption('logout')}
                >
                    <View style={[styles.circle, { backgroundColor: selectedOption === 'logout' ? '#FFEEC6' : '#DCDDFF' }]}>
                        <MaterialCommunityIcons
                            name="logout"
                            size={20}
                            color={selectedOption === 'logout' ? '#FF9011' : '#624DF6'}
                        />
                    </View>
                    <Text style={[styles.optionText, { color: selectedOption === 'logout' ? '#FF9011' : '#624DF6' }]}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sidebar: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F8FF',
        alignItems: 'center',
        paddingTop: "20%",
        borderRadius: 30,
    },
    logoCont: {
        width: 146,
        height: 29,
        overflow: 'hidden',
        marginBottom: 70,
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    menue: {
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: '30%',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: "15%",
    },
    optionText: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 20,
    },
    circle: {
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    indicator: {
        backgroundColor: '#FFFFFF',
        width: "100%",
        height: "auto",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        overflow: 'hidden',
        padding: 10,
    },

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    roundedBox: {
        width: 200,
        height: 50,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: '#FF5733',
        overflow: 'hidden',
    },
    topBox1: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 50,
        borderRightWidth: 50,
        borderBottomEndRadius: 25,
        backgroundColor: 'transparent',
        borderTopColor: '#FF5733',
        borderRightColor: '#FF5733',
    },
    topBox2: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 50,
        borderRightWidth: 50,
        borderTopRightRadius: 25,
        backgroundColor: 'transparent',
        borderTopColor: '#FF5733',
        borderRightColor: '#FF5733',
        overflow: 'hidden',
        padding: 0,
    },
});
