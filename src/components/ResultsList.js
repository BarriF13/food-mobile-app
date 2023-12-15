import React, { useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
//withNavigation makes sure this component get access to prop object directly without adding it to the parent component, but we need to wrap it on the export default
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation})=>{
  //console.log(results)
  return<View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result)=> result.id}
        renderItem={({item })=> {
          return (
            <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow',{id: item.id})}> 
              <ResultsDetail result={item} />
            </TouchableOpacity>
           
          ) 
    }}
    />
  </View>
};
const styles = StyleSheet.create({
  title:{
    fontSize:18,
    fontWeight: 'bold',
    marginHorizontal:15,
    marginBottom:5,
  },
  container: {
    marginBottom:15,
  }

});

export default withNavigation(ResultsList);