import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button
} from 'react-native';

import { getAllRoutines } from './routines';
import { Header } from './common';
import Realm from '../realm';

export default class home extends Component {
  state = {
    routine: null,
    routines: []
  }


// IDEA!!!
/*

create an additional property to mark exercises and routines as default,
then add a check before adding new defaults on app load
simple, low-tech way of fixing the problem

also, abstract out the database functions. this db seeding stuff
shouldn't happen in the component

AWESOME PROGRESS. EXCITED TO WORK ON THIS TOMORROW.

*/

  componentDidMount() {
    Realm.write(() => {
      let allRoutines = Realm.objects('Routine').filtered('default = true');
      Realm.delete(allRoutines);
      getAllRoutines().map((routine) => {
        Realm.create('Routine', { name: routine.name, default: true, stretches: routine.stretches });
      });
    });

    const routines = Realm.objects('Routine').map(routine => routine.name);

    this.setState({
      routines: routines,
      routine: routines[0]
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
        <Header headerText="Stretch Routine Timer" />
        <View style={styles.selectRoutine}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.routine}
            onValueChange={(routine) => this.setState({routine: routine})}>
              { this.state.routines.map(routine => <Picker.Item label={routine} value={routine} key={routine} />) }
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
            onPress={()=>{}}
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
