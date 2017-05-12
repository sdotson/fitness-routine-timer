import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Picker,
  Switch,
  Modal
} from 'react-native';

import realm from '../db/realm';

import { Header, Subheader, Input } from './common';

export default class CreateRoutine extends Component {

  state = {
    exercise: 'Rest',
    exercises: [],
    routine: [],
    modalVisible: false
  };

  componentDidMount() {
    const exercises = realm.objects('Exercise');
    this.setState({
      exercises: Array.from(exercises)
    });
  }

  onExerciseSelect() {
    console.log('exercise selected');
  }

  onAddExerciseClick() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Fitness Routine Timer" />
        <Subheader headerText="Create Routine" />
        <Input
          label="Routine Name"
          placeholder="Enter routine name here"
        />
        <Button
          style={styles.button}
          onPress={() => { this.setState({modalVisible: true})}}
          title={"Add to routine"}
          color="#841584"
        />


        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <Text>Add exercise</Text>
         <View style={{marginTop: 22}}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.exercise}
            onValueChange={(exercise) => this.setState({exercise})}>
              { this.state.exercises.map(exercise => <Picker.Item label={exercise.name} value={exercise.name} key={exercise.name} />) }
          </Picker>
          <Text>One side at a time</Text>
          <Switch
              onValueChange={(value) => {}}
              value={true} />
          <Input
            label="Type"
            placeholder="Enter rest, stretch, or exercise"
          />
          <Input
            label="Duration"
            placeholder="How long do you want to do this exercise?"
          />
          <Button
            style={styles.button}
            onPress={() => { this.setState({modalVisible: false})}}
            title={"Add to routine"}
            color="#841584"
            />
         </View>
        </Modal>


        <Text>
          Current Routine
        </Text>
        <Text>
          { this.state.routine.map(exercise => exercise.name + ', ') }
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
}
