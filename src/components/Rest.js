import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Timer from './Timer';

const Rest = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Timer timeRemaining={props.timeRemaining} />
      <Text>Resting</Text>
      <Text>
        Get ready for {props.nextStretch.name} stretch {props.nextStretch.side !== 'both' ? `(${props.nextStretch.side} side)` : ''}...
      </Text>
    </View>
  );
}

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
};

export default Rest;
