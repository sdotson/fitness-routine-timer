import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Timer from './Timer';

const Stretch = (props) => {
  const { viewStyle, stretchStyle, sideStyle } = styles;
  const sideText = props.currentStretch.side === 'both' ? '' : props.currentStretch.side + ' side';
  return (
    <View style={viewStyle}>
      <Timer timeRemaining={props.timeRemaining} />
      <Text style={stretchStyle}>
        {props.currentStretch && props.currentStretch.name}
      </Text>
      <Text style={sideStyle}>
        {sideText}
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
