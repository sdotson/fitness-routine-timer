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
    routine: 'java'
  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Stretch Routine Timer" />
        <View style={styles.selectRoutine}>
          <Text style={styles.selectRoutineText}>
            Select a Routine
          </Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.routine}
            onValueChange={(routine) => this.setState({routine: routine})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="py" />
          </Picker>
        </View>
        <View style={styles.createRoutine}>
          <Button
            style={styles.button}
            onPress={()=>{}}
            title="Create a routine"
            color="#841584"
          />
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
  selectRoutineText: {
    fontSize: 18
  },
  selectRoutine: {
    alignItems: 'center',
    justifyContent:'center',
    flex: 1
  },
  picker: {
    alignSelf: 'stretch'
  },
  createRoutine: {
    flex: 1,
  },
  button: {
    backgroundColor: 'red'
  }
}
