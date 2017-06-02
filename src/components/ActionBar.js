import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
const ActionBar = (props) => {
  const { pauseCancelContainer, buttonContainer, buttonText } = styles;
  const { onPauseClick, onSkipClick, onQuitClick, paused, hidden } = props;
  if (!hidden) {
    return (
      <View style={pauseCancelContainer}>
        <View style={buttonContainer}>
          <TouchableOpacity
            onPress={onPauseClick}
            >
            <Icon
              size={35}
              color={paused ? "#11A075" : "#F29C19"}
              name={paused ? 'play-arrow' : 'pause'}
            />
          </TouchableOpacity>
        </View>
        <View style={buttonContainer}>
          <TouchableOpacity
            onPress={onSkipClick}
            >
            <Icon
              size={35}
              color="#F29C19"
              name="skip-next"
            />
          </TouchableOpacity>
        </View>
        <View style={buttonContainer}>
          <TouchableOpacity
            onPress={onQuitClick}
            >
            <Icon
              size={35}
              color="#E01742"
              name="stop"
            />
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
