import React, { useState } from 'react';
import styles from '../styles/PersonaPage.module.css'; // Ensure this path is correct for your project
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

export default function B6Page() {
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

  
  let navigate = useNavigate();
  
  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));
  };
  
  const handleProceed = () => {
    const delta = Math.abs(likertScale[answers.question2] - likertScale[answers.question3]);
    const qualityCheckIntentionToAct = delta > 2 ? 'low' : 'high';

    console.log('Intention to act:', qualityCheckIntentionToAct);

    // Example: Save to sessionStorage or send to backend
    const userData = JSON.parse(sessionStorage.getItem('userData')) || {};
    userData.quality_check_intention_to_act = qualityCheckIntentionToAct;
    sessionStorage.setItem('userData', JSON.stringify(userData));

    // TODO: Navigate to the next page or perform the next action
    console.log('Saved userData:', userData);
    navigate('/7');
    window.scrollTo(0, 0);
  };

  // Check if all questions are answered to enable the button
  const isEveryQuestionAnswered = Object.values(answers).every(answer => answer !== '');

  return (
    <div className={styles.container}>
      <h1 style={{fontSize: '18px', fontWeight:'bold'}}>Wie würden Sie an Flos Stelle auf das Ergebnis reagieren, das Ihnen die App eben angezeigt hat?</h1>
      <br />
      <br />
      <form>
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Ich könnte mir vorstellen, Präventionsmaßnahmen in Anspruch zu nehmen oder mein Verhalten dahingehend zu ändern, dass ich meine psychische Gesundheit beibehalte</h2> {/* Change this question to whatever you wish */}
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
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Ich beabsichtige, Einrichtungen oder Angebote zur Prävention für meine psychische Gesundheit aufzusuchen </h2>
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
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >Ich werde versuchen, Einrichtungen oder Angebote zur Prävention für meine psychische Gesundheit aufzusuchen</h2>
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
