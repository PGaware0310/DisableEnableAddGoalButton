
import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);
    setIsValid(inputValue.trim().length > 0);
    
  };
  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(''); // Clear the input field after submitting
    setIsValid(true);   // Reset validation state
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text"  onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" disabled={!enteredValue}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
