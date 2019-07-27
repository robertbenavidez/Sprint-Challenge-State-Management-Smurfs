import React, { useState, useEffect } from "react";
import Smurfs from './Smurfs'
import Form from './Form';

import "./App.css";

import axios from 'axios';
import { context } from "./context";



const App = () => {
  const [smurfs, setSmurfs] = useState([]);


  useEffect(() => {
    const fetchSmurf = async () => {
    const result = await axios('http://localhost:3333/smurfs');
    setSmurfs(result.data)
    }
    fetchSmurf();
  }, []);

  const addSmurf = (e, name, age, height) => {
    const newSmurf = {
      name: name, 
      age: age,
      height: height
    }
    e.preventDefault();
      axios 
        .post('http://localhost:3333/smurfs', newSmurf)
        .then (res => {setSmurfs(res.data)})
        .catch(err => {console.log(err.response)})
  }
  
  
    return (
      <context.Provider value={{smurfs, addSmurf}}>
      <div className="App">
        <h1>Welcome to Smurf Village</h1>
        <Form />
        <Smurfs smurfs={smurfs} />
      </div>
      </context.Provider>
    );
  }


export default App;
