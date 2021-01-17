import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const generateCards = CARD_DATA.cards.map((card) => {
  if (card.Emoji) {
    return(
      <Card text={card.text} emojiString={card.Emoji} />
    )
  }
  return(
    <Card text={card.text} />
  )

})

const Board = () => {
  return (
    <div>
      {generateCards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
