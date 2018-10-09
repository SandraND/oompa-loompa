import React from 'react';
import PropTypes from 'prop-types';
import WorkerCard from './WorkerCard';

const getWorkers = (workers) => {
    return(
        <div className='card-deck'>
            {
                workers.map(worker => <WorkerCard key={worker.id} worker={worker} />)
            }
        </div>
    );
};

const WorkerList = (props) => (
    <div>
        {getWorkers(props.workers)}
    </div>
);

WorkerList.defaultProps = {
    workers: []
};

WorkerList.defaultProps = {
    workers: PropTypes.array
};

export default WorkerList;