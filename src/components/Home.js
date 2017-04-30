import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button
} from 'react-native';

import { Header } from './common';

export default class home extends Component {
  state = {
    routine: 'regular'
  }

  onRoutineSelect() {
    this.props.navigator.push({
      name: 'Routine',
      passProps: {
        routine: this.state.routine
      }
    })
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
            <Picker.Item label="Regular" value="regular" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="py" />
          </Picker>
          <Button
            style={styles.button}
            onPress={this.onRoutineSelect.bind(this)}
            title="Select"
            color="#841584"
          />
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
