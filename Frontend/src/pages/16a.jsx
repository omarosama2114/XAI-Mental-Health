import React, { useState } from 'react';
import styles from '../styles/PersonaPage.module.css'; // Ensure this path is correct for your project
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

export default function A16Page() {
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
    userData.helpSeeking_propensity_item_1 = likertScale[answers.question1];
    userData.helpSeeking_propensity_item_2 = likertScale[answers.question2];
    userData.helpSeeking_propensity_item_3 = likertScale[answers.question3];
  
    console.log('Updated userData:', userData);
    // Save updated userData to session storage
    sessionStorage.setItem('userData', JSON.stringify(userData));
  
    // Navigate to the next page
    navigate('/17');
    window.scrollTo(0, 0);
    }
    else {
      setShowWarning(true);
    }
  };


  return (
    <div className={styles.container}>
      <h1 style={{fontSize: '18px', fontWeight:'bold'}}>Jetzt bitten wir Sie, noch einige allgemeine Fragen zum Thema mentale Gesundheit zu beantworten</h1>
      <br />
      <br />
      <form>
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Es würde mir relativ leichtfallen, Zeit zu finden, um eine Fachkraft für psychologische Probleme aufzusuchen</h2> {/* Change this question to whatever you wish */}
          <br />
          {['Ich stimme überhaupt nicht zu', 'Ich stimme eher nicht zu', 'Ich stimme weder zu noch lehne ich ab', 'Ich stimme eher zu', 'Ich stimme voll und ganz zu'].map(option => (
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
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Ich weiß, an wen oder an welche Stellen ich mich wenden müsste, wenn ich psychologische Hilfe in Anspruch nehmen wollen würde</h2>
          <br />
          {['Ich stimme überhaupt nicht zu', 'Ich stimme eher nicht zu', 'Ich stimme weder zu noch lehne ich ab', 'Ich stimme eher zu', 'Ich stimme voll und ganz zu'].map(option => (
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
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Wenn ich psychische Probleme hätte, könnte ich professionelle Hilfe in Anspruch nehmen, wenn ich es wollen würde</h2>
          <br />
          {['Ich stimme überhaupt nicht zu', 'Ich stimme eher nicht zu', 'Ich stimme weder zu noch lehne ich ab', 'Ich stimme eher zu', 'Ich stimme voll und ganz zu'].map(option => (
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