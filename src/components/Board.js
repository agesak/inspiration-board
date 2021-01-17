import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const listCards = (cards) => {

    return (cards.map((cardHolder) => {
        return(
          <Card text={cardHolder.card['text']} emojiString={cardHolder.card['emoji']} key={cardHolder.card['id']} />
        )
    }))
};


const Board = ({url, boardName}) => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(url + boardName + '/cards')
    .then((response) => {
      const apiCards = response.data;
      setCards(apiCards);

    })
    .catch((error) => {
      console.log(error.message)
    })
  }, [url, boardName]);

  return (
    <div>
      {listCards(cards)}    
    </div>
  )
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired

};

export default Board;
