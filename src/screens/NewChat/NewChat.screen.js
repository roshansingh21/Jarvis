import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Contacts from 'react-native-contacts';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme/theme';
import styles from '../Home/Home.styles';
import {Divider} from 'react-native-paper';

const NewChat = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [contact, setContact] = useState([]);
  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied') {
          console.log('Error getting contact');
        } else {
          setContact(contacts);
        }
      });
    });

    Platform.OS === 'ios' &&
      Contacts.getAll((err, contacts) => {
        if (err === 'denied') {
          console.log('Error getting contact');
        } else {
          console.log('object');
          console.log(contacts);
          setContact(contacts);
        }
      });
  }, []);

  let people = [
    {
      name: 'Paragon Restaurant',
      id: 1,
      initial: 'P',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    },
    {
      name: 'Richard David',
      id: 2,
      initial: 'R',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      name: 'John Doe',
      id: 3,
      initial: 'J',
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    },
  ];

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
          paddingHorizontal: '4%',
          paddingTop: Platform.OS === 'android' ? 20 : 55,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: theme.DEFAULT_FONT,
              color: theme.LIGHT_COLOR,
              fontSize: 18,
            }}>
            JARVIS
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
              }}
              style={[styles.pic, {width: 30, height: 30}]}
            />
          </TouchableOpacity>
        </View>

        <TextInput
          style={{
            borderBottomColor: theme.LIGHT_COLOR_ALPHA,
            borderBottomWidth: 1,
            height: 45,
            fontSize: 18,
            fontFamily: theme.DEFAULT_FONT,
            color: theme.LIGHT_COLOR,
          }}
          value={search}
          onChangeText={val => setSearch(val)}
          placeholder="Search"
          placeholderTextColor={theme.LIGHT_COLOR}
        />
        <EvilIcons
          name={'close'}
          size={24}
          color={theme.LIGHT_COLOR}
          style={{
            position: 'absolute',
            right: 60,
            top: Platform.OS === 'android' ? 70 : 105,
          }}
          onPress={() => setSearch('')}
        />
        <EvilIcons
          name={'plus'}
          size={24}
          color={theme.LIGHT_COLOR}
          style={{
            position: 'absolute',
            right: 20,
            top: Platform.OS === 'android' ? 70 : 105,
          }}
        />
      </View>
      <FlatList
        data={contact}
        keyExtractor={item => item.recordID}
        contentContainerStyle={{paddingBottom: 20}}
        renderItem={({item}) => (
          <>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: '4%',
                paddingVertical: 15,
              }}
              onPress={() =>
                navigation.navigate('Chat', {
                  name: item.displayName || item.givenName,
                  phone: item.phoneNumbers[0] || item.phoneNumbers[0],
                })
              }>
              <Image
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar3.png',
                }}
                style={[styles.pic, {width: 40, height: 40}]}
              />
              <Text
                style={{
                  paddingVertical: 10,
                  fontFamily: theme.SEMIBOLD_FONT,
                  color: theme.LIGHT_COLOR,
                  fontSize: 16,
                }}>
                {'  '}
                {Platform.OS === 'android' ? item.displayName : item.givenName}
              </Text>
            </TouchableOpacity>
            <Divider
              style={{
                backgroundColor: theme.LIGHT_COLOR_ALPHA,
                marginHorizontal: '4%',
              }}
            />
          </>
        )}
      />
    </LinearGradient>
  );
};

export default NewChat;
