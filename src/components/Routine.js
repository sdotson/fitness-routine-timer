import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button
} from 'react-native';

import config from './config';

import { Header } from './common';
import Stretch from './Stretch';
import Rest from './Rest';
import Finished from './Finished';
/*
TO DO
- add a rest interval
- don't start things automatically, add a start button
- create a container component to reduce header redundancy
- clean up code

*/


export default class home extends Component {

  state = {
    routine: null,
    routineList: [],
    currentStretch: {},
    running: false,
    timeRemaining: 2,
    restTimeRemaing: 0,
    totalStretches: null,
    currentStretchNumber: null,
    routineFinished: false,
    resting: false
  };

  getRoutine(name) {
    const routines = {
      java: [

      ],
      py: [

      ],
      js: [

      ],
      regular: [
        {
          name: "Hamstring",
          side: 'left',
          duration: 2
        },
        {
          name: "Hamstring",
          side: 'right',
          duration: 2
        },
        {
          name: "Butterfly",
          side: 'both',
          duration: 2
        },
        {
          name: "Splits",
          side: 'both',
          duration: 2
        }
      ]
    }

    return routines[name];
  }

  componentDidMount() {
    const routineList = this.getRoutine(this.props.routine);
    this.setState({
      routineList,
      currentStretch: routineList[0],
      currentStretchNumber: 0,
      timeRemaining: routineList[0].duration
    });
  }

  startRest(time) {
    this.setState({
      timeRemaining: time,
      resting: true
    });
    let res = new Promise((resolve, reject) => {
      this.interval = setInterval(() => {
        if (this.state.timeRemaining === 0) {
          clearInterval(this.interval);
          this.setState({
            resting: false
          });
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
        running: true,
        currentStretch: prevState.routineList[index],
        currentStretchNumber: index,
        timeRemaining: prevState.routineList[index].duration
      };
    });

    this.interval = setInterval(() => {
      if (this.state.timeRemaining === 0) {
        if (this.state.currentStretchNumber < this.state.routineList.length - 1) {
          let nextIndex = this.state.currentStretchNumber + 1;
          clearInterval(this.interval);
          this.startStretch(nextIndex);
        } else {
          clearInterval(this.interval);
          this.setState({ routineFinished: true });
        }
      } else {
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          running: true
        });
      }
    }, 1000);
  }

  startRoutine() {
    this.startRest(5).then((result) => {
      this.startStretch(0);
    });
  }

  renderStretch() {
    if (this.state.routineFinished) {
      return (
        <Finished routineName={this.state.routine} />
      );
    }

    if (!this.state.running && !this.state.resting) {
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
      const nextStretchName = this.state.currentStretch.name;
      return (
        <Rest timeRemaining={this.state.timeRemaining} nextStretch={nextStretchName} />
      );
    }

    return (
      <View style={styles.routineContainer}>
        <Text>
          Selected routine is: {this.props.routine}
        </Text>
        <Stretch currentStretch={this.state.currentStretch} timeRemaining={this.state.timeRemaining} />
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
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeRemaining: {

  }
}
