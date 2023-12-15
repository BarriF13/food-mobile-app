import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet,ScrollView  } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {

const [result, setResult] = useState(null);
const id = navigation.getParam('id');
console.log(result);
 const getResult = async (id)=>{
  
  try {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  }
  catch(e){
    setErrorMessage('Something went wrong');
  }

 };
 useEffect(() => {
  getResult(id);
}, []);

  return <View>
    <Text>result</Text>
  </View>
}
const styles = StyleSheet.create({});

export default ResultsShowScreen;