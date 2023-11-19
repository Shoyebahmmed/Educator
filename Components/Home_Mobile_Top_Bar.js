import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Navigation_Side_Tab_Layout from './Navigation_Side_Tab_Layout';
import { Overlay } from 'react-native-elements';
import Side_Navigation_Bar_Mobile from './Side_Navigation_Bar_Mobile';

export default function Home_Mobile_Top_Bar() {
    const [newNotificationStatus, setNewNotificationStatus] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <View style={styles.container}>
            <Overlay isVisible={isSidebarOpen} onBackdropPress={toggleSidebar} overlayStyle={styles.overlay}>
                <Side_Navigation_Bar_Mobile />
            </Overlay>

            <View style={styles.topBar}>
                <TouchableOpacity onPress={toggleSidebar} style={styles.menuIcon}>
                    <MaterialCommunityIcons name="menu" size={24} color="#624DF6" />
                </TouchableOpacity>

                <View style={{ flex: 1 }}>
                    <View style={styles.logoCont}>
                        <Image source={require('./img/logo.png')} style={styles.logo} />
                    </View>
                </View>

                <TouchableOpacity style={styles.notification}>
                    <MaterialCommunityIcons name="bell" size={24} color="#624DF6" />
                    {newNotificationStatus && <View style={styles.newNotificationDot} />}
                </TouchableOpacity>

                <TouchableOpacity style={styles.account}>
                    <View style={styles.imgShape}>
                        <Image source={require('./img/profile.jpg')} style={styles.roundImage} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#A4A5FD',
        paddingBottom: 20,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    menuIcon: {
        marginRight: 20,
        paddingTop: 7,
    },
    overlay: {
        width: '75%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        padding: 0,
    },
    logoCont: {
        width: 94,
        height: 19,
        overflow: 'hidden',
        marginLeft: 10,
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    notification: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    newNotificationDot: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 7,
        height: 7,
        borderRadius: 5,
        backgroundColor: 'red',
    },
    account: {
        marginLeft: 30,
    },
    imgShape: {
        width: 35,
        height: 35,
        borderRadius: 50,
        overflow: 'hidden',
    },
    roundImage: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
});
