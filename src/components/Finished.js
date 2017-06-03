import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Finished extends Component {
  navigateToHome() {
    this.props.navigator.push({
      name: 'Home'
    })
  }
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={styles.viewStyle}>
        <Text>FINISHED</Text>
        <Text style={styles.textMargin}>The {this.props.routineName} routine has finished.</Text>
        <Button
          onPress={this.navigateToHome.bind(this)}
          title="Back to Home"
          color="#F26419"
          />
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMargin: {
    marginBottom: 15
  }
};

export default Finished;
