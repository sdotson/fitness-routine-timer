import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Timer = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <Text style={styles.textStyle}>
      {props.timeRemaining}
    </Text>
  );
}

const styles = {
  textStyle: {
    fontSize: 80
  }
};

export default Timer;
