import React, { useState } from 'react';
import styles from '../styles/PersonaPage.module.css'; // Ensure this path is correct for your project
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';


export default function A6Page() {
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

  const [showWarning, setShowWarning] = useState(false);

  const delta = Math.abs(likertScale[answers.question2] - likertScale[answers.question3]);

  const qualityCheckIntentionToAct = delta > 2 ? 'low' : 'high';

  // Check if all questions are answered to enable the button
  const isEveryQuestionAnswered = Object.values(answers).every(answer => answer !== '');

  let navigate = useNavigate();

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  const handleProceed = () => {
    if(isEveryQuestionAnswered) {
    // TODO: Update this part with your logic to save the value in userData
    console.log('Intention to act:', qualityCheckIntentionToAct);

    // Example: Save to sessionStorage or send to backend
    const userData = JSON.parse(sessionStorage.getItem('userData')) || {};
    userData.quality_check_intention_to_act = qualityCheckIntentionToAct;
    sessionStorage.setItem('userData', JSON.stringify(userData));

    // TODO: Navigate to the next page or perform the next action
    console.log('Saved userData:', userData);
    navigate('/7');
    window.scrollTo(0, 0);
    }
    else {
      setShowWarning(true);
    }
  };


  return (
    <div className={styles.container}>
      <h1 style={{fontSize: '18px', fontWeight:'bold'}}>Wie würden Sie an Flos Stelle auf das Ergebnis reagieren, das Ihnen die App eben angezeigt hat?</h1>
      <br />
      <br />
      <form>
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Ich könnte mir vorstellen, psychosoziale Dienste für mich in Anspruch zu nehmen</h2> {/* Change this question to whatever you wish */}
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
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Ich würde in der Zukunft Einrichtungen aufsuchen, die sich um meine psychische Gesundheit </h2>
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
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Ich würde versuchen, Einrichtungen für mich zu finden, die sich um psychische Gesundheit sorgen können</h2>
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