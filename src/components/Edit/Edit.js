import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Edit extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/"><button>BACK TO LIST</button></Link>
                    <Link to="/details"><button>CANCEL</button></Link>
                </div>
                <div>
                    <input type="text" placeholder={this.props.reduxState.clickedReducer.title}></input>
                </div>
                <textarea rows="5" cols="50" >{this.props.reduxState.clickedReducer.description}</textarea>
                <div>
                    <button>Submit Changes</button>
                </div>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Edit);
