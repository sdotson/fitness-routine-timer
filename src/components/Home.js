import React, { Component } from 'react';
import {
  Picker,
  View,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header } from './common';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: props.routines[0].name
    }
  }

  onRoutineSelect() {
    this.props.navigator.push({
      name: 'Routine',
      passProps: {
        routine: this.state.routine
      }
    })
  }

  onRoutineDelete() {
    this.props.deleteRoutine(this.state.routine);
  }

  render() {
    const routineIndex = this.props.routines.map(routine => routine.name).indexOf(this.state.routine);
    if (routineIndex === -1) {
      this.setState({
        routine: this.props.routines[0].name
      });
    }
    return (
      <View style={styles.container}>
        <Header headerText="Fitness Routine Timer" />
        <View style={styles.selectRoutine}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.routine}
            onValueChange={(routine) => this.setState({routine: routine})}>
              { this.props.routines.map(routine => <Picker.Item label={routine.name} value={routine.name} key={routine.name} />) }
          </Picker>
          <Text style={styles.centeredText}>
            { this.state.routine + " selected"}
          </Text>
          <Button
            style={styles.button}
            onPress={this.onRoutineSelect.bind(this)}
            title="Start"
            color="#F26419"
          />
        </View>
        <View style={styles.createRoutine}>
          <Button
            style={styles.button}
            onPress={() => {this.props.navigator.push({
              name: 'Create Routine', passProps: {
                routineTemplateName: this.state.routine
              }
            })}}
            title="Edit"
            color="#F26419"
          />
        </View>
        <View style={styles.createRoutine}>
          <Button
            style={styles.button}
            onPress={this.onRoutineDelete.bind(this)}
            title="Delete"
            color="#F26419"
          />
        </View>
        <View style={styles.createRoutine}>
          <Button
            style={styles.button}
            onPress={() => {this.props.navigator.push({ name: 'Create Routine' })}}
            title="Create new routine"
            color="#F26419"
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
    marginBottom: 30
  },
  button: {
    backgroundColor: 'red'
  },
  centeredText: {
    textAlign: 'center'
  }
}

function mapStateToProps(state) {
  return {
    routines: state.routines
  };
}

export default connect(mapStateToProps, actions)(Home);
