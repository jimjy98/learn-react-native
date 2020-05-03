import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = (props) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Name:</Text>

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />

            <Text>Your name is {name}</Text>

            <Text style={{ fontSize: 20 }}>Enter Password:</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length > 5 ? null : <Text>Password must be longer than 5 characters</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;