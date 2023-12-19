import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet,ScrollView ,FlatList,Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {

const [result, setResult] = useState(null);
const id = navigation.getParam('id');

 const getResult = async (id)=>{
  
    const response = await yelp.get(`${id}`);
    setResult(response.data);

 };
 useEffect(() => {
  getResult(id);
}, []);

if(!result){
  return null;
}
  return <View >
    <Text style={styles.title}>{result.name}</Text>
    <FlatList
    data={result.photos}
    keyExtractor={(photo) => photo}
    renderItem={({item})=> {
      return(
      <Image style={styles.image} source={{ uri: item}}/>)
      
    }} />
  </View>
  
}
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    margin: 15,
    borderRadius: 10,
  },
  title: {
    marginLeft: 18,
    marginTop:15,
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default ResultsShowScreen;