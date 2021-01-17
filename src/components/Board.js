import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

// const generateCards = CARD_DATA.cards.map((card) => {
//   if (card.Emoji) {
//     return(
//       <Card text={card.text} emojiString={card.Emoji} />
//     )
//   }
//   return(
//     <Card text={card.text} />
//   )

// })


const listCards = (cards) => {

    return (cards.map((cardHolder) => {
      if (cardHolder.card['emoji']){
        console.log(cardHolder.card['text'])
        return(
          <Card text={cardHolder.card['text']} emojiString={cardHolder.card['emoji']} key={cardHolder.card['id']} />
        )
      } else {
        return(
          <Card text={cardHolder.card['text']} key={cardHolder.card['id']} />
        )
      }
    }))

    // response.map((card) => {
    //   if (card.Emoji) {
    //     return(
    //       <Card text={card.text} emojiString={card.Emoji} />
    //     )
    //   }
    //   return(
    //     <Card text={card.text} />
    //   )
    // })

};

// const printCards = (cards) => {
//   cards.map((cardHolder) => {
//     if (cardHolder.card['Emoji']){
//       // console.log(cardHolder.card['text'])
//       return(
//         <Card text={cardHolder.card['text']} emojiString={cardHolder.card['emoji']} />
//       )
//     } else {
//       return(
//         <Card text={cardHolder.card['text']} />
//       )
//     }
// }

const Board = ({url, boardName}) => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(url + boardName + '/cards')
    .then((response) => {
      const apiCards = response.data;
      setCards(apiCards);

    })
    .catch((error) => {

    })
  }, [url, boardName]);

  return (
    <div>
      {console.log(cards)}
      {listCards(cards)}    
    </div>
  )
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired

};

export default Board;
