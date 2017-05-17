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
  constructor(props) {
    super(props);

    this.state = {
      exercise: 'Rest',
      duration: null,
      exercises: [],
      routine: [],
      modalVisible: false
    };
  }

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

  getExerciseObject(name) {
    return this.state.exercises.filter((ex) => ex.name === name)[0];
  }

  addExercise() {
    const exercise = this.getExerciseObject(this.state.exercise);
    const duration = this.state.duration;
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
            title={"Add to routine"}
            color="#841584"
            />
         </View>
        </Modal>


        <Text>
          Current Routine
        </Text>
        <Text>
          { this.renderRoutine() }
        </Text>
        <Button
          style={styles.button}
          onPress={() => { }}
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
