import React, { useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({title, results})=>{
  return<View style={styles.resultsList}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>Results: {results.length}</Text>
  </View>
};
const styles = StyleSheet.create({
  title:{
    fontSize:18,
    fontWeight: 'bold',
    marginHorizontal:15,

  },
  resultsList: {
    marginTop:10,
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 5,
    marginHorizontal:15,
    flexDirection: 'row',
    color: 'black'
  }

});

export default ResultsList;