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

  addExercise() {
    const isValid = this.validateExercise();
    if (isValid) {
      const newExercise = Object.assign({}, exercise, { duration });
      this.props.toggleVisibility();
      this.props.CreateExercise(newExercise);
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
        <Subheader headerText="Add exercise" />
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
          <Text>Is one-sided?</Text>
          <Switch
            onValueChange={(value) => this.setState({isOneSided: value})}
            value={this.state.isOneSided}
          />
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

export default connect(mapStateToProps, actions)(CreateExercise);
