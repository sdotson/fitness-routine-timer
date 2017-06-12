import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  Picker,
  Switch,
  Modal,
  Alert,
  BackAndroid
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header, Subheader } from './common';
import RoutineList from './RoutineList';
import AddExerciseToRoutine from './AddExerciseToRoutine';

class CreateRoutine extends Component {
  constructor(props) {
    super(props);

    let routineName;
    if (props.routineTemplateName) {
      routineName = props.routineTemplateName;
    } else {
      routineName = null;
    }

    this.state = {
      selectedExerciseName: 'Rest',
      routineName: routineName,
      duration: null
    };

    this.onRoutineNameChange = this.onRoutineNameChange.bind(this);
    this.props.toggleAddExerciseModal = this.props.toggleAddExerciseModal.bind(this);
    this.onSaveRoutine = this.onSaveRoutine.bind(this);
  }

  componentDidMount() {
    if (this.props.routineTemplateName) {
        const template = this.props.routines.filter(routine => routine.name === this.props.routineTemplateName)[0];
        this.props.useRoutineAsTemplate(template.exercises);
    }

    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.props.hideAllModals();
      this.props.navigator.push({ name: "Home" });
      return true;
    });
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

  isUnique() {
    const name = this.state.routineName;
    const unique = this.props.routines.filter(routine => routine.name === name).length === 0;
    return unique;
  }

  onSaveRoutine() {
    const valid = this.validateRoutine();
    const unique = this.isUnique();
    if (valid) {
      if (unique) {
        this.addRoutine();
      } else {
        Alert.alert(
          'Confirm',
          `The routine name "${this.state.routineName}" already exists. Are you sure you want to edit this routine?`,
          [
            {text: 'Cancel', onPress: () => {}, style: 'cancel'},
            {text: 'Yes', onPress: () => this.addRoutine() },
          ],
          { cancelable: false }
        );
      }
    }
  }

  addRoutine() {
    this.props.addRoutine({
      name: this.state.routineName,
      default: false,
      exercises: this.props.newRoutine
    });
    this.props.navigator.push({ name: 'Home' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Fitness Routine Timer" />
        <Subheader headerText="Create Routine" />
        <ScrollView style={styles.content}>
          <FormLabel>Routine Name</FormLabel>
          <FormInput
            defaultValue={this.state.routineName}
            onChangeText={this.onRoutineNameChange}
            placeholder="Please enter a routine name..."
          />
          <Button
            style={{ marginTop: 15 }}
            icon={{ name: 'add' }}
            title='Add to routine'
            backgroundColor="#F29C19"
            onPress={this.props.toggleAddExerciseModal}
          />
          <AddExerciseToRoutine />
          <RoutineList
            routine={this.props.newRoutine}
          />
          <View style={styles.buttonWrapper}>
            <Button
              icon={{ name: 'save' }}
              title='Save routine'
              backgroundColor="#11A075"
              onPress={this.onSaveRoutine}
              />
          </View>
          <Button
            icon={{ name: 'cancel' }}
            title='Cancel'
            backgroundColor="#888"
            onPress={() => this.props.navigator.push({ name: 'Home' })}
          />
        </ScrollView>
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
    flex: 1,
    backgroundColor: '#eee',
    paddingBottom: 30
  },
  modalText: {
    paddingTop: 50
  },
  modalContent: {
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonWrapper: {
    marginBottom: 15
  }
}

function mapStateToProps(state) {
  return {
    routines: state.routines,
    exercises: state.exercises,
    newRoutine: state.newRoutine,
    settings: state.settings
  };
}

export default connect(mapStateToProps, actions)(CreateRoutine);
