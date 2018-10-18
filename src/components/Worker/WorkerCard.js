import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import WorkerProfile from './WorkerProfile';

class Button extends Component {
    render() {
        console.log(this.props)
        return (
            <button {...this.props}>
                {this.props.children}
            </button>
        )
    }
}

class WorkerCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workers: [],
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: true
        });
    }

    render() {

        if (this.props.url.gender === 'F') {
            this.props.url.gender = 'Woman'
        } else if (this.props.url.gender === 'M') {
            this.props.url.gender = 'Man'
        }

        return (
            <div className='worker-card'>
                <div className='worker-card card'>
                    <img className='worker-img' src={this.props.url.image} alt='worker'></img>
                </div>
                <div className='card-body'>
                    <div>
                        <Button onClick={this.handleClick} >{this.props.url.first_name}</Button>
                        {this.state.clicked ? <WorkerProfile workers={this.props.url} /> : null}
                    </div>
                    <h6 className='card-subtitle'>{this.props.url.gender}</h6>
                    <h6 className='card-subtitle'>{this.props.url.profession}</h6>
                </div>
            </div>
        )
    }

}

//() => onSectionClick(this.props.url.id) .....                     <Link to={'/' + this.props.url.id} onClick={this.handleClick}>{this.state.clicked ? <WorkerProfile /> : null}{this.props.url.first_name}</Link>

export default WorkerCard;