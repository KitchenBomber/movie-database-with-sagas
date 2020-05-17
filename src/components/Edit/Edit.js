import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Edit extends Component {
    render() {
        return (
            <div>
                <div>
                <Link to="/details"><button>CANCEL</button></Link>
                    <Link to="/"><button>HOME</button></Link>
                </div>
                <input type="text" placeholder={ this.props.reduxState.clickedReducer.title }></input>
                <input type="text" placeholder={ this.props.reduxState.clickedReducer.description } size="250"></input>
                <button>Submit Changes</button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Edit);
