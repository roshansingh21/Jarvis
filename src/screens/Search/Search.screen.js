import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {Avatar} from 'react-native-paper';

import theme from '../../theme/theme';

const Search = () => {
  const [search, setSearch] = useState('');
  let recentSearch = [
    {name: 'Happy Hour', id: 1},
    {name: 'Birthday Party', id: 2},
    {name: 'Networking Event', id: 3},
  ];
  let people = [
    {name: 'Paragon Restaurant', id: 1, initial: 'P'},
    {name: 'Richard David', id: 2, initial: 'R'},
    {name: 'John Doe', id: 3, initial: 'J'},
  ];
  let subject = [
    {name: 'Reservation reminder', id: 1, time: 'June 6, 2019'},
    {name: 'Reservation reminder', id: 2, time: 'June 6, 2019'},
    {name: 'Reservation reminder', id: 3, time: 'June 6, 2019'},
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
      <View style={{paddingHorizontal: '4%', paddingTop: 20}}>
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
          placeholder="Search conversations"
          placeholderTextColor={theme.LIGHT_COLOR}
        />
        <EvilIcons
          name={'search'}
          size={24}
          color={theme.LIGHT_COLOR}
          style={{position: 'absolute', right: 20, top: 35}}
        />
        <TouchableOpacity
          style={{paddingVertical: 10, paddingRight: 20}}
          onPress={() => setSearch('')}>
          <Text style={{fontFamily: theme.THIN_FONT, color: theme.LIGHT_COLOR}}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{paddingHorizontal: '4%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 40,
          }}>
          <Text
            style={{
              fontFamily: theme.THIN_FONT,
              color: theme.LIGHT_COLOR,
              fontSize: 12,
            }}>
            RECENT SEARCHES
          </Text>
          <EvilIcons
            name={'close'}
            size={24}
            color={theme.LIGHT_COLOR}
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
            onPress={() => (recentSearch = [])}
          />
        </View>
        <FlatList
          data={recentSearch}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => setSearch(item.name)}>
              <Text
                style={{
                  paddingVertical: 10,
                  fontFamily: theme.SEMIBOLD_FONT,
                  color: theme.LIGHT_COLOR,
                  fontSize: 16,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Text
          style={{
            fontFamily: theme.THIN_FONT,
            color: theme.LIGHT_COLOR,
            fontSize: 12,
            paddingBottom: 5,
          }}>
          PEOPLE
        </Text>
        <FlatList
          data={people}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => setSearch(item.name)}>
              <Avatar.Text
                size={24}
                label={item.initial}
                style={{backgroundColor: theme.LIGHT_COLOR}}
                color={theme.LIGHT_BLUE}
              />
              <Text
                style={{
                  paddingVertical: 10,
                  fontFamily: theme.SEMIBOLD_FONT,
                  color: theme.LIGHT_COLOR,
                  fontSize: 16,
                }}>
                {'  '}
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Text
          style={{
            fontFamily: theme.THIN_FONT,
            color: theme.LIGHT_COLOR,
            fontSize: 12,
            paddingBottom: 5,
          }}>
          SUBJECT
        </Text>
        <FlatList
          data={subject}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => setSearch(item.name)}>
              <Text
                style={{
                  paddingVertical: 10,
                  fontFamily: theme.SEMIBOLD_FONT,
                  color: theme.LIGHT_COLOR,
                  fontSize: 16,
                }}>
                {item.name} - {item.time}
              </Text>
              <Entypo
                name={'chevron-small-right'}
                size={24}
                color={theme.LIGHT_COLOR}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default Search;
