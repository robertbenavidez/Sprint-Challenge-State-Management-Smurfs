import React, { useContext } from 'react';
import { context } from './context'



const Smurfs = () => {
    const {smurfs} = useContext(context)
    return (
        smurfs.map(smurf =>{
            return (
            <div key={smurf.id}>
                <h2>{smurf.name}</h2>
            </div>
            )
        })
        
    )
}

export default Smurfs;