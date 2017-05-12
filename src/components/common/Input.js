import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles ={
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 23,
    backgroundColor: '#ddd'
  },
  labelStyle: {
    paddingLeft: 20,
    fontSize: 18
  },
  containerStyle: {
    alignItems: 'center',
    backgroundColor: 'pink',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Input };
