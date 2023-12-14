import React, { useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage]= useResults();

  const filterResultByPrice = (price)=>{
    return results.filter(results=> {
      return results.price === price;
    })
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultByPrice('£')} title={'Cost effective'}/>
      <ResultsList results={filterResultByPrice('££')}  title={'Fancy'}/>
      <ResultsList results={filterResultByPrice('£££')} title={'Big spender'}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
