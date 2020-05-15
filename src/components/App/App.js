import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

//component did mount will need to send "FETCH" messages
componentDidMount(){
  console.log("didMount", this.props);
  // this.props.dispatch({ type: 'SET_MOVIES'})
  // this.props.dispatch({ type: 'SET_GENRES'})
}

  clickHandler = () => {
    console.log('in clickHandler');
    this.props.dispatch({ type: 'click' });
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}


const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(App);
