import React from 'react';
import './App.css';
//import Header from 'test-module';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Header name="react">
				<p>with typescript</p>
			</Header>
		</div>
	);
}

export default App;
