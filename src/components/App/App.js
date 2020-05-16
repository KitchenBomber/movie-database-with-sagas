import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import MovieList from '../MovieList/MovieList'
import { HashRouter, Route, Link} from 'react-router-dom';

class App extends Component {

//component did mount will need to send "FETCH" messages
componentDidMount(){
  console.log("didMount", this.props);
  this.props.dispatch({ type: 'FETCH_MOVIES'})
}

  // clickHandler = () => {
  //   console.log('in clickHandler');
  //   this.props.dispatch({ type: 'click' });
  // } this was to make sure dispatch was working

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <HashRouter>
        <h1>Blockbuster Video</h1>
        {/* <button onClick={this.clickHandler}>Click Me</button> */}
        <MovieList/>


        </HashRouter>
      </div>
    );
  }
}


const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(App);
