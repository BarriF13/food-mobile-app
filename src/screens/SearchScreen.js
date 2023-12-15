import React, { useState} from 'react';
import { View, Text, StyleSheet,ScrollView  } from 'react-native';
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
 
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <ResultsList results={filterResultByPrice('£')} title={'Cost effective'}/>
      <ResultsList results={filterResultByPrice('££')}  title={'Fancy'}/>
      <ResultsList results={filterResultByPrice('£££')} title={'Big spender'}/>
      </ScrollView>
    </>
    
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
