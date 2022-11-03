/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, PureComponent, useEffect} from 'react';
import {
  Dimensions,
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import StartupActions from './src/Redux/StartupRedux';
import REDUX_PERSIST from './src/Config/ReduxPersist';
import {Colors, Fonts} from './src/Themes';

const App = () => {
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');
  useEffect(() => {
    dispatch(StartupActions.startup());
  }, []);

  return (
    <Fragment>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} color={Colors.red} />
        <View
          style={{
            width: width,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 30,
            left: 0,
            right: 0,
          }}></View>
      </View>
    </Fragment>
  );
};

App.options = {
  topBar: {
    visible: false,
  },
};

export default App;
