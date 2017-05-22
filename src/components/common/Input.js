import React, { Component } from 'react';
import { Text, View, TextInput, Platform } from 'react-native';

const Input = (props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles ={
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 5,
    fontSize: 18,
    backgroundColor: '#eee',
    height: (Platform.OS === 'ios') ? 34 : 68
  },
  labelStyle: {
    fontSize: 18
  },
  containerStyle: {
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Input };
