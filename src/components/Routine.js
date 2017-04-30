import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Picker,
  View,
  Button
} from 'react-native';

import { Header } from './common';

export default class home extends Component {

  state = {
    routine: null,
    routineList: [],
    currentStretch: {},
    running: false,
    timeRemaining: 2,
    totalStretches: null,
    currentStretchNumber: null,
    routineFinished: false
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
    console.log('routineList', routineList);
    this.setState({
      routineList,
      currentStretch: routineList[0],
      currentStretchNumber: 0,
      timeRemaining: routineList[0].duration
    });
    this.startStretch(0);
  }

  startStretch(index) {
    console.log('startStretch started', index);

    console.log('next stretch', index, this.state.routineList[index]);
    this.setState((prevState, props) => {
      console.log('prevState', prevState.routineList[index]);
      return {
        currentStretch: prevState.routineList[index],
        currentStretchNumber: index,
        timeRemaining: prevState.routineList[index].duration
      };
    });

    this.interval = setInterval(() => {
      if (this.state.timeRemaining === 0) {
        console.log('conditional', this.state.currentStretchNumber, this.state.routineList.length)
        if (this.state.currentStretchNumber < this.state.routineList.length - 1) {
          let nextIndex = this.state.currentStretchNumber + 1;
          clearInterval(this.interval);
          console.log('nextIndex', nextIndex);
          this.startStretch(nextIndex);
        } else {
          console.log('routine finished');
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

  startRoutine(index) {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false });
      return
    }

    this.interval = setInterval(() => {
      console.log('ran');
      if (this.state.timeRemaining === 0) {
        startRoutine()
      } else {
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          running: true
        });
      }
    }, 1000);
  }

  renderStretch() {
    if (this.state.routineFinished) {
      return (
        <View style={styles.routineContainer}>
          <Text>FINISHED</Text>
          <Text>The {this.props.routine} routine has finished. Congratulations!</Text>
        </View>
      );
    }

    return (
      <View style={styles.routineContainer}>
        <Text>
          Selected routine is: {this.props.routine}
        </Text>
        <Text>
          Time Remaining: {this.state.timeRemaining}
        </Text>
        <Text>
          Current Exercise: {this.state.currentStretch && this.state.currentStretch.name}
        </Text>
        <Text>
          Current Side: {this.state.currentStretch && this.state.currentStretch.side}
        </Text>
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
  }
}
