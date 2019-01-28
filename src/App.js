import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    images: null
  }
  componentDidMount() {
    fetch('https://deckofcardsapi.com/api/deck/2faaps93vetq/draw/?count=4')
      .then(res => res.json())
      .then(data => this.setState({
        images: data.cards
      }))
  }
  render() {
    return (
      <div className="App">
        <h1>24</h1>
        {this.state.images && this.state.images.map((x,idx) => <img src={x.image} key={idx}/>)}
      </div>
    );
  }
}

export default App;
