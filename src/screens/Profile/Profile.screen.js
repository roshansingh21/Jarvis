import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Switch, Divider, RadioButton, List} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';

import theme from '../../theme/theme';

const Profile = ({navigation}) => {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

  const [curfew, setCurfew] = useState(false);
  const [timer, setTimer] = useState(30);
  const [color, setColor] = useState('blue');
  const menu = [
    {name: 'INVITE MORE FRIENDS', key: 1},
    {name: 'CONNECT MORE APPS', key: 2},
    {name: 'BILLING INFORMATION', key: 3},
    {name: 'ACCOUNT INFORMATION', key: 4},
    {name: 'LOG OUT', key: 5},
  ];

  const menuAction = id => {
    console.log(id);
    switch (id) {
      case 5:
        AsyncStorage.clear();
        navigation.navigate('Splash');
        break;

      default:
        break;
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
      <ScrollView
        style={{
          paddingHorizontal: '4%',
          paddingTop: Platform.OS === 'ios' ? 35 : 0,
        }}>
        <Avatar.Image
          size={64}
          source={require('../../assets/img/avatar.jpg')}
          style={{alignSelf: 'center', marginVertical: 20}}
        />
        <Switch
          value={curfew}
          color={theme.LIGHT_COLOR}
          onValueChange={() => {
            setCurfew(!curfew);
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
          }}
          style={{alignSelf: 'center'}}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 5,
            marginBottom: 20,
            color: theme.LIGHT_COLOR,
            fontFamily: theme.THIN_FONT,
          }}>
          {curfew ? 'Curfew is On' : 'Curfew is Off'}
        </Text>
        {curfew && (
          <Text
            style={{
              fontFamily: theme.DEFAULT_FONT,
              fontSize: 36,
              color: theme.LIGHT_COLOR,
              paddingBottom: 20,
              alignSelf: 'center',
            }}>
            9:55
            <Text style={{fontFamily: theme.THIN_FONT, fontSize: 14}}>
              {' '}
              PM{' '}
            </Text>{' '}
            - 6:25
            <Text style={{fontFamily: theme.THIN_FONT, fontSize: 14}}>
              {' '}
              AM{' '}
            </Text>
          </Text>
        )}
        <Divider style={{backgroundColor: theme.LIGHT_COLOR_ALPHA}} />
        <Text
          style={{
            fontFamily: theme.DEFAULT_FONT,
            fontSize: 24,
            color: theme.LIGHT_COLOR,
            paddingVertical: 20,
            alignSelf: 'center',
          }}>
          {timer} Seconds
        </Text>
        <Slider
          style={{width: '100%', height: 30}}
          value={timer}
          minimumValue={5}
          maximumValue={60}
          step={5}
          minimumTrackTintColor={theme.LIGHT_COLOR}
          maximumTrackTintColor={theme.LIGHT_COLOR_ALPHA}
          onValueChange={value => setTimer(value)}
          thumbTintColor={theme.LIGHT_COLOR}
        />
        <Text
          style={{
            fontFamily: theme.LIGHT_FONT,
            color: theme.LIGHT_COLOR,
            alignSelf: 'center',
            paddingBottom: 30,
          }}>
          Message recall timer
        </Text>
        <Divider style={{backgroundColor: theme.LIGHT_COLOR_ALPHA}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingVertical: 20,
          }}>
          <RadioButton.Android
            value="purple"
            status={color === 'purple' ? 'checked' : 'unchecked'}
            uncheckedColor={'purple'}
            color={'purple'}
            onPress={() => {
              setColor('purple');
            }}
          />
          <RadioButton.Android
            value="blue"
            status={color === 'blue' ? 'checked' : 'unchecked'}
            uncheckedColor={'blue'}
            color={'blue'}
            onPress={() => {
              setColor('blue');
            }}
          />
          <RadioButton.Android
            value="red"
            status={color === 'red' ? 'checked' : 'unchecked'}
            uncheckedColor={'red'}
            color={'red'}
            onPress={() => {
              setColor('red');
            }}
          />
          <RadioButton.Android
            value="orange"
            status={color === 'orange' ? 'checked' : 'unchecked'}
            uncheckedColor={'orange'}
            color={'orange'}
            onPress={() => {
              setColor('orange');
            }}
          />
          <RadioButton.Android
            value="green"
            status={color === 'green' ? 'checked' : 'unchecked'}
            uncheckedColor={'green'}
            color={'green'}
            onPress={() => {
              setColor('green');
            }}
          />
          <RadioButton.Android
            value="brown"
            status={color === 'brown' ? 'checked' : 'unchecked'}
            uncheckedColor={'brown'}
            color={'brown'}
            onPress={() => {
              setColor('brown');
            }}
          />
        </View>
        <Divider style={{backgroundColor: theme.LIGHT_COLOR_ALPHA}} />
        <FlatList
          data={menu}
          keyExtractor={item => item.key}
          contentContainerStyle={{paddingVertical: 20}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}
              onPress={() => menuAction(item.key)}>
              <Text
                style={{
                  fontFamily: theme.DEFAULT_FONT,
                  color: theme.LIGHT_COLOR,
                  alignSelf: 'center',
                  paddingBottom: 16,
                }}>
                {item.name}
              </Text>
              <Entypo
                name={'chevron-small-right'}
                size={24}
                color={theme.LIGHT_COLOR}
              />
            </TouchableOpacity>
          )}
        />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: theme.THIN_FONT,
              color: theme.LIGHT_COLOR,
              alignSelf: 'center',
              paddingBottom: 16,
            }}>
            VERSION 1.0.0
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: theme.DEFAULT_FONT,
                color: theme.LIGHT_COLOR,
                alignSelf: 'center',
                paddingBottom: 16,
              }}>
              {'     '}
              UPDATE NOW
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Profile;
