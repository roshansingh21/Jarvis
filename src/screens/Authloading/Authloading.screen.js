import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import theme from '../../theme/theme';

const Authloading = ({navigation}) => {
  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      setTimeout(() => {
        _bootstrapAsync(token);
      }, 1000);
    });
  });
  const _bootstrapAsync = token => {
    token == '' || token == null
      ? navigation.navigate('Auth')
      : navigation.navigate('App');
  };
  return (
    <LinearGradient
      start={{x: 1.5, y: 0.5}}
      end={{x: 1, y: 0}}
      colors={[
        theme.LIGHT_BLUE,
        theme.DARK_BLUE,
        theme.DARK_BLUE,
        theme.LIGHT_BLUE,
      ]}
      style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.LIGHT_BLUE}
      />
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text
          style={{
            fontFamily: theme.DEFAULT_FONT,
            color: theme.LIGHT_COLOR,
            fontSize: 18,
          }}>
          JARVIS
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Authloading;
