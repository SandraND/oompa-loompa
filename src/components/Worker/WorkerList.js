import React from 'react';
import WorkerCard from './WorkerCard';
import UUID from 'uuid';


const WorkerList = (props) => {
    const workerCard = props.workers.map((pic) => {
        return(
            <WorkerCard
            key={UUID()}
            url={pic}
            />
        );
    });
   return(
       <ul>
           {workerCard}
       </ul>
   ); 
}

export default WorkerList;