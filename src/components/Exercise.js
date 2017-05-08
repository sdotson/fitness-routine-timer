import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Timer from './Timer';

const Stretch = (props) => {
  const { viewStyle, stretchStyle, sideStyle } = styles;
  return (
    <View style={viewStyle}>
      <Timer timeRemaining={props.timeRemaining} />
      <Text style={stretchStyle}>
        {props.currentExercise && props.currentExercise.name}
      </Text>
      <Text>
        {props.currentSide}
      </Text>
    </View>
  );
}

const styles = {
  stretchStyle: {
    fontSize: 20
  },
  sideStyle: {
    fontSize: 20,
    color: '#666'
  },
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Stretch;
