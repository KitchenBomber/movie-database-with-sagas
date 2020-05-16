import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import MovieList from '../MovieList/MovieList'

class App extends Component {

//component did mount will need to send "FETCH" messages
componentDidMount(){
  console.log("didMount", this.props);
  this.props.dispatch({ type: 'FETCH_MOVIES'})
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
        <MovieList/>
      </div>
    );
  }
}


const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(App);
