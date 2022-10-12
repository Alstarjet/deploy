import './App.css';
import React, { useState } from 'react';
import InputText from './elementos/InputText';
import ButtonSum from './elementos/ButtonSum';

function App() {
  const [clientId,setClienteId]=useState("");
  const [clientSecret,setClienteSecret]=useState("");
  return (
    <div className="App">
      <header className="App-header">
        <InputText titulo="Cliente ID" valor={clientId} funcionSet={setClienteId} />
        <InputText titulo="Client Secret" valor={clientSecret} funcionSet={setClienteSecret} />
        <ButtonSum cid={clientId} csec={clientSecret}/>
      </header>
    </div>
  );
}

export default App;
