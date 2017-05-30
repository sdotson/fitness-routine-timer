import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

function formatSeconds(seconds) {
  if (seconds > 60) {
    const minutes = Math.floor(seconds/60);
    const remainder = seconds - minutes * 60;
    const mEnding = minutes > 1 ? 's' : '';
    const sEnding = remainder > 1 ? 's' : '';
    return `${minutes} minute${mEnding}, ${remainder} second${sEnding}`;
  } else {
    return `${seconds} seconds`;
  }
}

class RoutineList extends Component {
  deleteExercise(index) {
    this.props.deleteExerciseFromRoutine(index);
  }
  render() {
    return (
      <View style={styles.routineList}>
        <Text>
          { this.props.routine.length === 0 ? 'Click button above to add exercises, stretches, and rests to this routine.' : ''}
        </Text>
        {this.props.routine.map((exercise, index) => {
          return (
            <View key={index} style={styles.routineItem}>
              <Text style={styles.routineItemName}>
                {exercise.name}
              </Text>
              <Text style={styles.routineItemDuration}>
                {formatSeconds(exercise.duration)}
              </Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={this.deleteExercise.bind(this, index)} style={styles.editIcon}>
                  <Text>
                    E
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.deleteExercise.bind(this, index)} style={styles.closeIcon}>
                  <Text>
                    X
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    )
  }
}

const styles = {
  routineList : {
    paddingTop: 20,
    paddingBottom: 20
  },
  routineItem: {
    backgroundColor: '#eee',
    marginBottom: 10,
    padding: 5,
    position: 'relative'
  },
  routineItemName: {
    fontSize: 20
  },
  routineItemDuration: {
    color: '#777',
    fontSize: 12
  },
  iconContainer: {
    position: 'absolute',
    right: 5,
    top: 5
  },
  closeIcon: {

  },
  editIcon: {

  }
}

function mapStateToProps(state) {
  return {
    routine: state.newRoutine
  };
}

export default connect(mapStateToProps, actions)(RoutineList);
