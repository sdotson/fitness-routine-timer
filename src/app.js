import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import { Header } from './components/common';

export default class stretchingroutinetimer extends Component {
  render() {
    return (
      <View>
        <Header headerText="Stretch Routine Timer" />
        <Text>
          Content
        </Text>
      </View>
    );
  }
}
