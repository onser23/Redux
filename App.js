import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

import Home from './src/screen/Home';
import Detail from './src/screen/Detail';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
// import {configureStore} from '@reduxjs/toolkit';
import reducers from './src/redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
