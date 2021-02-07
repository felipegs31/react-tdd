import React, { useState } from 'react'
import { Button, TextInput } from 'react-materialize';

const NewRestaurantForm = props => {

  const [inputText, setInputText] = useState('')

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  }

  const handleSave = () => {
    props.onSave(inputText);
  }

  return (
    <div>
      <TextInput 
        label="Restaurante Name" 
        data-test="newRestaurantName" 
        value={inputText}
        onChange={event => handleTextChange(event)} 
      />
      <Button data-test="saveNewRestaurantButton" onClick={() => handleSave()}>
        Save
      </Button>
    </div>
  )
}

export default NewRestaurantForm
