/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import {Navigation} from 'react-native-navigation';

import App from '../../App';
import Login from '../Screens/Login/Login';
import Notification from '../Screens/Notification/Notification';
import Home from '../Screens/Home/Home';

import ReduxWrapper from './ReduxWrapper';
import {NAVIGATION_NAME} from './NavigationName';

function RegisterComponentWrapper(identity, component) {
  Navigation.registerComponent(
    identity,
    () => ReduxWrapper(component),
    () => component,
  );
}

export default function () {
  App.options = {
    topBar: {
      visible: true,
    },
  };

  RegisterComponentWrapper(NAVIGATION_NAME.APP, App);
  RegisterComponentWrapper(NAVIGATION_NAME.AUTH.login, Login);

  RegisterComponentWrapper(NAVIGATION_NAME.HOME.home, Home);
  RegisterComponentWrapper(NAVIGATION_NAME.HOME.notification, Notification);
}
