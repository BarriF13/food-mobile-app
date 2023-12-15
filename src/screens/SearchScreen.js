import React, { useState} from 'react';
import { View, Text, StyleSheet,ScrollView  } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage]= useResults();
  const filterResultByPrice = (price)=>{
    return results.filter(results=> {
      return results.price === price;
    })
  };
  return (
 
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultsList results={filterResultByPrice('£')} title={'Cost effective'} navigation={navigation} />
      <ResultsList results={filterResultByPrice('££')}  title={'Fancy'} navigation={navigation}/>
      <ResultsList results={filterResultByPrice('£££')} title={'Big spender'} navigation={navigation}/>
      </ScrollView>
    </>
    
  );
};


export default SearchScreen;
