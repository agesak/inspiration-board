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
    <div className="new-card-form">
      <form onSubmit={onFormSubmit} className="new-card-form__form">
        <h2 classname="new-card-form__header">Submit a Card!</h2>
        <div>
          {/* <input type="text" placeholder="text" name="textarea" onChange={onCardUpdate} className="new-card-form__form-textarea"/> */}
          <textarea placeholder="text" name="textarea" onChange={onCardUpdate} className="new-card-form__form-textarea"></textarea>
          
          <input type="text" placeholder="emoji" name="emoji" onChange={onCardUpdate} className="new-card-form__form-textarea"/>
        </div>
        <div>
          <input type="submit" value="Submit Card" className="new-card-form__form-button"/>
        </div>
      </form>

    </div>
  )

};

export default NewCardForm;