import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';
import Clock from './components/clock';
import Counter from './components/counter';

class App extends React.Component {
	render() {
		return (
			<div>
				<Hello name="LoGaNsF" />
				<Clock />
				<Counter start={10} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));