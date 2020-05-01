import * as React from 'react';
import {Dimensions, Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {Transition} from 'react-native-reanimated';
import NavigationService from '../utils/NavigationService';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import theme from '../theme/theme';
import Authloading from '../screens/Authloading/Authloading.screen';
import Home from '../screens/Home/Home.screen';
import Profile from '../screens/Profile/Profile.screen';
import Bookmarks from '../screens/Bookmarks/Bookmarks.screen';
import Search from '../screens/Search/Search.screen';
import NewChat from '../screens/NewChat/NewChat.screen';
import SignIn from '../screens/Signin/Signin.screen';
import Permission from '../screens/Permission/Permission.screen';
import Chat from '../screens/Chat/Chat.screen';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

// const AppTabNavigator = createMaterialTopTabNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         tabBarIcon: ({tintColor, focused}) => (
//           <MaterialCommunityIcons
//             name={focused ? 'home' : 'home-outline'}
//             size={24}
//             color={tintColor}
//           />
//         ),
//       },
//     },
//     Bookmarks: {
//       screen: Bookmarks,
//       navigationOptions: {
//         tabBarIcon: ({tintColor, focused}) => (
//           <MaterialCommunityIcons
//             name={focused ? 'bookmark' : 'bookmark-outline'}
//             size={24}
//             color={tintColor}
//           />
//         ),
//       },
//     },
//     NewChat: {
//       screen: NewChat,
//       navigationOptions: {
//         tabBarOnPress: ({navigation}) => {
//           navigation.navigate('NewChatScreen');
//         },
//         tabBarIcon: ({tintColor, focused}) => (
//           <MaterialCommunityIcons
//             name={focused ? 'message-plus' : 'message-outline'}
//             size={24}
//             color={tintColor}
//           />
//         ),
//       },
//     },
//     Search: {
//       screen: Search,
//       navigationOptions: {
//         tabBarIcon: ({tintColor, focused}) => (
//           <Feather
//             name={focused ? 'search' : 'search'}
//             size={24}
//             color={tintColor}
//           />
//         ),
//       },
//     },
//     Profile: {
//       screen: Profile,
//       navigationOptions: {
//         tabBarIcon: ({tintColor, focused}) => (
//           <MaterialCommunityIcons
//             name={focused ? 'account' : 'account-outline'}
//             size={24}
//             color={tintColor}
//           />
//         ),
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     tabBarPosition: 'top',
//     animationEnabled: false,
//     lazy: true,
//     swipeEnabled: false,
//     tabBarOptions: {
//       showIcon: true,
//       showLabel: false,
//       indicatorStyle: {
//         height: null,
//       },
//       style: {
//         backgroundColor: theme.LIGHT_BLUE,
//         paddingTop: Platform.OS === 'ios' ? 50 : 10,
//         elevation: 0,
//         shadowColor: theme.LIGHT_BLUE,
//         shadowOpacity: 0,
//         shadowOffset: {
//           height: 0,
//         },
//       },
//     },
//   },
// );

const AppStack = createStackNavigator({
  // AppTabNavigator: {
  //   screen: AppTabNavigator,
  //   navigationOptions: ({navigation}) => ({
  //     headerMode: 'none',
  //     headerShown: false,
  //     headerTitleAlign: 'center',
  //   }),
  // },
  NewChatScreen: {
    screen: NewChat,
    navigationOptions: ({navigation}) => ({
      headerMode: 'none',
      headerShown: false,
      headerTitleAlign: 'center',
    }),
  },
  // SearchScreen: {
  //   screen: Search,
  //   navigationOptions: ({navigation}) => ({
  //     headerMode: 'none',
  //     headerShown: false,
  //     headerTitleAlign: 'center',
  //   }),
  // },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      headerMode: 'none',
      headerShown: false,
      headerTitleAlign: 'center',
    }),
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({navigation}) => ({
      headerTitleAlign: 'center',
      headerBackTitle: 'Back',
      headerTruncatedBackTitle: 'Back',
      headerBackTitleStyle: {
        fontSize: 10,
      },
      headerTintColor: theme.LIGHT_COLOR,
      headerStyle: {
        backgroundColor: theme.LIGHT_BLUE,
      },
    }),
  },
});

const AuthStack = createStackNavigator(
  {
    SignIn: SignIn,
    Permission: Permission,
  },
  {headerMode: 'none'},
);

const switchNav = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      Splash: Authloading,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Splash',
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-left"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
    },
  ),
);

const AppContainer = createAppContainer(switchNav);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
