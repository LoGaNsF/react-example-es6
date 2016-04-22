import React from 'react';

class Clock extends React.Component {

	state = {
		date: new Date().toLocaleString()
	};

	handleClock = () => {
		this.setState({date: new Date().toLocaleString()});
	};

	componentDidMount() {
		this.interval = setInterval(this.handleClock, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div className="clock">{this.state.date}</div>
		);
	}
	
}

export default Clock;