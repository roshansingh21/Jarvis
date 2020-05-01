import React, {useRef} from 'react';
import {View, Text, StatusBar, FlatList, Image, ScrollView} from 'react-native';
import {Badge, Divider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Lightbox from 'react-native-lightbox';
import {WebView} from 'react-native-webview';
import theme from '../../theme/theme';
import styles from './Home.styles';

const Home = ({navigator}) => {
  const data = [
    {
      id: 1,
      name: 'Mark Doe',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      new: 2,
      constentType: 'text',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    },
    {
      id: 2,
      name: 'Clark Man',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      new: 4,
      constentType: 'img',
      content: 'https://placeimg.com/640/480/any',
    },
    {
      id: 3,
      name: 'Jaden Boor',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      new: 2,
      constentType: 'vedio',
      content: 'https://www.youtube.com/embed/0FYjApop7Mk',
    },
    {
      id: 4,
      name: 'Srick Tree',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      new: 5,
      constentType: 'text',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    },
    {
      id: 5,
      name: 'Erick Doe',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      new: 12,
      constentType: 'vedio',
      content: 'https://www.youtube.com/embed/u3APNJYMrLo',
    },
    {
      id: 6,
      name: 'Francis Doe',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      new: 2,
      constentType: 'text',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    },
    {
      id: 8,
      name: 'Matilde Doe',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      new: 1,
      constentType: 'img',
      content: 'https://placeimg.com/640/480/any',
    },
    {
      id: 9,
      name: 'John Doe',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      new: 2,
      constentType: 'img',
      content: 'https://placeimg.com/640/480/any',
    },
    {
      id: 10,
      name: 'Fermod Doe',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      new: 7,
      constentType: 'text',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    },
    {
      id: 11,
      name: 'Danny Doe',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      new: 2,
      constentType: 'img',
      content: 'https://placeimg.com/640/480/any',
    },
  ];
  const dataPrev = [
    {
      id: 5,
      name: 'Erick Doe',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      new: 12,
      constentType: 'vedio',
      content: 'https://www.youtube.com/embed/u3APNJYMrLo',
    },
    {
      id: 6,
      name: 'Francis Doe',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      new: 2,
      constentType: 'text',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    },
    {
      id: 8,
      name: 'Matilde Doe',
      status: 'RECIEVED 2:34 PM',
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      new: 1,
      constentType: 'img',
      content: 'https://placeimg.com/640/480/any',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.row}>
          <Image source={{uri: item.image}} style={styles.pic} />
          <View style={{flex: 1, marginTop: 10}}>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.name}
              </Text>
              <Badge style={styles.mblTxt}>{item.new} NEW</Badge>
            </View>
            <Text style={styles.msgTxt}>{item.status}</Text>
            <View style={styles.contentWrap}>
              {item.constentType === 'text' && (
                <Text style={styles.content}>{item.content}</Text>
              )}
              {item.constentType === 'img' && (
                <Lightbox navigator={navigator}>
                  <Image
                    source={{uri: item.content}}
                    style={styles.contentPic}
                  />
                </Lightbox>
              )}
              {item.constentType === 'vedio' && (
                <View style={styles.contentPic}>
                  <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: item.content}}
                  />
                </View>
              )}
            </View>
            <View
              style={{
                ...styles.nameContainer,
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <Ionicons
                name={'md-more'}
                size={24}
                color={theme.LIGHT_COLOR_ALPHA}
              />
              <Ionicons
                name={'md-mic-off'}
                size={24}
                color={theme.LIGHT_COLOR_ALPHA}
              />
              <Ionicons
                name={'ios-bookmark'}
                size={24}
                color={theme.LIGHT_COLOR_ALPHA}
              />
              <Ionicons
                name={'ios-share'}
                size={24}
                color={theme.LIGHT_COLOR_ALPHA}
              />
              <Ionicons
                name={'ios-undo'}
                size={24}
                color={theme.LIGHT_COLOR_ALPHA}
              />
            </View>
            <Divider
              style={{
                marginVertical: 10,
                backgroundColor: theme.LIGHT_COLOR_ALPHA,
              }}
            />
          </View>
        </View>
      </View>
    );
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
      <View>
        <Text
          style={{
            fontFamily: theme.DEFAULT_FONT,
            fontSize: 12,
            color: theme.LIGHT_COLOR_ALPHA,
            paddingVertical: 10,
            alignSelf: 'center',
          }}>
          NEW MESSAGES
        </Text>
      </View>
      <ScrollView>
        <FlatList
          data={data}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={item => renderItem(item)}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '3%',
          }}>
          <Image
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}
            style={styles.pic}
          />
          <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">
            John Doe
          </Text>
          <View>
            <Badge
              style={{
                borderColor: theme.LIGHT_COLOR,
                borderWidth: 1,
                paddingHorizontal: 20,
                color: theme.LIGHT_COLOR,
                fontSize: 14,
                backgroundColor: 'transparent',
                fontFamily: theme.DEFAULT_FONT,
              }}>
              INVITE
            </Badge>
          </View>
        </View>
        <Divider
          style={{
            marginVertical: 10,
            marginLeft: '20%',
            marginRight: '3%',
            backgroundColor: theme.LIGHT_COLOR_ALPHA,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '3%',
          }}>
          <Image
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}
            style={styles.pic}
          />
          <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">
            John Doe
          </Text>
          <View>
            <Badge
              style={{
                borderColor: theme.LIGHT_COLOR,
                borderWidth: 1,
                paddingHorizontal: 20,
                color: theme.LIGHT_COLOR,
                fontSize: 14,
                backgroundColor: 'transparent',
                fontFamily: theme.DEFAULT_FONT,
              }}>
              INVITE
            </Badge>
          </View>
        </View>
        <Divider
          style={{
            marginVertical: 10,
            marginLeft: '20%',
            marginRight: '3%',
            backgroundColor: theme.LIGHT_COLOR_ALPHA,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '3%',
          }}>
          <Image
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}
            style={styles.pic}
          />
          <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">
            John Doe
          </Text>
          <View>
            <Badge
              style={{
                borderColor: theme.LIGHT_COLOR,
                borderWidth: 1,
                paddingHorizontal: 20,
                color: theme.LIGHT_COLOR,
                fontSize: 14,
                backgroundColor: 'transparent',
                fontFamily: theme.DEFAULT_FONT,
              }}>
              INVITE
            </Badge>
          </View>
        </View>

        <Ionicons
          name={'ios-arrow-down'}
          size={24}
          color={theme.LIGHT_COLOR}
          style={{alignSelf: 'center', paddingVertical: 15}}
        />
        <Text
          style={{
            fontFamily: theme.DEFAULT_FONT,
            fontSize: 12,
            color: theme.LIGHT_COLOR_ALPHA,
            paddingVertical: 30,
            alignSelf: 'center',
          }}>
          PREVIOUS MESSAGES
        </Text>
        <FlatList
          data={dataPrev}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={item => renderItem(item)}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
