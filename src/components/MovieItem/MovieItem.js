import React, { Component } from 'react'
import { connect } from 'react-redux'


export class MovieItem extends Component {
   


    render() {
        return (
               <tr>
                <td>
                    <img src={this.props.movieItem.poster}></img>
                    
                </td>
           
                <td>
                    <h2>{this.props.movieItem.title}</h2>
                    <p>{this.props.movieItem.description}</p>
                </td>
                   
            </tr>
        )
    }
}



const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieItem);

