import React, { useState, useEffect } from "react";
import Smurfs from './Smurfs'

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

  
  
    return (
      <context.Provider value={{smurfs}}>
      <div className="App">
        <h1>Welcome to Smurf Village</h1>
        <Smurfs smurfs={smurfs} />
        
      </div>
      </context.Provider>
    );
  }


export default App;
