import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Timer from './Timer';

const Rest = (props) => {
  const { viewStyle, getReadyStyle, stretchStyle, sideStyle } = styles;
  return (
    <View style={viewStyle}>
      <Timer timeRemaining={props.timeRemaining} />
      <Text style={getReadyStyle}>{props.currentExercise.name}...</Text>
      <Text style={stretchStyle}>
        {props.nextStretch ? 'Next up is ' + props.nextStretch.name : ''}
      </Text>
      <Text style={sideStyle}>
        {props.nextStretch && props.nextStretch.isOneSided ? `(${props.currentSide} side)` : ''}
      </Text>
    </View>
  );
}

const styles = {
  stretchStyle: {
    fontSize: 16
  },
  sideStyle: {
    fontSize: 16,
    color: '#666'
  },
  getReadyStyle: {
    fontSize: 20
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Rest;
