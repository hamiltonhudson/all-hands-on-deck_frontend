import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';
import animatedFiveCards from './images/animated-five-cards.gif'

const decksAddress = 'http://localhost:3000/api/v1/decks/'

class App extends Component {

  state = {
    newDeck: false,
    deckId: null,
    deck: [],
    fiveDrawn: false,
    currentCards: [],
  }

  getNewDeck = () => {
    const postConfig = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      body:JSON.stringify(
        {
          created: true
        }
      )
    }
    fetch(decksAddress, postConfig)
    .then(r => r.json())
    .then(result => {
      console.log(result)
      let newDeck = result
      let newDeckId = result.id
      window.alert(`New Deck Created! ♠️♦️♣️♥️`)
      this.setState({
        deck: newDeck.cards,
        deckId: newDeckId,
        currentCards: [],
        fiveDrawn: false
      })
    })
  }

  drawFive = () => {
    console.log('this.state.deckId in DrawFive in Deck', this.state.deckId)
    console.log('this.state.deck.cards.length', this.state.deck.length)
    console.log('this.state.deck', this.state.deck)
    if (this.state.deckId === null || this.state.deck.length < 5) {
      window.alert('Please create a new deck!')
    } else {
      fetch(`${decksAddress}/${this.state.deckId}/drawfive`)
      .then(r => r.json())
      .then(result => {
        console.log(result)
        let currentCards = result
        this.setState({
          currentCards: currentCards,
          fiveDrawn: true
        })
      })
      this.cardCount()
    }
  }

  cardCount = () => {
    fetch(`${decksAddress}/${this.state.deckId}`)
    .then(r => r.json())
    .then(result => {
      console.log(result)
      let newDeck = result
      this.setState({
        deck: newDeck.cards,
      })
    })
    if (this.state.deck.length <= 7) {
      window.alert("You're out of cards! Please create a new deck")
      this.setState({
        currentCards: []
      })
    }
  }

  renderCards = () => {
    if (this.state.fiveDrawn === true) {
      return (
        <div className="five-cards">
          {this.state.currentCards.map(currentCard => <Card key={currentCard.id} currentCard={currentCard} />)}
        </div>
      )
    } else {
      return (
        <img className="gif-image" src={animatedFiveCards} alt="five-card-draw-gif" />
      )
    }
  }

  renderDeck = () => {
    if (this.state.deckId !== null) {
      return (
        <div className="row">
          <button onClick={this.drawFive}> Draw Five! </button><br/>
          {this.renderCards()}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <h3 className="App-header">All Hands On Deck <span role="img" aria-label="hand-wave">👋🏼</span></h3>
        <button onClick={this.getNewDeck}> New Deck? </button><br/>
        {this.renderDeck()}
      </div>
    )
  }
}

export default App;
