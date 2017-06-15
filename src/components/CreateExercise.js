import React, { Component } from 'react';
import {
  Text,
  View,
  Picker,
  Modal,
  Alert,
  Switch
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header, Subheader } from './common';

class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseName: null,
      selectedType: '',
      isOneSided: false
    };

    this.addExercise = this.addExercise.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
  }

  validateExercise() {
    let errors = [];

    if (this.state.exerciseName === "" || !this.state.exerciseName) {
      errors.push("Task must have a name.");
    }

    if (errors.length > 0) {
      Alert.alert("Error", errors.join("\n"));
      return false;
    } else {
      return true;
    }
  }

  addExercise() {
    const isValid = this.validateExercise();
    if (isValid) {
      const exercise = {
        name: this.state.exerciseName,
        type: this.state.selectedType,
        isOneSided: this.state.isOneSided,
        duration: 45,
        default: false
      };
      this.props.addExercise(exercise);
    }
  }

  onTypeChange(type) {
    this.setState({selectedType: type, isOneSided: false});
  }

  renderSidedness() {
    if (this.state.selectedType === 'exercise' || this.state.selectedType === 'stretch') {
      return (
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Is one-sided?</Text>
          <Switch
            onValueChange={(value) => this.setState({isOneSided: value})}
            value={this.state.isOneSided}
            />
        </View>
      );
    }
  }

  renderTaskDetails() {
    if (this.state.selectedType) {
      return (
        <View>
          { this.renderSidedness() }
          <View style={styles.buttonWrapper}>
            <Button
              icon={{ name: 'save' }}
              title='Save new task'
              backgroundColor="#11A075"
              onPress={this.addExercise}
              />
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props && this.props.addNewExerciseModal}
        style={styles.modal}
        onRequestClose={()=>{}}
      >
        <Header headerText="Fitness Routine Timer" />
        <Subheader headerText="Create new task" />
        <View style={styles.modalContent}>
          <FormLabel>Task name</FormLabel>
          <FormInput
            placeholder="Please enter task name.."
            onChangeText={(value) => { this.setState({ exerciseName: value }) }}
          />
          <Picker
            style={styles.picker}
            selectedValue={this.state.selectedType}
            onValueChange={this.onTypeChange}>
                <Picker.Item label="Select the task type..." value="" />
                <Picker.Item label="Rest" value="rest" />
                <Picker.Item label="Stretch" value="stretch" />
                <Picker.Item label="Exercise" value="exercise" />
          </Picker>
          { this.renderTaskDetails() }
          <Button
            icon={{ name: 'cancel' }}
            title='Cancel'
            onPress={this.props.toggleAddNewExerciseModal}
          />
        </View>
      </Modal>
    );
  }
}

const styles = {
  modal: {
    backgroundColor: '#eee'
  },
  modalContent: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#eee',
    flex: 1
  },
  switchText: {
    textAlign: 'center',
    fontSize: 18,
  },
  switchContainer: {
    alignItems: 'center'
  },
  buttonWrapper: {
    marginBottom: 15,
    marginTop: 15
  },
  picker: {
    backgroundColor: '#ccc',
    marginBottom: 15
  }
}

function mapStateToProps(state) {
  return {
    exercises: state.exercises,
    settings: state.settings,
    addNewExerciseModal: state.addNewExerciseModal
  };
}

export default connect(mapStateToProps, actions)(CreateExercise);
