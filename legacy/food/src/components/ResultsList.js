import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
    return (
        <View style={stlyes.container}>
            <Text style={stlyes.title}>{title}</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={results}
              keyExtractor={(result) => result.id}
              renderItem={({ item }) => {
                  return <ResultsDetail result={item} />;
              }}
              />
        </View>
    );
};

const stlyes = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;
