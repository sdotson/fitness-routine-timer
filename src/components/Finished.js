import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Finished = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={styles.viewStyle}>
      <Text>FINISHED</Text>
      <Text>The {props.routineName} routine has finished. Congratulations!</Text>
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
    backgroundColor: 'green'
  }
};

export default Finished;
