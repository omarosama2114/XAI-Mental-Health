import React, { useState } from 'react';
import styles from '../styles/PersonaPage.module.css'; // Ensure this path is correct for your project
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

export default function A9Page() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: ''
  });

  const likertScale = {
    'Ich stimme überhaupt nicht zu': 1,
    'Ich stimme eher nicht zu': 2,
    'Ich stimme weder zu noch lehne ich ab': 3,
    'Ich stimme eher zu': 4,
    'Ich stimme voll und ganz zu': 5
  };

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  const [showWarning, setShowWarning] = useState(false);

  
  // Check if all questions are answered to enable the button
  const isEveryQuestionAnswered = Object.values(answers).every(answer => answer !== '');

  let navigate = useNavigate();

  const handleProceed = () => {
    if(isEveryQuestionAnswered) {
    const userData = JSON.parse(sessionStorage.getItem('userData')) || {};
  
    // Convert answer labels to numerical values and save them under specific keys
    userData.performance_expectancy_item_1 = likertScale[answers.question1];
    userData.performance_expectancy_item_2 = likertScale[answers.question2];
    userData.performance_expectancy_item_3 = likertScale[answers.question3];
  
    // Save updated userData to session storage
    sessionStorage.setItem('userData', JSON.stringify(userData));
  
    // Navigate to the next page
    navigate('/effort_expectancy');
    window.scrollTo(0, 0);
    }
    else {
      setShowWarning(true);
    }
  };


  return (
    <div className={styles.container}>
      <h1 style={{fontSize: '18px', fontWeight:'bold'}}>Jetzt bitten wir Sie, einige Statements zu der App zu bewerten, die Sie gerade gesehen haben</h1>
      <br />
      <br />
      <form>
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Die Verwendung einer Smart-Sensing-App für mentale Gesundheit könnte positive Auswirkungen auf meine Gesundheit haben</h2> {/* Change this question to whatever you wish */}
          <br />
          {['Ich stimme voll und ganz zu', 'Ich stimme eher zu', 'Ich stimme weder zu noch lehne ich ab', 'Ich stimme eher nicht zu', 'Ich stimme überhaupt nicht zu'].map(option => (
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
        
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Die Verwendung einer Smart-Sensing-App für mentale Gesundheit und die gesammelten Daten könnten Ärzten bei einer Diagnose helfen </h2>
          <br />
          {['Ich stimme voll und ganz zu', 'Ich stimme eher zu', 'Ich stimme weder zu noch lehne ich ab', 'Ich stimme eher nicht zu', 'Ich stimme überhaupt nicht zu'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="question2"
                value={option}
                checked={answers.question2 === option}
                onChange={handleOptionChange}
                className={styles.radio}
              />
              {option}
              <br /><br />
            </label>
          ))}
        </div>
        <br />  
        
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Insgesamt könnte eine Smart-Sensing-App für mentale Gesundheit helfen, meine Gesundheit zu managen</h2>
          <br />
          {['Ich stimme voll und ganz zu', 'Ich stimme eher zu', 'Ich stimme weder zu noch lehne ich ab', 'Ich stimme eher nicht zu', 'Ich stimme überhaupt nicht zu'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="question3"
                value={option}
                checked={answers.question3 === option}
                onChange={handleOptionChange}
                className={styles.radio}
              />
              {option}
              <br /><br />
            </label>
          ))}
        </div>
        <br />

        <br />
        
        {showWarning && (
        <p style={{ color: 'red', fontSize: '16px' }}>Bitte beantworten Sie alle Fragen, bevor Sie fortfahren.</p> // Warning message
        )}

        <br />
        
        <Button
          variant="contained"
          onClick={handleProceed}
          style={{ color: 'white', backgroundColor: '#19b394', fontWeight: 'bold', fontSize: '16px', padding: '10px 20px'}}
        > 
          Weiter &#x279C;
        </Button>
      </form>
    </div>
  );
}
