import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export class Details extends Component {
    render() {
        return (
            <div>
                <Link to="/edit"><button>EDIT</button></Link>
                <h3>Details</h3>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Details);