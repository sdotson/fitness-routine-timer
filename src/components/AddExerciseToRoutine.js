import React, { Component } from 'react';
import {
  Text,
  View,
  Picker,
  Modal,
  Alert
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header, Subheader, Input } from './common';
import RoutineList from './RoutineList';
import CreateExercise from './CreateExercise';

class addExerciseToRoutine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedExerciseName: '',
      duration: props.settings.rest
    };
    this.addExercise = this.addExercise.bind(this);
  }

  validateExercise() {
    let errors = [];

    if (this.state.duration === "" || !this.state.duration) {
      errors.push("Exercise must have a duration.");
    }

    if (errors.length > 0) {
      Alert.alert("Error", errors.join("\n"));
      return false;
    } else {
      return true;
    }
  }

  getExerciseObject(name) {
    return this.props.exercises.filter((ex) => ex.name === name)[0];
  }

  addExercise() {
    const isValid = this.validateExercise();
    if (isValid) {
      const duration = parseInt(this.state.duration);
      const exercise = this.getExerciseObject(this.state.selectedExerciseName);
      const newExercise = Object.assign({}, exercise, { duration });
      this.props.addExerciseToRoutine(newExercise);
    }
  }

  renderTaskDetails() {
    if (this.state.selectedExerciseName) {
      return (
        <View>
          <FormLabel>Duration (in seconds)</FormLabel>
          <FormInput
            defaultValue={this.props.settings.rest.toString()}
            onChangeText={this.onRoutineNameChange}
            placeholder="Please enter task duration..."
            onChangeText={(value) => { this.setState({ duration: value }) }}
            keyboardType="numeric"
            />
          <Button
            style={{ marginTop: 15, marginBottom: 15 }}
            icon={{ name: 'add' }}
            title='Add task to routine'
            backgroundColor="#F29C19"
            onPress={this.addExercise}
          />
        </View>
      );
    }
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.addExerciseModal || false}
        style={styles.modal}
        onRequestClose={()=>{}}
      >
        <Header headerText="Fitness Routine Timer" />
        <Subheader headerText="Add task to routine" />
        <View style={styles.modalContent}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.selectedExerciseName}
            onValueChange={(exercise) => this.setState({selectedExerciseName: exercise})}>
            <Picker.Item label="Select a task to add..." value="" />
            { this.props.exercises.map(exercise => <Picker.Item label={exercise.name} value={exercise.name} key={exercise.name} />) }
          </Picker>
          { this.renderTaskDetails() }
          <Button
            icon={{ name: 'build' }}
            title='Create new task'
            backgroundColor="#11A075"
            onPress={() => this.props.toggleAddNewExerciseModal()}
            style={{ marginBottom: 15 }}
          />
          <Button
            icon={{ name: 'cancel' }}
            title='Cancel'
            onPress={() => this.props.toggleAddExerciseModal()}
          />
          <CreateExercise />
        </View>
      </Modal>
    );
  }
}

const styles = {
  content: {
    paddingLeft: 15,
    paddingRight: 15
  },
  container: {
    flex: 1
  },
  modalText: {
    paddingTop: 50
  },
  modalContent: {
    paddingLeft: 15,
    paddingRight: 15
  }
}

function mapStateToProps(state) {
  console.log('AddExercise mapState', state);
  return {
    exercises: state.exercises,
    settings: state.settings,
    addExerciseModal: state.addExerciseModal
  };
}

export default connect(mapStateToProps, actions)(addExerciseToRoutine);
