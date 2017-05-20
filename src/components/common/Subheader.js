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
    fontSize: 16,
    color: '#fff'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    backgroundColor: '#4d4d4d'
  }
};

export { Subheader };
