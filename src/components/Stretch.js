import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Stretch = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text>
        Time Remaining: {props.timeRemaining}
      </Text>
      <Text>
        Current Exercise: {props.currentStretch && props.currentStretch.name}
      </Text>
      <Text>
        Current Side: {props.currentStretch && props.currentStretch.side}
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
    alignItems: 'center'
  }
};

export default Stretch;
