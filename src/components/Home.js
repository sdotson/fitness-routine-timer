import React, { Component } from 'react';
import {
  Picker,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
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

  render() {
    console.log('routines', this.props.routines);
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
          <Button
            style={styles.button}
            onPress={this.onRoutineSelect.bind(this)}
            title={"Select " + this.state.routine + ' routine'}
            color="#F26419"
          />
        </View>
        <View style={styles.createRoutine}>
          <Button
            style={styles.button}
            onPress={() => {this.props.navigator.push({ name: 'Create Routine' })}}
            title="Or create a new routine"
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
    paddingRight: 15
  },
  button: {
    backgroundColor: 'red'
  }
}

function mapStateToProps(state) {
  return {
    routines: state.routines
  };
}

export default connect(mapStateToProps)(Home);
