import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Rest = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text>
        {props.timeRemaining}
      </Text>
      <Text>Resting</Text>
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
