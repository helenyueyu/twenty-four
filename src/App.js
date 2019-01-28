import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    cards: null
  }
  componentDidMount() {
    fetch('https://deckofcardsapi.com/api/deck/b2ri8ncygn7c/draw/?count=4')
      .then(res => res.json())
      .then(data => this.setState({
        cards: data.cards
      }))
  }
  handleClick = (e) => {
    console.log()
  }
  render() {
    return (
      <div style={{padding: '5rem'}}>
      <h1>24</h1>
      <p><b>Instructions:</b> The object of the game is to use exactly the four cards below to create the number 24 using any of the four operations (+, -, x, /). The order in which the numbers are executed is <b>left-to-right</b> and NOT <b>PEMDAS</b>. If you cannot find a combination, press NEXT.</p>
      <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
        {this.state.cards && this.state.cards.map((x,idx) => <img src={x.image} key={idx} value={x.value} onClick={this.handleClick}/>)}

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <button>+</button>
          <button>-</button>
          <button>x</button>
          <button>÷</button>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
