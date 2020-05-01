import React, {useRef, useState} from 'react';
import {View, Text, StatusBar, Platform, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-input';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import theme from '../../theme/theme';
import DropdownHolder from '../../utils/DropdownHolder';

const Signin = ({navigation}) => {
  const phone = useRef(null);
  const [phno, setPhno] = useState('');

  const signIn = async phno => {
    if (phno.length < 10) {
      DropdownHolder.dropDown.alertWithType(
        'warn',
        'Invalid Phone Number',
        'Enter a valid 10 digit number',
      );
    } else {
      const confirmation = await auth().signInWithPhoneNumber(`+91${phno}`);
      console.log(confirmation);
      // navigation.navigate('Permission', {token: phno});
    }
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
            paddingTop: 80,
            paddingBottom: 40,
          }}>
          Entry country code and {'\n'}phone number
        </Text>
        <PhoneInput
          ref={phone}
          style={{
            marginHorizontal: '10%',
            paddingHorizontal: '4%',
            justifyContent: 'center',
            backgroundColor: theme.LIGHT_COLOR,
            height: 70,
          }}
          flagStyle={{width: 40, height: 30}}
          offset={20}
          textProps={{
            placeholder: '(555) 123-4567',
            maxLength: 10,
            placeholderTextColor: '#ccc',
          }}
          textStyle={{
            fontSize: 18,
            fontFamily: theme.LIGHT_FONT,
            color: '#000',
          }}
          autoFormat={true}
          onChangePhoneNumber={val => setPhno(val)}
        />
        <TouchableOpacity
          onPress={() => signIn(phno)}
          style={{paddingVertical: 20}}>
          <Text
            style={{
              fontFamily: theme.DEFAULT_FONT,
              color:
                phno.length == 10 ? theme.LIGHT_COLOR : theme.LIGHT_COLOR_ALPHA,
              fontSize: 24,
            }}>
            Go
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Signin;
