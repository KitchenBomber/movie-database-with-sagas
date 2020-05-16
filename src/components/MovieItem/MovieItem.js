import React, { Component } from 'react'
import { connect } from 'react-redux'


export class MovieItem extends Component {
    render() {
        return (
            <div>
                <h3>in MovieItem</h3>
                    {/* <li>{this.props.movies</li> */}
            </div>
        )
    }
}



const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieItem);

