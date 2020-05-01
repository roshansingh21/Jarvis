import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
// import {Provider as StoreProvider} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import DropDownHolder from './utils/DropdownHolder';
// import store from './redux/configureStore';
import firebase from '@react-native-firebase/app';
import Routes from './routes';

const iosConfig = {
  clientId:
    '921899483662-lcsp061m3vic9oarf9su6ttio5abb5db.apps.googleusercontent.com',
  appId: '1:921899483662:ios:9373a401ad5031fa85f25f',
  apiKey: 'AIzaSyC7UK9qDH5o3hWOigWpfdbdPWn66JQrm7M',
  databaseURL: 'https://jarvis-21344.firebaseio.com',
  storageBucket: 'jarvis-21344.appspot.com',
  messagingSenderId: '921899483662',
  projectId: 'jarvis-21344',
  persistence: true,
};

const androidConfig = {
  clientId:
    '921899483662-i84vq617hgc7pe63ab75tlbgiigso86n.apps.googleusercontent.com',
  appId: '1:921899483662:android:6f55a924635dbe3885f25f',
  apiKey: 'AIzaSyBSBwLuOlUCzCKJPUXSwK4AiGgJPDjG5R4',
  databaseURL: 'https://jarvis-21344.firebaseio.com',
  storageBucket: 'jarvis-21344.appspot.com',
  messagingSenderId: '921899483662',
  projectId: 'jarvis-21344',
  persistence: true,
};

const RootComponent = () => {
  console.reportErrorsAsExceptions = false;
  console.disableYellowBox = true;
  useEffect( () => {
    firebase
      .initializeApp(
        // use platform-specific firebase config
        Platform.OS === 'ios' ? iosConfig : androidConfig,
        // name of this app
        'Jarvis',
      )
      .then(app => console.log('initialized apps ->', firebase.apps));
    return () => {
      await firebase.app('Jarvis').delete();
    };
  }, []);

  return (
    // <StoreProvider store={store}>
    <PaperProvider>
      <Routes />
      <DropdownAlert
        ref={ref => DropDownHolder.setDropDown(ref)}
        closeInterval={3000}
      />
    </PaperProvider>
    // </StoreProvider>
  );
};

export default RootComponent;
