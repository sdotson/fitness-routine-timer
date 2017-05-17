import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button,
  AsyncStorage
} from 'react-native';

import { Header } from './common';
import { initializeDatabase } from '../db';

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: null,
      routines: []
    }
  }

  componentDidMount() {
    const that = this;
    initializeDatabase()
      .then(function() {
        AsyncStorage.getItem('routines', function(err, data) {
          const routines = JSON.parse(data);
          that.setState({
            routines: routines,
            routine: routines[0].name
          });
        });
      });
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
        <Header headerText="Fitness Routine Timer" />
        <View style={styles.selectRoutine}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.routine}
            onValueChange={(routine) => this.setState({routine: routine})}>
              { this.state.routines.map(routine => <Picker.Item label={routine.name} value={routine.name} key={routine.name} />) }
          </Picker>
          <Button
            style={styles.button}
            onPress={this.onRoutineSelect.bind(this)}
            title={"Select " + this.state.routine + ' routine'}
            color="#841584"
          />
        </View>
        <View style={styles.createRoutine}>
          <Button
            style={styles.button}
            onPress={() => {this.props.navigator.push({ name: 'Create Routine' })}}
            title="Or create a new routine"
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
    flex: 1
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
