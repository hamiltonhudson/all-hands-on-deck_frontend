import React from 'react';
import '../App.css';
import spades from '../images/SPADES.png';
import diamonds from '../images/DIAMONDS.png';
import clubs from '../images/CLUBS.png';
import hearts from '../images/HEARTS.png';
import cardBack1 from '../images/card-back_1.jpg';

class Card extends React.Component {
  state = {
    flipped: false,
    deckIds: [],
    cardBack: null,
  }


  renderCardSuits = () => {
    if (this.props.currentCard.suit === 'SPADES') {
      return <img className="suit-img-main large" src={spades} alt="spades-img"/>
    } else if (this.props.currentCard.suit === 'DIAMONDS') {
      return <img className="suit-img-main large" src={diamonds} alt="diamonds-img" style={{"maxWidth": "90%"}}/>
    } else if (this.props.currentCard.suit === 'CLUBS') {
      return <img className="suit-img-main large" src={clubs} alt="clubs-img" style={{"maxWidth": "85%"}}/>
    } else if (this.props.currentCard.suit === 'HEARTS') {
      return <img className="suit-img-main large" src={hearts} alt="hearts-img"/>
    }
  }


  renderCardRanks = () => {
    switch(this.props.currentCard.suit) {
      case "SPADES":
        return (
          <div>
            <img className="card-back animated flip fadeOut" id="overlay" src={cardBack1} alt="card-back-1"/>
            <div className="playing-card animated fadeIn" id="black">
              <div className="top-left"><span className="rank">{this.props.currentCard.rank[0]}</span>
                <img className="suit-small" src={spades} alt="spades-img"/></div>
              {this.renderCardSuits()}
              <div className="bottom-right reverse"><span className="rank">{this.props.currentCard.rank[0]}</span>
                <img className="suit-small" src={spades} alt="spades-img"/></div>
            </div>
          </div>
        )
      case "DIAMONDS":
        return (
          <div>
            <img className="card-back animated flip fadeOut" id="overlay" src={cardBack1} alt="card-back-2"/>
            <div className="playing-card fadeIn animated" id="red">
              <div className="top-left"><span className="rank">{this.props.currentCard.rank[0]}</span>
                <img className="suit-small diamonds" src={diamonds} alt="diamonds-img"/></div>
              {this.renderCardSuits()}
              <div className="bottom-right reverse"><span className="rank">{this.props.currentCard.rank[0]}</span>
                <img className="suit-small diamonds" src={diamonds} alt="diamonds-img"/></div>
            </div>
          </div>
        )
      case "CLUBS":
        return (
          <div>
            <img className="card-back animated flip fadeOut" id="overlay" src={cardBack1} alt="card-back-3"/>
            <div className="playing-card fadeIn animated" id="black">
              <div className="top-left"><span className="rank">{this.props.currentCard.rank[0]}</span>
                <img className="suit-small" src={clubs} alt="clubs-img"/></div>
              {this.renderCardSuits()}
              <div className="bottom-right reverse"><span className="rank">{this.props.currentCard.rank[0]}</span>
                <img className="suit-small" src={clubs} alt="clubs-img"/></div>
            </div>
          </div>
        )
      case "HEARTS":
        return (
          <div>
            <img className="card-back animated flip fadeOut" id="overlay" src={cardBack1} alt="card-back-4"/>
            <div className="playing-card fadeIn animated" id="red">
              <div className="top-left"><span className="rank">{this.props.currentCard.rank[0]}</span>
                <img className="suit-small" src={hearts} alt="hearts-img"/></div>
              {this.renderCardSuits()}
              <div className="bottom-right reverse"><span className="rank">{this.props.currentCard.rank[0]}</span>
                <img className="suit-small" src={hearts} alt="hearts-img"/></div>
            </div>
          </div>
        )
      default:
        return null
      }
    }


  render() {
    return(
      <div className="card-container">
        {this.renderCardRanks()}
      </div>
    )
  }
}


export default Card;
