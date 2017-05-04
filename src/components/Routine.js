import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button
} from 'react-native';

import config from './config';
import { getRoutine } from './routines';

import { Header, Subheader } from './common';
import Stretch from './Stretch';
import Rest from './Rest';
import Finished from './Finished';

export default class home extends Component {

  state = {
    routine: null,
    routineList: [],
    currentStretch: {},
    currentSide: null,
    stretching: false,
    timeRemaining: 2,
    currentStretchNumber: null,
    routineFinished: false,
    resting: false
  };

  componentDidMount() {
    const routineList = getRoutine(this.props.routine);
    this.setState({
      routineList,
      currentStretch: routineList[0],
      currentStretchNumber: 0
    });
  }

  startRest(time) {
    this.setState({
      timeRemaining: time,
      resting: true,
      stretching: false
    });
    let res = new Promise((resolve, reject) => {
      this.interval = setInterval(() => {
        if (this.state.timeRemaining === 0) {
          clearInterval(this.interval);
          resolve('success');
        } else {
          this.setState({
            timeRemaining: this.state.timeRemaining - 1
          });
        }

      }, 1000);
    });

    return res;
  }

  startStretch(index) {
    this.setState((prevState, props) => {
      return {
        stretching: true,
        resting: false,
        timeRemaining: prevState.routineList[index].duration
      };
    });

    let res = new Promise((resolve, reject) => {
      this.interval = setInterval(() => {
        if (this.state.timeRemaining === 0) {
          if (this.state.currentStretchNumber < this.state.routineList.length - 1) {
            let nextIndex = this.state.currentStretchNumber + 1;
            clearInterval(this.interval);
            if (this.state.currentSide === 'left') {
                this.startStretchRestCycle(index);
            } else {
              this.startStretchRestCycle(nextIndex);
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

  startStretchRestCycle(index) {
    this.setState((prevState) => {
      let nextSide;
      if (prevState.currentStretch.isOneSided) {
        nextSide = prevState.currentSide ? 'right' : 'left';
      } else {
        nextSide = null;
      }
      return {
        currentStretch: prevState.routineList[index],
        currentStretchNumber: index,
        currentSide: nextSide
      };
    });

    return this.startRest(config.restBetweenStretches).then(() => {
      this.startStretch(index)
    });
  }

  startRoutine() {
    this.startStretchRestCycle(0);
  }

  renderStretch() {
    if (this.state.routineFinished) {
      return (
        <Finished routineName={this.state.routine} navigator={this.props.navigator} />
      );
    }

    if (!this.state.stretching && !this.state.resting) {
      return (
        <View style={styles.routineContainer}>
          <Button
            onPress={this.startRoutine.bind(this)}
            title="Start Routine"
            color="#841584"
          />
          <Text>
            {
              this.state.routineList.map(stretch => stretch.name).join(', ')
            }
          </Text>
        </View>
      );
    }

    if (this.state.resting) {
      const nextStretch = this.state.routineList[this.state.currentStretchNumber + 1];
      return (
        <View style={[styles.routineContainer, styles.restingStyle]}>
          <Subheader headerText={ this.props.routine + ' routine' } />
          <Rest
            timeRemaining={this.state.timeRemaining}
            currentSide={this.state.currentSide}
            nextStretch={this.state.currentStretch}
          />
        </View>
      );
    }

    return (
      <View style={styles.routineContainer}>
        <Subheader headerText={ this.props.routine + ' routine' } />
        <Stretch
          currentStretch={this.state.currentStretch}
          currentSide={this.state.currentSide}
          timeRemaining={this.state.timeRemaining}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Stretch Routine Timer" />
        {this.renderStretch()}
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
