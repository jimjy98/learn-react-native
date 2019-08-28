import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {
    return (
        <Image source={imageSource} />
        <Text>{title}</Text>
        <Text>Image score - {score}</Text>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;