import React from 'react';

const WorkerCard = (props) => {
    console.log(props)
    if(props.url.gender === 'F') {
        props.url.gender = 'Femenine'
    } else if(props.url.gender === 'M') {
        props.url.gender = 'Masculine'
    }
    return(
        <div className='worker-card'>
            <div className='worker-card card'>
                <img className='worker-img' src={props.url.image}></img>
            </div>
            <div className='card-body'>
                <h4 className='card-title'>{props.url.first_name}</h4>
                <h6 className='card-subtitle'>{props.url.gender}</h6>
                <h6 className='card-subtitle'>{props.url.profession}</h6>
            </div>
        </div>
    )
}

export default WorkerCard;