import React, { Component } from 'react'
import { connect } from 'react-redux'


export class MovieItem extends Component {
   


    render() {
        return (
               <div>
                <li >
                    {this.props.movieItem.title}
                </li>
            <span>
                <li>
                    <img src={this.props.movieItem.poster}></img>
                    <p>{this.props.movieItem.description}</p>
                </li>
                   

                </span>
            </div>
        )
    }
}



const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieItem);

