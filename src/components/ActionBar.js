import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const ActionBar = (props) => {
  const { pauseCancelContainer, buttonContainer, buttonText } = styles;
  const { onPauseClick, onSkipClick, onQuitClick, paused, hidden } = props;
  if (!hidden) {
    return (
      <View style={pauseCancelContainer}>
        <View style={buttonContainer}>
          <TouchableOpacity
            onPress={onPauseClick}
            color="#F26419"
            >
            <Text style={buttonText}>{paused ? 'Continue' : 'Pause'}</Text>
          </TouchableOpacity>
        </View>
        <View style={buttonContainer}>
          <TouchableOpacity
            onPress={onSkipClick}
            color="#F26419"
            >
            <Text style={buttonText}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View style={buttonContainer}>
          <TouchableOpacity
            onPress={onQuitClick}
            color="#F26419"
            >
            <Text style={buttonText}>
              Quit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return null;
}

const styles = {
  pauseCancelContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: '#4d4d4d',
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quitContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF'
  }
};

export default ActionBar;
