import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  strikeButton = () => {
    if(this.state.strikes < 2) {
      this.setState({strikes: this.state.strikes+1});
    } else {
      this.setState({strikes: 0, balls: 0});
    } 
  }

  ballButton = () => {
    if(this.state.balls < 3) {
      this.setState({balls: this.state.balls+1});
    } else {
      this.setState({balls: 0, strikes: 0});
    }
  }

  foulButton = () => {
    if(this.state.strikes === 0) {
      this.setState({ strikes: 1})
    } else if(this.state.strikes === 1) {
      this.setState({strikes: 2});
    }
  }

  hitButton = () => {
    this.setState({balls: 0, strikes: 0});
  }

  render() { 
    return (
      <div>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <button onClick={this.strikeButton}>Strike</button>
        <button onClick={this.ballButton}>Ball</button>
        <button onClick={this.foulButton}>Foul</button>
        <button onClick={this.hitButton}>Hit</button>
      </div>
      );
  }
}
 
export default Dashboard;