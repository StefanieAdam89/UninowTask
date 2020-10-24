import React, { Component } from 'react';
import { View } from 'react-native';

import LoginView from './views/LoginView';

export default class App extends Component {
  render() {
    return (
      <View>
        <LoginView />
      </View>
    )
  }
}
