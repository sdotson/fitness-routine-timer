import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button,
  Navigator
} from 'react-native';

import Home from './components/Home';
import Routine from './components/Routine';
import CreateRoutine from './components/CreateRoutine';

export default class stretchingroutinetimer extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ name: 'Home' }}
        renderScene={this.renderScene} />
    );
  }

  renderScene(route, navigator) {
     if(route.name == 'Routine') {
       return <Routine navigator={navigator} {...route.passProps} />
     }
     if(route.name == 'Home') {
       return <Home navigator={navigator} {...route.passProps} />
     }
     if(route.name == 'Create Routine') {
       return <CreateRoutine navigator={navigator} {...route.passProps} />
     }
  }
}

const styles = {
  container: {
    flex: 1
  }
}
