import React, { Component } from 'react';
import store from 'react-native-simple-store';
import {
  Text,
  View,
  Button,
  Picker,
  Switch,
  Modal
} from 'react-native';

import { Header, Subheader, Input } from './common';

export default class CreateRoutine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: 'Rest',
      routineName: null,
      duration: null,
      exercises: [],
      routine: [],
      modalVisible: false
    };
  }

  componentDidMount() {
    const that = this;
    store.get('exercises').then(function(exercises) {
      that.setState({
        exercises: exercises
      });
    });
  }

  onExerciseSelect() {
    console.log('exercise selected');
  }

  onRoutineNameChange(event) {
    this.setState({
      routineName: event
    });
  }

  onSaveRoutine() {
    const that = this;
    store.get('routines').then(function(routines) {
      const newRoutine = {
        name: this.state.routineName,
        exercises: this.state.routine
      };
      store.save('routines', [...routines, newRoutine]);
    });
  }

  getExerciseObject(name) {
    return this.state.exercises.filter((ex) => ex.name === name)[0];
  }

  addExercise() {
    const exercise = this.getExerciseObject(this.state.exercise);
    const duration = parseInt(this.state.duration);
    const newExercise = Object.assign({}, exercise, { duration });

    this.setState({
      modalVisible: false,
      exercise: newExercise,
      routine: [...this.state.routine, newExercise]
    });
  }

  renderRoutine() {
    return (
      this.state.routine.map((exercise) => {
        return (
          <Text key={exercise.name}>{ `${exercise.name} ${exercise.duration}` }</Text>
        );
      })
    );

  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Fitness Routine Timer" />
        <Subheader headerText="Create Routine" />
        <Input
          label="Routine Name"
          placeholder="Enter routine name here"
          onChangeText={this.onRoutineNameChange.bind(this)}
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
          <Input
            label="Duration"
            placeholder="How long do you want to do this exercise?"
            onChangeText={(value) => { this.setState({ duration: value }) }}
          />
          <Button
            style={styles.button}
            onPress={this.addExercise.bind(this)}
            title={"Add exercise to routine"}
            color="#841584"
            />
         </View>
        </Modal>


        <Text>
          Current Routine
        </Text>
        { this.renderRoutine() }
        <Button
          style={styles.button}
          onPress={this.onSaveRoutine.bind(this)}
          title={"Save Routine"}
          color="#841584"
          />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
}
