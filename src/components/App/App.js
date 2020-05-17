import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {

  //component did mount will need to send "FETCH" messages
  componentDidMount() {
    console.log("didMount", this.props);
    this.props.dispatch({ type: 'FETCH_MOVIES' })
    // this.props.history.push('/movies')
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
          <h1>Wiki-Movies</h1>
          {/* <button onClick={this.clickHandler}>Click Me</button> */}
          {/* <Route exact path="/" component={App}/> */}
         

          <Route exact path="/"
            render={(props) => <MovieList {...props} dispatch={this.props.dispatch} />}
          />
          <Route path="/details"
            render={(props) => <Details {...props} dispatch={this.props.dispatch} />}
          />
          <Route path="/edit" component={Edit}/>
            

        </HashRouter>
      </div>
    );
  }
}


const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(App);
