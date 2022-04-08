import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Dialog} from "./components/Dialog/Dialog";
import {ConfirmDialog} from "./components/Dialog/ConfirmDialog";
import {CryptoPrice} from "./components/CryptoPrice/CryptoPrice";

export const  App =() => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/*<Dialog title="Dialog in TypeScript">*/}
        {/*    <h2>Some TypeScritp Magic </h2>*/}
        {/*</Dialog>*/}

        {/*<ConfirmDialog title="Confirm Dialog" children="This is Confirm Dialog in TypeScirpt"/>*/}

        <CryptoPrice/>

      </header>
    </div>
  );
}

