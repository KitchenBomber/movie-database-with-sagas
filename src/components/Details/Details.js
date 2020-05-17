import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export class Details extends Component {
    render() {
        return (
            <div>
                <Link to="/"><button>BACK TO LIST</button></Link>
                <Link to="/edit"><button>EDIT</button></Link>

                
                <h3>{this.props.reduxState.clickedReducer.title}</h3>
                <ul>
                    {
                        this.props.reduxState.genres.map(item =>
                            <li>{item.name}</li>)
                    }
                </ul>
                <p>{this.props.reduxState.clickedReducer.description}</p>

            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Details);