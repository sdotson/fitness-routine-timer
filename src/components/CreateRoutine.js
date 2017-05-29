import React, { Component } from 'react';
import {
  Text,
  ScrollView,
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
      duration: null,
      modalVisible: false
    };
  }

  componentDidMount() {
    if (this.props.routineTemplateName) {
        const template = this.props.routines.filter(routine => routine.name === this.props.routineTemplateName)[0];
        this.props.useRoutineAsTemplate(template.exercises);
    }
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
          <Input
            defaultValue={this.state.routineName}
            placeholder="Enter routine name here"
            onChangeText={this.onRoutineNameChange.bind(this)}
            />
          <Button
            style={styles.button}
            onPress={() => { this.setState({modalVisible: true})}}
            title={"Add to routine"}
            color="#F26419"
            />
          <AddExerciseToRoutine
            modalVisible={this.state.modalVisible}
            toggleVisibility={()=> this.setState({modalVisible: !this.state.modalVisible})}
          />
          <RoutineList routine={this.props.newRoutine} />
          <Button
            style={styles.button}
            onPress={this.onSaveRoutine.bind(this)}
            title={"Save Routine"}
            color="#F26419"
            />
          <Button
            style={styles.button}
            onPress={() => this.props.navigator.push({ name: 'Home' })}
            title={"Cancel"}
            color="#B4062B"
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
    newRoutine: state.newRoutine,
    settings: state.settings
  };
}

export default connect(mapStateToProps, actions)(CreateRoutine);
