import React, { Component } from 'react';
import {
  Picker,
  View,
  Text,
  Alert
} from 'react-native';
import {
  Button,
  ButtonGroup,
  Icon
} from 'react-native-elements';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob';
import * as actions from '../actions';
import { Header } from './common';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: ""
    }

    this.startRoutine = this.startRoutine.bind(this);
    this.editRoutine = this.editRoutine.bind(this);
    this.deleteRoutine = this.deleteRoutine.bind(this);
    this.createRoutine = this.createRoutine.bind(this);
    this.bannerError = this.bannerError.bind(this);
  }

  componentDidMount() {
      SplashScreen.hide();
  }

  startRoutine() {
    this.props.navigator.push({
      name: 'Routine',
      passProps: {
        routine: this.state.routine
      }
    })
  }

  deleteRoutineForever() {
    this.props.deleteRoutine(this.state.routine);
    this.setState({ routine: "" });
  }

  deleteRoutine() {
    Alert.alert(
      'Confirm',
      `Are you sure you want to delete the routine "${this.state.routine}"?`,
      [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {text: 'Yes', onPress: () => this.deleteRoutineForever() }
      ],
      { cancelable: false }
    );
  }

  editRoutine() {
    this.props.navigator.push({
      name: 'Create Routine', passProps: {
        routineTemplateName: this.state.routine
      }
    });
  }

  createRoutine() {
    this.props.navigator.push({ name: 'Create Routine' });
  }

  renderButtonGroup() {
    if (this.state.routine) {
      return (
        <View style={styles.buttonContainer}>
          <Icon
            reverse
            size={30}
            color="#F29C19"
            name='play-arrow'
            onPress={this.startRoutine}
          />
          <Icon
            reverse
            size={30}
            color="#888"
            name='edit'
            onPress={this.editRoutine}
          />
          <Icon
            reverse
            size={30}
            color="#E01742"
            name='delete'
            onPress={this.deleteRoutine}
          />
        </View>
      );
    }
  }

  renderPickerItems() {
    const firstItem = { name: "Select a routine...", value: "" };
    const routineItems = this.props.routines.map((routine) => {
      return {
        name: routine.name,
        value: routine.name
      }
    });
    const pickerItems = [ firstItem, ...routineItems ];
    return pickerItems.map((routine) => {
        return (
          <Picker.Item label={routine.name} value={routine.value} key={routine.name} />
    )});
  }

  renderPicker() {
    if (this.props.routines.length > 0) {
      return (
        <Picker
          style={styles.picker}
          selectedValue={this.state.routine}
          onValueChange={(routine) => this.setState({ routine: routine })}
        >
          { this.renderPickerItems() }
        </Picker>
      );
    }
  }

  bannerError() {
    console.log('uh oh');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Fitness Routine Timer" />
        <View style={styles.selectRoutine}>
          { this.renderPicker() }
        </View>
        { this.renderButtonGroup() }
        <View style={styles.createRoutine}>
          <Button
            icon={{ name: 'build' }}
            title='Create New Routine'
            backgroundColor="#11A075"
            onPress={this.createRoutine}
          />
        </View>
        <AdMobBanner
          style={styles.adBanner}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-9882203470440565/8017430337"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError} />
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#eee',
    flex: 1
  },
  selectRoutineText: {
    fontSize: 18
  },
  selectRoutine: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30,
    marginBottom: 15
  },
  picker: {
    alignSelf: 'stretch',
    backgroundColor: '#ccc'
  },
  createRoutine: {
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 30
  },
  centeredText: {
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    marginBottom: 15
  },
  adBanner: {
    position: 'absolute',
    bottom: 0
  }
}

function mapStateToProps(state) {
  return {
    routines: state.routines
  };
}

export default connect(mapStateToProps, actions)(Home);
