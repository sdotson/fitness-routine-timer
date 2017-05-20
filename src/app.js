import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button,
  Navigator,
  AsyncStorage
} from 'react-native';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';

import Home from './components/Home';
import Routine from './components/Routine';
import CreateRoutine from './components/CreateRoutine';

import promise from 'redux-promise';
import reducers from './reducers';
import { persistStore, autoRehydrate } from 'redux-persist'

const store = compose(autoRehydrate())(createStore)(reducers);

persistStore(store, {storage: AsyncStorage});

export default class fitnessroutinetimer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          style={styles.container}
          initialRoute={{ name: 'Home' }}
          renderScene={this.renderScene} />
      </Provider>
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
