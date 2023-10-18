import React from 'react';
import '../styles/Form.scss';


function Form({lastLetter,handleChange}) {

    const handleInput =(ev)=>{
        
        let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern
        if (re.test(ev.target.value) || ev.target.value === '') {
          handleChange(ev.target.value);
        }

    }

 
  return (
    <form className="form" onSubmit={(ev) => {
        ev.preventDefault();
      }}>
    <label className="title" htmlFor="last-letter">
      Escribe una letra:
    </label>
    <input
      autoFocus
      autoComplete="off"
      className="form__input"
      maxLength="1"
      type="text"
      name="last-letter"
      id="last-letter"
      value={lastLetter}
      onKeyDown={(ev) => {
        ev.target.setSelectionRange(0, 1)}}
      onChange={handleInput}
    />
  </form>
  )
}

export default Form;