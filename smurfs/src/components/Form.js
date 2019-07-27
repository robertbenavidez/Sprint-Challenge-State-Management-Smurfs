import React, { 
       useState, 
       useContext } from 'react';
import {context} from './context';



const btnStyle = {
    background: 'lightgrey',
    color: 'black',
    padding: '5px 9px',
    borderRadius: '5%',
    cursor: 'pointer',
}

const inputStyle = {
    border: '2px solid #555',
    height: '17px',
}



const Form = () => {
    const {addSmurf} = useContext(context);
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    
    const NameChange = e => {
          setName( e.target.value );
    };
    const AgeChange = e => {
          setAge( e.target.value );
      };
    const HeightChange = e => {
          setHeight( e.target.value );
      };
    
    const submitSmurf = e => {
        e.preventDefault();
        addSmurf(e, name, age, height);
        setAge('');
        setName('')
        setHeight('')
      };

      return (
        <div className='formWrapper'>
          <h4>Smurf Form</h4>
          <h4>Add a new Smurf below.</h4>
          <form onSubmit={submitSmurf} >
            <input
              style={inputStyle}
              onChange={NameChange}
              placeholder="Smurf Name"
              value={name}
              name="name"
            />
            <input
              style={inputStyle}
              onChange={AgeChange}
              placeholder="Smurf Age"
              value={age}
              name="age"
            />
            <input
              style={inputStyle}
              onChange={HeightChange}
              placeholder="Smurf Height"
              value={height}
              name="height"
            />
            <button style={btnStyle}>Submit</button>
          </form>
        </div>
      );
  }



export default Form;