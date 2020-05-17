import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Edit extends Component {

    state = {
        id: this.props.reduxState.clickedReducer.id,
        title: this.props.reduxState.clickedReducer.title,
        description: this.props.reduxState.clickedReducer.description,
    }

        componentDidMount() {
        // this.setState = {
        //     title: this.props.reduxState.clickedReducer.title,
        //     description: this.props.reduxState.clickedReducer.description
        // }
        console.log("in Edit", this.state);
    }

    handleChangeOne=(event)=>{
        console.log('in handleChangeOne', event.target.value);
        this.setState({
            title: event.target.value,
        })
        
    }

    handleChangeTwo = (event) => {
        console.log('in handleChangeOne', event.target.value);
        this.setState({
            description: event.target.value,
        })

    }

    handleClick = () => {
        console.log("in handleClick", this.state);
        this.props.dispatch({type: 'UPDATE', payload: this.state});
        this.props.history.push('/details');

    }
    
    render() {
        return (
            <div>
                <div>
                    <Link to="/"><button>BACK TO LIST</button></Link>
                    <Link to="/details"><button>CANCEL</button></Link>
                </div>
                <div>
                    <input type="text" onChange={this.handleChangeOne} placeholder={this.props.reduxState.clickedReducer.title}></input>
                </div>
                <textarea rows="5" cols="50" onChange={this.handleChangeTwo} defaultValue={this.props.reduxState.clickedReducer.description}></textarea>
                <div>
                    <button onClick={this.handleClick}>Submit Changes</button>
                </div>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Edit);
