import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  SearchBar  from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchScreen =()=>{
  const [term, setTerm]= useState('');
  const [results, setResults]= useState([]);
  const[errorMessage, setErrorMessage]=useState('')


  const searchApi = async()=>{
    try {
    const response = await yelp.get('/search', {
     params: {
       term,
       limit: 50,
       location: 'London'
   
     }
   , });
    setResults(response.data.businesses)
   } catch(err){
setErrorMessage('OPPSIEE,something went wrong!!');
  };
};

  return <View style={styles.searchScreen}>
   <SearchBar
    term={term}
    onTermChange={setTerm}
    onTermSubmit={searchApi}
    />
   {errorMessage? <Text>{errorMessage}</Text>: null} 
   <Text>We have found {results.length} results</Text>
    </View>
};
const styles = StyleSheet.create({});

export default SearchScreen;