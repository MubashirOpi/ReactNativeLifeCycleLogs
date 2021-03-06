import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called.");
    this.state = {
      number: 0,
      mountButtonTitle: 'UNMOUNT',
    }
    this.showCounter = true;
  };

  incrementNumber() {
    this.setState({number: this.state.number + 1})
  }

  toggleCounter() {
    if(this.showCounter === true){
      this.setState({mountButtonTitle: 'MOUNT'});
      this.showCounter = false;
      this.setState({number: 0});
    }
    else {
      this.setState({mountButtonTitle: 'UNMOUNT'});
      this.showCounter = true;
    }
  }

  componentWillMount() {
    console.log("componentWillMount Log.");
  }

  componentDidMount() {
  //First
    console.log("componentDidMount Log.");
  }

  componentWillReceiveProps(nextProp) {
    console.log("componentWillReceiveProps Log.");
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("shouldComponentUpdate Log.");
    return true;
  }

  componentWillUpdate(nextProp, nextState) {
    console.log("componentWillUpdate Log.");
  }

  componentDidUpdate(prevProp, prevState) {
    console.log("componentDidUpdate Log.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount Log.");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch Log.");
  }

  render() {
    console.log("render called");
    return (
      <View style={styles.container}>
        {this.showCounter ? <Text style={styles.text}>{this.state.number}</Text> : null}
        {this.showCounter ? <Button onPress={this.incrementNumber.bind(this)} title="Add"/> : null}
        <Button onPress={this.toggleCounter.bind(this)} title={this.state.mountButtonTitle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 31,
    marginBottom: 10,
  }
});