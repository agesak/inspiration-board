import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = ({sendCard}) => {

  const [cardFields, setCardFields] = useState({
    text: '',
    emoji: ''
  })

  const onCardUpdate = (event) => {
    const newCardFields = {...cardFields};
    // console.log(event.target.value)

    newCardFields[event.target.name] = event.target.value;
    setCardFields(newCardFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    // console.log(cardFields)
    sendCard(cardFields);

    setCardFields({
      text: '',
      emoji: ''
    })
  }


  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="new-card-form__form">
          <input type="text" placeholder="text" name="text" onChange={onCardUpdate}/>
          <input type="text" placeholder="emoji" name="emoji" onChange={onCardUpdate}/>
        </div>
        <div>
          <input type="submit" value="Submit Card"/>
        </div>
      </form>

    </div>
  )

};

export default NewCardForm;