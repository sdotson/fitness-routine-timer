import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

const ActionBar = (props) => {
  const { pauseCancelContainer, pauseContainer, skipContainer, quitContainer } = styles;
  const { onPauseClick, onSkipClick, onQuitClick, paused, hidden } = props;
  if (!hidden) {
    return (
      <View style={pauseCancelContainer}>
        <View style={pauseContainer}>
          <Button
            onPress={onPauseClick}
            title={paused ? 'Continue' : 'Pause'}
            color="#F26419"
            />
        </View>
        <View style={skipContainer}>
          <Button
            onPress={onSkipClick}
            title="Skip"
            color="#F26419"
            />
        </View>
        <View style={quitContainer}>
          <Button
            onPress={onQuitClick}
            title="Quit"
            color="#F26419"
            />
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
  pauseContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5
  },
  skipContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5
  },
  quitContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5
  }
};

export default ActionBar;
