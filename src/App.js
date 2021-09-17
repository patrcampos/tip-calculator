import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';

const Input = styled.input`
  width: 100px;
  height: 25px;
  font-size: 15px:
  border: 1px solid #000;
  border-radius: 10px;
  outline: none;
  padding: 5px;
  text-align: center;
`;

function App() {

  const [conta, setConta] = useState("");
  const [gorjeta, setGorjeta] = useState("");

  return (
  <>
    <h1>Calculadora de Gorjeta</h1>

    <p>Quanto deu a conta?</p>
    <Input type='number' value={conta} onChange={(e)=>{setConta(parseFloat(e.target.value))}}/>

    <p>Qual a porcentagem de gorjeta?</p>
    <Input type='number' value={gorjeta} onChange={(e)=>{setGorjeta(parseFloat(e.target.value))}}/>

    <hr/>

    {conta > 0 && 
      <div>
        <p>Sub-total: R$ {conta}</p>
        <p>Gorjeta ({gorjeta}%): R$ {(gorjeta/100)*conta}</p>
        <h3>Total: R$ {conta + ((gorjeta/100)*conta)}</h3>
      </div>
    }
  </>
  )};

export default App;