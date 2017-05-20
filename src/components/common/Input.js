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
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 5,
    fontSize: 18,
    backgroundColor: '#eee',
    height: 34
  },
  labelStyle: {
    fontSize: 18
  },
  containerStyle: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Input };
