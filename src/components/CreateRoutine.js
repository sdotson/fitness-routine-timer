import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import realm from '../db/realm';

import { Header, Subheader } from './common';

export default class CreateRoutine extends Component {

  state = {
    exercises: [],
    routine: []
  };

  componentDidMount() {
    const exercises = realm.objects('Exercise');
    console.log(exercises);
    this.setState({
      exercises: Array.from(exercises)
    });
  }

  updateDataList(data) {
    console.log('data', data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Fitness Routine Timer" />
        <Subheader headerText="Create Routine" />
        <Text>
          Down below will be a form to create a new routine.
        </Text>
        <Text>
          Will need a list of all exercises from database.
          {this.state.exercises.map(ex => ex.name)}
        </Text>
        <Text>
          will need field for routine name
        </Text>

      { this.state.routine.map(exercise => exercise.name) }
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
}
