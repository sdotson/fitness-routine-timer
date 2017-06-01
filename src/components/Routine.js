import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Vibration
} from 'react-native';
import { connect } from 'react-redux';
import KeepAwake from 'react-native-keep-awake';
import { Header, Subheader } from './common';
import Exercise from './Exercise';
import Rest from './Rest';
import Finished from './Finished';
import ActionBar from './ActionBar';

class Routine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: null,
      exerciseList: [],
      currentExercise: {},
      currentSide: null,
      exercising: false,
      timeRemaining: 2,
      currentExerciseNumber: null,
      routineFinished: false,
      paused: false
    };
  }

  componentDidMount() {
    const routine = this.props.routines.filter(routine => routine.name === this.props.routine)[0];
    this.setState({
      routine: routine.name,
      exerciseList: routine.exercises,
      currentExercise: routine.exercises[0],
      currentExerciseNumber: 0
    });
  }

  startExercise(index) {
    Vibration.vibrate();
    this.setState((prevState, props) => {
      let timeRemaining;

      if (prevState.paused) {
        timeRemaining = prevState.timeRemaining;
      } else {
        timeRemaining = prevState.currentSide === 'switch to right side' ? 10 : prevState.exerciseList[index].duration;
      }

      let nextSide;
      if (prevState.currentExercise.isOneSided) {
        if (!prevState.currentSide) {
          nextSide = 'left';
        }
      }

      return {
        exercising: true,
        timeRemaining,
        currentSide: prevState.currentSide || nextSide
      };
    });

    let res = new Promise((resolve, reject) => {
      this.interval = setInterval(() => {
        if (this.state.timeRemaining === 0) {
          if (this.state.currentExerciseNumber < this.state.exerciseList.length - 1) {
            let nextIndex = this.state.currentExerciseNumber + 1;
            clearInterval(this.interval);
            if (this.state.currentSide === 'left' || this.state.currentSide === 'switch to right side') {
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

  onPauseClick() {
    if (this.state.paused) {
      this.startExercise(this.state.currentExerciseNumber);
      this.setState({ paused: false });
    } else {
      clearInterval(this.interval);
      this.setState({ paused: true });
    }
  }

  onSkipClick() {
    if (this.state.currentExerciseNumber < this.state.exerciseList.length - 1) {
      let index = this.state.currentExerciseNumber;
      let nextIndex = this.state.currentExerciseNumber + 1;
      clearInterval(this.interval);
      if (this.state.currentSide === 'left' || this.state.currentSide === 'switch to right side') {
        this.startExerciseCycle(index);
      } else {
        this.startExerciseCycle(nextIndex);
      }
    } else {
      clearInterval(this.interval);
      this.setState({ routineFinished: true });
    }
  }

  onQuitClick() {
    clearInterval(this.interval);
    this.props.navigator.push({ name: "Home" })
  }

  startExerciseCycle(index) {
    this.setState((prevState) => {
      let nextSide;
      if (prevState.currentExercise.isOneSided) {
        if (!prevState.currentSide) {
          nextSide = 'left';
        } else if (prevState.currentSide === 'left') {
          nextSide = 'switch to right side';
        } else if (prevState.currentSide === 'switch to right side') {
          nextSide = 'right';
        } else {
          nextSide = null;
        }
      } else {
        nextSide = null;
      }

      let timeRemaining;

      if (prevState.paused) {
        timeRemaining = prevState.timeRemaining;
      } else {
        timeRemaining = prevState.currentSide === 'switch to right side' ? 10 : prevState.exerciseList[index].duration;
      }

      return {
        exercising: true,
        timeRemaining,
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
      return (
        <View style={styles.routineContainer}>
          <Button
            onPress={this.startRoutine.bind(this)}
            title="Start Routine"
            color="#F26419"
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
      return (
        <View style={[styles.routineContainer, styles.restingStyle]}>
          <Rest
            currentExercise={this.state.currentExercise}
            timeRemaining={this.state.timeRemaining}
            currentSide={this.state.currentSide}
            nextStretch={nextExercise}
          />
        </View>
      );
    }

    return (
      <View style={styles.routineContainer}>
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
        <Subheader headerText={ this.props.routine + ' routine' } />
        {this.renderExercise()}
        <KeepAwake />
        <ActionBar
          paused={this.state.paused}
          hidden={!this.state.exercising || this.state.routineFinished}
          onPauseClick={this.onPauseClick.bind(this)}
          onSkipClick={this.onSkipClick.bind(this)}
          onQuitClick={this.onQuitClick.bind(this)}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  restingStyle: {

  }
}

function mapStateToProps(state) {
  return {
    routines: state.routines
  };
}

export default connect(mapStateToProps)(Routine);
