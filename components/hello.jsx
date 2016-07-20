import React from 'react';

export default class Hello extends React.Component {

  static defaultProps = {
    name: "World"
  };

  static propTypes = {
    name: React.PropTypes.string
  };

  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }

}
