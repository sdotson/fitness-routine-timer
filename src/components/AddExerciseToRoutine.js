import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Picker,
  Modal,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header, Subheader, Input } from './common';
import RoutineList from './RoutineList';
import CreateExercise from './CreateExercise';

class addExerciseToRoutine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedExerciseName: 'Rest',
      duration: props.settings.rest,
      exerciseModalVisible: false
    };
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
      this.props.toggleVisibility();
      this.props.addExerciseToRoutine(newExercise);
    }
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.modalVisible}
        style={styles.modal}
        onRequestClose={()=>{}}
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
            defaultValue={this.props.settings.rest.toString()}
            placeholder="Duration of exercise"
            onChangeText={(value) => { this.setState({ duration: value }) }}
            keyboardType="numeric"
          />
          <Button
            style={styles.button}
            onPress={this.addExercise.bind(this)}
            title={"Add exercise to routine"}
            color="#F26419"
            />
          <Button
            style={styles.button}
            onPress={() => { this.setState({exerciseModalVisible: true})}}
            title={"Create new exercise"}
            color="#F26419"
            />
            <Button
              style={styles.button}
              onPress={() => this.props.toggleVisibility()}
              title={"Cancel"}
              color="#B4062B"
            />
          <CreateExercise
            toggleVisibility={() => this.setState({exerciseModalVisible: !this.state.exerciseModalVisible})}
            modalVisible={this.state.exerciseModalVisible}
          />
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
  return {
    exercises: state.exercises,
    settings: state.settings
  };
}

export default connect(mapStateToProps, actions)(addExerciseToRoutine);
