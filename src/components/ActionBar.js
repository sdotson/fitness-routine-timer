import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

const ActionBar = (props) => {
  if (!props.hidden) {
    return (
      <View style={styles.pauseCancelContainer}>
        <View style={styles.pauseContainer}>
          <Button
            onPress={props.onPauseClick}
            title={props.paused ? 'Continue' : 'Pause'}
            color="#F26419"
            />
        </View>
        <View style={styles.skipContainer}>
          <Button
            onPress={props.onSkipClick}
            title="Skip"
            color="#F26419"
            />
        </View>
        <View style={styles.quitContainer}>
          <Button
            onPress={props.onQuitClick}
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
