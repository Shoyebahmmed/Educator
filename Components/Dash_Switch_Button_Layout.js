import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Dash_Switch_Button_Layout({ onSelectOption }) {
    const [selectedOption, setSelectedOption] = useState('Community Wall');

    const handleOptionSelection = (option) => {
        setSelectedOption(option);
        onSelectOption(option);
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonArea}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            borderBottomWidth: selectedOption === 'Community Wall' ? 2 : null,
                            borderBottomColor: selectedOption === 'Community Wall' ? '#624DF6' : null,
                        },
                    ]}
                    onPress={() => handleOptionSelection('Community Wall')}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            {
                                color: selectedOption === 'Community Wall' ? 'black' : '#C5C5C5',
                            },
                        ]}
                    >
                        Community Wall
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            borderBottomWidth: selectedOption === 'QueryHub' ? 2 : null,
                            borderBottomColor: selectedOption === 'QueryHub' ? '#624DF6' : null,
                        },
                    ]}
                    onPress={() => handleOptionSelection('QueryHub')}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            {
                                color: selectedOption === 'QueryHub' ? 'black' : '#C5C5C5',
                            },
                        ]}
                    >
                        QueryHub
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '65%',
        alignSelf: 'center',
        backgroundColor: '#fff',
    },
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
    },
    button: {
        flex: 1,
        padding: 10,
    },
    buttonText: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
