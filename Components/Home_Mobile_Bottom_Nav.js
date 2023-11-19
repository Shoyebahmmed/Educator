import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default function Home_Mobile_Bottom_Nav() {

    const [selectedTab, setSelectedTab] = useState('home');

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.tab, selectedTab === 'home' ]}
                onPress={() => handleTabPress('home')}
            >
                <MaterialCommunityIcons name="home" size={30} color={selectedTab === 'home' ? '#A4A5FD' : 'black'} />
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.tab, selectedTab === 'dashboard' ]}
                onPress={() => handleTabPress('dashboard')}
            >
                <MaterialCommunityIcons
                    name="view-dashboard"
                    size={30}
                    color={selectedTab === 'dashboard' ? '#A4A5FD' : 'black'}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.tab, selectedTab === 'class' ]}
                onPress={() => handleTabPress('class')}
            >
                <MaterialCommunityIcons name="calendar" size={30} color={selectedTab === 'class' ? '#A4A5FD' : 'black'} />
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.tab, selectedTab === 'message' ]}
                onPress={() => handleTabPress('message')}
            >
                <FontAwesome name="paper-plane-o" size={25} color={selectedTab === 'message' ? '#A4A5FD' : 'black'} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#A4A5FD',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // Ensure relative positioning for absolute elements
    },
});
