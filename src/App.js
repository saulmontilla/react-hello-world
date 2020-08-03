import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import PropsExample from './components/PropsExample'
import PropsClassComponent from './components/PropsClassComponent'
import StateExample from './components/StateExample'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet />
        <PropsExample name="Saul" lastName="Montilla">
          <button>
            Children prop
          </button>
        </PropsExample>
        <PropsExample name="Jessica" lastName="Rodriguez"/>
        <PropsClassComponent country="Venezuela"/>

        <StateExample />

        <Counter />
      </header>
    </div>
  );
}

export default App;
