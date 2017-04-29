import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button
} from 'react-native';

import { Header } from './components/common';

export default class stretchingroutinetimer extends Component {
  state = {

  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Stretch Routine Timer" />
        <View style={styles.selectRoutine}>
          <Text>
            Select a Routine
          </Text>
          <Picker
            style={styles.picker}
            selectedValue={"weee"}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="js" />
          </Picker>
        </View>
        <View style={styles.createRoutine}>
          <Button style={styles.button} title="Create a routine" onPress={()=>{}} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#ccc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  selectRoutine: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent:'center',
    flex: 1
  },
  picker: {
    backgroundColor: 'purple',
    alignSelf: 'stretch'
  },
  createRoutine: {
    backgroundColor: 'green',
    justifyContent: 'center',
    flex: 1
  }
}
