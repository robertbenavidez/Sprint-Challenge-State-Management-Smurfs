import React, { useContext } from 'react';
import { context } from './context';

const card = {
    display: 'inline-block', 
    margin: '20px',
    width: '250px',
    backgroundColor: 'lightgrey',
}

const Smurfs = () => {
    const {smurfs} = useContext(context)
    return (
        smurfs.map(smurf =>{
            return (
            <div key={smurf.id} style={card}>
                <h2>Name - {smurf.name}</h2>
                <h2>Age - {smurf.age}</h2>
                <h2>Height - {smurf.height}</h2>
            </div>
            )
        })
        
    )
}

export default Smurfs;