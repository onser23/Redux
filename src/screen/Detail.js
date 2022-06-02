import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';

const Detail = ({navigation}) => {
  const {GeneralResponse} = useSelector(state => state);
  return (
    <View>
      <Text>Detail Screen</Text>
      <Text>
        Name: {GeneralResponse.name}, Age: {GeneralResponse.age}{' '}
      </Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Detail;
