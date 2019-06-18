import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <div>
        <h3>Strikes: {this.props.strikes}</h3>
        <h3>Balls: {this.props.balls}</h3>
      </div>
      );
  }
}
 
export default Display;