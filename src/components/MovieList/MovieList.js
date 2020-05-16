import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieItem from "../MovieItem/MovieItem"



export class MovieList extends Component {

    componentDidMount(){
        
       this.props.dispatch({ type: "FETCH_MOVIES"});
       console.log('in MovieList', this.props.reduxState)
    }
    render() {
        return (
            <div>
             
                {/* <p>{JSON.stringify(this.props.reduxState)}</p> */}
                <table>
                    <tbody>
                    {this.props.reduxState.movies.map(movieItem =>
                            <MovieItem movieItem={movieItem} />
                    )}
                    </tbody>
                </table>
                
            </div>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieList);

