import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Subheader = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  textStyle: {
    fontSize: 16
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    paddingTop: 10,
    position: 'relative'
  }
};

export { Subheader };
