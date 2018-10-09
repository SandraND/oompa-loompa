import React from 'react';
import PropTypes from 'prop-types';

const WorkerCard = (props) => (
    <div className='worker-card'>
        <div className='worker-card card'>
            <img className='card-img-top' src={props.worker.image} alt='worker-image' />
            <div className='card-body'>
                <h4 className='card-title'>{props.worker.first_name}</h4>
                <h6 className='card-subtitle mb-2 text-muted'>{props.worker.gender}</h6>
                <h6 className='card-subtitle mb-2 text-muted'>{props.worker.profession}</h6>
            </div>
        </div>
    </div>
);

WorkerCard.defaultProps = {
    worker: {}
};

WorkerCard.propTypes = {
    worker: PropTypes.object
};

export default WorkerCard;