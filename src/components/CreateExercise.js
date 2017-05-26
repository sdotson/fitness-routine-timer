import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Picker,
  Modal,
  Alert,
  Switch
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header, Subheader, Input } from './common';

class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseName: null,
      selectedType: 'rest',
      isOneSided: false
    };
  }

  validateExercise() {
    let errors = [];

    if (this.state.exerciseName === "" || !this.state.exerciseName) {
      errors.push("Exercise must have a name.");
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
      this.props.toggleVisibility();
      this.props.addExercise(exercise);
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
        <Subheader headerText="Create new exercise" />
        <View style={styles.modalContent}>
          <Input
            defaultValue=""
            placeholder="Exercise Name"
            onChangeText={(value) => { this.setState({ exerciseName: value }) }}
            keyboardType="numeric"
          />
          <Picker
            style={styles.picker}
            selectedValue={this.state.selectedType}
            onValueChange={(exercise) => this.setState({selectedType: exercise})}>
                <Picker.Item label="rest" value="rest" />
                <Picker.Item label="stretch" value="stretch" />
                <Picker.Item label="exercise" value="exercise" />
          </Picker>
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Is one-sided?</Text>
            <Switch
              onValueChange={(value) => this.setState({isOneSided: value})}
              value={this.state.isOneSided}
              />
          </View>
          <Button
            style={styles.button}
            onPress={this.addExercise.bind(this)}
            title={"Create new exercise"}
            color="#F26419"
            />
        </View>
      </Modal>
    );
  }
}

const styles = {
  modalContent: {
    paddingLeft: 15,
    paddingRight: 15
  },
  switchText: {
    textAlign: 'center',
    fontSize: 18,
  },
  switchContainer: {
    alignItems: 'center'
  }
}

function mapStateToProps(state) {
  return {
    exercises: state.exercises,
    settings: state.settings
  };
}

export default connect(mapStateToProps, actions)(CreateExercise);
