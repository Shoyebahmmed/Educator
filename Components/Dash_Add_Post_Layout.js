import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
    Modal,
} from 'react-native';

import Dash_Add_Post_Overlay_Layout from './Dash_Add_Post_Overlay_Layout';


export default function Dash_Add_Post_Layout() {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const handleOpenOverlay = () => {
        setOverlayVisible(true);
    };

    const handleCloseOverlay = () => {
        setOverlayVisible(false);
    };


    return (
        <View style={styles.container}>
            <View style={styles.myPostContainer}>
                <Text style={styles.addTitle}>Add Your Post</Text>

                <View style={styles.clickOverlay}>
                    <TouchableOpacity onPress={handleOpenOverlay} style={styles.clickOverlayTextArea}>
                        <Text style={styles.placeholder}>Type something...</Text>
                    </TouchableOpacity>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={handleOpenOverlay} style={styles.demoButton}>
                            <Text style={styles.overlayButtonText}>Add Photo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleOpenOverlay} style={styles.demoButton}>
                            <Text style={styles.overlayButtonText}>Publish</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <Modal visible={isOverlayVisible} transparent={true} animationType="slide">
                    <View style={styles.overlay}>
                        <Dash_Add_Post_Overlay_Layout onClickClose= {handleCloseOverlay}/>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '70%',
        alignSelf: 'center',
    },
    myPostContainer: {
        paddingTop: 20,
    },
    addTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        marginTop: 10,
        padding: 10,
        width: '100%',
        textAlignVertical: 'top',
    },

    clickOverlay: {

    },

    clickOverlayTextArea: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
    },

    placeholder: {
        color: '#B8B8B8',
    },

    buttonRow: {
        flexDirection: 'row',
        marginTop: 10,
    },

    demoButton: {
        flex: 1,
        marginTop: 10,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#DCDDFF',
        alignItems: 'center',
    },

    overlayButtonText: {
        color: '#624DF6',
        fontWeight: 'bold',
    },

    overlay: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
