import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({text, emojiString, id, deleteCardCallback}) => {

  if (emojiString) {
    return (
      <div className="card">
        <span>{text}</span>
        <span>{emoji.getUnicode(emojiString)}</span>
        <button onClick={() => deleteCardCallback(id)}>Delete</button>
      </div>
    )
  }
  return (
    <div className="card">
      <span>{text}</span>
      <button onClick={() => deleteCardCallback(id)}>Delete</button>
    </div>
  )

}

Card.propTypes = {
  text: PropTypes.string,
  emojiString: PropTypes.string,
  id: PropTypes.number,
  deleteCardCallback: PropTypes.func
};

export default Card;
