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
      duration: null,
      durationDefault: null
    };

    this.addExercise = this.addExercise.bind(this);
    this.onTaskChange = this.onTaskChange.bind(this);
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

  onTaskChange(task) {
    const currentTask = this.getExerciseObject(task) || {};
    const { restDefault, taskDefault } = this.props.settings;
    const newDuration = currentTask.type === 'rest' ? restDefault : taskDefault;

    this.setState({
      selectedExerciseName: task,
      durationDefault: newDuration.toString(),
      duration: newDuration.toString()
    });
  }

  renderTaskDetails() {
    if (this.state.selectedExerciseName) {
      return (
        <View style={styles.buttonWrapper}>
          <FormLabel>Duration (in seconds)</FormLabel>
          <FormInput
            defaultValue={this.state.durationDefault}
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

  renderPickerItems() {
    const firstItem = { name: "Select a task to add...", value: "" };
    const exerciseItems = this.props.exercises.map((exercise) => {
      return {
        name: exercise.name,
        value: exercise.name
      }
    });
    const pickerItems = [ firstItem, ...exerciseItems ];
    return pickerItems.map((exercise) => {
        return (
          <Picker.Item label={exercise.name} value={exercise.value} key={exercise.name} />
    )});
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
            onValueChange={this.onTaskChange}>
            { this.renderPickerItems() }
          </Picker>
          { this.renderTaskDetails() }
          <View style={styles.buttonWrapper}>
            <Button
              icon={{ name: 'build' }}
              title='Create new task'
              backgroundColor="#11A075"
              onPress={() => this.props.toggleAddNewExerciseModal()}
              />
          </View>
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
    paddingRight: 15,
    backgroundColor: '#eee'
  },
  buttonWrapper: {
    marginBottom: 15
  },
  picker: {
    backgroundColor: '#ccc',
    marginTop: 30,
    marginBottom: 15
  }
}

function mapStateToProps(state) {
  return {
    exercises: state.exercises,
    settings: state.settings,
    addExerciseModal: state.addExerciseModal
  };
}

export default connect(mapStateToProps, actions)(addExerciseToRoutine);
