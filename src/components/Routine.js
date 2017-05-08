import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import realm from '../db/realm';

import { Header, Subheader } from './common';
import Exercise from './Exercise';
import Rest from './Rest';
import Finished from './Finished';

export default class home extends Component {

  state = {
    routine: null,
    exerciseList: [],
    currentExercise: {},
    currentSide: null,
    exercising: false,
    timeRemaining: 2,
    currentExerciseNumber: null,
    routineFinished: false
  };

  componentDidMount() {
    const routine = realm.objects('Routine').filtered(`name = "${this.props.routine}"`)[0];
    console.log('routine2', routine.exercises);
    console.log('exerciseList', Array.from(realm.objects('Routine')[0].exercises));
    this.setState({
      routine: routine.name,
      exerciseList: Array.from(routine.exercises),
      currentExercise: routine.exercises[0],
      currentExerciseNumber: 0
    });
    console.log('state', this.state);
  }

  startExercise(index) {
    this.setState((prevState, props) => {
      return {
        exercising: true,
        timeRemaining: prevState.exerciseList[index].duration
      };
    });

    let res = new Promise((resolve, reject) => {
      this.interval = setInterval(() => {
        if (this.state.timeRemaining === 0) {
          if (this.state.currentExerciseNumber < this.state.exerciseList.length - 1) {
            let nextIndex = this.state.currentExerciseNumber + 1;
            clearInterval(this.interval);
            if (this.state.currentSide === 'left') {
                this.startExerciseCycle(index);
            } else {
              this.startExerciseCycle(nextIndex);
            }
          } else {
            clearInterval(this.interval);
            this.setState({ routineFinished: true });
            resolve();
          }
        } else {
          this.setState({
            timeRemaining: this.state.timeRemaining - 1
          });
        }
      }, 1000);
    });

    return res;
  }

  startExerciseCycle(index) {
    this.setState((prevState) => {
      let nextSide;
      if (prevState.currentExercise.isOneSided) {
        nextSide = prevState.currentSide ? 'right' : 'left';
      } else {
        nextSide = null;
      }
      return {
        currentExercise: prevState.exerciseList[index],
        currentExerciseNumber: index,
        currentSide: nextSide
      };
    });

    return this.startExercise(index);
  }

  startRoutine() {
    this.startExerciseCycle(0);
  }

  renderExercise() {
    if (this.state.routineFinished) {
      return (
        <Finished routineName={this.state.routine} navigator={this.props.navigator} />
      );
    }

    if (!this.state.exercising) {
      console.log('----', this.state.exerciseList);
      return (
        <View style={styles.routineContainer}>
          <Button
            onPress={this.startRoutine.bind(this)}
            title="Start Routine"
            color="#841584"
          />
          <Text>
            {
              this.state.exerciseList.map(exercise => exercise.name).join(', ')
            }
          </Text>
        </View>
      );
    }

    if (this.state.currentExercise.type === 'rest') {
      const nextExercise = this.state.exerciseList[this.state.currentExerciseNumber + 1];
      console.log('props', this.props);
      return (
        <View style={[styles.routineContainer, styles.restingStyle]}>
          <Subheader headerText={ this.props.routine + ' routine' } />
          <Rest
            timeRemaining={this.state.timeRemaining}
            currentSide={this.state.currentSide}
            nextStretch={nextExercise}
          />
        </View>
      );
    }

    return (
      <View style={styles.routineContainer}>
        <Subheader headerText={ this.props.routine + ' routine' } />
        <Exercise
          currentExercise={this.state.currentExercise}
          currentSide={this.state.currentSide}
          timeRemaining={this.state.timeRemaining}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Fitness Routine Timer" />
        {this.renderExercise()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  routineContainer: {
    flex: 0.75,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeRemaining: {

  },
  restingStyle: {
    backgroundColor: 'blue'
  }
}
