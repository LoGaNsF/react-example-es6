import React from 'react';

export default class Clock extends React.Component {

  state = {
    date: new Date().toLocaleString()
  };

  constructor(props) {
    super(props);

    this.handleClock = this.handleClock.bind(this);
  }

  handleClock() {
    this.setState({date: new Date().toLocaleString()});
  }

  componentDidMount() {
    this.interval = setInterval(this.handleClock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div className="clock">{this.state.date}</div>;
  }

}
