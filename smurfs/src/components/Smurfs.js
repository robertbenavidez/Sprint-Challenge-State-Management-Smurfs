import React from 'react';
import {connect} from 'react-redux'
import { fetchSmurf } from '../store/actions';

const Smurfs = props => {
    return (
        <div>
            {props.smurfs.map(smurf ={
               return <Smurf key={smurf.name} smurf={smurf} />})}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        error: state.error,
        smurfs: state.smurfs,
        fetchSmurf: state.fetchSmurf,
       // addSmurf: state.addSmurf
    }
}


export default connect(mapStateToProps,{fetchSmurf})(Smurfs)
