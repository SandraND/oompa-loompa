import React, { Component } from 'react';
import WorkerList from './WorkerList';
import WorkerService from '../../services/WorkerService';

export default class Workers extends Component {
    constructor() {
        super();
        this.state = {
            workers: []
        };
    }
    componentDidMount() {
        this.setState(() => ({ workers: WorkerService.getWorkers() }));
    }

    render() {
        return(
            <div className='container-fluid' style={{marginLeft: '-15px'}}>
                <div className='d-flex flex-row'>
                    <div className='col-sm-12'>
                        <WorkerList workers={this.state.workers} />
                    </div>
                </div>
            </div>
        );
    }
}