import React from 'react';
import '../App.css';
import spades from '../images/SPADES.png';
import diamonds from '../images/DIAMONDS.png';
import clubs from '../images/CLUBS.png';
import hearts from '../images/HEARTS.png';

class Card extends React.Component {

  renderCardSuits = () => {
    if (this.props.currentCard.suit === 'SPADES') {
      return <img className="suit-img-main large" src={spades} alt="spades-img"/>
    } else if (this.props.currentCard.suit === 'DIAMONDS') {
      return <img className="suit-img-main large" src={diamonds} alt="diamonds-img"/>
    } else if (this.props.currentCard.suit === 'CLUBS') {
      return <img className="suit-img-main large" src={clubs} alt="clubs-img"/>
    } else if (this.props.currentCard.suit === 'HEARTS') {
      return <img className="suit-img-main large" src={hearts} alt="hearts-img"/>
    }
  }

  renderCardRanks = () => {
    switch(this.props.currentCard.suit) {
      case 'SPADES':
        return (
          <div className="playing-card" id="black">
            <span className="top-left">{this.props.currentCard.rank[0]}
              <img className="suit-small" src={spades} alt="spades-img"/></span>
            {this.renderCardSuits()}
            <span className="bottom-right flip">{this.props.currentCard.rank[0]}
              <img className="suit-small" src={spades} alt="spades-img"/></span>
          </div>
        )
      case "DIAMONDS":
        return (
          <div className="playing-card" id="red">
            <span className="top-left">{this.props.currentCard.rank[0]}
              <img className="suit-small" src={diamonds} alt="diamonds-img"/></span>
            {this.renderCardSuits()}
            <span className="bottom-right flip">{this.props.currentCard.rank[0]}
              <img className="suit-small" src={diamonds} alt="diamonds-img"/></span>
          </div>
        )
      case "CLUBS":
        return (
          <div className="playing-card" id="black">
            <span className="top-left">{this.props.currentCard.rank[0]}
              <img className="suit-small" src={clubs} alt="clubs-img"/></span>
            {this.renderCardSuits()}
            <span className="bottom-right flip">{this.props.currentCard.rank[0]}
              <img className="suit-small" src={clubs} alt="clubs-img"/></span>
          </div>
        )
      case "HEARTS":
        return (
          <div className="playing-card" id="red">
            <span className="top-left">{this.props.currentCard.rank[0]}
              <img className="suit-small" src={hearts} alt="hearts-img"/></span>
            {this.renderCardSuits()}
            <span className="bottom-right flip">{this.props.currentCard.rank[0]}
              <img className="suit-small" src={hearts} alt="hearts-img"/></span>
          </div>
        )
      default:
        return null;
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
