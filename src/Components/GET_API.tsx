import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const GET_API = () => {
  const [Data, setData] = useState<any>([]);

  useEffect(() => {
    // Old Method
    // fetch('http://10.0.2.2:3000/Users')
    //   .then(res => res.json())
    //   .then(result => console.log(result))
    //   .catch(err => console.error('Fetch error :', err));

    axios.get('http://10.0.2.2:3000/Users').then(res => {
      setData(res.data);
    });
  }, []);
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>GET_API</Text>
      {Data.map((item: any) => (
        <Text style={{fontSize:20}}>{item.first_name}</Text>
      ))}
    </View>
  );
};

export default GET_API;

const styles = StyleSheet.create({});
