import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    useWindowDimensions,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Top_Bar_Layout() {
    const [newNotificationStatus, setNewNotificationStatus] = useState(true);

    const userDetails = {
        name: 'Shoyeb Ahmmed',
        userID: 'sa108',
        profileImg: './img/profile.jpg',
      };

    return (
        <View style={styles.topBar}>
            <TouchableOpacity style={styles.notification}>
                <MaterialCommunityIcons name="bell" size={45} color="#624DF6" />
                {newNotificationStatus && <View style={styles.newNotificationDot} />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.account}>
                <View style={styles.imgShape}>
                    <Image source={require('./img/profile.jpg')} style={styles.roundImage} />
                </View>
                <View style={styles.details}>
                    <Text style={styles.userName}>{userDetails.name}</Text>
                    <Text style={styles.userID}>{userDetails.userID}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    
      imgShape: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#F5F5F5',
        overflow: 'hidden',
      },
    
      roundImage: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
      },
    
      notification: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
      },
    
      newNotificationDot: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red',
      },
    
      account: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        borderLeftWidth: 1,
        borderLeftColor: '#A4A5FD',
      },
      details: {
        marginLeft: 10,
      },
      userName: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      userID: {
        fontSize: 14,
        color: '#ccc',
      },
});
