import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export class Details extends Component {

    // componentDidMount() {
    //     let state = {
    //         movieTitle: this.props.reduxState.clickedReducer.title,
    //         movieDescription: this.props.reduxState.clickedReducer.description
    //     }
    //     console.log("in Details", state);
    // }

    render() {
        return (
            <div>
                <div>
                    <img className="detailMoviePoster" src={this.props.reduxState.clickedReducer.poster}></img>
                </div>
                <Link to="/"><button>BACK TO LIST</button></Link>
                <Link to="/edit"><button>EDIT</button></Link>
                <h3>{this.props.reduxState.clickedReducer.title}</h3>
                <ul>
                    {
                        this.props.reduxState.genres.map(item =>
                            <li key={item.name}>{item.name}</li>)
                    }
                </ul>
                <p className="descriptionParagraph">{this.props.reduxState.clickedReducer.description}</p>

            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Details);