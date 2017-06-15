import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import formatSeconds from '../utils/formatSeconds';

class RoutineList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
  }

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
          const exercisePlus = { ...exercise, index };
          return (
            <View key={index} style={styles.routineItem}>
              <Text style={styles.routineItemName}>
                {exercise.name}
              </Text>
              <Text style={styles.routineItemDuration}>
                {formatSeconds(exercise.duration)}
              </Text>
              <View style={styles.iconContainer}>
                <Icon
                  size={35}
                  color="#888"
                  name='delete'
                  onPress={() => this.deleteExercise(index)}
                  style={styles.closeIcon}
                />
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
    backgroundColor: '#ccc',
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
