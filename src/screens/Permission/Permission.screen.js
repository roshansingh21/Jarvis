import React, {useRef, useState} from 'react';
import {View, Text, StatusBar, Platform, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-input';
import AsyncStorage from '@react-native-community/async-storage';
import theme from '../../theme/theme';

const Permission = ({navigation}) => {
  const [token, setToken] = useState(navigation.getParam('token'));

  const agree = () => {
    AsyncStorage.setItem('token', token);
    navigation.navigate('Splash');
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
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: Platform.OS === 'android' ? 10 : 40,
          paddingHorizontal: '10%',
        }}>
        <Text
          style={{
            fontFamily: theme.DEFAULT_FONT,
            color: theme.LIGHT_COLOR,
            fontSize: 18,
          }}>
          JARVIS
        </Text>
        <Text
          style={{
            fontFamily: theme.DEFAULT_FONT,
            color: theme.LIGHT_COLOR,
            fontSize: 18,
            textAlign: 'center',
            paddingTop: 100,
            paddingBottom: 10,
          }}>
          We would like to automatically authenticate your phone number.
        </Text>
        <Text
          style={{
            fontFamily: theme.DEFAULT_FONT,
            color: theme.LIGHT_COLOR_ALPHA,
            fontSize: 18,
            textAlign: 'center',
            paddingBottom: 50,
          }}>
          Using some cool technology, and if you choose to agree, we will
          validate your account without you having to enter any six digit code.
        </Text>

        <TouchableOpacity onPress={() => agree()} style={{paddingVertical: 20}}>
          <Text
            style={{
              fontFamily: theme.BOLD_FONT,
              color: theme.LIGHT_COLOR,
              fontSize: 24,
            }}>
            AGREE
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Permission;
