import React, { useState } from 'react';
import styles from '../styles/PersonaPage.module.css'; // Ensure this path is correct for your project
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

export default function A13Page() {
  const [answers, setAnswers] = useState({
    question1: ''
  });

  const likertScale = {
    'Ich stimme überhaupt nicht zu': 1,
    'Ich stimme eher nicht zu': 2,
    'Ich stimme eher zu': 3,
    'Ich stimme voll und ganz zu': 4
  };

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  let navigate = useNavigate();

  const handleProceed = () => {
    const userData = JSON.parse(sessionStorage.getItem('userData')) || {};
    const explanation = JSON.parse(sessionStorage.getItem('selectedExplanation')) || {};

    // Save attention check as true if second or third option is selected
    userData.attention_check_2 = likertScale[answers.question1] ===  3 || likertScale[answers.question1] === 4;

    sessionStorage.setItem('userData', JSON.stringify(userData));
    console.log('Updated userData:', userData);

    if(userData.attention_check_1 === false && userData.attention_check_2 === false) {
        navigate('/finalPage');
    }
    else {
        if(explanation.prediction === "depression") {
            navigate('/14a');
        }
        else {
            navigate('/14b');
        }
    }
    window.scrollTo(0, 0);
  };

  // Check if all questions are answered to enable the button
  const isEveryQuestionAnswered = Object.values(answers).every(answer => answer !== '');

  return (
    <div className={styles.container} style={{marginTop: '200px'}}>
      <form>
        <div className={styles.question}>
          <h2 style={{fontSize: '18px', fontWeight:'bold', color: '#19b394'}} >Bitte bewerten Sie kurz auch folgende Aussage: Wenn man 10 und 20 addiert, erhält man 30</h2> {/* Change this question to whatever you wish */}
          <br />
          {['Ich stimme überhaupt nicht zu', 'Ich stimme eher nicht zu', 'Ich stimme eher zu', 'Ich stimme voll und ganz zu'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="question1"
                value={option}
                checked={answers.question1 === option}
                onChange={handleOptionChange}
                className={styles.radio}
              />
              {option}
              <br /><br />
            </label>
          ))}
        </div>
        <br />
        
        {/* ... Add more questions if needed */}
        
        <Button
          variant="contained"
          onClick={handleProceed}
          disabled={!isEveryQuestionAnswered} // Button is disabled unless the checkbox is checked
          style={{ color: 'white', backgroundColor: '#19b394', fontWeight: 'bold', fontSize: '16px', padding: '10px 20px'}}
        > 
          Weiter &#x279C;
        </Button>
      </form>
    </div>
  );
}
