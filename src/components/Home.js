import React, { Component } from 'react';
import {
  Picker,
  View,
  Text
} from 'react-native';
import {
  Button,
  ButtonGroup,
  Icon
} from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header } from './common';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: ""
    }

    this.startRoutine = this.startRoutine.bind(this);
    this.editRoutine = this.editRoutine.bind(this);
    this.deleteRoutine = this.deleteRoutine.bind(this);
    this.createRoutine = this.createRoutine.bind(this);
  }

  startRoutine() {
    this.props.navigator.push({
      name: 'Routine',
      passProps: {
        routine: this.state.routine
      }
    })
  }

  deleteRoutine() {
    this.props.deleteRoutine(this.state.routine);
    this.setState({ routine: "" });
  }

  editRoutine() {
    this.props.navigator.push({
      name: 'Create Routine', passProps: {
        routineTemplateName: this.state.routine
      }
    });
  }

  createRoutine() {
    this.props.navigator.push({ name: 'Create Routine' });
  }

  renderButtonGroup() {
    const start = () => <Text>Start</Text>;
    const edit = () => <Text>Edit</Text>;
    const deletee = () => <Text>Delete</Text>;
    const buttons = [{ element: start }, { element: edit }, { element: deletee }];
    const { selectedIndex } = this.state;
    if (this.state.routine) {
      return (
        <View style={styles.buttonContainer}>
          <Icon
            reverse
            size={30}
            color="#F29C19"
            name='play-arrow'
            onPress={this.startRoutine}
          />
          <Icon
            reverse
            size={30}
            color="#888"
            name='edit'
            onPress={this.editRoutine}
          />
          <Icon
            reverse
            size={30}
            color="#E01742"
            name='delete'
            onPress={this.deleteRoutine}
          />
        </View>
      );
    }
  }

  renderPicker() {
    if (this.props.routines.length > 0) {
      return (
        <Picker
          style={styles.picker}
          selectedValue={this.state.routine}
          onValueChange={(routine) => this.setState({routine: routine})}>
            <Picker.item label="Select a routine..." value="" />
            { this.props.routines.map(routine => <Picker.Item label={routine.name} value={routine.name} key={routine.name} />) }
        </Picker>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Fitness Routine Timer" />
        <View style={styles.selectRoutine}>
          { this.renderPicker() }
        </View>
        { this.renderButtonGroup() }
        <View style={styles.createRoutine}>
          <Button
            icon={{ name: 'build' }}
            title='Create New Routine'
            backgroundColor="#888"
            onPress={this.createRoutine}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#eee',
    flex: 1
  },
  selectRoutineText: {
    fontSize: 18
  },
  selectRoutine: {
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 30
  },
  picker: {
    alignSelf: 'stretch'
  },
  createRoutine: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30,
    marginBottom: 30
  },
  centeredText: {
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'center'
  }
}

function mapStateToProps(state) {
  return {
    routines: state.routines
  };
}

export default connect(mapStateToProps, actions)(Home);
