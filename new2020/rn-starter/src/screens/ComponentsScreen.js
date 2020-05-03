import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi there!';
    const alsoAgreeting = <Text>Hello to you!</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text>{greeting}</Text>
            {alsoAgreeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;
