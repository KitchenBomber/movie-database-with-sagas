import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

export class MovieItem extends Component {
   
handleClick = () => {

    console.log("clicky click" );
    this.props.dispatch({ type: "DETAILS", payload: this.props.movieItem});
    this.props.dispatch({ type: "RECORD_CLICK", payload: this.props.movieItem });
    // this.props.history.push('/details')
    //route to details goes here
    
}

    render() {
        return (
               <tr className="movieItemDisplay">
                <td className="moviePoster">
                    <Link to="/details" ><img src={this.props.movieItem.poster} onClick={this.handleClick}></img>
                    </Link>
                </td><td className="movieInfo">
                    <h2>{this.props.movieItem.title}</h2>
                    <p>{this.props.movieItem.description}</p>
                </td>
                   
            </tr>
        )
    }
}



const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieItem);

