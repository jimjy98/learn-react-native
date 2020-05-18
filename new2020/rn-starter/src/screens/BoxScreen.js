import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.boxOneStyle} />
            <View style={styles.boxTwoStyle} />
            <View style={styles.boxThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        alignItems: 'flex-start', //default: stretch, aligning items horizontally
        flexDirection: 'row', //default: column.
        justifyContent: 'space-between' //opposite of align-items (vertically), default: flex-start
    },
    boxOneStyle: {
        backgroundColor: 'red',
        height: 50,
        width: 50
    },
    boxTwoStyle: {
        backgroundColor: 'green',
        height: 50,
        width: 50,
        marginTop: 50
    },
    boxThreeStyle: {
        backgroundColor: 'purple',
        height: 50,
        width: 50 
    }
});

export default BoxScreen;