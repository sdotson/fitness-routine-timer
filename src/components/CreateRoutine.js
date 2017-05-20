import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Picker,
  Switch,
  Modal,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header, Subheader, Input } from './common';
import RoutineList from './RoutineList';

class CreateRoutine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedExerciseName: 'Rest',
      routineName: null,
      duration: null,
      modalVisible: false
    };
  }

  onRoutineNameChange(event) {
    this.setState({
      routineName: event
    });
  }

  validateRoutine() {
    let errors = [];

    if (!this.state.routineName) {
      errors.push("Routine must have a name.");
    }

    if (this.props.newRoutine.length === 0) {
      errors.push("Routine must have at least one exercise, stretch, or rest.");
    }

    if (errors.length > 0) {
      Alert.alert("Error", errors.join("\n"));
      return false;
    } else {
      return true;
    }
  }

  onSaveRoutine() {
    const valid = this.validateRoutine();
    if (valid) {
      this.props.addRoutine({
        name: this.state.routineName,
        default: false,
        exercises: this.props.newRoutine
      });
      this.props.navigator.push({ name: 'Home' });
    }
  }

  getExerciseObject(name) {
    return this.props.exercises.filter((ex) => ex.name === name)[0];
  }

  addExercise() {
    const exercise = this.getExerciseObject(this.state.selectedExerciseName);
    const duration = parseInt(this.state.duration);
    const newExercise = Object.assign({}, exercise, { duration });

    this.setState({
      modalVisible: false
    });

    this.props.addExerciseToRoutine(newExercise);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Fitness Routine Timer" />
        <Subheader headerText="Create Routine" />
        <View style={styles.content}>
          <Input
            placeholder="Enter routine name here"
            onChangeText={this.onRoutineNameChange.bind(this)}
            />
          <Button
            style={styles.button}
            onPress={() => { this.setState({modalVisible: true})}}
            title={"Add to routine"}
            color="#758E4F"
            />
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            style={styles.modal}
          >
            <Header headerText="Fitness Routine Timer" />
            <Subheader headerText="Add Exercise to Routine" />
            <View style={styles.modalContent}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.selectedExerciseName}
                onValueChange={(exercise) => this.setState({selectedExerciseName: exercise})}>
                { this.props.exercises.map(exercise => <Picker.Item label={exercise.name} value={exercise.name} key={exercise.name} />) }
              </Picker>
              <Input
                placeholder="Duration of exercise"
                onChangeText={(value) => { this.setState({ duration: value }) }}
                />
              <Button
                style={styles.button}
                onPress={this.addExercise.bind(this)}
                title={"Add exercise to routine"}
                color="#F26419"
                />
            </View>
          </Modal>
          <Text>
            { this.props.newRoutine.length === 0 ? 'Click button above to add exercises, stretches, and rests to this routine.' : ''}
          </Text>
          <RoutineList routine={this.props.newRoutine} />
          <Button
            style={styles.button}
            onPress={this.onSaveRoutine.bind(this)}
            title={"Save Routine"}
            color="#F26419"
            />
        </View>
      </View>
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
  return {
    routines: state.routines,
    exercises: state.exercises,
    newRoutine: state.newRoutine
  };
}

export default connect(mapStateToProps, actions)(CreateRoutine);
