import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = ({text, emojiString}) => {
  if (emojiString) {
    return (
      <div className="card">
        <span>{text}</span>
        <span>{emoji.getUnicode(emojiString)}</span>
      </div>
    )
  }
  return (
    <div className="card">
      <span>{text}</span>
    </div>
  )

}

Card.propTypes = {
  text: PropTypes.string,
  emojiString: PropTypes.string
};

export default Card;
