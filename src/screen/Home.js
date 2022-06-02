import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SetName} from '../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {GeneralResponse} = useSelector(state => state);

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>
        Name: {GeneralResponse.name} Age {GeneralResponse.age}
      </Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'red', margin: 10, padding: 5}}
        value={GeneralResponse.name}
        onChangeText={text => dispatch(SetName(text))}
      />
      <Button title="Go Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default Home;
