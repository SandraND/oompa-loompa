import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas')
        .then(response => {
            console.log(response.data.results)
                const data = response.data.results;
                this.setState({data});
            });
    }


    render() {
        return (
            <div>
                <ul>
                    {(this.state.data).map(item =>
                        <li key={item.first_name}>
                        {item.first_name},
                        {item.last_name},
                        {item.profession}
                        </li>
                    )}
                </ul>
            </div>
        );

    }
}