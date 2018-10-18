import React, { Component } from 'react';

class WorkerProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workers: props.workers
        }

    }

    componentDidMount() {
        this.fetchWorkers();
    }

    fetchWorkers = (term) => {
        fetch(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${this.state.workers.id}`)
            .then(resp => { return resp.json() })
            .then(data => {
                console.log(data)
                this.setState({
                    workers: data
                })
            })
    }

    render() {

        if (this.state.workers.gender === 'F') {
            this.state.workers.gender = 'Woman'
        } else if (this.state.workers.gender === 'M') {
            this.state.workers.gender = 'Man'
        }

        console.log('-------------------')
        console.log(this.state.workers)
        return (
            <div>
                <div className='worker-card card'>
                    <img className='worker-img' src={this.state.workers.image} alt='worker'></img>
                </div>
                <h1>{this.state.workers.first_name}</h1>
                <h6>{this.state.workers.gender}</h6>
                <h6>{this.state.workers.profession}</h6>
                <h6>{this.state.workers.description}</h6>
                <h1>-----------------------------</h1>
            </div>
        )
    }

}

export default WorkerProfile;