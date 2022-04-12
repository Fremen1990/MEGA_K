import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/counter";
import {List} from "./components/List";
import {Memo} from "./components/Memo";
import {Ref} from "./components/Ref";
import {Reducer} from "./components/Reducer";
import {Reducer2} from "./components/Reducer2";
import {OwnHook} from "./components/OwnHook";
// import {Calculator} from "./components/Calculator/Calculator";
import {Calculator} from "./components/Calculator/redux/Calculator";




function App() {
	return (
		<div className="App">
			<header className="App-header">

				{/*---------------------------------*/}

				{/*Hooks advanced*/}

				{/*<Counter/>*/}
				{/*<List/>*/}
				{/*<Memo/>*/}
				{/*<Ref/>*/}
				{/*<Reducer/>*/}
				{/*<Reducer2/>*/}
				{/*<OwnHook/>*/}
				<Calculator/>



				{/*---------------------------------*/}

				{/*<img src={logo} className="App-logo" alt="logo" />*/}
				{/*<p>*/}
				{/*  Edit <code>src/App.tsx</code> and save to reload.*/}
				{/*</p>*/}
				{/*<a*/}
				{/*  className="App-link"*/}
				{/*  href="https://reactjs.org"*/}
				{/*  target="_blank"*/}
				{/*  rel="noopener noreferrer"*/}
				{/*>*/}
				{/*  Learn React*/}
				{/*</a>*/}
			</header>
		</div>
	);
}

export default App;
