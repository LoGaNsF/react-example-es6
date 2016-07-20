import React from 'react';

export default class Counter extends React.Component {

	static propTypes = {
		start: React.PropTypes.number
	};

	static defaultProps = {
		start: 0
	};

	state = {
		counter: this.props.start
	};

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({counter: ++this.state.counter});
	}

	render() {
		return <div onClick={this.handleClick}>Counter: {this.state.counter}</div>;
	}

}
